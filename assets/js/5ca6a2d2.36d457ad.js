"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4445],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(r),m=i,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var d=2;d<l;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const l={},a=void 0,o={unversionedId:"study/db/NoSQL/Redis",id:"study/db/NoSQL/Redis",title:"Redis",description:"Redis\u662f\u4ec0\u4e48",source:"@site/docs/study/db/NoSQL/Redis.md",sourceDirName:"study/db/NoSQL",slug:"/study/db/NoSQL/Redis",permalink:"/docs/study/db/NoSQL/Redis",draft:!1,tags:[],version:"current",lastUpdatedAt:1681716956,formattedLastUpdatedAt:"2023\u5e744\u670817\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"MongoDB",permalink:"/docs/study/db/NoSQL/MongoDB"},next:{title:"\u7efc\u5408\u6982\u8ff0 (1)",permalink:"/docs/study/db/NoSQL/\u7efc\u5408\u6982\u8ff0 (1)"}},s={},d=[{value:"Redis\u662f\u4ec0\u4e48",id:"redis\u662f\u4ec0\u4e48",level:3},{value:"Redis\u6570\u636e\u7ed3\u6784",id:"redis\u6570\u636e\u7ed3\u6784",level:3},{value:"Redis\u6301\u4e45\u5316",id:"redis\u6301\u4e45\u5316",level:3},{value:"Redis\u4e3b\u4ece",id:"redis\u4e3b\u4ece",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"redis\u662f\u4ec0\u4e48"},"Redis\u662f\u4ec0\u4e48"),(0,i.kt)("p",null,"redis\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u3001\u4f7f\u7528C\u8bed\u8a00\u7f16\u5199\u7684\u3001\u652f\u6301\u7f51\u7edc\u4ea4\u4e92\u7684\u3001\u53ef\u57fa\u4e8e\u5185\u5b58\u4e5f\u53ef\u6301\u4e45\u5316\u7684Key-Value\u6570\u636e\u5e93\u3002",(0,i.kt)("a",{parentName:"p",href:"https://redis.io"},"\u5b98\u7f51"),"\u3002"),(0,i.kt)("p",null,"\u76ee\u524d\uff0cVmware\u5728\u8d44\u52a9\u7740redis\u9879\u76ee\u7684\u5f00\u53d1\u548c\u7ef4\u62a4\u3002"),(0,i.kt)("p",null,"redis\u7684\u4f5c\u8005\uff0c\u4ed6\u53ebSalvatore Sanfilippo\uff0c\u7f51\u540d\u662fantirez\uff0c\u53bb\u4ed6\u7684\u535a\u5ba2\u901b\u901b\uff0c\u5730\u5740\u662fantirez.com\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u53bbfollow\u4ed6\u7684github\uff0c\u5730\u5740\u662f",(0,i.kt)("a",{parentName:"p",href:"http://github.com/antirez"},"http://github.com/antirez"),"\u3002"),(0,i.kt)("p",null,"Redis \u662f K-V \u5b58\u50a8\u7684\u5178\u578b\u4ee3\u8868\uff0c\u5b83\u662f\u4e00\u6b3e\u5f00\u6e90\uff08\u57fa\u4e8e BSD \u8bb8\u53ef\uff09\u7684\u9ad8\u6027\u80fd K-V \u7f13\u5b58\u548c\u5b58\u50a8\u7cfb\u7edf\u3002Redis \u7684 Value \u662f\u5177\u4f53\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5305\u62ec string\u3001hash\u3001list\u3001set\u3001sorted set\u3001bitmap \u548c hyperloglog\uff0c\u6240\u4ee5\u5e38\u5e38\u88ab\u79f0\u4e3a\u6570\u636e\u7ed3\u6784\u670d\u52a1\u5668\u3002"),(0,i.kt)("h3",{id:"redis\u6570\u636e\u7ed3\u6784"},"Redis\u6570\u636e\u7ed3\u6784"),(0,i.kt)("p",null,"redis\u662f\u4e00\u79cd\u9ad8\u7ea7\u7684key:value\u5b58\u50a8\u7cfb\u7edf\uff0c\u5176\u4e2dvalue\u652f\u6301\u4e94\u79cd\u6570\u636e\u7c7b\u578b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5b57\u7b26\u4e32\uff08strings\uff09"),(0,i.kt)("li",{parentName:"ol"},"\u5b57\u7b26\u4e32\u5217\u8868\uff08lists\uff09"),(0,i.kt)("li",{parentName:"ol"},"\u5b57\u7b26\u4e32\u96c6\u5408\uff08sets\uff09"),(0,i.kt)("li",{parentName:"ol"},"\u6709\u5e8f\u5b57\u7b26\u4e32\u96c6\u5408\uff08sorted sets\uff09"),(0,i.kt)("li",{parentName:"ol"},"\u54c8\u5e0c\uff08hashes\uff09",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"hashes\u5b58\u7684\u662f\u5b57\u7b26\u4e32\u548c\u5b57\u7b26\u4e32\u503c\u4e4b\u95f4\u7684\u6620\u5c04\uff0c\u6bd4\u5982\u4e00\u4e2a\u7528\u6237\u8981\u5b58\u50a8\u5176\u5168\u540d\u3001\u59d3\u6c0f\u3001\u5e74\u9f84\u7b49\u7b49\uff0c\u5c31\u5f88\u9002\u5408\u4f7f\u7528\u54c8\u5e0c\u3002")))),(0,i.kt)("p",null,"key\u7684\u547d\u540d\u89c4\u5219\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"key\u4e0d\u8981\u592a\u957f\uff0c\u5c3d\u91cf\u4e0d\u8981\u8d85\u8fc71024\u5b57\u8282\uff0c\u8fd9\u4e0d\u4ec5\u6d88\u8017\u5185\u5b58\uff0c\u800c\u4e14\u4f1a\u964d\u4f4e\u67e5\u627e\u7684\u6548\u7387\uff1b"),(0,i.kt)("li",{parentName:"ol"},"key\u4e5f\u4e0d\u8981\u592a\u77ed\uff0c\u592a\u77ed\u7684\u8bdd\uff0ckey\u7684\u53ef\u8bfb\u6027\u4f1a\u964d\u4f4e\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u4e00\u4e2a\u9879\u76ee\u4e2d\uff0ckey\u6700\u597d\u4f7f\u7528\u7edf\u4e00\u7684\u547d\u540d\u6a21\u5f0f\uff0c\u4f8b\u5982user:10000:passwd\u3002")),(0,i.kt)("h3",{id:"redis\u6301\u4e45\u5316"},"Redis\u6301\u4e45\u5316"),(0,i.kt)("p",null,"redis\u63d0\u4f9b\u4e86\u4e24\u79cd\u6301\u4e45\u5316\u7684\u65b9\u5f0f\uff0c\u5206\u522b\u662fRDB\uff08Redis DataBase\uff09\u548cAOF\uff08Append Only File\uff09\u3002"),(0,i.kt)("p",null,"RDB\uff0c\u7b80\u800c\u8a00\u4e4b\uff0c\u5c31\u662f\u5728\u4e0d\u540c\u7684\u65f6\u95f4\u70b9\uff0c\u5c06redis\u5b58\u50a8\u7684\u6570\u636e\u751f\u6210\u5feb\u7167\u5e76\u5b58\u50a8\u5230\u78c1\u76d8\u7b49\u4ecb\u8d28\u4e0a\uff1b\nAOF\uff0c\u5219\u662f\u6362\u4e86\u4e00\u4e2a\u89d2\u5ea6\u6765\u5b9e\u73b0\u6301\u4e45\u5316\uff0c\u90a3\u5c31\u662f\u5c06redis\u6267\u884c\u8fc7\u7684\u6240\u6709\u5199\u6307\u4ee4\u8bb0\u5f55\u4e0b\u6765\uff0c\u5728\u4e0b\u6b21redis\u91cd\u65b0\u542f\u52a8\u65f6\uff0c\u53ea\u8981\u628a\u8fd9\u4e9b\u5199\u6307\u4ee4\u4ece\u524d\u5230\u540e\u518d\u91cd\u590d\u6267\u884c\u4e00\u904d\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u6570\u636e\u6062\u590d\u4e86\u3002"),(0,i.kt)("p",null,"\u5176\u5b9eRDB\u548cAOF\u4e24\u79cd\u65b9\u5f0f\u4e5f\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5982\u679credis\u91cd\u542f\u7684\u8bdd\uff0c\u5219\u4f1a\u4f18\u5148\u91c7\u7528AOF\u65b9\u5f0f\u6765\u8fdb\u884c\u6570\u636e\u6062\u590d\uff0c\u8fd9\u662f\u56e0\u4e3aAOF\u65b9\u5f0f\u7684\u6570\u636e\u6062\u590d\u5b8c\u6574\u5ea6\u66f4\u9ad8\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709\u6570\u636e\u6301\u4e45\u5316\u7684\u9700\u6c42\uff0c\u4e5f\u5b8c\u5168\u53ef\u4ee5\u5173\u95edRDB\u548cAOF\u65b9\u5f0f\uff0c\u8fd9\u6837\u7684\u8bdd\uff0credis\u5c06\u53d8\u6210\u4e00\u4e2a\u7eaf\u5185\u5b58\u6570\u636e\u5e93\uff0c\u5c31\u50cfmemcache\u4e00\u6837\u3002"),(0,i.kt)("h3",{id:"redis\u4e3b\u4ece"},"Redis\u4e3b\u4ece"),(0,i.kt)("p",null,"\u50cfMySQL\u4e00\u6837\uff0credis\u662f\u652f\u6301\u4e3b\u4ece\u540c\u6b65\u7684\uff0c\u800c\u4e14\u4e5f\u652f\u6301\u4e00\u4e3b\u591a\u4ece\u4ee5\u53ca\u591a\u7ea7\u4ece\u7ed3\u6784\u3002"),(0,i.kt)("p",null,"\u4e3b\u4ece\u7ed3\u6784\uff0c\u4e00\u662f\u4e3a\u4e86\u7eaf\u7cb9\u7684\u5197\u4f59\u5907\u4efd\uff0c\u4e8c\u662f\u4e3a\u4e86\u63d0\u5347\u8bfb\u6027\u80fd\uff0c\u6bd4\u5982\u5f88\u6d88\u8017\u6027\u80fd\u7684SORT\u5c31\u53ef\u4ee5\u7531\u4ece\u670d\u52a1\u5668\u6765\u627f\u62c5\u3002"),(0,i.kt)("p",null,"redis\u7684\u4e3b\u4ece\u540c\u6b65\u662f\u5f02\u6b65\u8fdb\u884c\u7684\uff0c\u8fd9\u610f\u5473\u7740\u4e3b\u4ece\u540c\u6b65\u4e0d\u4f1a\u5f71\u54cd\u4e3b\u903b\u8f91\uff0c\u4e5f\u4e0d\u4f1a\u964d\u4f4eredis\u7684\u5904\u7406\u6027\u80fd\u3002"),(0,i.kt)("p",null,"\u4e3b\u4ece\u67b6\u6784\u4e2d\uff0c\u53ef\u4ee5\u8003\u8651\u5173\u95ed\u4e3b\u670d\u52a1\u5668\u7684\u6570\u636e\u6301\u4e45\u5316\u529f\u80fd\uff0c\u53ea\u8ba9\u4ece\u670d\u52a1\u5668\u8fdb\u884c\u6301\u4e45\u5316\uff0c\u8fd9\u6837\u53ef\u4ee5\u63d0\u9ad8\u4e3b\u670d\u52a1\u5668\u7684\u5904\u7406\u6027\u80fd\u3002"),(0,i.kt)("p",null,"\u5728\u4e3b\u4ece\u67b6\u6784\u4e2d\uff0c\u4ece\u670d\u52a1\u5668\u901a\u5e38\u88ab\u8bbe\u7f6e\u4e3a\u53ea\u8bfb\u6a21\u5f0f\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u4ece\u670d\u52a1\u5668\u7684\u6570\u636e\u88ab\u8bef\u4fee\u6539\u3002\u4f46\u662f\u4ece\u670d\u52a1\u5668\u4ecd\u7136\u53ef\u4ee5\u63a5\u53d7CONFIG\u7b49\u6307\u4ee4\uff0c\u6240\u4ee5\u8fd8\u662f\u4e0d\u5e94\u8be5\u5c06\u4ece\u670d\u52a1\u5668\u76f4\u63a5\u66b4\u9732\u5230\u4e0d\u5b89\u5168\u7684\u7f51\u7edc\u73af\u5883\u4e2d\u3002\u5982\u679c\u5fc5\u987b\u5982\u6b64\uff0c\u90a3\u53ef\u4ee5\u8003\u8651\u7ed9\u91cd\u8981\u6307\u4ee4\u8fdb\u884c\u91cd\u547d\u540d\uff0c\u6765\u907f\u514d\u547d\u4ee4\u88ab\u5916\u4eba\u8bef\u6267\u884c\u3002"))}c.isMDXComponent=!0}}]);