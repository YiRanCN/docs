"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1105],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(r),k=o,m=s["".concat(l,".").concat(k)]||s[k]||u[k]||a;return r?n.createElement(m,p(p({ref:t},d),{},{components:r})):n.createElement(m,p({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8868:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},p=void 0,i={unversionedId:"study/back/Zookeeper",id:"study/back/Zookeeper",title:"Zookeeper",description:"Zookeeper\u6982\u8ff0",source:"@site/docs/study/back/Zookeeper.md",sourceDirName:"study/back",slug:"/study/back/Zookeeper",permalink:"/docs/study/back/Zookeeper",draft:!1,tags:[],version:"current",lastUpdatedAt:1689054522,formattedLastUpdatedAt:"2023\u5e747\u670811\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"studySidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/study/back/"},next:{title:"\u9ad8\u5e76\u53d1API",permalink:"/docs/study/back/\u9ad8\u5e76\u53d1API"}},l={},c=[{value:"Zookeeper\u6982\u8ff0",id:"zookeeper\u6982\u8ff0",level:3},{value:"Zookeeper \u7279\u6027",id:"zookeeper-\u7279\u6027",level:3}],d={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"zookeeper\u6982\u8ff0"},"Zookeeper\u6982\u8ff0"),(0,o.kt)("p",null,"Zookeeper \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u534f\u8c03\u670d\u52a1\u7684\u5f00\u6e90\u6846\u67b6\u3002\u4e3b\u8981\u7528\u6765\u89e3\u51b3\u5206\u5e03\u5f0f\u96c6\u7fa4\u4e2d\u5e94\u7528\u7cfb\u7edf\u7684\u4e00\u81f4\u6027\u95ee\u9898\uff0c\u4f8b\u5982\u600e\u6837\u907f\u514d\u540c\u65f6\u64cd\u4f5c\u540c\u4e00\u6570\u636e\u9020\u6210\u810f\u8bfb\u7684\u95ee\u9898\u3002"),(0,o.kt)("p",null,"ZooKeeper \u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u5c0f\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u3002\u63d0\u4f9b\u57fa\u4e8e\u7c7b\u4f3c\u4e8e\u6587\u4ef6\u7cfb \u7edf\u7684\u76ee\u5f55\u6811\u65b9\u5f0f\u7684\u6570\u636e\u5b58\u50a8\uff0c\u5e76\u4e14\u53ef\u4ee5\u5bf9\u6811\u4e2d\u7684\u8282\u70b9\u8fdb\u884c\u6709\u6548\u7ba1\u7406\u3002\u4ece\u800c\u7528\u6765\u7ef4\u62a4\u548c\u76d1\u63a7\u4f60\u5b58\u50a8\u7684\u6570\u636e\u7684\u72b6\u6001\u53d8\u5316\u3002\u901a\u8fc7\u76d1\u63a7\u8fd9\u4e9b\u6570\u636e\u72b6\u6001\u7684\u53d8\u5316\uff0c\u4ece\u800c\u53ef\u4ee5\u8fbe \u5230\u57fa\u4e8e\u6570\u636e\u7684\u96c6\u7fa4\u7ba1\u7406\u3002\u8bf8\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"\u7edf\u4e00\u547d\u540d\u670d\u52a1"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u5206\u5e03\u5f0f\u914d\u7f6e\u7ba1\u7406"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u5206\u5e03\u5f0f\u6d88\u606f\u961f\u5217"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u5206\u5e03\u5f0f\u9501"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u5206\u5e03\u5f0f\u534f\u8c03"),"\u7b49\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u89e3\u91ca\u6709\u70b9\u62bd\u8c61\uff0c\u7b80\u5355\u6765\u8bf4zookeeper=\u6587\u4ef6\u7cfb\u7edf+\u76d1\u542c\u901a\u77e5\u673a\u5236\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u7cfb\u7edf\uff0cZookeeper\u7ef4\u62a4\u4e00\u4e2a\u7c7b\u4f3c\u6587\u4ef6\u7cfb\u7edf\u7684\u6570\u636e\u7ed3\u6784\uff0c\u6bcf\u4e2a\u5b50\u76ee\u5f55\u9879\u5982 NameService \u90fd\u88ab\u79f0\u4f5c\u4e3a znode(\u76ee\u5f55\u8282\u70b9)\uff0c\u548c\u6587\u4ef6\u7cfb\u7edf\u4e00\u6837\uff0c\u6211\u4eec\u80fd\u591f\u81ea\u7531\u7684\u589e\u52a0\u3001\u5220\u9664znode\uff0c\u5728\u4e00\u4e2aznode\u4e0b\u589e\u52a0\u3001\u5220\u9664\u5b50znode\uff0c\u552f\u4e00\u7684\u4e0d\u540c\u5728\u4e8eznode\u662f\u53ef\u4ee5\u5b58\u50a8\u6570\u636e\u7684\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u76d1\u542c\u901a\u77e5\u673a\u5236\uff0c\u5ba2\u6237\u7aef\u6ce8\u518c\u76d1\u542c\u5b83\u5173\u5fc3\u7684\u76ee\u5f55\u8282\u70b9\uff0c\u5f53\u76ee\u5f55\u8282\u70b9\u53d1\u751f\u53d8\u5316\uff08\u6570\u636e\u6539\u53d8\u3001\u88ab\u5220\u9664\u3001\u5b50\u76ee\u5f55\u8282\u70b9\u589e\u52a0\u5220\u9664\uff09\u65f6\uff0czookeeper\u4f1a\u901a\u77e5\u5ba2\u6237\u7aef\u3002")),(0,o.kt)("h3",{id:"zookeeper-\u7279\u6027"},"Zookeeper \u7279\u6027"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"\u5168\u5c40\u6570\u636e\u4e00\u81f4"),"\uff1a\u6bcf\u4e2a server \u4fdd\u5b58\u4e00\u4efd\u76f8\u540c\u7684\u6570\u636e\u526f\u672c\uff0cclient \u65e0\u8bba\u8fde \u63a5\u5230\u54ea\u4e2a server\uff0c\u5c55\u793a\u7684\u6570\u636e\u90fd\u662f\u4e00\u81f4\u7684\uff0c\u8fd9\u662f\u6700\u91cd\u8981\u7684\u7279\u5f81\uff1b")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"\u53ef\u9760\u6027"),"\uff1a\u5982\u679c\u6d88\u606f\u88ab\u5176\u4e2d\u4e00\u53f0\u670d\u52a1\u5668\u63a5\u53d7\uff0c\u90a3\u4e48\u5c06\u88ab\u6240\u6709\u7684\u670d\u52a1\u5668\u63a5\u53d7\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"\u987a\u5e8f\u6027"),"\uff1a\u5305\u62ec\u5168\u5c40\u6709\u5e8f\u548c\u504f\u5e8f\u4e24\u79cd\uff1a\u5168\u5c40\u6709\u5e8f\u662f\u6307\u5982\u679c\u5728\u4e00\u53f0\u670d\u52a1\u5668\u4e0a \u6d88\u606f a \u5728\u6d88\u606f b \u524d\u53d1\u5e03\uff0c\u5219\u5728\u6240\u6709 Server \u4e0a\u6d88\u606f a \u90fd\u5c06\u5728\u6d88\u606f b \u524d\u88ab \u53d1\u5e03\uff1b\u504f\u5e8f\u662f\u6307\u5982\u679c\u4e00\u4e2a\u6d88\u606f b \u5728\u6d88\u606f a \u540e\u88ab\u540c\u4e00\u4e2a\u53d1\u9001\u8005\u53d1\u5e03\uff0ca \u5fc5\u5c06\u6392\u5728 b \u524d\u9762\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u66f4\u65b0\u539f\u5b50\u6027"),"\uff1a\u4e00\u6b21\u6570\u636e\u66f4\u65b0\u8981\u4e48\u6210\u529f\uff08\u534a\u6570\u4ee5\u4e0a\u8282\u70b9\u6210\u529f\uff09\uff0c\u8981\u4e48\u5931 \u8d25\uff0c\u4e0d\u5b58\u5728\u4e2d\u95f4\u72b6\u6001\uff1b")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"\u5b9e\u65f6\u6027"),"\uff1aZookeeper \u4fdd\u8bc1\u5ba2\u6237\u7aef\u5c06\u5728\u4e00\u4e2a\u65f6\u95f4\u95f4\u9694\u8303\u56f4\u5185\u83b7\u5f97\u670d\u52a1\u5668\u7684\u66f4\u65b0\u4fe1\u606f\uff0c\u6216\u8005\u670d\u52a1\u5668\u5931\u6548\u7684\u4fe1\u606f\u3002"))))}u.isMDXComponent=!0}}]);