(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/wx"],{"0f84":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"27e5":function(t,e,n){"use strict";var i=n("c774"),o=n.n(i);o.a},"603b":function(t,e,n){"use strict";n.r(e);var i=n("0f84"),o=n("beef");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("27e5");var s=n("2877"),c=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},"91fc":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"9f1e"))},o={components:{uniPopup:i},onReady:function(){var e=this;t.request({url:"https://api.jisuapi.com/news/channel?appkey=b462678ca6c3defb",success:function(t){e.wx_btn=t.data.result}}),t.request({url:"https://api.jisuapi.com/news/get?channel=头条&start=0&num=10&appkey=b462678ca6c3defb",success:function(t){e.wx_detail=t.data.result.list,e.dis="block"}})},data:function(){return{wx_btn:[],wx_detail:[],hei:"100px",dis:"none",shar:"",heis:0,wid:0,ii:0,showPopupBottomShare:!1,bottomData:[{text:"微信",icon:"",name:"wx",fangshi:"WXSceneSession"},{text:"朋友圈",icon:"",name:"wx",fangshi:"WXSenceTimeline"},{text:"QQ",icon:"",name:"qq"},{text:"新浪",icon:"",name:"sina"},{text:"复制",icon:"",name:"copy"},{text:"更多",icon:"",name:"more"}]}},onBackPress:function(){1==this.showPopupBottomShare&&(this.showPopupBottomShare=!1)},onNavigationBarButtonTap:function(e){"聊天"===e.text&&t.showToast({title:"功能尚未实现",icon:"none"}),"我的"===e.text&&t.navigateTo({url:"mydeo"})},methods:{sc:function(){t.showToast({title:"功能暂未实现",icon:"none"})},who:function(e){var n=this,i=this.bottomData[e].fangshi;console.log(e," at pages\\index\\wx.vue:148"),2!=e&&3!=e||t.showToast({title:"尚不支持",icon:"none"}),4!=e&&5!=e||t.showToast({title:"尚不支持",icon:"none"}),t.getStorage({key:"login_info",success:function(e){var o=e.data;null!=o.username&&null!=o.avtarurl&&("WXSenceTimeline"==i&&t.share({provider:"weixin",scene:"WXSenceTimeline",type:0,title:n.wx_detail[n.ii].title,summary:n.wx_detail[n.ii].title,href:n.wx_detail[n.ii].src,imageUrl:n.wx_detail[n.ii].pic,fail:function(e){t.showToast({title:"分享失败"})}}),"WXSceneSession"==i&&t.share({provider:"weixin",scene:"WXSceneSession",type:0,title:n.wx_detail[n.ii].title,summary:n.wx_detail[n.ii].title,href:n.wx_detail[n.ii].src,imageUrl:n.wx_detail[n.ii].pic,fail:function(e){t.showToast({title:"分享失败"})}}))},fail:function(e){t.showModal({title:"登录",content:"登录后才能分享",success:function(e){e.confirm&&t.navigateTo({url:"login"})}})}})},hidePopup:function(){this.showPopupBottomShare=!1},wx_details:function(e){var n=this,i=e.target.id;console.log(i," at pages\\index\\wx.vue:220"),t.request({url:"https://api.jisuapi.com/news/get?channel="+i+"&start=0&num=10&appkey=b462678ca6c3defb",success:function(t){n.wx_detail=t.data.result.list,n.dis="block"}})},ur:function(e){plus.storage.setItem("xq",e),t.navigateTo({url:"wx_xq"})},fx:function(t){this.showPopupBottomShare=!0,this.ii=t}}};e.default=o}).call(this,n("6e42")["default"])},beef:function(t,e,n){"use strict";n.r(e);var i=n("91fc"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},c774:function(t,e,n){}},[["2c51","common/runtime","common/vendor"]]]);