    var path = window.location.pathname.split('/')
    if (path.length>3 && 'p' == path[2] && ("http://www.watsons.co.th" == window.location.origin || "https://www.watsons.co.th" == window.location.origin))
    {
        // plugin positioning button
        if (jQuery("#funa") || jQuery("#funa").length <= 0) {
                var p_html = '<div style="position: fixed; top: 300px; right: 10px;"><script type="text/javascript">';
                p_html += 'function sephB() {'
                p_html += 'var data = {};';
                p_html += 'data.url = window.location.href;';
                p_html += 'var volume = jQuery(".Options_list").text().trim();';
                p_html += 'data.weight = "";';
                p_html += 'if (volume){data.weight = volume.match(/[0-9.]+/g)[0];};';
                p_html += 'data.unit = "";';
                p_html += 'if (volume) {data.unit = volume.match(/[a-zA-Z]+/g)[0];};';
                p_html += 'if ("Gram"==data.unit) {data.unit = "g";};';
                p_html += 'data.price = "";';
                p_html += 'data.price = jQuery("[itemprop=' + '\'price' + '\']").attr("content").trim();';
                p_html += 'data.desc = jQuery(".drop-box").children().first().text().trim();';
                p_html += 'data.claim = "";';
                p_html += 'data.brand = jQuery("[itemprop=' + '\'brand' + '\']").text().trim();';
                p_html += 'data.name = jQuery("h1[itemprop=' + '\'name' + '\']").text().trim();';
                p_html += 'data.ingredient = "";';
                p_html += 'data.Directions = "";';
                p_html += 'jQuery(".drop-box").children().each(function () {var str = jQuery(this).text().trim();if (str.startsWith("Directions")) {    data.Directions = jQuery(this).next().text();}if (str.startsWith("Ingredients")) {  data.ingredient = jQuery(this).next().html().replace(/\<br\>/g, ",");}});';
                p_html += ' jQuery("#ids").val(JSON.stringify(data));';
                p_html += ' jQuery("#ids").select();';
                p_html += ' document.execCommand("copy");';
                p_html += '};'
                p_html += '</script>';
                p_html += '<textarea rows="3"  id="ids" style="with:70px;" onclick="jQuery(this).select();"></textarea><br/>'
                p_html += '<input id="funa" value="function A" type="button" onclick="sephB();">';
                p_html += '</div>'


            jQuery("#toTop").before(p_html);
        }
    }

    if (path.length>3 && 'p' == path[2] && ("http://www.watsons.com.sg" == window.location.origin || "https://www.watsons.com.sg" == window.location.origin || "http://www.watsons.com.ph" == window.location.origin || "https://www.watsons.com.ph" == window.location.origin))
    {

        // plugin positioning button
        if (jQuery("#funa") || jQuery("#funa").length <= 0) {
                var p_html = '<div style="position: fixed; top: 300px; right: 10px;z-index: 1500;"><script type="text/javascript">';
                p_html += 'function sephB() {'
                p_html += 'var data = {};';
                p_html += 'data.url = window.location.href;';
                p_html += 'var volume = jQuery(".volumeContainer").text().trim();';
                p_html += 'if (volume) {volume = volume.split("|")[1].trim();};';
                p_html += 'data.weight = "";';
                p_html += 'if (volume){data.weight = volume.match(/[0-9.]+/g)[0];};';
                p_html += 'data.unit = "";';
                p_html += 'if (volume) {data.unit = volume.match(/[a-zA-Z]+/g)[0];};';
                p_html += 'data.price = "";';
                p_html += 'if (jQuery(".productPriceContainer .productPrice").text()){data.price = jQuery(".productPriceContainer .productPrice").text().replace(/,/g, "").match(/[0-9.]+/g)[0];};';
                p_html += 'var descs = jQuery("#product-description").text().trim().split("Highlights:");';
                p_html += 'data.claim = descs.length>1 ? descs[1] : "";';
                p_html += 'data.desc = descs[0];';
                p_html += 'data.brand = jQuery("[itemprop=' + '\'brand' + '\']").text().trim();';
                p_html += 'data.name = jQuery("#product-name").text().trim().replace(data.weight+data.unit,"");';
                p_html += 'if(!data.name.toLowerCase().startsWith(data.brand.toLowerCase())){data.name = data.brand + " " + data.name};';
                p_html += 'data.ingredient = "";';
                p_html += 'data.Directions = "";';
                p_html += 'jQuery("#tabItem1").children().each(function () {var str = jQuery(this).text().trim();if (str.startsWith("Directions")) {    data.Directions = jQuery(this).next().text();};if (str.startsWith("Ingredients")) {  data.ingredient = jQuery(this).next().html().replace(/\<br\>/g, ",");}});';
                p_html += ' jQuery("#ids").val(JSON.stringify(data));';
                p_html += ' jQuery("#ids").select();';
                p_html += ' document.execCommand("copy");';
                p_html += '};'
                p_html += '</script>';
                p_html += '<textarea rows="3"  id="ids" style="with:70px;" onclick="jQuery(this).select();"></textarea><br/>'
                p_html += '<input id="funa" value="function A" type="button" onclick="sephB();">';
                p_html += '</div>'

            jQuery("#toTopBtn").before(p_html);
        }
    }

    if (path.length>2 && ("http://www.watsons.com.sg" == window.location.origin || "https://www.watsons.com.sg" == window.location.origin) && ('c' == path[1] || 'c' == path[2])) 
    {

        // plugin positioning button
        if (jQuery("#funa") || jQuery("#funa").length <= 0) {
                var p_html = '<div style="position: fixed; top: 300px; right: 10px;z-index: 1500;"><script type="text/javascript">';
                p_html += 'function copyUrl() {'
                p_html += 'var list = "";';
                p_html += 'jQuery(".brandName").each(function() {';
                p_html += '    list += jQuery(this).text() + "\t" + window.location.origin + jQuery(this).parent().attr("href") + "\\n";';
                p_html += '});';
                p_html += ' jQuery("#ids").val(list);';
                p_html += 'jQuery("#ids").select();';
                p_html += 'document.execCommand("copy");';
                p_html += '};'
                p_html += '</script>';
                p_html += '<textarea rows="3"  id="ids" style="with:70px;" onclick="jQuery(this).select();"></textarea><br/>'
                p_html += '<input id="funa" value="copyUrl" type="button" onclick="copyUrl();">';
                p_html += '</div>'

            jQuery("#toTopBtn").before(p_html);
        }
    }