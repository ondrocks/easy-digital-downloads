!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}({0:function(e,t){e.exports=jQuery},14:function(e,t,n){(function(e,t){var n={vars:{customer_card_wrap_editable:e("#edit-customer-info .editable"),customer_card_wrap_edit_item:e("#edit-customer-info .edit-item"),user_id:e('input[name="customerinfo[user_id]"]'),state_input:e(':input[name="customerinfo[region]"]')},init:function(){this.edit_customer(),this.add_email(),this.user_search(),this.remove_user(),this.cancel_edit(),this.change_country(),this.delete_checked()},edit_customer:function(){e(document.body).on("click","#edit-customer",function(e){e.preventDefault(),n.vars.customer_card_wrap_editable.hide(),n.vars.customer_card_wrap_edit_item.show().css("display","block")})},add_email:function(){e(document.body).on("click","#add-customer-email",function(t){t.preventDefault();var n=e(this),i=n.parent().parent().parent().parent(),r={edd_action:"customer-add-email",customer_id:i.find('input[name="customer-id"]').val(),email:i.find('input[name="additional-email"]').val(),primary:i.find('input[name="make-additional-primary"]').is(":checked"),_wpnonce:i.find('input[name="add_email_nonce"]').val()};i.parent().find(".notice-container").remove(),i.find(".spinner").css("visibility","visible"),n.attr("disabled",!0),e.post(ajaxurl,r,function(e){setTimeout(function(){!0===e.success?window.location.href=e.redirect:(n.attr("disabled",!1),i.before('<div class="notice-container"><div class="notice notice-error inline"><p>'+e.message+"</p></div></div>"),i.find(".spinner").css("visibility","hidden"))},342)},"json")})},user_search:function(){e(document.body).on("click.eddSelectUser",".edd_user_search_results a",function(t){t.preventDefault();var i=e(this).data("userid");n.vars.user_id.val(i)})},remove_user:function(){e(document.body).on("click","#disconnect-customer",function(t){if(t.preventDefault(),confirm(edd_vars.disconnect_customer)){var n={edd_action:"disconnect-userid",customer_id:e('input[name="customerinfo[id]"]').val(),_wpnonce:e("#edit-customer-info #_wpnonce").val()};e.post(ajaxurl,n,function(e){window.location.href=window.location.href},"json")}})},cancel_edit:function(){e(document.body).on("click","#edd-edit-customer-cancel",function(t){t.preventDefault(),n.vars.customer_card_wrap_edit_item.hide(),n.vars.customer_card_wrap_editable.show(),e(".edd_user_search_results").html("")})},change_country:function(){e('select[name="customerinfo[country]"]').change(function(){var t=e(this),i={action:"edd_get_shop_states",country:t.val(),nonce:t.data("nonce"),field_name:"customerinfo[region]"};return e.post(ajaxurl,i,function(e){console.log(e),"nostates"===e?n.vars.state_input.replaceWith('<input type="text" name="'+i.field_name+'" value="" class="edd-edit-toggles medium-text"/>'):n.vars.state_input.replaceWith(e)}),!1})},delete_checked:function(){e("#edd-customer-delete-confirm").change(function(){var t=e("#edd-customer-delete-records"),n=e("#edd-delete-customer");e(this).prop("checked")?(t.attr("disabled",!1),n.attr("disabled",!1)):(t.attr("disabled",!0),t.prop("checked",!1),n.attr("disabled",!0))})}};t(document).ready(function(e){n.init()})}).call(this,n(0),n(0))}});