(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/wx"],{"27e5":function(t,i,e){"use strict";var n=e("c774"),o=e.n(n);o.a},"603b":function(t,i,e){"use strict";e.r(i);var n=e("e93b"),o=e("beef");for(var s in o)"default"!==s&&function(t){e.d(i,t,function(){return o[t]})}(s);e("27e5");var a=e("2877"),c=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);i["default"]=c.exports},"91fc":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"9f1e"))},o={components:{uniPopup:n},onReady:function(){var i=this;t.request({url:"https://api.jisuapi.com/news/channel?appkey=b462678ca6c3defb",success:function(t){i.wx_btn=t.data.result}}),t.request({url:"https://api.jisuapi.com/news/get?channel=头条&start=0&num=10&appkey=b462678ca6c3defb",success:function(t){i.wx_detail=t.data.result.list,i.dis="block"}})},data:function(){return{wx_btn:[],wx_detail:[],hei:"100px",dis:"none",shar:"",heis:0,wid:0,ii:0,showPopupBottomShare:!1,bottomData:[{text:"微信",icon:"",name:"wx",fangshi:"WXSceneSession"},{text:"朋友圈",icon:"",name:"wx",fangshi:"WXSenceTimeline"},{text:"QQ",icon:"",name:"qq"},{text:"新浪",icon:"",name:"sina"},{text:"复制",icon:"",name:"copy"},{text:"更多",icon:"",name:"more"}]}},onBackPress:function(){1==this.showPopupBottomShare&&(this.showPopupBottomShare=!1)},onNavigationBarButtonTap:function(i){"聊天"===i.text&&t.showToast({title:"功能尚未实现",icon:"none"}),"我的"===i.text&&t.navigateTo({url:"mydeo"})},onShareAppMessage:function(i){return"button"===i.from&&console.log(i.target),{title:this.wx_detail[this.ii].title,path:this.wx_detail[this.ii].src,imageUrl:this.wx_detail[this.ii].pic,success:function(){t.showToast({title:"分享成功"})},fail:function(){t.showToast({title:"分享失败"})}}},methods:{sc:function(){t.showToast({title:"功能暂未实现",icon:"none"})},who:function(i){var e=this.bottomData[i].fangshi;console.log(i),2!=i&&3!=i||t.showToast({title:"尚不支持",icon:"none"}),4!=i&&5!=i||t.showToast({title:"尚不支持",icon:"none"}),"WXSenceTimeline"==e&&t.share({provider:"weixin",scene:"WXSenceTimeline",type:0,title:this.wx_detail[this.ii].title,summary:this.wx_detail[this.ii].title,href:this.wx_detail[this.ii].src,imageUrl:this.wx_detail[this.ii].pic,fail:function(i){t.showToast({title:"分享失败"})}}),"WXSceneSession"==e&&t.share({provider:"weixin",scene:"WXSceneSession",type:0,title:this.wx_detail[this.ii].title,summary:this.wx_detail[this.ii].title,href:this.wx_detail[this.ii].src,imageUrl:this.wx_detail[this.ii].pic,fail:function(i){t.showToast({title:"分享失败"})}})},hidePopup:function(){this.showPopupBottomShare=!1},wx_details:function(i){var e=this,n=i.target.id;console.log(n),t.request({url:"https://api.jisuapi.com/news/get?channel="+n+"&start=0&num=10&appkey=b462678ca6c3defb",success:function(t){e.wx_detail=t.data.result.list,e.dis="block"}})},ur:function(i){t.setStorage({key:"xq",data:i,success:function(){t.navigateTo({url:"wx_xq"})}})},fx:function(t){this.showPopupBottomShare=!0,this.ii=t}}};i.default=o}).call(this,e("543d")["default"])},beef:function(t,i,e){"use strict";e.r(i);var n=e("91fc"),o=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);i["default"]=o.a},c774:function(t,i,e){},e93b:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})}},[["2c51","common/runtime","common/vendor"]]]);