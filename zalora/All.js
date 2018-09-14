// plugin positioning button
if (jQuery("#funa") || jQuery("#funa").length <= 0) {
        var p_html = '<div style="display:  block;bottom: 100px;position: fixed;right: 10px;z-index: 800;">';
        p_html += '<script type="text/javascript">';
        p_html += 'function sephB() {'
        p_html += 'var data = {};';
        p_html += 'data.url = window.location.href;';
        p_html += 'data.unit = "";';
        p_html += 'data.weight = "";';
        p_html += 'var volume = jQuery(".product__title").text().split(" ").pop();';
        p_html += 'var ingredient = "";';
        p_html += 'if(volume.match(/[0-9.]+/g)){data.weight = volume.match(/[0-9.]+/g)[0];';
        p_html += 'data.unit = volume.match(/[a-zA-Z]+/g)[0].toLowerCase();};';
        p_html += 'data.name = jQuery(".product__title").text().trim();';
        p_html += 'data.price = jQuery("[itemprop=price]").attr("content");';
        p_html += 'data.desc = "";';
        p_html += 'data.brand = jQuery(".product__brand").text().trim();';
        p_html += 'var ps = jQuery(".prd-description p");';
        p_html += 'data.Directions = "";';
        p_html += 'data.ingredient = "";';
        p_html += 'if (ps.length>1) {data.ingredient = jQuery(ps[1]).prop("lastChild").nodeValue;';
        p_html += 'data.Directions = jQuery(ps[0]).prop("lastChild").nodeValue;};';
        p_html += 'data.claim = jQuery("#productDesc").prop("lastChild").nodeValue;';
        p_html += 'jQuery("#ids").val(JSON.stringify(data));';
        p_html += 'jQuery("#ids").select();';
        p_html += 'document.execCommand("copy");';
        p_html += '};'
        p_html += '</script>';
        p_html += '<textarea rows="3"  id="ids" style="with:30px;" onclick="jQuery(this).select();"></textarea><br/>'
        p_html += '<input id="funa" value="function A" type="button" onclick="sephB();">';
        p_html += '</div>';

    jQuery("body").append(p_html);
}

