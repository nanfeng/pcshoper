if (window.location.pathname.startsWith("/mall")) 
{
    // plugin positioning button
    if (jQuery("#funa") || jQuery("#funa").length <= 0) {
            var p_html = '<div id="funa" style="position: fixed; top: 300px; right: 10px;width:130px;"><script type="text/javascript">';
            p_html += 'function sephB() {';
            p_html += 'var res = JSON.parse(jQuery("#mall-view-data").text());';
            p_html += 'var data = {};';
            p_html += 'data.url = window.location.href;';
            p_html += 'var volume = {};';
            p_html += 'var ingredient = "";';
            p_html += 'for(var i=0; i<res.specification.length; i++){';
            p_html += '    if ("capacity" == res.specification[i].key) {';
            p_html += '        volume = res.specification[i].value;';
            p_html += '    };';
            p_html += '    if ("ingredient" == res.specification[i].key) {';
            p_html += '        ingredient = res.specification[i].value;';
            p_html += '    };';
            p_html += '};';
            p_html += 'data.weight = volume.match(/[0-9.]+/g)[0];';
            p_html += 'data.unit = volume.match(/[a-zA-Z]+/g)[0].toLowerCase();';
            p_html += 'data.price = res.price.selling;';
            p_html += 'data.desc = "";';
            p_html += 'data.claim = jQuery(res.description).text().trim();';
            p_html += 'data.brand = res.brand.name;';
            p_html += 'data.name = res.name.replace(/\\[|\\]/g, "");';
            p_html += 'data.ingredient = ingredient;';
            p_html += 'data.Directions = jQuery(res.usage).text();';
            p_html += 'jQuery("#ids").val(JSON.stringify(data));';
            p_html += 'jQuery("#ids").select();';
            p_html += 'document.execCommand("copy");';
            p_html += '};'
            p_html += 'function sephshade() {';
            p_html += 'var res = JSON.parse(jQuery("#mall-view-data").text());';
            p_html += 'var shades = "";';
            p_html += 'for(var i=0; i<res.selections[0].length; i++){';
            p_html += '    shades += res.selections[0][i].name + "\\r\\n";';
            p_html += '};';
            p_html += 'jQuery("#ids").val(shades);';
            p_html += 'jQuery("#ids").select();';
            p_html += 'document.execCommand("copy");';
            p_html += '};';
            p_html += '</script>';
            p_html += '<textarea rows="3"  id="ids" style="with:70px;" onclick="jQuery(this).select();"></textarea><br/>'
            p_html += '<input id="funa" value="function A" type="button" onclick="sephB();">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            p_html += '<input id="funshade" value="shade" type="button" onclick="sephshade();">';
            p_html += '</div>'


        jQuery("body").append(p_html);
    }
}
