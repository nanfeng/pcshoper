// plugin positioning button
if (jQuery("#funa") || jQuery("#funa").length <= 0) {
    var p_html = '<div style="display:  block;bottom: 100px;right:20px;position: fixed;z-index: 800;">'
    p_html += ' <script type="text/javascript">'
    p_html += '     function openImg() {'
    p_html += '         var url = jQuery("#zoomImage").attr("src").replace("240x240", "std");'
    p_html += '         window.open(url);'
    p_html += '     };'
    p_html += ' </script>'
    p_html += ' <br>'
    p_html += ' <input id="funa" value="img" type="button" onclick="openImg();" style="width: 100px;height: 60px;background-color: green;width=200px;height=150px;">'
    p_html += '</div>'

    jQuery("body").append(p_html);
}
