// plugin positioning button
if (jQuery("#funa") || jQuery("#funa").length <= 0) {
        var p_html = '<div style="display:  block;bottom: 100px;position: fixed;right: 100px;z-index: 800;">';
        p_html += '<script type="text/javascript">';
        p_html += 'function sephB() {'
        p_html += 'var data = {};';
        p_html += 'data.url = window.location.href;';
        p_html += 'var volume = jQuery("#hiddenEngPrdNm").next().text();';
        p_html += 'var ingredient = "";';
        p_html += 'data.weight = volume.match(/[0-9.]+/g)[0];';
        p_html += 'data.unit = volume.match(/[a-zA-Z]+/g)[0].toLowerCase();';
        p_html += 'data.name = "innisfree " + jQuery("#hiddenEngPrdNm").text();';
        p_html += 'data.price = "";';
        p_html += 'var price = jQuery(".pdtSummary>.price").text().trim().replace(/,/, "").match(/[0-9.]+/g);';
        p_html += 'if(price) {data.price = price[0]};';
        p_html += 'data.desc = jQuery("#onePoint").text().trim();';
        p_html += 'data.brand = "innisfree";';
        p_html += 'data.ingredient = jQuery(".scrollArea").text().trim();';
        p_html += 'data.Directions = jQuery(".howTo>.p").text().trim();';
        p_html += 'if (data.Directions.startsWith("[Directions] ")) {;'
        p_html += '    data.Directions = data.Directions.substr("[Directions] ".length);'
        p_html += '};'
        p_html += 'data.claim = jQuery(".whatitis>.p").text().trim();';
        p_html += 'jQuery("#ids").val(JSON.stringify(data));';
        p_html += 'jQuery("#ids").select();';
        p_html += 'document.execCommand("copy");';
        p_html += '};'
        p_html += 'function ing() {'
        p_html += 'jQuery("#ids").val(jQuery(".scrollArea").text().trim());';
        p_html += 'jQuery("#ids").select();';
        p_html += 'document.execCommand("copy");';
        p_html += '};'
        p_html += '</script>';
        p_html += '<textarea rows="3"  id="ids" style="with:30px;" onclick="jQuery(this).select();"></textarea><br/>'
        p_html += '<input id="funa" value="function A" type="button" onclick="sephB();">';
        p_html += '<input id="funing" value="Ingredient" type="button" onclick="ing();">';
        p_html += '</div>';

    jQuery("body").append(p_html);
}

