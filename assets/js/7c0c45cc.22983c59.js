"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2978],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9210:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},c=void 0,l={unversionedId:"study/back/mq/Kafka",id:"study/back/mq/Kafka",title:"Kafka",description:"\u7b80\u4ecb",source:"@site/docs/study/back/mq/Kafka.md",sourceDirName:"study/back/mq",slug:"/study/back/mq/Kafka",permalink:"/docs/study/back/mq/Kafka",draft:!1,tags:[],version:"current",lastUpdatedAt:1689054522,formattedLastUpdatedAt:"2023\u5e747\u670811\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"pom\u6587\u4ef6\u4e2d\u7684scope\u6807\u7b7e",permalink:"/docs/study/back/maven/pom\u6587\u4ef6\u4e2d\u7684scope\u6807\u7b7e"},next:{title:"MQTT broker",permalink:"/docs/study/back/mq/MQTT broker"}},i={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u5e38\u89c1\u4f7f\u7528\u573a\u666f",id:"\u5e38\u89c1\u4f7f\u7528\u573a\u666f",level:3},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3}],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"kafka \u6700\u65b0\u5b9a\u4e49\u4e3a\uff1a\u5206\u5e03\u5f0f\u6d41\u5f0f\u5e73\u53f0\uff0c\u800c\u4e0d\u662f\u5355\u7eaf\u7684\u6d88\u606f\u7cfb\u7edf\uff0c\u66f4\u5177\u6709\u6301\u4e45\u5316\u3001\u6d41\u5904\u7406\u7684\u7279\u70b9\uff1b\u4e3b\u8981\u5904\u7406\u4e24\u7c7b\u5e94\u7528\uff1a\u5b9e\u65f6\u6d41\u6570\u636e\u7ba1\u9053\u548c\u5b9e\u65f6\u6d41\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,"\u5b9e\u65f6\u6d41\u6570\u636e\u7ba1\u9053\uff1a\u4e3e\u4e2a\u4f8b\u5b50 Kafka+ELK \u5904\u7406\u65e5\u5fd7\uff1b\n\u5b9e\u65f6\u6d41\u5e94\u7528\u7a0b\u5e8f\uff1a\u4e3e\u4e2a\u4f8b\u5b50 Kafka+\u62a5\u8b66\u6a21\u5757 APP\uff1b\n\u6301\u4e45\u5316\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u5b58\u50a8\u7cfb\u7edf\uff0c\u6bcf\u4e2a\u6d88\u8d39\u8005\u5bf9\u6bcf\u4e2a topic \u90fd\u6709\u4e00\u4e2a offset \u6765\u8bb0\u5f55\u4e0a\u6b21\u6d88\u8d39\u7684\u4f4d\u7f6e\uff1b"),(0,a.kt)("h3",{id:"\u5e38\u89c1\u4f7f\u7528\u573a\u666f"},"\u5e38\u89c1\u4f7f\u7528\u573a\u666f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6d88\u606f\uff0c\u53ef\u4ee5\u5ab2\u7f8e ActiveMQ \u548c RabbitMQ\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u7f51\u7ad9\u6d3b\u52a8\u8ddf\u8e2a\uff0c\u6570\u636e>>Kafka>>ELK/Hbase/Hadoop\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5ea6\u91cf\uff0c\u8fd0\u8425\u76d1\u63a7\u6570\u636e\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u65e5\u5fd7\u805a\u5408\uff0cKafka+ELK\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u6d41\u5904\u7406\uff0c\u4ece 0.10 \u5f00\u59cb\uff0cKafka Streams \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u4f46\u529f\u80fd\u5f3a\u5927\u7684\u6d41\u5904\u7406\u5e93\uff1b")),(0,a.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770btopic\u5217\u8868\n./kafka-topics.sh --list --bootstrap-server localhost:9092\n# \u521b\u5efatopic\n./kafka-topics.sh --create --bootstrap-server localhost:9092 --topic xxx\n# \u521b\u5efa\u751f\u4ea7\u8005\n./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic weic\n# \u521b\u5efa\u6d88\u8d39\u8005\n./kafka-console-consumer.sh --bootstrap-server localhost:9092 \\\n--topic weic \\\n--from-beginning\n")))}f.isMDXComponent=!0}}]);