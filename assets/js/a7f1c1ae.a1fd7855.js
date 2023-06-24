"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5584],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,y=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6702:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},l=void 0,c={unversionedId:"study/db/NoSQL/Hbase",id:"study/db/NoSQL/Hbase",title:"Hbase",description:"\u5217\u5f0f\u6570\u636e\u5e93",source:"@site/docs/study/db/NoSQL/Hbase.md",sourceDirName:"study/db/NoSQL",slug:"/study/db/NoSQL/Hbase",permalink:"/docs/study/db/NoSQL/Hbase",draft:!1,tags:[],version:"current",lastUpdatedAt:1687617442,formattedLastUpdatedAt:"2023\u5e746\u670824\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Cassandra",permalink:"/docs/study/db/NoSQL/Cassandra"},next:{title:"Ignite",permalink:"/docs/study/db/NoSQL/Ignite"}},i={},u=[{value:"\u5217\u5f0f\u6570\u636e\u5e93",id:"\u5217\u5f0f\u6570\u636e\u5e93",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u5217\u5f0f\u6570\u636e\u5e93"},"\u5217\u5f0f\u6570\u636e\u5e93"),(0,o.kt)("p",null,"\u987e\u540d\u601d\u4e49\uff0c\u5217\u5f0f\u6570\u636e\u5e93\u5c31\u662f\u6309\u7167\u5217\u6765\u5b58\u50a8\u6570\u636e\u7684\u6570\u636e\u5e93\uff0c\u4e0e\u4e4b\u5bf9\u5e94\u7684\u4f20\u7edf\u5173\u7cfb\u6570\u636e\u5e93\u88ab\u79f0\u4e3a\u201c\u884c\u5f0f\u6570\u636e\u5e93\u201d\uff0c\u56e0\u4e3a\u5173\u7cfb\u6570\u636e\u5e93\u662f\u6309\u7167\u884c\u6765\u5b58\u50a8\u6570\u636e\u7684\u3002"),(0,o.kt)("p",null,"\u5173\u7cfb\u6570\u636e\u5e93\u6309\u7167\u884c\u5f0f\u6765\u5b58\u50a8\u6570\u636e\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u4e2a\u4f18\u52bf\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u540c\u65f6\u8bfb\u53d6\u591a\u4e2a\u5217\u65f6\u6548\u7387\u9ad8\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u5217\u90fd\u662f\u6309\u884c\u5b58\u50a8\u5728\u4e00\u8d77\u7684\uff0c\u4e00\u6b21\u78c1\u76d8\u64cd\u4f5c\u5c31\u80fd\u591f\u628a\u4e00\u884c\u6570\u636e\u4e2d\u7684\u5404\u4e2a\u5217\u90fd\u8bfb\u53d6\u5230\u5185\u5b58\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u80fd\u591f\u4e00\u6b21\u6027\u5b8c\u6210\u5bf9\u4e00\u884c\u4e2d\u7684\u591a\u4e2a\u5217\u7684\u5199\u64cd\u4f5c\uff0c\u4fdd\u8bc1\u4e86\u9488\u5bf9\u884c\u6570\u636e\u5199\u64cd\u4f5c\u7684\u539f\u5b50\u6027\u548c\u4e00\u81f4\u6027\uff1b\u5426\u5219\u5982\u679c\u91c7\u7528\u5217\u5b58\u50a8\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u67d0\u6b21\u5199\u64cd\u4f5c\uff0c\u6709\u7684\u5217\u6210\u529f\u4e86\uff0c\u6709\u7684\u5217\u5931\u8d25\u4e86\uff0c\u5bfc\u81f4\u6570\u636e\u4e0d\u4e00\u81f4\u3002")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u884c\u5f0f\u5b58\u50a8\u7684\u4f18\u52bf\u662f\u5728\u7279\u5b9a\u7684\u4e1a\u52a1\u573a\u666f\u4e0b\u624d\u80fd\u4f53\u73b0\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u8fd9\u6837\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u90a3\u4e48\u884c\u5f0f\u5b58\u50a8\u7684\u4f18\u52bf\u4e5f\u5c06\u4e0d\u590d\u5b58\u5728\uff0c\u751a\u81f3\u6210\u4e3a\u52a3\u52bf\uff0c\u5178\u578b\u7684\u573a\u666f\u5c31\u662f\u6d77\u91cf\u6570\u636e\u8fdb\u884c\u7edf\u8ba1\u3002\u4f8b\u5982\uff0c\u8ba1\u7b97\u67d0\u4e2a\u57ce\u5e02\u4f53\u91cd\u8d85\u91cd\u7684\u4eba\u5458\u6570\u636e\uff0c\u5b9e\u9645\u4e0a\u53ea\u9700\u8981\u8bfb\u53d6\u6bcf\u4e2a\u4eba\u7684\u4f53\u91cd\u8fd9\u4e00\u5217\u5e76\u8fdb\u884c\u7edf\u8ba1\u5373\u53ef\uff0c\u800c\u884c\u5f0f\u5b58\u50a8\u5373\u4f7f\u6700\u7ec8\u53ea\u4f7f\u7528\u4e00\u5217\uff0c\u4e5f\u4f1a\u5c06\u6240\u6709\u884c\u6570\u636e\u90fd\u8bfb\u53d6\u51fa\u6765\u3002\u5982\u679c\u5355\u884c\u7528\u6237\u4fe1\u606f\u6709 1KB\uff0c\u5176\u4e2d\u4f53\u91cd\u53ea\u6709 4 \u4e2a\u5b57\u8282\uff0c\u884c\u5f0f\u5b58\u50a8\u8fd8\u662f\u4f1a\u5c06\u6574\u884c 1KB \u6570\u636e\u5168\u90e8\u8bfb\u53d6\u5230\u5185\u5b58\u4e2d\uff0c\u8fd9\u662f\u660e\u663e\u7684\u6d6a\u8d39\u3002\u800c\u5982\u679c\u91c7\u7528\u5217\u5f0f\u5b58\u50a8\uff0c\u6bcf\u4e2a\u7528\u6237\u53ea\u9700\u8981\u8bfb\u53d6 4 \u5b57\u8282\u7684\u4f53\u91cd\u6570\u636e\u5373\u53ef\uff0cI/O \u5c06\u5927\u5927\u51cf\u5c11\u3002"),(0,o.kt)("p",null,"\u9664\u4e86\u8282\u7701 I/O\uff0c\u5217\u5f0f\u5b58\u50a8\u8fd8\u5177\u5907\u66f4\u9ad8\u7684\u5b58\u50a8\u538b\u7f29\u6bd4\uff0c\u80fd\u591f\u8282\u7701\u66f4\u591a\u7684\u5b58\u50a8\u7a7a\u95f4\u3002\u666e\u901a\u7684\u884c\u5f0f\u6570\u636e\u5e93\u4e00\u822c\u538b\u7f29\u7387\u5728 3:1 \u5230 5:1 \u5de6\u53f3\uff0c\u800c\u5217\u5f0f\u6570\u636e\u5e93\u7684\u538b\u7f29\u7387\u4e00\u822c\u5728 8:1 \u5230 30:1 \u5de6\u53f3\uff0c\u56e0\u4e3a\u5355\u4e2a\u5217\u7684\u6570\u636e\u76f8\u4f3c\u5ea6\u76f8\u6bd4\u884c\u6765\u8bf4\u66f4\u9ad8\uff0c\u80fd\u591f\u8fbe\u5230\u66f4\u9ad8\u7684\u538b\u7f29\u7387\u3002"),(0,o.kt)("p",null,"\u540c\u6837\uff0c\u5982\u679c\u573a\u666f\u53d1\u751f\u53d8\u5316\uff0c\u5217\u5f0f\u5b58\u50a8\u7684\u4f18\u52bf\u53c8\u4f1a\u53d8\u6210\u52a3\u52bf\u3002\u5178\u578b\u7684\u573a\u666f\u662f\u9700\u8981\u9891\u7e41\u5730\u66f4\u65b0\u591a\u4e2a\u5217\u3002\u56e0\u4e3a\u5217\u5f0f\u5b58\u50a8\u5c06\u4e0d\u540c\u5217\u5b58\u50a8\u5728\u78c1\u76d8\u4e0a\u4e0d\u8fde\u7eed\u7684\u7a7a\u95f4\uff0c\u5bfc\u81f4\u66f4\u65b0\u591a\u4e2a\u5217\u65f6\u78c1\u76d8\u662f\u968f\u673a\u5199\u64cd\u4f5c\uff1b\u800c\u884c\u5f0f\u5b58\u50a8\u65f6\u540c\u4e00\u884c\u591a\u4e2a\u5217\u90fd\u5b58\u50a8\u5728\u8fde\u7eed\u7684\u7a7a\u95f4\uff0c\u4e00\u6b21\u78c1\u76d8\u5199\u64cd\u4f5c\u5c31\u53ef\u4ee5\u5b8c\u6210\uff0c\u5217\u5f0f\u5b58\u50a8\u7684\u968f\u673a\u5199\u6548\u7387\u8981\u8fdc\u8fdc\u4f4e\u4e8e\u884c\u5f0f\u5b58\u50a8\u7684\u5199\u6548\u7387\u3002\u6b64\u5916\uff0c\u5217\u5f0f\u5b58\u50a8\u9ad8\u538b\u7f29\u7387\u5728\u66f4\u65b0\u573a\u666f\u4e0b\u4e5f\u4f1a\u6210\u4e3a\u52a3\u52bf\uff0c\u56e0\u4e3a\u66f4\u65b0\u65f6\u9700\u8981\u5c06\u5b58\u50a8\u6570\u636e\u89e3\u538b\u540e\u66f4\u65b0\uff0c\u7136\u540e\u518d\u538b\u7f29\uff0c\u6700\u540e\u5199\u5165\u78c1\u76d8\u3002"),(0,o.kt)("p",null,"\u57fa\u4e8e\u4e0a\u8ff0\u5217\u5f0f\u5b58\u50a8\u7684\u4f18\u7f3a\u70b9\uff0c\u4e00\u822c\u5c06\u5217\u5f0f\u5b58\u50a8\u5e94\u7528\u5728\u79bb\u7ebf\u7684\u5927\u6570\u636e\u5206\u6790\u548c\u7edf\u8ba1\u573a\u666f\u4e2d\uff0c\u56e0\u4e3a\u8fd9\u79cd\u573a\u666f\u4e3b\u8981\u662f\u9488\u5bf9\u90e8\u5206\u5217\u5355\u5217\u8fdb\u884c\u64cd\u4f5c\uff0c\u4e14\u6570\u636e\u5199\u5165\u540e\u5c31\u65e0\u987b\u518d\u66f4\u65b0\u5220\u9664\u3002"))}d.isMDXComponent=!0}}]);