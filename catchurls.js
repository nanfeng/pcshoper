var headers = {
  "__utma" : "", 
  "__utmz" : "", 
  ".ASPXAUTH" : "", 
  "ASP.NET_SessionId" : ""
};
var urls = [];
var contries = ['China', 'Japan', 'Hong Kong', 'India', 'Indonesia', 'Malaysia', 'Philippines', 'Singapore', 'South Korea', 'Taiwan', 'Thailand', 'Vietnam'];
// var contries = ['China'];
for (var c=0; c<contries.length; c++) {
  var formData = new FormData();
  formData.append('fromfood', '');
  formData.append('Freetext', '');
  formData.append('ExactMatch', false);
  formData.append('Country', contries[c]);
  formData.append('West Europe', 'West Europe');
  formData.append('CountrySearch', contries[c]);
  formData.append('Category', '');
  formData.append('Company', '');
  formData.append('ProductBrand', ''); 
  formData.append('Brand', '');
  formData.append('Barcode', '');
  formData.append('ProductIds', '');
  formData.append('NewProductid', '');
  formData.append('IsNewsLetter', false);
  formData.append('IsTechAlert', false);
  formData.append('IsPackAlert', false);
  formData.append('IsNews', false);
  formData.append('IsTrendspotting', false);
  formData.append('totalcnt', 1383);
  formData.append('totalcnt', 27647);
  var ids = [];
  for (var i=1; i<=10; i++) {
    var url = 'http://pcshopperform.innovadatabase.com/Search/Search?frompage=ajax&pageno=' + i;
    jQuery.ajax({
      url: url,
      method: 'POST',
      data: formData,
      contentType: false, // 注意这里应设为false
      processData: false,
      cache: false,
      async: false,
      headers: headers,
      success: function(data) {
        var tmp = data.substr(data.indexOf('id="productids_Ajax" value="') + 'id="productids_Ajax" value="'.length);
        ids = ids.concat(tmp.substr(0, tmp.indexOf('"')).split(','));
        // console.log(ids)
      },
      error: function (jqXHR) {
        // console.log(JSON.stringify(jqXHR));
      }
    })
  }

  console.log("contry: " + contries[c] + " ids:" + ids)
  for (var i = 0; i < ids.length; i++) {
  // for (var i = 0; i < 20; i++) {
    var url = 'http://pcshopperform.innovadatabase.com/Home/ProductInfo';
    var fData = new FormData();
    fData.append('ProductId', ids[i]);
    jQuery.ajax({
      url: url,
      method: 'POST',
      data: fData,
      contentType: false, // 注意这里应设为false
      processData: false,
      cache: false,
      async: false,
      headers: headers,
      success: function(data) {
        var t = jQuery(data).text();
        var u = t.substring(t.indexOf('Source Information:')+"Source Information:".length, t.indexOf('Product Description')).trim();
        u = u.substr(0, u.indexOf('/', 8));
        console.log(ids[i] + ' ' + u);
        if (-1 == jQuery.inArray(u, urls)){
          urls.push(u)
        }
      },
      error: function (jqXHR) {
        // console.log(JSON.stringify(jqXHR));
      }
    })
  };
}
console.log(urls)
