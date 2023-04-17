"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(r),k=o,d=u["".concat(p,".").concat(k)]||u[k]||s[k]||n;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var m=2;m<n;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},1373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var a=r(7462),o=(r(7294),r(3905));const n={},l=void 0,i={unversionedId:"study/back/mq/MQTT broker",id:"study/back/mq/MQTT broker",title:"MQTT broker",description:"EMQ",source:"@site/docs/study/back/mq/MQTT broker.md",sourceDirName:"study/back/mq",slug:"/study/back/mq/MQTT broker",permalink:"/docs/study/back/mq/MQTT broker",draft:!1,tags:[],version:"current",lastUpdatedAt:1681716956,formattedLastUpdatedAt:"2023\u5e744\u670817\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Kafka",permalink:"/docs/study/back/mq/Kafka"},next:{title:"RocketMQ",permalink:"/docs/study/back/mq/RocketMQ"}},p={},m=[{value:"EMQ",id:"emq",level:3},{value:"Eclipse Mosquitto",id:"eclipse-mosquitto",level:3},{value:"Moquette",id:"moquette",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3}],c={toc:m},u="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"emq"},"EMQ"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.emqx.io/cn/"},"\u5b98\u7f51")),(0,o.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u8bed\u8a00\uff1aErlang/OTP\uff0c\u4e00\u4e2a\u4e0d\u5e38\u89c1\u7684\u8bed\u8a00\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u56fd\u4eba\u5f00\u53d1\uff1b\u53c8\u79f0emqttd\uff1b"),(0,o.kt)("li",{parentName:"ol"})),(0,o.kt)("h3",{id:"eclipse-mosquitto"},"Eclipse Mosquitto"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://mosquitto.org"},"\u5b98\u7f51")),(0,o.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u8bed\u8a00\uff1aC/C++")),(0,o.kt)("h3",{id:"moquette"},"Moquette"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/moquette-io/moquette"},"\u5b98\u7f51")),(0,o.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u8bed\u8a00\uff1aJava"),(0,o.kt)("li",{parentName:"ol"},"\u636e\u5927\u4f6c\u8bf4\u8fd9\u5c31\u662f\u4e00\u4e2a\u73a9\u5177\u9879\u76ee\uff0c\u4f46\u662f\u57fa\u4e8eJava\u5f00\u6e90\u7684\u5e76\u4e0d\u591a\uff0c\u4e14\u7f51\u4e0a\u5f88\u591a\u662f\u57fa\u4e8e\u4ed6\u5f00\u53d1\u51fa\u6765\u7684\uff1b"),(0,o.kt)("li",{parentName:"ol"},"0.10\u652f\u6301\u96c6\u7fa4\uff1b0.12\u4e0d\u652f\u6301\u96c6\u7fa4\uff1b")),(0,o.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5f00\u6e90\u7684broker\u6839\u672c\u4e0d\u80fd\u4e0a\u751f\u4ea7\u73af\u5883\uff0c\u53ea\u6709\u5546\u4e1a\u7248\u672c\u7684HiveMQ\u548c\u5546\u4e1a\u7248\u672c\u7684EMQ\u624d\u80fd\u6ee1\u8db3\u9700\u6c42\uff1b","[\u5f85\u9a8c\u8bc1]"),(0,o.kt)("li",{parentName:"ol"})),(0,o.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"activemq-apollo \u5df2\u505c\u6b62\u7ef4\u62a4"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mqtt/mqtt.github.io/wiki/brokers"},"mqtt\u5b98\u65b9\u6574\u7406\u7684\u5f00\u6e90broker\u7b80\u8981\u5217\u8868")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mqtt/mqtt.github.io/wiki/servers"},"mqtt\u5b98\u65b9\u6574\u7406\u7684\u5f00\u6e90broker\u7b80\u8981\u4ecb\u7ecd")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mqtt/mqtt.github.io/wiki/server-support"},"mqtt\u5b98\u65b9\u6574\u7406\u7684\u5f00\u6e90broker\u7279\u6027\u548c\u6027\u80fd\u5bf9\u6bd4")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/cf91f4bea071"},"mqtt broker\u9009\u578b")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"http://www.bewindoweb.com/268.html"},"mqtt broker\u6570\u636e\u7ed3\u6784:\u8ba2\u9605\u6570")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://blog.csdn.net/java060515/article/details/80129549"},"\u5171\u4eab\u884c\u4e1a\u7684\u5206\u5e03\u5f0fMQTT\u8bbe\u8ba1--\u6765\u81ea\u767e\u5ea6\u5f00\u53d1\u7684IOT Hub")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"http://www.bewindoweb.com/261.html"},"\u767e\u5ea6IOT MQTT Broker\u8bbe\u8ba1"))))}s.isMDXComponent=!0}}]);