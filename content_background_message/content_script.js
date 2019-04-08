$(function(){
	var panel = `
	<div id="wgt-exp-share" class="wgt-exp-share" style="position: fixed; display: block; bottom: 44px; right: 45px;">
		<div class="wrp-exp-share">
			<a id="w-share" class="w-share" href="javascript:void(0);">
				<span class="w-txt">msg</span>
			</a>
		</div>
	</div>
	`;
	$('body').append(panel);
	$('#w-share').click(function () {
		chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
			console.log(response);
		});
	});
});