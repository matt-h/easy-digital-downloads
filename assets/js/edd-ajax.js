!function(e){var t={};function d(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=e,d.c=t,d.d=function(e,t,a){d.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},d.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="",d(d.s=61)}([function(e,t){var d=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=d)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,d){var a=d(13),n=d(26);e.exports=d(3)?function(e,t,d){return a.f(e,t,n(1,d))}:function(e,t,d){return e[t]=d,e}},function(e,t,d){e.exports=!d(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=jQuery},function(e,t){var d=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=d)},function(e,t,d){var a=d(21)("wks"),n=d(8),r=d(0).Symbol,o="function"==typeof r;(e.exports=function(e){return a[e]||(a[e]=o&&r[e]||(o?r:n)("Symbol."+e))}).store=a},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var d=0,a=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++d+a).toString(36))}},function(e,t){var d={}.toString;e.exports=function(e){return d.call(e).slice(8,-1)}},function(e,t,d){var a=d(25);e.exports=function(e,t,d){if(a(e),void 0===t)return e;switch(d){case 1:return function(d){return e.call(t,d)};case 2:return function(d,a){return e.call(t,d,a)};case 3:return function(d,a,n){return e.call(t,d,a,n)}}return function(){return e.apply(t,arguments)}}},function(e,t,d){var a=d(0),n=d(2),r=d(15),o=d(8)("src"),i=Function.toString,c=(""+i).split("toString");d(5).inspectSource=function(e){return i.call(e)},(e.exports=function(e,t,d,i){var s="function"==typeof d;s&&(r(d,"name")||n(d,"name",t)),e[t]!==d&&(s&&(r(d,o)||n(d,o,e[t]?""+e[t]:c.join(String(t)))),e===a?e[t]=d:i?e[t]?e[t]=d:n(e,t,d):(delete e[t],n(e,t,d)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[o]||i.call(this)})},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,d){var a=d(18),n=d(33),r=d(32),o=Object.defineProperty;t.f=d(3)?Object.defineProperty:function(e,t,d){if(a(e),t=r(t,!0),a(d),n)try{return o(e,t,d)}catch(e){}if("get"in d||"set"in d)throw TypeError("Accessors not supported!");return"value"in d&&(e[t]=d.value),e}},function(e,t,d){var a=d(12);e.exports=function(e){return Object(a(e))}},function(e,t){var d={}.hasOwnProperty;e.exports=function(e,t){return d.call(e,t)}},function(e,t,d){var a=d(0),n=d(5),r=d(2),o=d(11),i=d(10),c=function(e,t,d){var s,u,l,_,f=e&c.F,p=e&c.G,m=e&c.S,h=e&c.P,v=e&c.B,g=p?a:m?a[t]||(a[t]={}):(a[t]||{}).prototype,y=p?n:n[t]||(n[t]={}),w=y.prototype||(y.prototype={});for(s in p&&(d=t),d)l=((u=!f&&g&&void 0!==g[s])?g:d)[s],_=v&&u?i(l,a):h&&"function"==typeof l?i(Function.call,l):l,g&&o(g,s,l,e&c.U),y[s]!=l&&r(y,s,_),h&&w[s]!=l&&(w[s]=l)};a.core=n,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,d){"use strict";var a=d(16),n=d(31)(5),r=!0;"find"in[]&&Array(1).find(function(){r=!1}),a(a.P+a.F*r,"Array",{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),d(19)("find")},function(e,t,d){var a=d(1);e.exports=function(e){if(!a(e))throw TypeError(e+" is not an object!");return e}},function(e,t,d){var a=d(6)("unscopables"),n=Array.prototype;void 0==n[a]&&d(2)(n,a,{}),e.exports=function(e){n[a][e]=!0}},function(e,t){e.exports=!1},function(e,t,d){var a=d(5),n=d(0),r=n["__core-js_shared__"]||(n["__core-js_shared__"]={});(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:a.version,mode:d(20)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t){var d=Math.ceil,a=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?a:d)(e)}},function(e,t,d){var a=d(22),n=Math.min;e.exports=function(e){return e>0?n(a(e),9007199254740991):0}},function(e,t,d){var a=d(9);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==a(e)?e.split(""):Object(e)}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,d){var a=d(1),n=d(0).document,r=a(n)&&a(n.createElement);e.exports=function(e){return r?n.createElement(e):{}}},function(e,t,d){var a=d(9);e.exports=Array.isArray||function(e){return"Array"==a(e)}},function(e,t,d){var a=d(1),n=d(28),r=d(6)("species");e.exports=function(e){var t;return n(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!n(t.prototype)||(t=void 0),a(t)&&null===(t=t[r])&&(t=void 0)),void 0===t?Array:t}},function(e,t,d){var a=d(29);e.exports=function(e,t){return new(a(e))(t)}},function(e,t,d){var a=d(10),n=d(24),r=d(14),o=d(23),i=d(30);e.exports=function(e,t){var d=1==e,c=2==e,s=3==e,u=4==e,l=6==e,_=5==e||l,f=t||i;return function(t,i,p){for(var m,h,v=r(t),g=n(v),y=a(i,p,3),w=o(g.length),b=0,x=d?f(t,w):c?f(t,0):void 0;w>b;b++)if((_||b in g)&&(h=y(m=g[b],b,v),e))if(d)x[b]=h;else if(h)switch(e){case 3:return!0;case 5:return m;case 6:return b;case 2:x.push(m)}else if(u)return!1;return l?-1:s||u?u:x}}},function(e,t,d){var a=d(1);e.exports=function(e,t){if(!a(e))return e;var d,n;if(t&&"function"==typeof(d=e.toString)&&!a(n=d.call(e)))return n;if("function"==typeof(d=e.valueOf)&&!a(n=d.call(e)))return n;if(!t&&"function"==typeof(d=e.toString)&&!a(n=d.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},function(e,t,d){e.exports=!d(3)&&!d(7)(function(){return 7!=Object.defineProperty(d(27)("div"),"a",{get:function(){return 7}}).a})},,,,function(e,t,d){var a=d(13).f,n=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in n||d(3)&&a(n,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},,function(e,t,d){"use strict";d.r(t),function(e){d.d(t,"recalculate_taxes",function(){return r});d(37),d(17);var a=d(40),n=0;function r(t){if("1"==edd_global_vars.taxes_enabled){var d=e("#edd_cc_address"),a=d.find("#billing_country").val(),r=d.find("#card_address").val(),o=d.find("#card_address_2").val(),i=d.find("#card_city").val(),c=d.find("#card_state").val(),s=d.find("#card_zip").val();t||(t=c);var u={action:"edd_recalculate_taxes",card_address:r,card_address_2:o,card_city:i,card_zip:s,state:t,billing_country:a,nonce:e("#edd-checkout-address-fields-nonce").val()};e("#edd_purchase_submit [type=submit]").after('<span class="edd-loading-ajax edd-recalculate-taxes-loading edd-loading"></span>');var l=++n;return e.ajax({type:"POST",data:u,dataType:"json",url:edd_global_vars.ajaxurl,xhrFields:{withCredentials:!0},success:function(t){if(l===n){e("#edd_checkout_cart_form").replaceWith(t.html),e(".edd_cart_amount").html(t.total);var d=new Object;d.postdata=u,d.response=t,e("body").trigger("edd_taxes_recalculated",[d])}e(".edd-recalculate-taxes-loading").remove()}}).fail(function(t){window.console&&window.console.log&&(console.log(t),l===n&&e("body").trigger("edd_taxes_recalculated",[tax_data]))})}}window.recalculate_taxes=r,window.EDD_Checkout=function(e){var t,d,n,o;function i(d){d.preventDefault();e(this);var a=e("#edd-discount").val(),n=e("#edd-discount-loader");if(""==a||a==edd_global_vars.enter_discount)return!1;var i={action:"edd_apply_discount",code:a,form:e("#edd_purchase_form").serialize()};return e("#edd-discount-error-wrap").html("").hide(),n.show(),e.ajax({type:"POST",data:i,dataType:"json",url:edd_global_vars.ajaxurl,xhrFields:{withCredentials:!0},success:function(d){if(d)if("valid"==d.msg){e(".edd_cart_discount").html(d.html),e(".edd_cart_discount_row").show(),e(".edd_cart_amount").each(function(){e(this).text(d.total),e(this).data("total",d.total_plain)}),e("#edd-discount",o).val(""),r();var a=e("#edd_cc_fields .edd-input, #edd_cc_fields .edd-select,#edd_cc_address .edd-input, #edd_cc_address .edd-select,#edd_payment_mode_select .edd-input, #edd_payment_mode_select .edd-select");"0.00"==d.total_plain?(e("#edd_cc_fields,#edd_cc_address,#edd_payment_mode_select").slideUp(),a.removeAttr("required"),e('input[name="edd-gateway"]').val("manual")):(a.is(".card-address-2")||a.attr("required","required"),e("#edd_cc_fields,#edd_cc_address").slideDown()),t.trigger("edd_discount_applied",[d])}else e("#edd-discount-error-wrap").html('<span class="edd_error">'+d.msg+"</span>"),e("#edd-discount-error-wrap").show(),t.trigger("edd_discount_invalid",[d]);else window.console&&window.console.log&&console.log(d),t.trigger("edd_discount_failed",[d]);n.hide()}}).fail(function(e){window.console&&window.console.log&&console.log(e)}),!1}function c(d){var a={action:"edd_remove_discount",code:e(this).data("code")};return e.ajax({type:"POST",data:a,dataType:"json",url:edd_global_vars.ajaxurl,xhrFields:{withCredentials:!0},success:function(d){var a="0"+edd_global_vars.decimal_separator+"00";e(".edd_cart_amount").each(function(){edd_global_vars.currency_sign+a!=e(this).text()&&a+edd_global_vars.currency_sign!=e(this).text()||window.location.reload(),e(this).text(d.total),e(this).data("total",d.total_plain)}),e(".edd_cart_discount").html(d.html),d.discounts||e(".edd_cart_discount_row").hide(),r(),e("#edd_cc_fields,#edd_cc_address").slideDown(),t.trigger("edd_discount_removed",[d])}}).fail(function(e){window.console&&window.console.log&&console.log(e)}),!1}function s(d){var a=e(this),n=a.val(),r=a.data("key"),o=a.closest(".edd_cart_item").data("download-id"),i=a.parent().find('input[name="edd-cart-download-'+r+'-options"]').val(),c=e("#edd_cc_address"),s={action:"edd_update_quantity",quantity:n,download_id:o,options:i,billing_country:c.find("#billing_country").val(),card_state:c.find("#card_state").val()};return e.ajax({type:"POST",data:s,dataType:"json",url:edd_global_vars.ajaxurl,xhrFields:{withCredentials:!0},success:function(d){e(".edd_cart_subtotal_amount").each(function(){e(this).text(d.subtotal)}),e(".edd_cart_tax_amount").each(function(){e(this).text(d.taxes)}),e(".edd_cart_amount").each(function(){e(this).text(d.total),t.trigger("edd_quantity_updated",[d])})}}).fail(function(e){window.console&&window.console.log&&console.log(e)}),!1}return{init:function(){t=e(document.body),d=e("#edd_purchase_form"),n=e(".edd_cart_amount"),n.text(),o=e("#edd_checkout_form_wrap"),t.on("edd_gateway_loaded",function(e){!function(e){var t=e.find(".card-number"),d=e.find(".card-cvc"),a=e.find(".card-expiry");t.length&&"function"==typeof t.payment&&(t.payment("formatCardNumber"),d.payment("formatCardCVC"),a.payment("formatCardExpiry"))}(d)}),t.on("keyup change",".edd-do-validate .card-number",function(){!function(t){var d=t;d.validateCreditCard(function(t){var n=e(".card-type");null==t.card_type?(n.removeClass().addClass("off card-type"),d.removeClass("valid"),d.addClass("error")):(n.removeClass("off"),n.html(Object(a.a)(t.card_type.name)),n.addClass(t.card_type.name),t.length_valid&&t.luhn_valid?(d.addClass("valid"),d.removeClass("error")):(d.removeClass("valid"),d.addClass("error")))})}(e(this))}),t.on("blur change",".card-name",function(){var t=e(this);t.validateCreditCard(function(d){null!=d.card_type?(t.removeClass("valid").addClass("error"),e("#edd-purchase-button").attr("disabled","disabled")):(t.removeClass("error").addClass("valid"),e("#edd-purchase-button").removeAttr("disabled"))})}),t.on("submit","#edd_payment_mode",function(){if(0==e("#edd-gateway option:selected").val())return alert(edd_global_vars.no_gateway),!1}),t.on("click","#edd_payment_mode_select input",function(){e("#edd_payment_mode_select label.edd-gateway-option-selected").removeClass("edd-gateway-option-selected"),e("#edd_payment_mode_select input:checked").parent().addClass("edd-gateway-option-selected")}),o.on("click",".edd-apply-discount",i),o.on("keypress","#edd-discount",function(e){if("13"==e.keyCode)return!1}),o.on("keyup","#edd-discount",function(e){"13"==e.keyCode&&o.find(".edd-apply-discount").trigger("click")}),t.on("click",".edd_discount_remove",c),t.on("click",".edd_discount_link",function(t){t.preventDefault(),e(".edd_discount_link").parent().hide(),e("#edd-discount-code-wrap").show().find("#edd-discount").focus()}),t.find("#edd-discount-code-wrap").hide(),t.find("#edd_show_discount").show(),t.on("change",".edd-item-quantity",s),t.on("click",".edd-amazon-logout #Logout",function(e){e.preventDefault(),amazon.Login.logout(),window.location=edd_amazon.checkoutUri})},recalculate_taxes:r}}(window.jQuery),window.jQuery(document).ready(EDD_Checkout.init)}.call(this,d(4))},function(e,t,d){"use strict";d.d(t,"a",function(){return a});var a=function(e){var t,d=e;switch(e){case"amex":d="americanexpress",t=32;break;default:t=50}return"\n    <svg\n      width=".concat(t,"\n      height=",32,'\n      class="payment-icon icon-').concat(d,'"\n      role="img"\n    >\n      <use\n        href="#icon-').concat(d,'"\n        xlink:href="#icon-').concat(d,'">\n      </use>\n    </svg>')}},,,,,,,,,,,,,,,,,,,,,function(e,t,d){"use strict";d.r(t),function(e){d(17);var t=d(39);function a(t){e(".edd-cart-ajax").show(),e("#edd_purchase_form_wrap").html('<span class="edd-loading-ajax edd-loading"></span>');var d=e("#edd-gateway-"+t).data(t+"-nonce"),a=edd_scripts.ajaxurl;a.indexOf("?")>0?a+="&":a+="?",a=a+"payment-mode="+t,e.post(a,{action:"edd_load_gateway",edd_payment_mode:t,nonce:d},function(d){e("#edd_purchase_form_wrap").html(d),e(".edd-no-js").hide(),e("body").trigger("edd_gateway_loaded",[t])})}e(document).ready(function(e){if(e(".edd-no-js").hide(),e("a.edd-add-to-cart").addClass("edd-has-js"),e(document.body).on("click.eddRemoveFromCart",".edd-remove-from-cart",function(t){var d=e(this),a=d.data("cart-item"),n=d.data("action"),r=d.data("download-id"),o=d.data("nonce"),i={action:n,cart_item:a,nonce:o};return e.ajax({type:"POST",data:i,dataType:"json",url:edd_scripts.ajaxurl,xhrFields:{withCredentials:!0},success:function(t){if(t.removed){if(parseInt(edd_scripts.position_in_cart,10)===parseInt(a,10)||edd_scripts.has_purchase_links)return window.location=window.location,!1;e(".edd-cart").each(function(){e(this).find("[data-cart-item='"+a+"']").parent().remove()}),e(".edd-cart").each(function(){var t=0;e(this).find("[data-cart-item]").each(function(){e(this).attr("data-cart-item",t),t+=1})}),e("[id^=edd_purchase_"+r+"]").length&&(e("[id^=edd_purchase_"+r+"] .edd_go_to_checkout").hide(),e("[id^=edd_purchase_"+r+"] a.edd-add-to-cart").show().removeAttr("data-edd-loading"),"1"===edd_scripts.quantities_enabled&&e("[id^=edd_purchase_"+r+"] .edd_download_quantity_wrapper").show()),e("span.edd-cart-quantity").text(t.cart_quantity),e(document.body).trigger("edd_quantity_updated",[t.cart_quantity]),edd_scripts.taxes_enabled&&(e(".cart_item.edd_subtotal span").html(t.subtotal),e(".cart_item.edd_cart_tax span").html(t.tax)),e(".cart_item.edd_total span").html(t.total),0===t.cart_quantity&&(e(".cart_item.edd_subtotal,.edd-cart-number-of-items,.cart_item.edd_checkout,.cart_item.edd_cart_tax,.cart_item.edd_total").hide(),e(".edd-cart").each(function(){var t=e(this).parent();t&&(t.addClass("cart-empty"),t.removeClass("cart-not-empty")),e(this).append('<li class="cart_item empty">'+edd_scripts.empty_cart_message+"</li>")})),e(document.body).trigger("edd_cart_item_removed",[t])}}}).fail(function(e){window.console&&window.console.log&&console.log(e)}).done(function(e){}),!1}),e(document.body).on("click.eddAddToCart",".edd-add-to-cart",function(t){t.preventDefault();var d=e(this),a=d.closest("form");d.prop("disabled",!0);d.find(".edd-loading");var n=d.closest("div");d.attr("data-edd-loading","");a=d.parents("form").last();var r=d.data("download-id"),o=d.data("variable-price"),i=d.data("price-mode"),c=d.data("nonce"),s=[],u=!0;if("yes"===o)if(a.find(".edd_price_option_"+r+'[type="hidden"]').length>0)s[0]=e(".edd_price_option_"+r,a).val(),a.find(".edd-submit").data("price")&&a.find(".edd-submit").data("price")>0&&(u=!1);else{if(!a.find(".edd_price_option_"+r+":checked",a).length)return d.removeAttr("data-edd-loading"),alert(edd_scripts.select_option),t.stopPropagation(),d.prop("disabled",!1),!1;a.find(".edd_price_option_"+r+":checked",a).each(function(t){if(s[t]=e(this).val(),!0===u){var d=e(this).data("price");d&&d>0&&(u=!1)}})}else s[0]=r,d.data("price")&&d.data("price")>0&&(u=!1);if(u&&a.find(".edd_action_input").val("add_to_cart"),"straight_to_gateway"===a.find(".edd_action_input").val())return a.submit(),!0;var l={action:d.data("action"),download_id:r,price_ids:s,post_data:e(a).serialize(),nonce:c};return e.ajax({type:"POST",data:l,dataType:"json",url:edd_scripts.ajaxurl,xhrFields:{withCredentials:!0},success:function(t){var c="1"===edd_scripts.redirect_to_checkout,s="1"===a.find("#edd_redirect_to_checkout").val();if(c&&s||!c&&s)window.location=edd_scripts.checkout_page;else{"1"===edd_scripts.taxes_enabled&&(e(".cart_item.edd_subtotal").show(),e(".cart_item.edd_cart_tax").show()),e(".cart_item.edd_total").show(),e(".cart_item.edd_checkout").show(),e(".cart_item.empty").length&&e(".cart_item.empty").hide(),e(".widget_edd_cart_widget .edd-cart").each(function(d){var a=e(this).find(".edd-cart-meta:first");e(t.cart_item).insertBefore(a);var n=e(this).parent();n&&(n.addClass("cart-not-empty"),n.removeClass("cart-empty"))}),"1"===edd_scripts.taxes_enabled&&(e(".edd-cart-meta.edd_subtotal span").html(t.subtotal),e(".edd-cart-meta.edd_cart_tax span").html(t.tax)),e(".edd-cart-meta.edd_total span").html(t.total);e(".edd-cart-item-title",t.cart_item).length;if(e("span.edd-cart-quantity").each(function(){e(this).text(t.cart_quantity),e(document.body).trigger("edd_quantity_updated",[t.cart_quantity])}),"none"===e(".edd-cart-number-of-items").css("display")&&e(".edd-cart-number-of-items").show("slow"),"no"!==o&&"multi"===i||(e("a.edd-add-to-cart",n).toggle(),e(".edd_go_to_checkout",n).css("display","inline-block")),"multi"===i&&d.removeAttr("data-edd-loading"),e(".edd_download_purchase_form").length&&("no"===o||!a.find(".edd_price_option_"+r).is("input:hidden"))){var u=e('.edd_download_purchase_form *[data-download-id="'+r+'"]').parents("form");e("a.edd-add-to-cart",u).hide(),"multi"!==i&&u.find(".edd_download_quantity_wrapper").slideUp(),e(".edd_go_to_checkout",u).show().removeAttr("data-edd-loading")}"incart"!==t&&(e(".edd-cart-added-alert",n).fadeIn(),setTimeout(function(){e(".edd-cart-added-alert",n).fadeOut()},3e3)),d.prop("disabled",!1),e(document.body).trigger("edd_cart_item_added",[t])}}}).fail(function(e){window.console&&window.console.log&&console.log(e)}).done(function(e){}),!1}),e("#edd_checkout_form_wrap").on("click",".edd_checkout_register_login",function(){var t=e(this),d={action:t.data("action"),nonce:t.data("nonce")};return e(".edd-cart-ajax").show(),e.post(edd_scripts.ajaxurl,d,function(t){e("#edd_checkout_login_register").html(edd_scripts.loading),e("#edd_checkout_login_register").html(t),e(".edd-cart-ajax").hide()}),!1}),e(document).on("click","#edd_purchase_form #edd_login_fields input[type=submit]",function(t){t.preventDefault();var d=e(this).val();e(this).val(edd_global_vars.purchase_loading),e(this).after('<span class="edd-loading-ajax edd-loading"></span>');var a={action:"edd_process_checkout_login",edd_ajax:1,edd_user_login:e("#edd_login_fields #edd_user_login").val(),edd_user_pass:e("#edd_login_fields #edd_user_pass").val(),edd_login_nonce:e("#edd_login_nonce").val()};e.post(edd_global_vars.ajaxurl,a,function(t){"success"===e.trim(t)?(e(".edd_errors").remove(),window.location=edd_scripts.checkout_page):(e("#edd_login_fields input[type=submit]").val(d),e(".edd-loading-ajax").remove(),e(".edd_errors").remove(),e("#edd-user-login-submit").before(t))})}),e("select#edd-gateway, input.edd-gateway").change(function(t){var d=e("#edd-gateway option:selected, input.edd-gateway:checked").val();return"0"!==d&&(a(d),!1)}),"1"===edd_scripts.is_checkout){var d=!1,n=!1;e("select#edd-gateway, input.edd-gateway").length&&(d=e("meta[name='edd-chosen-gateway']").attr("content"),n=!0),d||(d=edd_scripts.default_gateway),n?setTimeout(function(){a(d)},200):e("body").trigger("edd_gateway_loaded",[d])}function r(){var d,a=e(this),n="undefined"!=typeof edd_global_vars,r="card_state";"edd_address_country"===e(this).attr("id")&&(r="edd_address_state");var o=document.getElementById(r);if("card_state"!==a.attr("id")&&null!=o){var i=e(this).data("nonce"),c={action:"edd_get_shop_states",country:a.val(),field_name:r,nonce:i};e.ajax({type:"POST",data:c,url:edd_scripts.ajaxurl,xhrFields:{withCredentials:!0},success:function(t){d=n?e("#edd_purchase_form"):a.closest("form");var o='input[name="card_state"], select[name="card_state"], input[name="edd_address_state"], select[name="edd_address_state"]';if("nostates"===e.trim(t)){var i='<input type="text" id="'+r+'" name="card_state" class="card-state edd-input required" value=""/>';d.find(o).replaceWith(i)}else d.find(o).replaceWith(t);n&&e(document.body).trigger("edd_cart_billing_address_updated",[t])}}).fail(function(e){window.console&&window.console.log&&console.log(e)}).done(function(e){n&&Object(t.recalculate_taxes)()})}else n&&Object(t.recalculate_taxes)();return!1}e(document).on("click","#edd_purchase_form #edd_purchase_submit [type=submit]",function(t){var d=document.getElementById("edd_purchase_form");if("function"!=typeof d.checkValidity||!1!==d.checkValidity()){t.preventDefault();var a=e(this).val();e(this).val(edd_global_vars.purchase_loading),e(this).prop("disabled",!0),e(this).after('<span class="edd-loading-ajax edd-loading"></span>'),e.post(edd_global_vars.ajaxurl,e("#edd_purchase_form").serialize()+"&action=edd_process_checkout&edd_ajax=true",function(t){"success"===e.trim(t)?(e(".edd_errors").remove(),e(".edd-error").hide(),e(d).submit()):(e("#edd-purchase-button").val(a),e(".edd-loading-ajax").remove(),e(".edd_errors").remove(),e(".edd-error").hide(),e(edd_global_vars.checkout_error_anchor).before(t),e("#edd-purchase-button").prop("disabled",!1),e(document.body).trigger("edd_checkout_error",[t]))})}}),e(document.body).on("change","#edd_cc_address input.card_state, #edd_cc_address select, #edd_address_country",r),window.update_state_field=r,e(document.body).on("change","#edd_cc_address input[name=card_zip]",function(){"undefined"!=typeof edd_global_vars&&Object(t.recalculate_taxes)()})}),window.edd_load_gateway=a}.call(this,d(4))}]);