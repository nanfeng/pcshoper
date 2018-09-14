jQuery(function () {
    //productnew
    if (window.location.pathname.startsWith('/product/productnew') || window.location.pathname.startsWith('/Product/ProductNew') || window.location.pathname.startsWith('/Product/NewVariant')) 
    {
        ////////////////////////////////////////////


jQuery("#p_company").val(" Estee Lauder ");
//Produced In
jQuery("#ProducedCompanyCountryData").val("");
//House number
jQuery("#CompanyHouseNumber").val("");
//Street name 
jQuery("#CompanyStreetName").val("");
//City
jQuery("#CompanyCity").val("");
//State
jQuery("#CompanyState").val("");
//Postal Code
jQuery("#CompanyPostalCode").val("  ");
//Country 
jQuery("#CompanyCountry").val("Singapore");
//Phone   
jQuery("#CompanyTelephoneNumber").val("");
//Email    
jQuery("#CompanyEmail").val("contactus@sg.esteelauder.com");
//Website    
jQuery("#CompanyWebsite").val("     http://www.esteelauder.com.sg");






        //////////////////////////////////////////////////////////////


        // //Select country
        jQuery("#CountryData").val("Singapore");
        // jQuery("#Brand").val("");
        
        jQuery("#ProductBrand").val("");
        jQuery("#uniform-IsInnovativeNo span").addClass("checked");
        jQuery("#Event").val("New Product");
        // jQuery("#SubEvent").val("New Product");
        jQuery("#LaunchedDateMonth").val("5");
        jQuery("#LaunchedDateYear").val("2018");
        //Shelving detail
        jQuery('#indupacksizext').keyup(function(){jQuery('#Whole_packweight').val(jQuery('#indupacksizext').val())});
        jQuery("#qtyperpack").val(1);


        jQuery("#Shelving3").click();
        jQuery("#Shelving3").click();
        //6. Now we would like some details of the packaging 
        
        jQuery('#IsInnovativeNo').click();

        //Ingredients成分替换/为, 首字母大写
        // jQuery("#Ingredients").change(function(){
        //     var str = jQuery(this).val();
        //     if (str.length>0){
        //         str = str.toLowerCase().replace(/\b(\w)(\w*)/g, function($0, $1, $2) {return $1.toUpperCase() + $2.toLowerCase();});
        //         jQuery(this).val(str.replace(/\//g, ", ").replace(/ ,/g, ",").replace(/\*/g, "").replace(/\\/g, ", "));
        //     }
        // });

        //ProductName, 首字母大写
        // jQuery("#ProductName").bind('productNameChange',function(){
        //     var str = jQuery(this).val();
        //     if (str.length>0){
        //         str = str.toLowerCase().replace(/\b(\w)(\w*)/g, function($0, $1, $2) {return $1.toUpperCase() + $2.toLowerCase();});
        //         str = str.replace("&", "and");
        //         str = str.replace(/-/g, " ");
        //         str = str.replace(/\s+/g, " ");
        //         str = str.replace(/\+{1,}/g, " Plus ")
        //         str = str.replace(/\(/g, "")
        //         str = str.replace(/\)/g, "")
        //         str = str.replace(/~/g, " ")
        //         str = str.replace(/é/g, "e")
        //         str = str.replace(/®/g, "")
        //         str = str.replace(/™/g, "")
        //         str = str.replace(/'([A-Z])/g, function($1) {
        //             return $1.toLowerCase()
        //         })
        //         str = str.replace(/,/g, "")
        //         jQuery(this).val(str);
        //     }
        // });
        // jQuery("#ProductName").change(function(){jQuery("#ProductName").trigger("productNameChange")});

        // //ProductName自动加到描述前面
        // var productOldName = jQuery("#ProductName").val();
        // jQuery("#ProductName").blur(function () {
        //     var productNewName = jQuery("#ProductName").val();
        //     if (jQuery("#Description").val().startsWith(productNewName)) {

        //     }else if (jQuery("#Description").val().startsWith(productOldName)) {
        //         jQuery("#Description").val(productNewName + jQuery("#Description").val().substr(productOldName.length));
        //     }
        //     if("" == jQuery("#Description").val()){
        //         jQuery("#Description").val(productNewName);
        //     }
        //     productOldName = productNewName;
        // });

        //Brand, 首字母大写
        jQuery("#Brand").change(function(){
            var str = jQuery(this).val();
            if (str.length>0){
                str = str.toLowerCase().replace(/\b(\w)(\w*)/g, function($0, $1, $2) {return $1.toUpperCase() + $2.toLowerCase();});
                jQuery(this).val(str);
            }
        });

        //contry
        jQuery("#CompanyCountry>option").each(function(){
            jQuery(this).attr("value", jQuery(this).text().trim());
        })
 
        //barcode
        // jQuery("#Barcode").blur(function(){
        //     var bcode = jQuery("#Barcode").val().trim();
        //     if (bcode.length == 12){
        //         jQuery("#CompanyManufacturerCode").val(bcode.substr(1,5));
        //     }
        // })
        // jQuery("#Barcode").keyup(function(){
        //     jQuery("#Barcode").val(jQuery("#Barcode").val().trim());
        // })

        //ShopperComment
        // if (jQuery("#ShopperComment").val().length == 0) {
        //     jQuery("#ShopperComment").val("No barcode and manufacturer code found.");
            // jQuery("#ShopperComment").val("Company address, barcode and manufacturer code not found.");
        // }


        // plugin positioning button
        if (jQuery("#sidebar").length <= 0) {
            var p_html = '<div id="sidebar" style="display: block;position: fixed;min-width: 20px;z-index: 999;left: 200px;bottom: 250px;">';
                p_html += '<script type="text/javascript">';

                //productName
                p_html += 'jQuery("#ProductName").bind("productNameChange",function(){';
                p_html += '    var str = jQuery(this).val();';
                p_html += '    if (str.length>0){';
                p_html += '        str = str.replace("&", "and");';
                p_html += '        str = str.replace(/-/g, " ");';
                p_html += '        str = str.replace(/\\s+/g, " ");';
                p_html += '        str = str.replace(/\\+/g, " Plus ");';
                p_html += '        str = str.replace(/\\(/g, "");';
                p_html += '        str = str.replace(/\\)/g, "");';
                p_html += '        str = str.replace(/~/g, " ");';
                p_html += '        str = str.replace(/é/g, "e");';
                p_html += '        str = str.replace(/®/g, "");';
                p_html += '        str = str.replace(/™/g, "");';
                p_html += "        str = str.replace(/'([A-Z])/g, function($1) {";
                p_html += '            return $1.toLowerCase();';
                p_html += '        });';
                p_html += '        str = str.replace(/,/g, "");';
                p_html += '        str = str.toLowerCase().replace(/\\b(\\w)(\\w*)/g, function($0, $1, $2) {return $1.toUpperCase() + $2.toLowerCase();});';
                p_html += '        jQuery(this).val(str);';
                p_html += '    }';
                p_html += '});';
                p_html += 'jQuery("#ProductName").change(function(){jQuery("#ProductName").trigger("productNameChange")});';

                //product description
                p_html += 'var productOldName = jQuery("#ProductName").val();';
                p_html += 'var productNewName;';
                p_html += 'jQuery("#ProductName").blur(function () {';
                p_html += '    productNewName = jQuery("#ProductName").val();';
                p_html += '    if (jQuery("#Description").val().startsWith(productNewName)) {';
                p_html += '    }else if (jQuery("#Description").val().startsWith(productOldName)) {';
                p_html += '        jQuery("#Description").val(productNewName + jQuery("#Description").val().substr(productOldName.length));';
                p_html += '    };';
                p_html += '    if("" == jQuery("#Description").val()){';
                p_html += '        jQuery("#Description").val(productNewName);';
                p_html += '    };';
                p_html += '    productOldName = productNewName;';
                p_html += '});';

                //Ingredients成分替换/为, 首字母大写
                p_html += 'jQuery("#Ingredients").change(function(){';
                p_html += '    var str = jQuery(this).val();';
                p_html += '    if (str.length>0){';
                p_html += '        str = str.toLowerCase().replace(/\\b(\\w)(\\w*)/g, function($0, $1, $2) {return $1.toUpperCase() + $2.toLowerCase();});';
                p_html += '        jQuery(this).val(str.replace(/\\//g, ", ").replace(/ ,/g, ",").replace(/\\*/g, "").replace(/\\//g, ", "));';
                p_html += '    }';
                p_html += '});';


                p_html += 'function plugin_positioning() {';
                p_html += '     ShowPositioningSubCategory("SelectAll");';
                p_html += '     ShowPositioningSubCategory("ShowSubCategory");';
                p_html += '     ShowPositioningSubCategory("SelectNone");';
                p_html += '};';
                p_html += 'function plugin_addname() {';
                p_html += '    if (!jQuery("#Description").val().startsWith(jQuery("#ProductName").val())) {';
                p_html += '        jQuery("#Description").val(jQuery("#ProductName").val()+" " +jQuery("#Description").val())'
                p_html += '    }';
                p_html += '};';
                p_html += 'function plugin_code() {';
                p_html += '    if (!jQuery("#Description").val().startsWith(jQuery("#ProductName").val())) {';
                p_html += '        jQuery("#Description").val(jQuery("#ProductName").val()+" " +jQuery("#Description").val())'
                p_html += '    }';
                p_html += '};';
                p_html += 'function BBB() {';
                p_html += '     jQuery("#ProductName").val(data.name);'
                p_html += '     jQuery("#Brand").val(data.brand);'
                p_html += '     jQuery("#Description").val(data.desc);'
                p_html += '     jQuery("#Claims").val(data.claim);'          
                // p_html += '     jQuery("#Barcode").val(data.barcode);';
                // p_html += '     jQuery("#CompanyManufacturerCode").val(data.manucode);';
                p_html += '     if ("Empty" != data.extranotes) {'
                p_html += '         jQuery("#ExtraNotes").val(data.extranotes);'
                p_html += '     };'
                p_html += '     jQuery("#Directions").val(data.directions);'
                p_html += '     jQuery("#Ingredients").val(data.ingredient);'
                p_html += '     jQuery("#NoIngredients").click();'
                p_html += '     jQuery("#FormatCategory option").each(function () {'
                p_html += '         if (data.format == jQuery(this).text().trim()) {'
                p_html += '             jQuery("#FormatCategory").val(jQuery(this).val());'
                p_html += '         }'
                p_html += '     });'
                p_html += '     data.chks.forEach(function (item) {'
                p_html += '         var id = jQuery("#positionDetails td:visible").find("#poschk_"+item).parents("[id^=\'div_positions\']").attr("id").split(\'_\').pop();'
                p_html += '         if (!jQuery("#positionDetails td:visible").find("#cat"+id).is(":checked")) {'
                p_html += '             jQuery("#positionDetails td:visible").find("#cat"+id).click();'
                p_html += '         }'
                p_html += '         jQuery("#positionDetails td:visible").find("#poschk_"+item).click();'
                p_html += '     });'
                p_html += '     if ("-" != data.innerPackage) {'
                p_html += '         jQuery("#PrimaryPack").next().click();'
                p_html += '         jQuery("#PrimaryPackList :radio").each(function () {'
                p_html += '             if (data.innerPackage == jQuery(this).val()) {'
                p_html += '                 jQuery(this).click();'
                p_html += '             }'
                p_html += '         })'
                p_html += '     }'
                p_html += '     if ("-" != data.outerPackage) {'
                p_html += '         jQuery("#SecondaryPack").next().click();'
                p_html += '         jQuery("#SecondaryPackList :radio").each(function () {'
                p_html += '             if (data.outerPackage == jQuery(this).val()) {'
                p_html += '                 jQuery(this).click();'
                p_html += '             }'
                p_html += '         })'
                p_html += '     }'
                p_html += '};'
                p_html += 'function sephB() {'
                p_html += '    jQuery("#SourceInfo").val(data.url);'
                p_html += '    if(data.url.indexOf("www.innisfree.com")>-1){jQuery("#Website").val(data.url);jQuery("#SourceInfo").val("");};'
                p_html += '    jQuery("#localprice").val(data.price);'
                p_html += '    jQuery("#ProductName").val(data.name);'
                p_html += '    jQuery("#Brand").val(data.brand);'
                p_html += '    jQuery("#Directions").val(data.Directions);'
                p_html += '    jQuery("#Description").val(data.desc);'
                p_html += '    jQuery("#Ingredients").val(data.ingredient);'
                p_html += '    jQuery("#indupacksizext").val(data.weight);'
                p_html += '    jQuery("#packsize").val(data.weight);'
                p_html += '    jQuery("#Unit").val(data.unit.toLowerCase());'
                p_html += '    jQuery("#Claims").val(data.claim);'
                // p_html += '    jQuery("#NoIngredients").click();'
                p_html += '    jQuery("#Ingredients").trigger("change");'
                p_html += '    jQuery("#ProductName").trigger("productNameChange");'
                p_html += '    jQuery("#ProductName").trigger("blur");';
                p_html += '};'
                p_html += 'function ingrSame(){'
                p_html += '     jQuery("#ShopperComment").val("Ingredients for this range all the same.");'
                p_html += '};'
                p_html += 'function ingrFound(){'
                p_html += '     jQuery("#ShopperComment").val("No ingredients found.");'
                p_html += '};'
                p_html += 'function plugin_productname() {'
                p_html += '    jQuery("#ProductName").select();'
                p_html += '    document.execCommand("copy");'
                p_html += '};'
                p_html += '</script>';
                // p_html += '<input class="btn" value="AddName" type="button" onclick="plugin_addname();"><br/><br/><br/>';
                p_html += '<br/><br/><br/>';
                p_html += '<input class="btn" value="Product name" type="button" onclick="plugin_productname();"><br/><br/>';
                p_html += '<input class="btn" value="Position" type="button" onclick="plugin_positioning();"><br/><br/><br/>';
                p_html += '<input class="btn" value="Copy   B" type="button" onclick="BBB();" style="background:#37bd88"><br/><br/><br/>';
                p_html += '<input class="btn" value="function" type="button" onclick="sephB();" style="background:green"><br/><br/>';
                p_html += '<input class="btn" value="ingr same" type="button" onclick="ingrSame();" style="background:#861786cc"><br/><br/>';
                p_html += '<input class="btn" value="no ingr" type="button" onclick="ingrFound();" style="background:#861786cc">';
                p_html += '</div>';

                p_html += '<div id="plugin_code" style="display: block;position: fixed;min-width: 20px;z-index: 999;right: 40px;bottom: 120px;">';
                p_html += '<script type="text/javascript">';
                p_html += 'function plugin_code() {';
                p_html += '     eval(jQuery("#plugin_codeid").val());';
                p_html += '     window.localStorage.setItem("plugin_codeid", jQuery("#plugin_codeid").val());';
                p_html += '}';
                p_html += 'jQuery("#plugin_codeid").val(window.localStorage.getItem("plugin_codeid"));';
                p_html += '</script>';
                // p_html += '     <textarea rows="20" style="width:170px;overflow-y:hidden;" id="plugin_codeid"></textarea><br/>'
                // p_html += '     <input class="btn" value="code" type="button" onclick="plugin_code();">';
                p_html += '</div>';

            jQuery("body").append(p_html);
        }
    }




})



    if ('/ShoppingList/ShoppingList' == window.location.pathname) {
        if (jQuery("#sidebar").length <= 0) {
            var p_html = '<div id="sidebar" style="display: block;position: fixed;min-width: 20px;z-index: 999;right: 40px;bottom: 40px;">';
                p_html += '<script type="text/javascript">';
                p_html += 'function CopyId(){';
                p_html += ' var ids = "";';
                p_html += ' var trs = jQuery(".ProductList tr");';
                p_html += ' for (var i = trs.length - 1; i > 0; i--) {';
                p_html += '     ids  += jQuery(trs[i]).find(".Table_Body").eq(2).text().trim() + "\\n";';
                p_html += ' }';
                p_html += ' if (ids.length<1) {';
                p_html += '     trs = jQuery(".displaytable tr");';
                p_html += '     for (var i = trs.length - 1; i > 0; i--) {';
                p_html += '         ids  += jQuery(trs[i]).find(".Table_Body").eq(2).text().trim() + "\\n";';
                p_html += '     }';
                p_html += ' }';
                p_html += ' jQuery("#ids").val(ids);';
                p_html += ' jQuery("#ids").select();';
                p_html += ' document.execCommand("copy");';
                p_html += '}';
                p_html += '</script>';
                p_html += '<textarea rows="20" style="width:58px;overflow-y:hidden;" id="ids" onclick="jQuery(this).select();"></textarea><br/>'
                p_html += '<input class="btn" value="CopyId" type="button" onclick="CopyId();">';
                p_html += '</div>';
            jQuery("body").append(p_html);
        }
    }


    //key down
    if ('/Search/Search' == window.location.pathname) {
        //按下回车键执行搜索命令
        // if ('pcshopperform.innovadatabase.com' == window.location.host) {
        //     jQuery(document).keypress(function(e) {
        //         if (e.keyCode == 13) {//keyCode=13是回车键
        //             jQuery(".search_btn").click();
        //         }
        //     });
        // }

        //plugin show img
        if (jQuery("#sidebar").length <= 0) {
            var p_html = '<div id="sidebar" style="display: block;position: fixed;min-width: 20px;z-index: 999;right: 150px;bottom: 100px;">';
                p_html += '<script type="text/javascript">';
                p_html += 'function plugin_show_img() {';
                p_html += '     jQuery("img").each(function(){';
                p_html += '         var src = jQuery(this).attr("src");';
                p_html += '         src = src.replace(/https/g, "http");';
                p_html += '         jQuery(this).attr("src", src);';
                p_html += '     })';
                p_html += '}';
                p_html += '</script>';
                p_html += '<input class="btn" value="ShowImage" type="button" onclick="plugin_show_img();">';
                p_html += '</div>';
            jQuery("body").append(p_html);
        }
    }

    //image
    if ('/Home/ProductInfo' == window.location.pathname && 'pcshopperform.innovadatabase.com' == window.location.host) {
        // var id = jQuery("#HiddenProductId").val();
        // jQuery.ajax({
        //     type: "POST",
        //     url: "http://pcshopperform.innovadatabase.com/image/OpenImage?proid="+id+"&source=_ing_image.jpg&productidsopen=0",
        //     success: function (responseText) {
        //         var img = jQuery(responseText).find("img:last").attr("src");
        //         jQuery("#ingredients_block img").attr("src", img);
        //         jQuery("#ingredients_block img").removeAttr("width");
        //         jQuery("#ingredients_block img").removeAttr("height");
        //     },
        //     error: function(XMLHttpRequest, textStatus, errorThrown) {
        //          alert(XMLHttpRequest.status);
        //          alert(XMLHttpRequest.readyState);
        //          alert(textStatus);
        //     },
        //    complete: function(XMLHttpRequest, textStatus) {
        //         this; // 调用本次AJAX请求时传递的options参数
        //    }
        // });

        // copy start
        var html = "<textarea id='copys'></textarea><input id='copy' name='copy' value='AAAAAAA' type='button' onclick='"
            html += '    var data = {};';
            html += '    data.name = jQuery("#txtproductbrand").text().trim();';
            html += '    data.brand = jQuery("#txtbrand").text().trim();';
            html += '    data.format = jQuery("#drpformat").text().trim();';
            html += '    data.innerPackage = jQuery("#primarypackaging").text().trim();';
            html += '    data.outerPackage = jQuery("#secondarypackaging").text().trim();';
            html += '    data.desc = jQuery("#txtproductdescription").text().trim();';
            html += '    data.claim = jQuery("#txtclaimfeatures").text().trim();';
            html += '   data.barcode = jQuery("#txtbarcode").text().trim();';
            // html += '   data.manucode = jQuery("#txtmanufacturercode").text().trim();';
            html += '    data.extranotes = jQuery("#txtextranotes").text().trim();';
            html += '    if ("Empty" == data.extranotes) {';
            html += '        data.extranotes = "";';
            html += '    }';
            html += '    data.directions = jQuery("#txtdirections").text().trim();';
            html += '    if ("Empty" == data.directions) {';
            html += '        data.directions = "";';
            html += '    }';
            html += '    data.ingredient = jQuery("#txtingredients").text().trim();';
            html += '    if ("Empty" == data.ingredient) {';
            html += '        data.ingredient = "";';
            html += '    }';
            html += '    data.chks = [];';
            html += '    jQuery("#PositioningHtml :checkbox:checked").each(function () {';
            html += '        data.chks.push(jQuery(this).val());';
            html += '    });';
            html += '    console.log(data);';
            html += ' jQuery("#copys").val(JSON.stringify(data));';
            html += ' jQuery("#copys").select();';
            html += ' document.execCommand("copy");';
            html += ";'/>";
        jQuery(".Close").append(html);
        //copy end

    }