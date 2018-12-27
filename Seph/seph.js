var files = require('./file.js');
var downloadUrl = files.downloadUrl;
var writeData = files.writeData;
var url = require('url'); //解析操作url
var superagent = require('superagent'); //这三个外部依赖不要忘记npm install
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');


var topicUrlStr = `
https://www.sephora.ph/products/guerlain-rouge-g-lips-refill/v/n214
`;
var topicUrls = [];
var topicUrlsTmp = topicUrlStr.split("\n");
for (var i = 0; i<topicUrlsTmp.length; i++) {
	if (topicUrlsTmp[i].length == 0) {
		continue;
	}
    topicUrls.push(topicUrlsTmp[i]);
};

//第一步：得到一个 eventproxy 的实例
var ep = new eventproxy();
//第二步：定义监听事件的回调函数。
//after方法为重复监听
//params: eventname(String) 事件名,times(Number) 监听次数, callback 回调函数
ep.after('topic_html', topicUrls.length, function(topics){
    // topics 是个数组，包含了 40 次 ep.emit('topic_html', pair) 中的那 40 个 pair
    //.map
    topics = topics.map(function(topicPair){
        //use cheerio
        var topicUrl = topicPair[0];
        var topicHtml = topicPair[1];
        var idx = topicPair[2];
        var $ = cheerio.load(topicHtml);
        var urlSp = topicUrl.split("/");
        var urlProduct = urlSp[4];
        var lang = " en-SG";
        if ("sephora.hk"==urlSp[2]) {
            lang = " en-HK";
        }else if("www.sephora.co.id" == urlSp[2]){
            lang = " id-ID";
        }else if("www.sephora.co.th" == urlSp[2]){
            lang = " en-TH";
        }else if("www.sephora.ph" == urlSp[2]){
            lang = " en-PH";
        }else if("www.sephora.my" == urlSp[2]){
            lang = " en-MY";
        }
        
        var token = $("meta[name='csrf-token']").attr("content");
        superagent.get("https://"+urlSp[2]+"/api/v2.1/products/"+urlProduct+"?include=variants,articles,categories")
          .set("Host", urlSp[2])
          .set("User-Agent", " Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0")
          .set("Accept", " */*")
          .set("Accept-Language", lang)
          .set("Accept-Encoding", " gzip, deflate, br")
          .set("X-CSRF-TOKEN", token)
          .set("X-Requested-With", " XMLHttpRequest")
          .set("Referer", topicUrl)
          .set("Connection", " keep-alive")
          .set("Pragma", " no-cache")
          .set("Cache-Control", " no-cache")
          .end(function (err, res) {
              var obj = JSON.parse(res.text);
              var j = 1;
              for (var i = obj.included.length - 1; i >= 0; i--) {
                  if (obj.included[i].type == "variants") {
                      var result = {};
                      result.idx = idx;
                      if (obj.included[i].attributes.name) result.idx += '-' + j + '-' + obj.included[i].attributes.name;
                      result.idx = result.idx.replace(/\?|\!|\//,'');
                      j++;
                      result.url = obj.data.attributes['web-url'];
                      // result.img = obj.included[i].attributes['zoom-image-url'];
                      // if (!result.img) 
                      result.img = obj.included[i].attributes['zoom-image-urls'][0];
                      result.name = obj.included[i].attributes['brand-name'] + ' ' + obj.data.attributes.name;
                      result.brand = obj.included[i].attributes['brand-name'];
                      result.price = obj.included[i].attributes.price/100.0;
                      var $ = cheerio.load(obj.data.attributes.ingredients);
                      result.ingredient = $.text().trim();
                      var volume = obj.data.attributes.heading;
                      result.weight = '';
                      if (volume){
                        result.weight = volume.match(/[0-9.]+/g);
                        if (result.weight) {
                            result.weight = result.weight[0];
                        }
                      }
                      result.unit = '';
                      if (volume) {
                        result.unit = volume.match(/[a-zA-Z]+/g);
                        if (result.unit) {
                            result.unit = result.unit[0];
                        }
                      }
                      var $ = cheerio.load(obj.data.attributes.description);
                      $("b").each(function () {
                        var str = $(this).text().trim();
                        if (str.startsWith("What it is")) {
                          result.desc = $(this).parent().next().text();
                          if (result.desc.endsWith("What it does:")){
                              result.desc = result.desc.substring(0, result.desc.length-"What it does".length-1);
                          }
                        }
                        if (str.startsWith("About")) {
                          result.desc = $(this).parent().next().text();
                        }
                        if (str.startsWith("What it does")) {
                          result.claim = $(this).parent().next().text();
                        }
                        if (str.startsWith("Benefits")) {
                          result.claim = $(this).next().text();
                        }
                        if (str.startsWith("What else you need")) {
                          result.claim += $(this).parent().next().text();
                        }
                      })
                      if (result.desc == '') {
                        $("p").each(function(){
                          if (!$(this).hasClass("disclaimer")) {
                            result.desc += $(this).text();
                          }
                        })
                      }
                      $ = cheerio.load(obj.data.attributes.benefits);
                      $("li").each(function(){
                        var t = $(this).text().trim();
                        if (t.endsWith(".") || t.endsWith(","))
                          result.claim += t + " ";
                        else
                          result.claim += $(this).text().trim() + ". ";
                      })
                      var $ = cheerio.load(obj.data.attributes['how-to-text']);
                      result.Directions = "";
                      $("li").each(function () {
                        result.Directions += $(this).text().trim() + " ";
                      });
                      if ("" == result.Directions) {
                        result.Directions = $.text().trim();
                      }
                      result.Directions = result.Directions.replace(/\-/g, ' ');
                      downloadUrl(result.img, result.idx);
                      // writeData("datas.txt", JSON.stringify(result)+"\n", result.idx);
                      console.log(result)
                  }
              }
              
          });

        return ;
    });
});
//第三步：确定放出事件消息的
topicUrls.forEach(function (topicUrl, idx) {
    superagent.get(topicUrl)
        .end(function (err, res) {
            console.log('fetch ' + topicUrl + ' successful');
            ep.emit('topic_html', [topicUrl, res.text, idx+1]);
        });
});
        


