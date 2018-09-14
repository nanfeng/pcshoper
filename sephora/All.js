// jQuery(function () {
    //productnew
    if (window.location.pathname.length > 1 && window.location.pathname.startsWith("/products") && window.location.host.startsWith("www.sephora.co.id")) 
    {
        // plugin positioning button
        if (jQuery("#funa") || jQuery("#funa").length <= 0) {
                var p_html = '<div style="display:  block;bottom: 100px;position: fixed;right: 100px;z-index: 800;">';
                p_html += '<script type="text/javascript">';
                p_html += 'function sephB() {'
                p_html += 'var data = {};';
                p_html += 'data.url = window.location.href;';
                p_html += 'var volume = jQuery(".product-heading").text().trim();';
                p_html += 'data.weight = "";';
                p_html += 'if (volume){data.weight = volume.match(/[0-9.]+/g)[0];};';
                p_html += 'data.unit = "";';
                p_html += 'if (volume) {data.unit = volume.match(/[a-zA-Z]+/g)[0];};';
                p_html += 'data.price = jQuery(".product-price>span:visible").text().replace(/,|\\./g, "").match(/[0-9.]+/g)[0];';
                p_html += 'data.desc = "";';
                p_html += 'data.claim = "";';
                p_html += 'jQuery("#product-description p").each(function () {var str = jQuery(this).text().trim();if (str.startsWith("What it is")) {data.desc = jQuery(this).next().text();};if (str.startsWith("About")) {data.desc = jQuery(this).next().text();};if (str.startsWith("What it does")) {data.claim = jQuery(this).next().text();};if (str.startsWith("Benefits")) {data.claim = jQuery(this).next().text();};if (str.startsWith("What else you need")) {data.claim += " " + jQuery(this).next().text();};});';
                p_html += 'if (data.desc == "") {jQuery("#product-description p").each(function(){if (!jQuery(this).hasClass("disclaimer")) {data.desc += jQuery(this).text();};});};';
                p_html += 'if (data.claim == "") {jQuery("#product-description li").each(function(){if (jQuery(this).text().trim().endsWith(".")) {data.claim += jQuery(this).text().trim() + " ";}else{data.claim += jQuery(this).text().trim() + ". ";};});};';
                p_html += 'data.brand = jQuery(".product-brand").text().trim();';
                p_html += 'data.name = data.brand + " " + jQuery(".product-name").text().trim();';
                p_html += 'data.ingredient = jQuery("#product-ingredients").text().trim();';
                p_html += 'data.Directions = "";';
                p_html += 'jQuery("#product-how-to li").each(function () {data.Directions += jQuery(this).text().trim() + " ";});';
                p_html += 'if ("" == data.Directions) {data.Directions = jQuery("#product-how-to").text().trim();};';
                p_html += 'data.Directions = data.Directions.replace(/\-/g, " ");';
                p_html += ' jQuery("#ids").val(JSON.stringify(data));';
                p_html += ' jQuery("#ids").select();';
                p_html += ' document.execCommand("copy");';
                p_html += '};'
                p_html += 'function sephshade() {'
                p_html += '    var items = "";'
                p_html += '    jQuery(".swatch-selector>option").each(function(){'
                p_html += '        items += jQuery(this).html() + "\\r\\n";'
                p_html += '    });'
                p_html += ' jQuery("#ids").val(items);';
                p_html += ' jQuery("#ids").select();';
                p_html += ' document.execCommand("copy");';
                p_html += '};'
                p_html += '</script>';
                p_html += '<textarea rows="3"  id="ids" style="with:30px;" onclick="jQuery(this).select();"></textarea><br/>'
                p_html += '<input id="funa" value="function A" type="button" onclick="sephB();">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                p_html += '<input id="funshade" value="shade" type="button" onclick="sephshade();">';
                p_html += '</div>';

            jQuery("body").append(p_html);
        }
    }else{

        // plugin positioning button
        if (jQuery("#funa") || jQuery("#funa").length <= 0) {
                var p_html = '<div style="display:  block;bottom: 100px;position: fixed;right: 100px;z-index: 800;">';
                p_html += '<script type="text/javascript">';
                p_html += 'function sephB() {'
                p_html += 'var data = {};';
                p_html += 'data.url = window.location.href;';
                p_html += 'var volume = jQuery(".product-heading").text().trim();';
                p_html += 'data.weight = "";';
                p_html += 'if (volume){data.weight = volume.match(/[0-9.]+/g)[0];};';
                p_html += 'data.unit = "";';
                p_html += 'if (volume) {data.unit = volume.match(/[a-zA-Z]+/g)[0];};';
                p_html += 'data.price = jQuery(".product-price>span:visible").text().replace(/,/g, "").match(/[0-9.]+/g)[0];';
                p_html += 'data.desc = "";';
                p_html += 'data.claim = "";';
                p_html += 'jQuery("#product-description p").each(function () {var str = jQuery(this).text().trim();if (str.startsWith("What it is")) {data.desc = jQuery(this).next().text();};if (str.startsWith("About")) {data.desc = jQuery(this).next().text();};if (str.startsWith("What it does")) {data.claim = jQuery(this).next().text();};if (str.startsWith("Benefits")) {data.claim = jQuery(this).next().text();};if (str.startsWith("What else you need")) {data.claim += " " + jQuery(this).next().text();};});';
                p_html += 'if (data.desc == "") {jQuery("#product-description p").each(function(){if (!jQuery(this).hasClass("disclaimer")) {data.desc += jQuery(this).text();};});};';
                p_html += 'if (data.claim == "") {jQuery("#product-description li").each(function(){if (jQuery(this).text().trim().endsWith(".")) {data.claim += jQuery(this).text().trim() + " ";}else{data.claim += jQuery(this).text().trim() + ". ";};});};';
                p_html += 'data.brand = jQuery(".product-brand").text().trim();';
                p_html += 'data.name = data.brand + " " + jQuery(".product-name").text().trim();';
                p_html += 'data.ingredient = jQuery("#product-ingredients").text().trim();';
                p_html += 'data.Directions = "";';
                p_html += 'jQuery("#product-how-to li").each(function () {data.Directions += jQuery(this).text().trim() + " ";});';
                p_html += 'if ("" == data.Directions) {data.Directions = jQuery("#product-how-to").text().trim();};';
                p_html += 'data.Directions = data.Directions.replace(/\-/g, " ");';
                p_html += ' jQuery("#ids").val(JSON.stringify(data));';
                p_html += ' jQuery("#ids").select();';
                p_html += ' document.execCommand("copy");';
                p_html += '};'
                p_html += 'function sephshade() {'
                p_html += '    var items = "";'
                p_html += '    jQuery(".swatch-selector>option").each(function(){'
                p_html += '        items += jQuery(this).html() + "\\r\\n";'
                p_html += '    });'
                p_html += ' jQuery("#ids").val(items);';
                p_html += ' jQuery("#ids").select();';
                p_html += ' document.execCommand("copy");';
                p_html += '};'
                p_html += '</script>';
                p_html += '<textarea rows="3"  id="ids" style="with:30px;" onclick="jQuery(this).select();"></textarea><br/>'
                p_html += '<input id="funa" value="function A" type="button" onclick="sephB();">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                p_html += '<input id="funshade" value="shade" type="button" onclick="sephshade();">';
                p_html += '</div>';

            jQuery("body").append(p_html);
        }
    }

// })

