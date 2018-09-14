
if (window.location.pathname.startsWith("/en/product")) 
{
    // plugin positioning button
    if (!document.getElementById("funa")) {
            var p_html = '<div style="display:  block;bottom: 100px;position: fixed;right: 20px;z-index: 800;">';
            p_html += '<script type="text/javascript">';
            p_html += 'function sephB() {'
            p_html += 'var data = {};';
            p_html += 'data.url = window.location.href.replace("/en/", "/gb/");';
            p_html += 'data.weight = "";';
            p_html += 'data.unit = "";';
            p_html += 'data.price = jQuery(".price_txt").text().replace(/,/g, "").match(/[0-9\.]\+/g)[0];';
            p_html += 'data.desc = "";';
            p_html += 'data.claim = "";';
            p_html += 'data.brand = jQuery(".brand_page_h_txt b").text();';
            p_html += 'data.name = "";';
            p_html += 'data.ingredient = "";';
            p_html += 'data.Directions = "";';
            p_html += 'jQuery("#bannerPosition tr").each(function () {';
            p_html += '    if (jQuery(this).text().startsWith("Description:")) {';
            p_html += '        data.name = jQuery(\'[itemprop="description"]\').text().split("has")[0];';
            p_html += '    };';
            p_html += '    if (jQuery(this).text().startsWith("How to use:")) {';
            p_html += '        data.Directions = jQuery(this).next().text().replace(/\\*/g, "");';
            p_html += '    };';
            p_html += '    if (jQuery(this).text().startsWith("Ingredients:")) {';
            p_html += '        data.ingredient = jQuery(this).next().text().replace(/\\*/g, "");';
            p_html += '    };';
            p_html += '});';
            p_html += 'jQuery(\'[itemprop="description"] li\').each(function(){data.claim += jQuery(this).text() + "\\n"});';
            p_html += 'var txt = jQuery(\'.product_name[valign="top"]\').eq(1).text().split(",");';
            p_html += 'if (txt.length > 1) {';
            p_html += '  txt = txt.pop();';
            p_html += '};';
            p_html += 'data.unit = txt.match(/[a-z]\+/g)[0];';
            p_html += 'data.weight = txt.match(/[0-9\.]\+/g)[0];';
            p_html += 'document.getElementById("ids").value = JSON.stringify(data);';
            p_html += 'var range = document.createRange();';
            p_html += 'range.selectNode(document.getElementById("ids"));';
            p_html += 'window.getSelection().addRange(range);';
            p_html += 'document.execCommand("copy");';
            p_html += '};'
            p_html += '</script>';
            p_html += '<textarea rows="3"  id="ids" style="with:30px;" onclick="jQuery(this).select();"></textarea><br/>'
            p_html += '<input id="funa" value="function A" type="button" style="background-color: green;height: 50px;" onclick="sephB();">';
            p_html += '</div>';

        jQuery("#docking").prepend(p_html);
    }
}


if (window.location.pathname.startsWith("/gb/product")) 
{
    // plugin positioning button
    if (!document.getElementById("funa")) {
            var p_html = '<div style="display:  block;bottom: 100px;position: fixed;right: 20px;z-index: 800;">';
            p_html += '<script type="text/javascript">';
            p_html += 'function sephB() {'
            p_html += 'var siteUrl = window.location.href.replace("www","cn").replace("/gb/","/en/");';
            p_html += 'window.open(siteUrl);';
            p_html += '};'
            p_html += '</script>';
            p_html += '<input id="funa" value="open en url" type="button" style="background-color: green;height: 100px;width: 130px;" onclick="sephB();">';
            p_html += '</div>';

        jQuery("#docking").prepend(p_html);
    }
}

