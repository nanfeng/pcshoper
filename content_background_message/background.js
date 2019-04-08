chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    // if (request.greeting == "hello")
      // sendResponse({farewell: "goodbye"});
    // else
      // sendResponse({}); // snub them.

  	// 将信息能过Ajax发送到服务器
  	$.ajax({
  	    url: 'http://interface.sina.cn/ent/ku/api_douban_spider.d.json',
  	    type: 'GET',
  	    data: {'id': 27179414},
  	    dataType: 'json',
  	    success: function (response) {
  	    	sendResponse(response);
  	    }
  	})
  	return true;
  	// .then(function(){
  	//     // 将正确信息返回content_script
  	//     sendResponse({'status': 200});
  	// }, function(){
  	//     // 将错误信息返回content_script
  	//     sendResponse({'status': 500});
  	// });
});