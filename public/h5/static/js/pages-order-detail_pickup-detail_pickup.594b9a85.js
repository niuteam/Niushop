(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-detail_pickup-detail_pickup"],{"09d4":function(t,e,i){"use strict";i.r(e);var a=i("4fd9"),o=i("e544");for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("e69f");var n,r=i("f0c5"),d=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"32324936",null,!1,a["a"],n);e["default"]=d.exports},"4fd9":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={loadingCover:i("790a").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-scroll-view",{staticClass:"detail-container",class:{"safe-area":t.isIphoneX},attrs:{"scroll-y":"true","data-theme":t.themeStyle}},[i("v-uni-view",{staticClass:"status-wrap color-base-bg",style:{backgroundImage:"url("+t.$util.img("upload/uniapp/order/status-wrap-bg.png")+")"}},[i("v-uni-view",{staticClass:"order-status-left"},[i("v-uni-image",{attrs:{src:t.$util.img(t.action.icon)}}),i("v-uni-view",{staticClass:"status-name"},[i("v-uni-view",[t._v(t._s(t.orderData.order_status_name))])],1)],1)],1),i("v-uni-view",{staticClass:"store-wrap"},[i("v-uni-view",[t.orderData.delivery_store_info?i("v-uni-view",{staticClass:"store-info"},[i("v-uni-view",{staticClass:"icon"},[i("v-uni-view",{staticClass:"iconfont iconmendian"})],1),i("v-uni-view",{staticClass:"store-info-detail"},[i("v-uni-view",{staticClass:"store-name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$util.redirectTo("/otherpages/index/storedetail/storedetail",{store_id:t.orderData.delivery_store_id})}}},[i("v-uni-text",{staticClass:"name font-size-base"},[t._v(t._s(t.orderData.delivery_store_name))]),i("v-uni-text",{staticClass:"iconfont iconright font-size-base"})],1),i("v-uni-view",{staticClass:"detail store-detail"},[t.orderData.delivery_store_info.open_date?i("v-uni-view",{staticClass:"color-tip"},[t._v("营业时间："+t._s(t.orderData.delivery_store_info.open_date))]):t._e(),i("v-uni-view",{staticClass:"color-tip"},[t._v("地址："+t._s(t.orderData.delivery_store_info.full_address))])],1)],1)],1):i("v-uni-view",[i("v-uni-view",{staticClass:"address-empty"},[i("v-uni-view",{staticClass:"color-base-text"},[t._v("当前无自提门店")])],1)],1)],1),i("v-uni-view",{staticClass:"pick-block first-pick-block"},[i("v-uni-view",{staticClass:"font-size-base"},[t._v("预留手机")]),i("v-uni-input",{staticClass:"last-child",attrs:{type:"number",disabled:!0,value:t.orderData.mobile}})],1)],1),t.orderData.pay_status?i("v-uni-view",{staticClass:"pickup-info"},[i("v-uni-view",{staticClass:"pickup-code-info"},[i("v-uni-view",{staticClass:"info"},[i("v-uni-text",{staticClass:"font-size-base"},[i("v-uni-text",{staticClass:"color-tip font-size-base"},[t._v("提货码：")]),t._v(t._s(t.orderData.delivery_code))],1),i("v-uni-text",{staticClass:"copy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$util.copy(t.orderData.delivery_code)}}},[t._v("复制")])],1),i("v-uni-view",{staticClass:"code"},[i("v-uni-image",{attrs:{src:t.$util.img(t.orderData.pickup)}})],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"site-wrap"},[i("v-uni-view",{staticClass:"site-body"},t._l(t.orderData.order_goods,(function(e,a){return i("v-uni-view",{key:a,staticClass:"goods-wrap"},[i("v-uni-view",{staticClass:"goods-img",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toGoodsDetail(e.sku_id)}}},[i("v-uni-image",{attrs:{src:t.$util.img(e.sku_image,{size:"mid"}),mode:"aspectFill"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.imageError(a)}}})],1),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"goods-name",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e.sku_id)}}},[t._v(t._s(e.sku_name))]),i("v-uni-view",{staticClass:"goods-sub-section"},[i("v-uni-view",[i("v-uni-text",{staticClass:"goods-price color-base-text"},[i("v-uni-text",{staticClass:"unit"},[t._v(t._s(t.$lang("common.currencySymbol")))]),i("v-uni-text",[t._v(t._s(e.price))])],1)],1),i("v-uni-view",[i("v-uni-text",[i("v-uni-text",{staticClass:"iconfont iconclose"}),t._v(t._s(e.num))],1)],1)],1),i("v-uni-view",{staticClass:"goods-action"},[t.orderData.is_enable_refund?[0==e.refund_status||-1==e.refund_status?i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goRefund(e.order_goods_id)}}},[i("v-uni-view",{staticClass:"order-box-btn"},[t._v("退款")])],1):i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goRefundDetail(e.order_goods_id)}}},[i("v-uni-view",{staticClass:"order-box-btn"},[t._v("查看退款")])],1)]:t._e()],2)],1)],1)})),1)],1),i("v-uni-view",{staticClass:"order-summary"},[i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("订单编号：")]),i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.order_no))]),i("v-uni-view",{staticClass:"copy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$util.copy(t.orderData.order_no)}}},[t._v("复制")])],1)],1),i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("订单交易号：")]),i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.out_trade_no))])],1)],1),i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("创建时间：")]),i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.$util.timeStampTurnTime(t.orderData.create_time)))])],1)],1),t.orderData.close_time>0?i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("关闭时间：")]),i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.$util.timeStampTurnTime(t.orderData.close_time)))])],1)],1):t._e(),t.orderData.pay_status>0?[i("v-uni-view",{staticClass:"hr"}),i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("支付方式：")]),i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.pay_type_name))])],1)],1),i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("支付时间：")]),i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.$util.timeStampTurnTime(t.orderData.pay_time)))])],1)],1)]:t._e(),t.orderData.delivery_type_name?i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("配送方式：")]),i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.delivery_type_name))])],1)],1):t._e(),""!=t.orderData.buyer_message?i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("买家留言：")]),i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.buyer_message))])],1)],1):t._e(),""!=t.orderData.promotion_type_name?i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("活动优惠：")]),i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.promotion_type_name))])],1)],1):t._e(),i("v-uni-view",{staticClass:"kefu"},[1==t.kefuConfig.open||1==t.kefuConfig.system?i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goConnect.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont iconziyuan"}),i("v-uni-text",[t._v("联系客服")])],1):t._e()],1)],2),i("v-uni-view",{staticClass:"order-money"},[i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("商品金额")]),i("v-uni-view",{staticClass:"box align-right"},[i("v-uni-text",{staticClass:"color-title"},[i("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),t._v(t._s(t.orderData.goods_money))],1)],1)],1),i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("运费")]),i("v-uni-view",{staticClass:"box align-right"},[i("v-uni-text",{staticClass:"color-base-text"},[i("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),i("v-uni-text",[t._v(t._s(t.orderData.delivery_money))])],1)],1)],1),t.orderData.invoice_money>0?i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("税费"),i("v-uni-text",{staticClass:"color-base-text"},[t._v("("+t._s(t.orderData.invoice_rate)+"%)")])],1),i("v-uni-view",{staticClass:"box align-right"},[i("v-uni-text",{staticClass:"color-base-text"},[i("v-uni-text",{staticClass:"operator"},[t._v("+")]),i("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),i("v-uni-text",[t._v(t._s(t.orderData.invoice_money))])],1)],1)],1):t._e(),t.orderData.invoice_delivery_money>0?i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("发票邮寄费")]),i("v-uni-view",{staticClass:"box align-right"},[i("v-uni-text",{staticClass:"color-base-text"},[i("v-uni-text",{staticClass:"operator"},[t._v("+")]),i("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),i("v-uni-text",[t._v(t._s(t.orderData.invoice_delivery_money))])],1)],1)],1):t._e(),0!=t.orderData.adjust_money?i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("订单调整")]),i("v-uni-view",{staticClass:"box align-right"},[i("v-uni-text",{staticClass:"color-base-text"},[t.orderData.adjust_money<0?i("v-uni-text",{staticClass:"operator"},[t._v("-")]):i("v-uni-text",{staticClass:"operator"},[t._v("+")]),i("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),i("v-uni-text",[t._v(t._s(t._f("abs")(t.orderData.adjust_money)))])],1)],1)],1):t._e(),t.orderData.promotion_money>0?i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("优惠")]),i("v-uni-view",{staticClass:"box align-right"},[i("v-uni-text",{staticClass:"color-base-text"},[i("v-uni-text",{staticClass:"operator"},[t._v("-")]),i("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),i("v-uni-text",[t._v(t._s(t.orderData.promotion_money))])],1)],1)],1):t._e(),t.orderData.coupon_money>0?i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("优惠券")]),i("v-uni-view",{staticClass:"box align-right"},[i("v-uni-text",{staticClass:"color-base-text"},[i("v-uni-text",{staticClass:"operator"},[t._v("-")]),i("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),i("v-uni-text",[t._v(t._s(t.orderData.coupon_money))])],1)],1)],1):t._e(),t.orderData.balance_money>0?i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("使用余额")]),i("v-uni-view",{staticClass:"box align-right"},[i("v-uni-text",{staticClass:"color-base-text"},[i("v-uni-text",{staticClass:"operator"},[t._v("-")]),i("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),i("v-uni-text",[t._v(t._s(t.orderData.balance_money))])],1)],1)],1):t._e(),t.orderData.point_money>0?i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-text",{staticClass:"tit"},[t._v("积分抵扣")]),i("v-uni-view",{staticClass:"box align-right"},[i("v-uni-text",{staticClass:"color-base-text"},[i("v-uni-text",{staticClass:"operator"},[t._v("-")]),i("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),i("v-uni-text",[t._v(t._s(t.orderData.point_money))])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"order-cell"},[i("v-uni-view",{staticClass:"box align-right"},[i("v-uni-text",[t._v("实付金额：")]),i("v-uni-text",{staticClass:"color-base-text"},[i("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),i("v-uni-text",{staticClass:"font-size-base"},[t._v(t._s(t.orderData.pay_money))])],1)],1)],1),t.orderData.action.length>0?i("v-uni-view",{staticClass:"order-action",class:{"bottom-safe-area":t.isIphoneX}},[1==t.evaluateConfig.evaluate_status&&1==t.orderData.is_evaluate?i("v-uni-view",{staticClass:"order-box-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.operation("memberOrderEvaluation")}}},[0==t.orderData.evaluate_status?i("v-uni-text",[t._v("评价")]):1==t.orderData.evaluate_status?i("v-uni-text",[t._v("追评")]):t._e()],1):t._e(),t._l(t.orderData.action,(function(e,a){return i("v-uni-view",{key:a,staticClass:"order-box-btn",class:"orderPay"==e.action?"color-base-bg color-base-border":"white",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.operation(e.action)}}},[t._v(t._s(e.title))])}))],2):0==t.orderData.action.length&&1==t.orderData.is_evaluate&&1==t.evaluateConfig.evaluate_status?i("v-uni-view",{staticClass:"order-action",class:{"bottom-safe-area":t.isIphoneX}},[i("v-uni-view",{staticClass:"order-box-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.operation("memberOrderEvaluation")}}},[0==t.orderData.evaluate_status?i("v-uni-text",[t._v("评价")]):1==t.orderData.evaluate_status?i("v-uni-text",[t._v("追评")]):t._e()],1)],1):t._e()],1),i("ns-payment",{ref:"choosePaymentPopup",attrs:{payMoney:t.orderData.pay_money},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.orderPay(t.orderData)}}}),i("loading-cover",{ref:"loadingCover"})],1)},s=[]},"5db7":function(t,e,i){var a=i("7f6d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("3c9430bb",a,!0,{sourceMap:!1,shadowMode:!1})},6413:function(t,e,i){"use strict";var a=i("4ea4");i("b680"),i("acd8"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("d0b2")),s=a(i("c409")),n=a(i("4ef4")),r={mixins:[o.default,s.default],data:function(){return{isIphoneX:!1,orderId:0,orderData:{delivery_store_info:{store_image:""},action:[]},action:{icon:""},kefuConfig:{weapp:"",system:"",open:"",open_url:""},evaluateConfig:{evaluate_audit:1,evaluate_show:0,evaluate_status:1}}},components:{nsPayment:n.default},onLoad:function(t){t.order_id&&(this.orderId=t.order_id)},onShow:function(){this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),uni.getStorageSync("token")?(this.getEvaluateConfig(),this.getOrderData()):this.$util.redirectTo("/pages/login/login/login",{back:"/pages/order/detail_pickup/detail_pickup?order_id="+this.orderId}),this.getKekuConfig()},methods:{goConnect:function(){var t=this;if(uni.getStorageSync("token")){var e={order_id:t.orderData.order_id};return 1==this.kefuConfig.open?(t.$util.redirectTo("/otherpages/webview/webview",{link:encodeURIComponent(this.kefuConfig.open_url)}),!1):1==this.kefuConfig.system?(t.$util.redirectTo("/otherpages/chat/room/room",e),!1):void 0}this.$refs.login.open("/pages/goods/detail/detail?sku_id="+t.orderData.sku_id)},getKekuConfig:function(){var t=this;this.$api.sendRequest({url:"/api/config/servicer",success:function(e){0==e.code&&(t.kefuConfig=e.data,t.kefuConfig.system&&!t.addonIsExit.servicer&&(t.kefuConfig.system=0))}})},goDetail:function(t){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t})},goRefund:function(t){this.$util.redirectTo("/pages/order/refund/refund",{order_goods_id:t})},goRefundDetail:function(t){this.$util.redirectTo("/pages/order/refund_detail/refund_detail",{order_goods_id:t})},navigateBack:function(){this.$util.goBack()},getOrderData:function(){var t=this;this.$api.sendRequest({url:"/api/order/detail",data:{order_id:this.orderId},success:function(e){uni.stopPullDownRefresh(),e.code>=0?(t.$refs.loadingCover&&t.$refs.loadingCover.hide(),t.orderData=e.data,t.action=JSON.parse(e.data.order_status_action),""!=t.orderData.delivery_store_info&&(t.orderData.delivery_store_info=JSON.parse(t.orderData.delivery_store_info))):(t.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){t.$util.redirectTo("/pages/order/list/list")}),1500))},fail:function(e){uni.stopPullDownRefresh(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},onPullDownRefresh:function(){this.getOrderData()},operation:function(t){var e=this;switch(t){case"orderPay":this.openChoosePayment();break;case"orderClose":this.orderClose(this.orderData.order_id,(function(){e.getOrderData()}));break;case"memberTakeDelivery":this.orderDelivery(this.orderData.order_id,(function(){e.getOrderData()}));break;case"trace":this.$util.redirectTo("/pages/order/logistics/logistics",{order_id:this.orderData.order_id});break;case"memberOrderEvaluation":this.$util.redirectTo("/pages/order/evaluate/evaluate",{order_id:this.orderData.order_id});break}},toGoodsDetail:function(t){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t})},imageError:function(t){this.orderData.order_goods[t].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getEvaluateConfig:function(){var t=this;this.$api.sendRequest({url:"/api/goodsevaluate/config",success:function(e){if(0==e.code){var i=e.data;t.evaluateConfig=i}}})},openChoosePayment:function(){this.$refs.choosePaymentPopup.open()}},filters:{abs:function(t){return Math.abs(parseFloat(t)).toFixed(2)}}};e.default=r},"7f6d":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */uni-text[data-v-32324936],\r\nuni-view[data-v-32324936]{font-size:%?24?%}.align-right[data-v-32324936]{text-align:right}.color-text-white[data-v-32324936]{color:#fff}.detail-container[data-v-32324936]{height:100vh}.detail-container .height-box[data-v-32324936]{display:block;padding-bottom:%?100?%}.detail-container.safe-area .height-box[data-v-32324936]{display:block;padding-bottom:%?168?%}.status-wrap[data-v-32324936]{background-size:100% 100%;padding:%?40?%;height:%?180?%}.status-wrap uni-image[data-v-32324936]{width:%?104?%;height:%?86?%;margin-right:%?20?%;margin-top:%?20?%}.status-wrap .order-status-left[data-v-32324936]{display:-webkit-box;display:-webkit-flex;display:flex}.status-wrap > uni-view[data-v-32324936]{text-align:center;color:#fff}.status-wrap .desc[data-v-32324936]{margin-left:%?20?%}.status-wrap .price[data-v-32324936]{font-weight:600}.status-wrap .action-group[data-v-32324936]{text-align:center;padding-top:%?20?%}.status-wrap .action-group .action-btn[data-v-32324936]{line-height:1;padding:%?16?% %?50?%;display:inline-block;-webkit-border-radius:%?32?%;border-radius:%?32?%;background:#fff;-webkit-box-shadow:0 0 %?14?% hsla(0,0%,62%,.6);box-shadow:0 0 %?14?% hsla(0,0%,62%,.6)}.address-wrap[data-v-32324936]{margin:%?20?% %?30?%;padding:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff;position:relative;min-height:%?100?%;margin-top:%?-69?%}.address-wrap .icon[data-v-32324936]{position:absolute;top:%?20?%;margin-right:%?20?%}.address-wrap .icon uni-image[data-v-32324936]{width:%?60?%;height:%?60?%}.address-wrap .icon .iconfont[data-v-32324936]{line-height:%?50?%;font-size:%?28?%}.address-wrap .icon .iconmendian[data-v-32324936]{font-size:%?32?%}.address-wrap .address-info[data-v-32324936]{padding-left:%?40?%}.address-wrap .address-info .info[data-v-32324936]{display:-webkit-box;display:-webkit-flex;display:flex;line-height:1;color:#333}.address-wrap .address-info .detail[data-v-32324936]{line-height:1.3;color:#333;margin-top:%?20?%}.address-wrap .store-info[data-v-32324936]{padding-left:%?100?%}.address-wrap .cell-more[data-v-32324936]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:%?10?%}.address-wrap .cell-more .iconfont[data-v-32324936]{color:#999}.pickup-info[data-v-32324936]{margin:%?20?% %?30?%;padding:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff;position:relative}.pickup-info .pickup-point-info .name[data-v-32324936]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?50?%;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;margin-bottom:10px}.pickup-info .pickup-point-info .name uni-text[data-v-32324936]{line-height:1}.pickup-info .pickup-point-info .name uni-text.mark[data-v-32324936]{font-size:%?20?%;padding:1px %?10?%;border:.5px solid #fff;-webkit-border-radius:%?4?%;border-radius:%?4?%;margin-left:%?10?%}.pickup-info .pickup-point-info .address[data-v-32324936],\r\n.pickup-info .pickup-point-info .time[data-v-32324936],\r\n.pickup-info .pickup-point-info .contact[data-v-32324936]{font-size:%?24?%;line-height:1;margin-top:%?16?%}.pickup-info .pickup-point-info .address .iconfont[data-v-32324936],\r\n.pickup-info .pickup-point-info .time .iconfont[data-v-32324936],\r\n.pickup-info .pickup-point-info .contact .iconfont[data-v-32324936]{color:#999;font-size:%?24?%;line-height:1;margin-right:%?10?%}.pickup-info .hr[data-v-32324936]{border-top:1px dashed #e5e5e5;margin:%?20?% 0}.pickup-info .pickup-code-info .info[data-v-32324936]{text-align:center}.pickup-info .pickup-code-info .code[data-v-32324936]{margin:%?20?% auto 0 auto;width:%?160?%;height:%?160?%}.pickup-info .pickup-code-info .code uni-image[data-v-32324936]{width:100%;height:100%}.pickup-info .pickup-code-info .copy[data-v-32324936]{font-size:%?24?%;display:inline-block;color:#666;background:#f7f7f7;line-height:1;padding:%?6?% %?14?%;margin-left:%?10?%;-webkit-border-radius:%?18?%;border-radius:%?18?%;border:.5px solid #666}.virtual-mobile-wrap[data-v-32324936]{margin:%?20?% %?30?%;padding:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff;position:relative;margin-top:%?-69?%;display:-webkit-box;display:-webkit-flex;display:flex}.virtual-mobile-wrap uni-view[data-v-32324936]:nth-child(2){-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.verify-code-wrap[data-v-32324936]{margin:%?20?% %?30?%;padding:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff;position:relative}.verify-code-wrap .wrap[data-v-32324936]{line-height:1.6}.verify-code-wrap .wrap .copy[data-v-32324936]{font-size:%?24?%;display:inline-block;color:#666;background:#f7f7f7;line-height:1;padding:%?6?% %?14?%;margin-left:%?10?%;-webkit-border-radius:%?18?%;border-radius:%?18?%;border:.5px solid #666}.verify-code-wrap .hr[data-v-32324936]{border-top:1px dashed #e5e5e5;margin:%?20?% 0}.verify-code-wrap .code[data-v-32324936]{margin:0 auto;width:%?200?%;height:%?200?%}.verify-code-wrap .code uni-image[data-v-32324936]{width:100%;height:100%}.site-wrap[data-v-32324936]{margin:%?20?% %?30?%;padding:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff;position:relative}.site-wrap .site-header[data-v-32324936]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.site-wrap .site-header .icondianpu[data-v-32324936]{display:inline-block;line-height:1;margin-right:%?12?%;font-size:%?28?%}.site-wrap .site-body .goods-wrap[data-v-32324936]{margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;position:relative}.site-wrap .site-body .goods-wrap[data-v-32324936]:last-of-type{margin-bottom:0}.site-wrap .site-body .goods-wrap .goods-img[data-v-32324936]{width:%?160?%;height:%?160?%;margin-right:%?20?%}.site-wrap .site-body .goods-wrap .goods-img uni-image[data-v-32324936]{width:100%;height:100%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.site-wrap .site-body .goods-wrap .goods-info[data-v-32324936]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.site-wrap .site-body .goods-wrap .goods-info .goods-name[data-v-32324936]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.5;font-size:%?28?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section[data-v-32324936]{width:100%;line-height:1.3;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?20?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section .goods-price[data-v-32324936]{font-weight:700;font-size:%?20?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section .unit[data-v-32324936]{font-weight:400;font-size:%?24?%;margin-right:%?2?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section uni-view[data-v-32324936]{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:1.3}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section uni-view[data-v-32324936]:last-of-type{text-align:right}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section uni-view:last-of-type .iconfont[data-v-32324936]{line-height:1;font-size:%?24?%}.site-wrap .site-body .goods-wrap .goods-info .goods-action[data-v-32324936]{text-align:right;padding-top:%?20?%}.site-wrap .site-body .goods-wrap .goods-info .goods-action uni-navigator[data-v-32324936]{display:inline-block}.site-wrap .site-body .goods-wrap .goods-info .goods-action .order-box-btn[data-v-32324936]{height:%?48?%!important;line-height:%?48?%!important;font-size:%?24?%!important;display:inline-block;background:#fff;border:.5px solid #999;margin-left:%?10?%;-webkit-box-sizing:content-box;box-sizing:content-box}.order-cell[data-v-32324936]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% 0;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;line-height:%?40?%}.order-cell .tit[data-v-32324936]{text-align:left}.order-cell .box[data-v-32324936]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:0 %?20?%;line-height:inherit}.order-cell .box .textarea[data-v-32324936]{height:%?40?%}.order-cell .iconfont[data-v-32324936]{color:#bbb;font-size:%?28?%}.order-cell .order-pay[data-v-32324936]{padding:0}.order-cell .order-pay uni-text[data-v-32324936]{display:inline-block;margin-left:%?6?%}.order-summary[data-v-32324936]{margin:%?20?% %?30?%;padding:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff;position:relative}.order-summary .order-cell[data-v-32324936]:first-child{margin-top:0}.order-summary .order-cell .tit[data-v-32324936]{font-size:%?28?%;width:%?170?%}.order-summary .order-cell .box[data-v-32324936]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order-summary .order-cell .box uni-text[data-v-32324936]{font-size:%?28?%}.order-summary .order-cell .copy[data-v-32324936]{font-size:%?20?%;display:inline-block;background:#f7f7f7;line-height:1;padding:%?6?% %?10?%;margin-left:%?10?%;-webkit-border-radius:%?18?%;border-radius:%?18?%;border:%?2?% solid #d2d2d2}.order-summary .hr[data-v-32324936]{width:100%;height:%?2?%;background:#f7f7f7;margin-bottom:%?20?%}.order-money[data-v-32324936]{margin:%?20?% %?30?%;padding:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff;position:relative}.order-money .order-cell .tit[data-v-32324936]{font-size:%?28?%}.order-money .order-cell .box[data-v-32324936]{font-weight:600;padding:0}.order-money .order-cell .box uni-text[data-v-32324936]{font-size:%?28?%;font-weight:700}.order-money .order-cell .box .operator[data-v-32324936]{font-size:%?24?%;margin-right:%?6?%}.kefu[data-v-32324936]{margin:%?20?% %?30?%;padding:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff;position:relative;margin:%?30?% 0 %?10?%;border-top:%?2?% solid #f7f7f7;padding-bottom:0;padding-top:%?30?%}.kefu > uni-view[data-v-32324936]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.kefu > uni-view .iconfont[data-v-32324936]{font-weight:700;margin-right:%?10?%;font-size:%?28?%;line-height:1}.kefu uni-button[data-v-32324936]{width:100%;height:100%;border:none;z-index:1;padding:0;margin:0;background:none;height:%?50?%;line-height:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.kefu uni-button[data-v-32324936]::after{border:none!important}.kefu uni-button .iconfont[data-v-32324936]{margin-right:%?10?%}.order-action[data-v-32324936]{text-align:right}.order-action .order-box-btn[data-v-32324936]{margin-right:%?30?%;margin-left:0;font-size:%?24?%;height:%?60?%;line-height:%?60?%;-webkit-box-sizing:content-box;box-sizing:content-box;min-width:%?60?%;text-align:center}.order-action .order-box-btn.color-base-bg[data-v-32324936]{color:#fff}.order-action .order-box-btn[data-v-32324936]:last-child{margin-right:0}.status-name uni-view[data-v-32324936]{font-size:%?32?%;color:#fff;line-height:1;margin-top:%?40?%}.head-nav[data-v-32324936]{width:100%;height:0}.head-nav.active[data-v-32324936]{padding-top:%?40?%}.head-return[data-v-32324936]{height:%?90?%;line-height:%?90?%;color:#fff;font-weight:600;font-size:%?32?%;position:relative;text-align:center}.head-return uni-text[data-v-32324936]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:%?20?%;display:inline-block;margin-right:%?10?%;font-size:%?32?%}.store-detail uni-view[data-v-32324936]{font-size:%?20?%}.store-wrap[data-v-32324936]{margin:%?20?% %?30?%;padding:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff;position:relative;margin-top:%?-76?%}.store-wrap .store-info[data-v-32324936]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:%?50?%;position:relative}.store-wrap .store-info .icon[data-v-32324936]{left:0;position:absolute;top:%?4?%}.store-wrap .store-info .icon .iconfont[data-v-32324936]{line-height:%?50?%;font-size:%?28?%}.store-wrap .store-info .icon .iconmendian[data-v-32324936]{font-size:%?32?%}.store-wrap .store-info .store-name[data-v-32324936]{display:-webkit-box;display:-webkit-flex;display:flex}.store-wrap .store-info .store-name .name[data-v-32324936]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.store-wrap .store-info .store-info-detail[data-v-32324936]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.store-wrap .store-info .store-info-detail .store-detail uni-view[data-v-32324936]{font-size:%?24?%}.store-wrap .store-info .store-info-detail > uni-view[data-v-32324936]:first-of-type{font-size:%?26?%}.store-wrap .store-info .cell-more[data-v-32324936]{margin-left:%?50?%}.pick-block[data-v-32324936]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?20?%;padding-top:%?20?%}.pick-block.first-pick-block[data-v-32324936]{border-top:%?2?% solid #f1f1f1}.pick-block uni-input[data-v-32324936],\r\n.pick-block .last-child[data-v-32324936]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;font-size:%?24?%}.sku[data-v-32324936]{display:-webkit-box;display:-webkit-flex;display:flex;line-height:1;margin-top:%?10?%;margin-bottom:%?10?%}.goods-spec[data-v-32324936]{color:#838383;font-size:%?22?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-box-flex:1;-webkit-flex:1;flex:1}',""]),t.exports=e},d0b2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={methods:{orderPay:function(t){var e=this;0==t.adjust_money?this.$api.sendRequest({url:"/api/order/pay",data:{order_ids:t.order_id},success:function(t){t.code>=0?e.$refs.choosePaymentPopup.getPayInfo(t.data):e.$util.showToast({title:t.message})}}):uni.showModal({title:"提示",content:"商家已将支付金额调整为"+t.pay_money+"元，是否继续支付？",success:function(i){i.confirm&&e.$api.sendRequest({url:"/api/order/pay",data:{order_ids:t.order_id},success:function(t){t.code>=0?e.$refs.choosePaymentPopup.getPayInfo(t.data):e.$util.showToast({title:t.message})}})}})},orderClose:function(t,e){var i=this;uni.showModal({title:"提示",content:"您确定要关闭该订单吗？",success:function(a){a.confirm&&i.$api.sendRequest({url:"/api/order/close",data:{order_id:t},success:function(t){0==t.code?"function"==typeof e&&e():i.$util.showToast({title:"当前订单可能存在拼团，维权等操作，"+t.message+"不可以关闭哦!",duration:2e3})}})}})},orderDelivery:function(t,e){var i=this;uni.showModal({title:"提示",content:"您确定已经收到货物了吗？",success:function(a){a.confirm&&i.$api.sendRequest({url:"/api/order/takedelivery",data:{order_id:t},success:function(t){i.$util.showToast({title:t.message}),"function"==typeof e&&e()}})}})}}};e.default=a},e544:function(t,e,i){"use strict";i.r(e);var a=i("6413"),o=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=o.a},e69f:function(t,e,i){"use strict";var a=i("5db7"),o=i.n(a);o.a}}]);