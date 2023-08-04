"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(r),y=a,f=d["".concat(c,".").concat(y)]||d[y]||p[y]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={},s=void 0,l={unversionedId:"study/db/NoSQL/Cassandra",id:"study/db/NoSQL/Cassandra",title:"Cassandra",description:"\u7b80\u4ecb",source:"@site/docs/study/db/NoSQL/Cassandra.md",sourceDirName:"study/db/NoSQL",slug:"/study/db/NoSQL/Cassandra",permalink:"/docs/study/db/NoSQL/Cassandra",draft:!1,tags:[],version:"current",lastUpdatedAt:1691111432,formattedLastUpdatedAt:"2023\u5e748\u67084\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"TiDB",permalink:"/docs/study/db/NewSQL/TiDB"},next:{title:"Hbase",permalink:"/docs/study/db/NoSQL/Hbase"}},c={},i=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3}],u={toc:i},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"Apache Cassandra \u662f\u4e00\u5957\u5f00\u6e90\u5206\u5e03\u5f0f Key-Value \u5b58\u50a8\u7cfb\u7edf\u3002\u5b83\u6700\u521d\u7531 Facebook \u5f00\u53d1\uff0c\u7528\u4e8e\u50a8\u5b58\u7279\u522b\u5927\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u4e3b\u8981\u7279\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8ecolumn\u7684\u7ed3\u6784\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u9ad8\u4f38\u7f29\u6027")),(0,a.kt)("p",null,"Cassandra \u7684\u4e3b\u8981\u7279\u70b9\u5c31\u662f\u5b83\u4e0d\u662f\u4e00\u4e2a\u6570\u636e\u5e93\uff0c\u800c\u662f\u7531\u4e00\u5806\u6570\u636e\u5e93\u8282\u70b9\u5171\u540c\u6784\u6210\u7684\u4e00\u4e2a\u5206\u5e03\u5f0f\u7f51\u7edc\u670d\u52a1\uff0c\u5bf9 Cassandra \u7684\u4e00\u4e2a\u5199\u64cd\u4f5c\uff0c\u4f1a\u88ab\u590d\u5236\u5230\u5176\u4ed6\u8282\u70b9\u4e0a\u53bb\uff0c\u5bf9 Cassandra \u7684\u8bfb\u64cd\u4f5c\uff0c\u4e5f\u4f1a\u88ab\u8def\u7531\u5230\u67d0\u4e2a\u8282\u70b9\u4e0a\u9762\u53bb\u8bfb\u53d6\u3002\u5bf9\u4e8e\u4e00\u4e2a Cassandra \u7fa4\u96c6\u6765\u8bf4\uff0c\u6269\u5c55\u6027\u80fd \u662f\u6bd4\u8f83\u7b80\u5355\u7684\u4e8b\u60c5\uff0c\u53ea\u7ba1\u5728\u7fa4\u96c6\u91cc\u9762\u6dfb\u52a0\u8282\u70b9\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,a.kt)("p",null,"Cassandra \u662f\u4e00\u4e2a\u6df7\u5408\u578b\u7684\u975e\u5173\u7cfb\u7684\u6570\u636e\u5e93\uff0c\u7c7b\u4f3c\u4e8e Google \u7684 BigTable\u3002\u5176\u4e3b\u8981\u529f\u80fd\u6bd4 Dynomite\uff08\u5206\u5e03\u5f0f\u7684 Key-Value \u5b58 \u50a8\u7cfb\u7edf\uff09\u66f4\u4e30\u5bcc\uff0c\u4f46\u652f\u6301\u5ea6\u5374\u4e0d\u5982\u6587\u6863\u5b58\u50a8 MongoDB\uff08\u4ecb\u4e8e\u5173\u7cfb\u6570\u636e\u5e93\u548c\u975e\u5173\u7cfb\u6570\u636e\u5e93\u4e4b\u95f4\u7684\u5f00\u6e90\u4ea7\u54c1\uff0c\u662f\u975e\u5173\u7cfb\u6570\u636e\u5e93\u5f53\u4e2d\u529f\u80fd\u6700\u4e30\u5bcc\uff0c\u6700\u50cf\u5173\u7cfb\u6570\u636e\u5e93 \u7684\u3002\u652f\u6301\u7684\u6570\u636e\u7ed3\u6784\u975e\u5e38\u677e\u6563\uff0c\u662f\u7c7b\u4f3c json \u7684 bjson \u683c\u5f0f\uff0c\u56e0\u6b64\u53ef\u4ee5\u5b58\u50a8\u6bd4\u8f83\u590d\u6742\u7684\u6570\u636e\u7c7b\u578b\u3002\uff09Cassandra \u6700\u521d\u7531 Facebook \u5f00\u53d1\uff0c\u540e\u8f6c\u53d8\u6210\u4e86\u5f00\u6e90\u9879\u76ee\u3002\u5b83\u662f\u4e00\u4e2a\u7f51\u7edc\u793e\u4ea4\u4e91\u8ba1\u7b97\u65b9\u9762\u7406\u60f3\u7684\u6570\u636e\u5e93\u3002\u4ee5 Amazon \u4e13\u6709\u7684\u5b8c\u5168\u5206\u5e03\u5f0f\u7684 Dynamo \u4e3a\u57fa\u7840\uff0c\u7ed3\u5408\u4e86 Google BigTable \u57fa\u4e8e\u5217\u65cf\uff08Column Family\uff09\u7684\u6570\u636e\u6a21\u578b\u3002P2P \u53bb\u4e2d\u5fc3\u5316\u7684\u5b58\u50a8\u3002\u5f88\u591a\u65b9\u9762\u90fd\u53ef\u4ee5\u79f0\u4e4b\u4e3a Dynamo 2.0\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.cassandra.com.cn/"},"\u4e2d\u6587\u5b98\u7f51\u5730\u5740")))}p.isMDXComponent=!0}}]);