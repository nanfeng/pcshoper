// plugin positioning button
if (jQuery("#funa") || jQuery("#funa").length <= 0) {
    var p_html = '<div style="position: fixed; top: 300px; right: 10px;"><script type="text/javascript">';
    p_html += 'function sephB() {'
    p_html += 'var data = {};';
    p_html += 'data.url = window.location.href;';
    p_html += 'data.ingredient = "";';
    p_html += 'var volume = "";';
    p_html += 'var ps = jQuery(".product-content__specs .markdown-content > p").text().split("\\n");';
    p_html += 'for(var i=0; i<ps.length; i++){if(ps[i].startsWith("NET WEIGHT")){volume = ps[i].substr("NET WEIGHT: ".length);};if(ps[i].startsWith("INGREDIENTS")){data.ingredient = ps[i].substr("INGREDIENTS: ".length);}};';
    p_html += 'data.weight = "";';
    p_html += 'if (volume){data.weight = volume.match(/[0-9.]+/g)[0];};';
    p_html += 'data.unit = "";';
    p_html += 'if (volume) {data.unit = volume.match(/[a-zA-Z]+/g)[0];};';
    p_html += 'data.price = jQuery(".price-container .is-text-xh").text().trim().match(/[0-9.]+/g)[0];';
    p_html += 'data.desc = "";';
    p_html += 'data.claim = "";';
    p_html += 'var claim = jQuery("#what-to-love p").eq(0).text().trim().split("\\n");';
    p_html += 'for(var i=0; i<claim.length; i++){if(claim[i].startsWith("CLAIM TO FAME: ")){data.desc = claim[i].substr("CLAIM TO FAME: ".length);};if(claim[i].startsWith("FAST FACTS: ")){data.claim = claim[i].substr("FAST FACTS: ".length);};if(claim[i].startsWith("PERFECT FOR: ")){data.claim += ".\\n" + claim[i].substr("PERFECT FOR: ".length);};};';
    p_html += 'data.brand = jQuery(".product-page__heading .brand").text();';
    p_html += 'data.name = jQuery(".product-page__heading h1").text().trim().replace(/ \\(.*\\)/, "");';
    p_html += 'data.Directions = jQuery("#how-to-use").text().trim();';
    p_html += 'jQuery("#ids").val(JSON.stringify(data));';
    p_html += 'jQuery("#ids").select();';
    p_html += 'document.execCommand("copy");';
    p_html += '};'
    p_html += '</script>';
    p_html += '<textarea rows="3"  id="ids" style="with:70px;" onclick="jQuery(this).select();"></textarea><br/>'
    p_html += '<input id="funa" value="function A" type="button" onclick="sephB();">';
    p_html += '</div>'
    jQuery("#back-to-top").before(p_html);
}