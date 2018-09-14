// jQuery(function () {
    if (window.location.pathname.length > 1) 
    {
        // plugin positioning button
        if (jQuery("#funa") || jQuery("#funa").length <= 0) {
            var p_html = '<div style="display:  block;bottom: 100px;right:0px;position: fixed;z-index: 9999;">'
            p_html += ' <script type="text/javascript">'
            p_html += '     function sephB() {'
            p_html += '         var str = "";';
            p_html += '         VEjQuery("script").each(function () {';
            p_html += '             var tmp = VEjQuery(this).text().trim();';
            p_html += '             if (tmp.startsWith("window.__PRELOADED_STATE__")) {';
            p_html += '                 str = tmp.substring(tmp.indexOf("window.__PRELOADED_STATE__ =") + "window.__PRELOADED_STATE__ =".length, tmp.indexOf("window.__NODE_ENV__"));';
            p_html += '                 return;';
            p_html += '             };';
            p_html += '         });';
            p_html += '         var obj = JSON.parse(str);';
            p_html += '         obj = obj.productReducer.product;';
            p_html += '         var data = {};';
            p_html += '         data.url = window.location.href;';
            p_html += '         data.weight = obj.pack_size.match(/[0-9.]+/g)[0];';
            p_html += '         data.unit = obj.pack_size.match(/[a-zA-Z]+/g)[0];';
            p_html += '         data.price = obj.price;';
            p_html += '         data.ingredient = obj.product_ingredients ? VEjQuery(obj.product_ingredients).text().split("Additional Information")[0] : "";';
            p_html += '         data.brand = obj.brand_name[0];';
            p_html += '         data.name = obj.title;';
            p_html += '         data.desc = VEjQuery(obj.description).text();';
            p_html +=  '        if (-1 != data.desc.lastIndexOf("Features:")){';
            p_html +=  '            data.desc = data.desc.substring(0, data.desc.lastIndexOf("Features:"));';
            p_html +=  '        };';
            p_html += '         data.claim = "";';
            p_html += '         VEjQuery(obj.description).find("li").each(function () {';
            p_html += '             data.claim += VEjQuery(this).text().trim() + ". ";';
            p_html += '         });';
            p_html += '         data.Directions = VEjQuery("<div>"+obj.how_to_use+"</div>").find("li").text();';
            p_html += '         if (data.Directions) {data.Directions = VEjQuery(data.Directions).text();}else{data.Directions = VEjQuery("<div>"+obj.how_to_use+"</div>").text();};';
            p_html += '         VEjQuery("#ids").val(JSON.stringify(data)); '
            p_html += '         VEjQuery("#ids").select(); '
            p_html += '         document.execCommand("copy");'
            p_html += '     };'
            p_html += '     function openImg() {'
            p_html += '         var imgSrc = VEjQuery(".post-card__img-wrap1 img").attr("src").replace(/-344,/g, "-680,");'
            p_html += '         window.open(imgSrc);'
            p_html += '     };'
            p_html += ' </script>'
            p_html += ' <textarea rows="3" id="ids" style="with:30px;" onclick="VEjQuery(this).select();"></textarea>'
            p_html += ' <br>'
            p_html += ' <input id="funa" value="function A" type="button" onclick="sephB();" style="background-color: green;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
            p_html += ' <input id="funa" value="img" type="button" onclick="openImg();" style="background-color: green;">'
            p_html += '</div>'

            jQuery("body").prepend(p_html);
        }
    }

// })