(function(t){function e(e){for(var o,a,s=e[0],r=e[1],c=e[2],h=0,p=[];h<s.length;h++)a=s[h],i[a]&&p.push(i[a][0]),i[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],o=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(o=!1)}o&&(l.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},l=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=r;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),i=n.n(o);i.a},"07ef":function(t,e,n){"use strict";var o=n("31d1"),i=n.n(o);i.a},"1c00":function(t,e,n){},"30ff":function(t,e,n){},"31d1":function(t,e,n){},"3ba6":function(t,e,n){"use strict";var o=n("1c00"),i=n.n(o);i.a},5158:function(t,e,n){"use strict";var o=n("30ff"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"content",attrs:{id:"content"}},[o("img",{attrs:{alt:"Vue logo",src:n("cf05"),id:"vue-logo"}}),o("h1",{attrs:{id:"welcome"}},[t._v("Welcome")]),o("p",[t._v("This is a demonstration of a walkthrough Vue component created by Matthew Underwood.")]),o("p",[t._v("This component includes an alternate implementation for Safari. It will work, but it won't be as attractive.")]),o("a",{attrs:{href:"https://github.com/munderwoods/vue-walkthrough",target:"_blank"}},[t._v("GitHub Repo")]),o("br"),o("button",{on:{click:function(e){return t.start("tour")}}},[t._v("Begin Demonstration")]),o("br"),o("button",{attrs:{id:"button2"},on:{click:function(e){return t.start("tour2")}}},[t._v("Begin Part 2")]),o("br"),o("br"),o("br"),o("input",{attrs:{type:"checkbox",id:"checkbox"}}),o("br"),o("br"),o("p",{staticClass:"animation",attrs:{id:"animation"},on:{mouseover:t.animate}},[t._v(t._s(t.active?"I'm quite a bit larger.":"I'm small."))]),o("p",{staticClass:"bottom",attrs:{id:"bottom"}},[t._v("Bottom")])]),o("Tour"),o("Tour2")],1)},l=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Walkthrough",{attrs:{steps:t.steps,stepCount:t.steps.length,startPath:t.startPath,name:t.name,instructionStyle:t.instructionStyle,buttonStyle:t.buttonStyle,defaultPad:t.defaultPad}})},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"walkthrough"},[t._l(t.steps,function(e,o){return t.stepNumber===o+1?n("Step",{key:o,attrs:{windowHeight:t.windowHeight,step:e,final:t.stepCount===t.stepNumber,instructionStyle:t.instructionStyle,buttonStyle:t.buttonStyle,defaultPad:t.defaultPad},on:{cancel:t.cancel}}):t._e()}),n("Callout",{attrs:{showCallout:t.started,elementBox:{top:t.elementBox.top,left:t.elementBox.left,right:t.elementBox.right,bottom:t.elementBox.bottom},windowHeight:t.windowHeight,windowWidth:t.windowWidth,interactive:t.stepNumber>0&&t.steps[t.stepNumber-1].interactive}})],2)},c=[],u=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"step"},[t.showInstruction?n("div",{staticClass:"body",class:t.windowHeight-t.elementBox.bottom>=140?"":"high"},[n("div",{staticClass:"instruction",style:t.instructionStyle},[n("div",{staticClass:"instruction-text"},[t._v("\n          "+t._s(this.step.text)+"\n\t\t\t\t")]),n("div",{staticClass:"buttons"},["next"===t.step.completion.type||t.final?n("button",{style:t.buttonStyle,on:{click:t.incrementWalkthrough}},[t._v(t._s(t.final?"Finish":"Next")+"\n\t\t\t\t")]):t._e(),t.final?t._e():n("button",{style:t.buttonStyle,on:{click:t.cancel}},[t._v("Close Guide")])])])]):t._e()])}),h=[],p=(n("ac6a"),{props:["step","step.completion","final","windowHeight","instructionStyle","buttonStyle","defaultPad"],components:{},data:function(){return{showInstruction:!1,element:null,intervalId:null,scroll:!1,elementBox:null,isScrolling:null,mutationObserver:null,attempts:0}},mounted:function(){var t=this;this.intervalId=setInterval(function(){t.attempts++,t.attempts>15?(clearInterval(t.intervalId),t.cancel()):(t.element=document.getElementById(t.step.elementId),t.element&&(clearInterval(t.intervalId),window.addEventListener("scroll",t.scrollDisplayTimeout,!1),window.addEventListener("resize",t.cancel),window.scrollTo({top:t.element.offsetTop-t.defaultPad-(t.step.pad?t.step.pad:0),behavior:"smooth"}),window.setTimeout(function(){t.scroll||t.display()},100)))},600)},methods:{setBox:function(){this.element&&(this.elementBox=this.element.getBoundingClientRect(),this.$eventBus.$emit("set_element_box",this.elementBox))},scrollDisplayTimeout:function(){var t=this;this.scroll=!0,window.clearTimeout(this.isScrolling),this.isScrolling=setTimeout(function(){t.element&&(t.display(),t.scroll=!1)},66)},display:function(){var t=this;this.mutationObserver=new MutationObserver(function(e){e.forEach(function(e){t.setBox()})}),this.mutationObserver.observe(this.element,{attributes:!0,characterData:!0,childList:!0,subtree:!0,attributeOldValue:!0,characterDataOldValue:!0}),this.setBox(),this.showInstruction=!0,this.element.focus(),"click"===this.step.completion.type?this.element.addEventListener("click",this.incrementWalkthrough):"event"===this.step.completion.type?this.$eventBus.$on(this.step.completion.payload,this.incrementWalkthrough):"time"===this.step.completion.type&&setTimeout(this.incrementWalkthrough,this.step.completion.payload)},incrementWalkthrough:function(){this.cleanup(),this.$eventBus.$emit("increment_walkthrough")},cancel:function(){this.$emit("cancel")},cleanup:function(){this.mutationObserver.disconnect(),this.$eventBus.$emit("clear_element_box"),"click"===this.step.completion.type?this.element.removeEventListener("click",this.incrementWalkthrough):"event"===this.step.completion.type&&this.$eventBus.$off(this.step.completion.payload,this.incrementWalkthrough),window.removeEventListener("scroll",this.scrollDisplayTimeout,!1),window.removeEventListener("resize",this.cancel)}},beforeDestroy:function(){this.cleanup(),this.showInstruction=!1,this.element=null,this.intervalId=null}}),d=p,m=(n("3ba6"),n("2877")),f=Object(m["a"])(d,u,h,!1,null,"5d422bc9",null),v=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showCallout?n("div",[t.safari?n("div",{staticClass:"top callout flex-column",style:"height: "+t.elementBox.top+"px;"}):t._e(),t.safari?n("div",{staticClass:"left callout flex-column",style:"top: "+t.elementBox.top+"px; \n        width: "+t.elementBox.left+"px; \n        height: "+(t.elementBox.bottom-t.elementBox.top)+"px;"}):t._e(),t.safari?n("div",{staticClass:"right callout flex-column",style:"top: "+t.elementBox.top+"px; \n        width: "+(t.windowWidth-t.elementBox.right)+"px; \n        height: "+(t.elementBox.bottom-t.elementBox.top)+"px;"}):t._e(),t.safari?n("div",{staticClass:"bottom callout flex-column",style:"top: "+t.elementBox.bottom+"px; \n        height: "+(t.windowHeight-t.elementBox.bottom)+"px;"}):t._e(),0!==t.elementBox.top||0!==t.elementBox.left||0!==t.elementBox.bottom||0!==t.elementBox.right?n("svg",{attrs:{width:"0",height:"0"}},[n("defs",[n("clipPath",{attrs:{id:"cutout"}},[n("path",{attrs:{d:"\n              M 0.00,0.00 V "+t.windowHeight+" H "+t.windowWidth+" V 0.00 Z \n              M "+(t.elementBox.left-10)+", "+(t.elementBox.top-5)+" a5,5 0 0 1 5 -5 H "+(t.elementBox.right+5)+" a-5,5 0 0 1 5,5 V "+(t.elementBox.bottom+5)+" a5,5 0 0 1 -5,5 H "+(t.elementBox.left-5)+" "+(0!==t.elementBox.top?"a5,5 0 0 1 -5,-5":"")+" Z\n            "}})])])]):t._e(),t.safari?t._e():n("div",{staticClass:"svg-callout"}),0!==t.elementBox.top||0!==t.elementBox.left||0!==t.elementBox.bottom||0!==t.elementBox.right?n("svg",{attrs:{width:"0",height:"0"}},[n("defs",[t.interactive?n("clipPath",{attrs:{id:"blocker"}},[n("path",{attrs:{d:"\n              M 0.00,0.00 V "+t.windowHeight+" H "+t.windowWidth+" V 0.00 Z \n              M 12,12 H "+(t.elementBox.right-t.elementBox.left+12)+" V "+(t.elementBox.bottom-t.elementBox.top+12)+" H 13 Z\n            "}})]):t._e()])]):t._e(),t.elementBox.right-t.elementBox.left!==0?n("div",{staticClass:"svg-callout transparent",style:"\n        top: "+(t.elementBox.top-12)+"px; \n        left: "+(t.elementBox.left-12)+"px; \n        width: "+(t.elementBox.right-t.elementBox.left+22)+"px;\n        height: "+(t.elementBox.bottom-t.elementBox.top+22)+"px;\n      "}):t._e()]):t._e()},g=[],w=(n("c5f6"),{props:{showCallout:Boolean,elementBox:{type:Object},windowHeight:{type:Number,defualt:0},windowWidth:{type:Number,defualt:0},interactive:{type:Boolean,default:!0}},components:{},data:function(){return{safari:!1}},mounted:function(){}}),y=w,x=(n("5158"),Object(m["a"])(y,b,g,!1,null,"d07b37da",null)),B=x.exports,k={props:["steps","stepCount","startPath","name","instructionStyle","buttonStyle","defaultPad"],components:{Step:v,Callout:B},data:function(){return{started:!1,stepNumber:0,windowWidth:null,windowHeight:null,elementBox:{top:0,left:0,bottom:0,right:0},overflow:null}},created:function(){var t=this;this.$eventBus.$on("start_walkthrough",function(e){t.$eventBus.$emit("close_walkthroughs",t.name),t.$eventBus.$on("close_walkthroughs",function(){t.cancel()}),t.$nextTick(function(){t.started||e!==t.name||(t.windowWidth=window.innerWidth,t.windowHeight=window.innerHeight,t.started=!0,t.$eventBus.$on("set_element_box",function(e){t.elementBox=e}),t.$eventBus.$on("clear_element_box",function(){t.elementBox={top:0,left:0,bottom:0,right:0}}),t.startPath&&t.$route.startPath!==t.startPath&&t.$router.push(t.startPath),t.incrementWalkthrough(),t.switchScroll("on"),document.addEventListener("keyup",function(e){"Escape"===e.code&&t.cancel()}))})}),this.$eventBus.$on("increment_walkthrough",function(){t.stepNumber>0&&t.incrementWalkthrough()})},methods:{switchScroll:function(t){if("on"===t){var e=window.getComputedStyle(document.body);this.overflow=e.getPropertyValue("overflow"),document.body.style.overflow="hidden"}else document.body.style.overflow=this.overflow},incrementWalkthrough:function(){this.stepNumber<this.stepCount?this.stepNumber++:(this.switchScroll("off"),this.started=!1,this.stepNumber=0)},startWalkthrough:function(t){this.started||(this.started=!0,this.$eventBus.$emit(t))},cancel:function(){this.switchScroll("off"),this.started=!1,this.stepNumber=0}}},_=k,S=(n("07ef"),Object(m["a"])(_,r,c,!1,null,"0c7c9cde",null)),$=S.exports,P={props:[],components:{Walkthrough:$},data:function(){return{name:"tour",startPath:null,instructionStyle:"background: #0074D9; color: rgb(179, 219, 255);",buttonStyle:"blue",defaultPad:30,steps:[{elementId:"welcome",completion:{type:"next",payload:null},text:"Walkthroughs are data driven, built out of steps you define in JSON. Click Next.",interactive:!1,pad:500},{elementId:"vue-logo",completion:{type:"click",payload:null},text:'Each step consists of an element id that specifies which element on the page to call out, the text that appears here, and a completion requirement. The previous step in this walkthrough had a completion type of "next". This one is "click". That\'s why there\'s no longer a Next button displayed. Click on the highlighted element to continue.',pad:500},{elementId:"welcome",completion:{type:"event",payload:"c_pressed"},text:'Requiring the user to click an element is useful for when navigation through the app is necessary to progress the walkthrough. Another completion type is "event". Using the Vue Event Bus allows you to specify almost anything as a completion requirement. Press "c" on your keyboard to continue.',pad:500},{elementId:"vue-logo",completion:{type:"time",payload:5e3},text:'The final completion type is "time". Please wait five seconds.',pad:500},{elementId:"checkbox",completion:{type:"next",payload:null},text:"The gray mask has a hole cut in it so there's no need to pass events through. You are actually interacting with the underlying elements normally. Try checking the checkbox then click Next.",pad:800},{elementId:"checkbox",completion:{type:"next",payload:null},text:"Try checking the checkbox again. This step is not interactive. This functionality allows for explanatory steps that can't be broken by unwanted user inputs. Click Next.",pad:800,interactive:!1},{elementId:"bottom",completion:{type:"next",payload:null},text:"If there is't enough space to fit the instruction on the bottom of the screen then it's automatically pushed to the top. The highlighted element will also be scrolled into view smoothly. You can define a default scroll offset if you have a persistent nav bar, and a specific scroll offset for each step."},{elementId:"animation",completion:{type:"next",payload:null},text:"The callout listens for mutations on the element that it's highlighting. Mouse over the highlighted element a few times then press Next."},{elementId:"button2",completion:{type:"click",payload:null},text:"Walkthroughs can seamlessly lead into one another. To begin another walkthrough from within this one, click Begin Part 2.",pad:800}]}}},C=P,T=(n("ea93"),Object(m["a"])(C,a,s,!1,null,"ba8b35c0",null)),I=T.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Walkthrough",{attrs:{steps:t.steps,stepCount:t.steps.length,startPath:t.startPath,name:t.name,instructionStyle:t.instructionStyle,buttonStyle:t.buttonStyle,defaultPad:t.defaultPad}})},O=[],E={props:[],components:{Walkthrough:$},data:function(){return{name:"tour2",startPath:null,instructionStyle:"color: #0074D9; background: rgb(179, 219, 255); text-align: center; flex-direction: column; align-items: center; font-family: monospace; text-decoration: underline; border-radius: 30px; padding: 10px; border: 3px solid #0074D9;",buttonStyle:"color: #0074D9; background: rgb(179, 219, 255); border: 1px solid #0074D9; margin: 10px 10px 0 10px; border-radius: 0; font-weight: 100; font-family: monosp",defaultPad:30,steps:[{elementId:"vue-logo",completion:{type:"next",payload:null},text:"Walkthroughs can be styled to integrate into your app.",pad:500},{elementId:"vue-logo",completion:{type:"next",payload:null},text:"The overflow setting on the document body is stored and over-written for the duration of the walkthrough. When you click Finish you will see a scroll bar reappear. This will conclude the demonstration. Thanks.",pad:500}]}}},H=E,N=(n("f9d1"),Object(m["a"])(H,W,O,!1,null,"70bce1c7",null)),j=N.exports,D={name:"app",components:{Tour:I,Tour2:j},data:function(){return{active:!1}},mounted:function(){var t=this;window.addEventListener("keypress",function(e){"c"===String.fromCharCode(e.keyCode)&&t.$eventBus.$emit("c_pressed")})},methods:{animate:function(){this.active=!this.active},start:function(t){this.$eventBus.$emit("start_walkthrough",t)}}},V=D,M=(n("034f"),Object(m["a"])(V,i,l,!1,null,null,null)),L=M.exports;n.d(e,"EventBus",function(){return q}),o["a"].prototype.$eventBus=new o["a"];var q=new o["a"];new o["a"]({render:function(t){return t(L)}}).$mount("#app")},"64a9":function(t,e,n){},a9fe:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},ea93:function(t,e,n){"use strict";var o=n("a9fe"),i=n.n(o);i.a},f9d1:function(t,e,n){"use strict";var o=n("fbe8"),i=n.n(o);i.a},fbe8:function(t,e,n){}});
//# sourceMappingURL=app.d122fc09.js.map