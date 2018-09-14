// plugin positioning button
if (jQuery("#funa") || jQuery("#funa").length <= 0) {
    var p_html = '<div style="display:  block;bottom: 100px;right:0px;position: fixed;z-index: 800;">'
    p_html += ' <script type="text/javascript">'
    p_html += '     function openImg() {'
    p_html += '         jQuery(".changeProd :visible").find("img.cloudzoom").each(function(){'
    p_html += '             if(jQuery(this).is(":visible")) {'
    p_html += '                  var url = jQuery(this).attr("src").replace("products", "products/l");'
    p_html += '                  window.open(url);'
    p_html += '              }'
    p_html += '          });'
    p_html += '     };'
    p_html += ' </script>'
    p_html += ' <br>'
    p_html += ' <input id="funa" value="img" type="button" onclick="openImg();" style="background-color: green;">'
    p_html += '</div>'

    jQuery(".btnTop").prepend(p_html);
}
