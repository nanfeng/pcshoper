// plugin positioning button
if (jQuery("#funa") || jQuery("#funa").length <= 0) {
        var p_html = '<div style="display:  block;bottom: 100px;position: fixed;right: 10px;z-index: 800;">';
        p_html += '<script type="text/javascript">';
        p_html += 'function sephB() {'
        p_html += 'var data = {};';
        p_html += 'data.url = window.location.href;';
        p_html += 'data.unit = "";';
        p_html += 'data.weight = "";';
        p_html += 'var volume = ysApp.product.selectedProductOption.titleOption.split(" ").pop();';
        p_html += 'var ingredient = "";';
        p_html += 'if(volume.match(/[0-9.]+/g)){data.weight = volume.match(/[0-9.]+/g)[0];';
        p_html += 'data.unit = volume.match(/[a-zA-Z]+/g)[0].toLowerCase();};';
        p_html += 'data.name = ysApp.product.product.brandName + " " + ysApp.product.product.name.replace(/ [0-9.]+ oz/, "");';
        p_html += 'data.price = ysApp.product.product.sellPrice.match(/[0-9.]+/g)[0];';
        p_html += 'data.desc = "";';
        p_html += 'data.brand = ysApp.product.product.brandName;';
        p_html += 'var des = ysApp.product.galleryDescription.replace(/<[^>]+>/g,"").split("\\n");';
        p_html += 'data.Directions = des[3];';
        p_html += 'data.ingredient = ysApp.product.majorIngredients.ingredients.replace("(1)Certified Organic Ingredient", "");';
        p_html += 'data.claim = des[1];';
        p_html += 'document.getElementById("ids").value = JSON.stringify(data);';
        p_html += 'document.getElementById("ids").select();';
        p_html += 'document.execCommand("copy");';
        p_html += '};'
        p_html += '</script>';
        p_html += '<textarea rows="3"  id="ids" style="with:30px;" onclick=""></textarea><br/>'
        p_html += '<input id="funa" value="function A" type="button" onclick="sephB();">';
        p_html += '</div>';

    jQuery("body").append(p_html);
}

