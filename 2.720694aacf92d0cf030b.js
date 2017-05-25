webpackJsonp([2],{233:function(t,e,n){function i(t){n(334)}var s=n(0)(n(331),n(380),i,"data-v-240829b8",null);t.exports=s.exports},237:function(t,e,n){function i(t){n(243)}var s=n(0)(n(241),n(245),i,null,null);t.exports=s.exports},238:function(t,e,n){function i(t){n(242)}var s=n(0)(n(240),n(244),i,null,null);t.exports=s.exports},240:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{size:{type:Number}}},t.exports=e.default},241:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={props:{flex:{type:Boolean,default:!0},link:{type:Boolean,default:!1}},components:{CIcon:s.default}},t.exports=e.default},242:function(t,e){},243:function(t,e){},244:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"c-col",class:"number"==typeof t.size?"c-col-"+t.size:null},[t._t("default")],2)},staticRenderFns:[]}},245:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-row",class:{"c-row-flex":t.flex}},[t._t("default"),t._v(" "),t.link?n("c-icon",{staticClass:"c-row-link"},[t._v("chevron-up")]):t._e()],2)},staticRenderFns:[]}},246:function(t,e,n){"use strict";function i(t,e){return Math.abs(t.pageX-e.pageX)>Math.abs(t.pageY-e.pageY)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(27),a=!!(0,s.checkOptionsSupported)()&&{passive:!1};e.default={name:"drag",bind:function(t,e){var n=(e.value,e.modifiers),o=n.horizontal,r=n.vertical,l=null,u=void 0;t.addEventListener("touchstart",t._drag_touchstart=function(e){if(!e.touches||1!==e.touches.length)return void(l=null);l={pageX:e.touches[0].pageX,pageY:e.touches[0].pageY};var n=(0,s.createEvent)("dragstart",null,{originalEvent:e});if(t.dispatchEvent(n),!n.defaultPrevented){var c=t.ownerDocument;c.addEventListener("touchmove",t._drag_touchmove=function(e){l&&(u||(u=i(e.touches[0],l)?"horizontal":"vertical"),o&&!r&&"vertical"===u||r&&!o&&"horizontal"===u||t.dispatchEvent((0,s.createEvent)("drag",null,{originalEvent:e})))},a),c.addEventListener("touchend",t._drag_touchend=function(e){c.removeEventListener("touchmove",t._drag_touchmove),c.removeEventListener("touchcancel",t._drag_touchcancel),c.removeEventListener("touchend",t._drag_touchend),u&&(u=null),l&&(l=null,t.dispatchEvent((0,s.createEvent)("dragend",null,{originalEvent:e})))},a),c.addEventListener("touchcancel",t._drag_touchend,a)}},a)},unbind:function(t){t.removeEventListener("touchstart",t._drag_touchstart);var e=t.ownerDocument;e.removeEventListener("touchmove",t._drag_touchmove),e.removeEventListener("touchcancel",t._drag_touchend),e.removeEventListener("touchend",t._drag_touchend)}},t.exports=e.default},249:function(t,e,n){function i(t){n(259)}var s=n(0)(n(257),n(264),i,null,null);t.exports=s.exports},251:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(237),a=i(s),o=n(238),r=i(o),l=n(62),u=i(l),c=n(25),d=i(c);e.default={props:{show:{type:Boolean,default:!1},actions:{type:Object,default:function(){return{cancel:{label:"Cancel",class:"primary"},submit:{label:"Submit",class:"primary"}}}}},computed:{_actions:function(){return this.actions&&0!==Object.keys(this.actions).length?this.actions:null}},components:{CRow:a.default,CCol:r.default,CLink:u.default},directives:{tap:d.default}},t.exports=e.default},252:function(t,e){},253:function(t,e,n){function i(t){n(252)}var s=n(0)(n(251),n(255),i,null,null);t.exports=s.exports},255:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"c-modal"},[n("transition",{attrs:{name:"slide-up"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"c-modal-content"},[n("div",{staticClass:"c-modal-body"},[t._t("default")],2),t._v(" "),t._actions?n("c-row",{staticClass:"c-modal-actions"},t._l(t._actions,function(e,i){return n("c-col",{key:i,staticClass:"c-modal-action"},[n("c-link",{directives:[{name:"tap",rawName:"v-tap"}],staticClass:"c-modal-link",class:e.class,nativeOn:{tap:function(e){t.$emit(i)}}},[t._v(t._s(e.label))])],1)})):t._e()],1)])],1)])},staticRenderFns:[]}},257:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(61),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={mixins:[s.default],props:{theme:{type:String,default:"snake"}}},t.exports=e.default},259:function(t,e){},264:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{staticClass:"c-spinner",class:[t.theme,t.size]})},staticRenderFns:[]}},273:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(8),a=i(s),o=n(249),r=i(o),l=n(246),u=i(l),c=n(283),d=i(c);e.default={props:{height:{type:Number,default:0},loading:{type:Boolean,default:!1},drained:{type:Boolean,default:!1},infinite:{type:Boolean,default:!1},autoFill:{type:Boolean,default:!0},transition:{type:Boolean,default:!0}},data:function(){return{offset:0,pullState:0,maxHeight:0}},computed:{downGo:function(){return 2===this.pullState},downReady:function(){return 1===this.pullState},downAwaiting:function(){return this.loading&&3===this.pullState},upGo:function(){return!this.infinite&&-2===this.pullState},upReady:function(){return!this.infinite&&-1===this.pullState},upAwaiting:function(){return this.loading&&-3===this.pullState}},watch:{loading:function(t){t||(this.fill(),this.reset())},drained:function(t){t&&(this.update(),this.reset())}},created:function(){this.scroll=(0,d.default)(this.scroll.bind(this),50)},mounted:function(){this.maxScroll=0,this.threshold=this.$refs.indicator.clientHeight,this.fill()},updated:function(){var t=this.$refs.content&&this.$refs.content.clientHeight||0;this.maxHeight!==t&&(this.maxHeight=t,this.maxScroll=Math.max(0,this.maxHeight-this.height))},methods:{reset:function(){var t=this;this.$nextTick(function(){t.offset=0})},fill:function(){var t=this;this.$nextTick(function(){t.update(),t.drained||!t.autoFill||t.maxScroll||t.pullup()})},update:function(){this.maxHeight=this.$refs.content.clientHeight,this.maxScroll=Math.max(0,this.maxHeight-this.height)},dragstart:function(t){var e=t.originalEvent;this.pullState=0,this.startY=e.touches[0].pageY-this.offset},drag:function(t){var e=t.originalEvent;if(!this.infinite||-3!==this.pullState){var n=e.touches[0].pageY-this.startY,i=this.$el.scrollTop;if(n>0&&0===i)e.preventDefault(),e.stopPropagation(),this.dragdown(n);else{var s=i-(this.maxScroll-this.threshold);s>=0&&(n<0&&s>=this.threshold&&(e.preventDefault(),e.stopPropagation()),this.dragup(s))}}},scroll:function(t){this.pullState=0;var e=this.$el.scrollTop-(this.maxScroll-this.threshold);e>=0&&(e>=this.threshold&&(t.preventDefault(),t.stopPropagation()),this.dragup(e,!0))},dragdown:function(t){this.offset=Math.min(this.threshold,t),this.pullState<3&&(this.pullState=this.offset>=this.threshold?2:1)},dragup:function(t,e){this.offset=0,this.pullState>-3&&(this.drained||(this.maxScroll&&(this.pullState=t>=this.threshold&&!e?-2:-1),this.infinite&&-1===this.pullState&&this.pullup()))},dragend:function(t){t.originalEvent;if(!(this.infinite&&this.pullState<0))return-2===this.pullState?void this.pullup():2===this.pullState?void this.pulldown():void this.reset()},pulldown:function(){var t=this;this.pullState=3,this.offset=this.threshold,this.$emit("pulldown"),this.$nextTick(function(){t.loading||t.reset()})},pullup:function(){var t=this;this.pullState=-3,this.offset=0,this.$emit("pullup"),this.$nextTick(function(){t.loading||t.reset()})}},components:{CIcon:a.default,CSpinner:r.default},directives:{drag:u.default}},t.exports=e.default},274:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(25),a=i(s),o=n(246),r=i(o);e.default={props:{transition:{type:Boolean,default:!0}},data:function(){return{offset:0,minOffset:0,maxOffset:0}},mounted:function(){(this.$slots.left||this.$slots.right)&&(this.$el.ownerDocument.addEventListener("touchstart",this.dragAtDoc),this.reset())},methods:{reset:function(){this.minOffset=this.$slots.right?-this.$refs.right.clientWidth:0,this.maxOffset=this.$slots.left?this.$refs.left.clientWidth:0},onTap:function(t){this.$refs.right.contains(t.originalEvent.target)||this.$refs.left.contains(t.originalEvent.target)||(this.offset=0)},dragAtDoc:function(t){this.$el.contains(t.target)||(this.offset=0)},dragstart:function(t){var e=t.originalEvent;this.reset(),this.startX=e.touches[0].pageX-this.offset},drag:function(t){var e=t.originalEvent;e.preventDefault(),e.stopPropagation(),this.offset=Math.min(this.maxOffset,Math.max(this.minOffset,e.touches[0].pageX-this.startX))},dragend:function(t){t.originalEvent;if(this.offset>0){if(this.offset>this.maxOffset/2)return void(this.offset=this.maxOffset)}else if(this.offset<this.minOffset/2)return void(this.offset=this.minOffset);this.offset=0}},directives:{tap:a.default,drag:r.default}},t.exports=e.default},276:function(t,e){},282:function(t,e){},283:function(t,e,n){function i(t,e,n){function i(e){var n=_,i=w;return _=w=void 0,E=e,y=t.apply(i,n)}function c(t){return E=t,b=setTimeout(h,e),S?i(t):y}function d(t){var n=t-C,i=t-E,s=e-n;return $?u(s,x-i):s}function f(t){var n=t-C,i=t-E;return void 0===C||n>=e||n<0||$&&i>=x}function h(){var t=a();if(f(t))return p(t);b=setTimeout(h,d(t))}function p(t){return b=void 0,M&&_?i(t):(_=w=void 0,y)}function v(){void 0!==b&&clearTimeout(b),E=0,_=C=w=b=void 0}function g(){return void 0===b?y:p(a())}function m(){var t=a(),n=f(t);if(_=arguments,w=this,C=t,n){if(void 0===b)return c(C);if($)return b=setTimeout(h,e),i(C)}return void 0===b&&(b=setTimeout(h,e)),y}var _,w,x,y,b,C,E=0,S=!1,$=!1,M=!0;if("function"!=typeof t)throw new TypeError(r);return e=o(e)||0,s(n)&&(S=!!n.leading,$="maxWait"in n,x=$?l(o(n.maxWait)||0,e):x,M="trailing"in n?!!n.trailing:M),m.cancel=v,m.flush=g,m}var s=n(9),a=n(285),o=n(286),r="Expected a function",l=Math.max,u=Math.min;t.exports=i},284:function(t,e,n){function i(t){return"symbol"==typeof t||a(t)&&s(t)==o}var s=n(2),a=n(3),o="[object Symbol]";t.exports=i},285:function(t,e,n){var i=n(10),s=function(){return i.Date.now()};t.exports=s},286:function(t,e,n){function i(t){if("number"==typeof t)return t;if(a(t))return o;if(s(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=s(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=u.test(t);return n||c.test(t)?d(t.slice(2),n?2:8):l.test(t)?o:+t}var s=n(9),a=n(284),o=NaN,r=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;t.exports=i},293:function(t,e,n){function i(t){n(276)}var s=n(0)(n(273),n(296),i,null,null);t.exports=s.exports},294:function(t,e,n){function i(t){n(282)}var s=n(0)(n(274),n(302),i,null,null);t.exports=s.exports},296:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"drag",rawName:"v-drag.vertical",modifiers:{vertical:!0}}],staticClass:"c-scroller",style:{height:t.height+"px"},on:{dragstart:t.dragstart,drag:t.drag,dragend:t.dragend,scroll:t.scroll}},[n("div",{staticClass:"c-scroller-container",style:{height:Math.max(t.maxHeight,t.height)+1+"px"}},[n("div",{ref:"content",staticClass:"c-scroller-content",class:{transition:t.transition},style:{transform:"translate3d(0, "+t.offset+"px, 0)"}},[n("div",{ref:"indicator",staticClass:"c-scroller-indicator c-scroller-indicator-down"},[t._t("pulldown",[t.downReady?n("c-icon",{staticClass:"down-ready"},[t._v("arrow-small-down")]):t.downGo?n("c-icon",{staticClass:"down-go"},[t._v("arrow-small-up")]):t.downAwaiting?n("c-spinner"):t._e()],{downGo:t.downGo,downReady:t.downReady,downAwaiting:t.downAwaiting})],2),t._v(" "),t._t("default"),t._v(" "),n("div",{staticClass:"c-scroller-indicator c-scroller-indicator-up"},[t._t("pullup",[t.upReady?n("c-icon",{staticClass:"up-ready"},[t._v("arrow-small-down")]):t.upGo?n("c-icon",{staticClass:"up-go"},[t._v("arrow-small-up")]):t.upAwaiting?n("c-spinner"):n("span",[t._v("No more.")])],{upGo:t.upGo,upReady:t.upReady,upAwaiting:t.upAwaiting,drained:t.drained})],2)],2)])])},staticRenderFns:[]}},302:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"drag",rawName:"v-drag.horizontal",modifiers:{horizontal:!0}},{name:"tap",rawName:"v-tap"}],staticClass:"c-swiper",class:{transition:t.transition},style:{transform:"translate3d("+t.offset+"px, 0, 0)"},on:{dragstart:t.dragstart,drag:t.drag,dragend:t.dragend,tap:t.onTap}},[n("div",{ref:"left",staticClass:"c-swiper-left"},[t._t("left")],2),t._v(" "),n("div",{staticClass:"c-swiper-body"},[t._t("default")],2),t._v(" "),n("div",{ref:"right",staticClass:"c-swiper-right"},[t._t("right")],2)])},staticRenderFns:[]}},331:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(25),a=i(s),o=n(253),r=i(o),l=n(293),u=i(l),c=n(249),d=i(c),f=n(237),h=i(f),p=n(294),v=i(p),g=n(26),m=i(g);e.default={data:function(){return{show_modal:!1,drained:!0,height:0,id:0}},mapState:["entities","fetching"],mapGetters:["core/authorized","config/transition"],mapActions:["list","delete","config/addToast"],methods:{_delete:function(t){this.id=t,this.show_modal=!0},callback:function(t){this.show_modal=!1,"submit"===t&&this.delete(this.id),delete this.id}},created:function(){this.list()},mounted:function(){this.height=document.documentElement.clientHeight-document.getElementById("header").clientHeight,this.addToast("Pull down to reload"),this.addToast("Swiper left/right to show buttons")},components:{CModal:r.default,CScroller:u.default,CSpinner:d.default,CRow:h.default,CSwiper:v.default,CButton:m.default},directives:{tap:a.default}},t.exports=e.default},334:function(t,e){},380:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("c-modal",{attrs:{show:t.show_modal},on:{cancel:function(e){t.callback("cancel")},submit:function(e){t.callback("submit")}}},[t._v(t._s(t.__("index.confirm")))]),t._v(" "),n("c-scroller",{attrs:{transition:t.transition,height:t.height,loading:t.fetching,drained:t.drained},on:{pulldown:t.list}},t._l(t.entities,function(e){return n("c-row",{key:e.id,attrs:{flex:!1}},[n("c-swiper",[n("c-button",{staticClass:"primary squared",slot:"left"},[t._v(t._s(t.__("index.nothing")))]),t._v(" "),n("article",{staticClass:"padding"},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.content))])]),t._v(" "),t.authorized?n("c-button",{directives:[{name:"tap",rawName:"v-tap"}],staticClass:"warning squared",nativeOn:{tap:function(n){t._delete(e.id)}},slot:"right"},[t._v(t._s(t.__("index.delete")))]):t._e()],1)],1)}))],1)},staticRenderFns:[]}}});
//# sourceMappingURL=2.720694aacf92d0cf030b.js.map