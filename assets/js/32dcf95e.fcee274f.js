"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5650],{5680:(t,e,r)=>{r.d(e,{xA:()=>l,yg:()=>f});var o=r(6540);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=o.createContext({}),p=function(t){var e=o.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},l=function(t){var e=p(t.components);return o.createElement(i.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},y=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,i=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),u=p(r),y=n,f=u["".concat(i,".").concat(y)]||u[y]||d[y]||a;return r?o.createElement(f,s(s({ref:e},l),{},{components:r})):o.createElement(f,s({ref:e},l))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,s=new Array(a);s[0]=y;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[u]="string"==typeof t?t:n,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7120:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=r(8168),n=(r(6540),r(5680));const a={},s=void 0,c={unversionedId:"study/db/OLAP/StarRocks",id:"study/db/OLAP/StarRocks",title:"StarRocks",description:"\u80cc\u666f\u4fe1\u606f",source:"@site/docs/study/db/OLAP/StarRocks.md",sourceDirName:"study/db/OLAP",slug:"/study/db/OLAP/StarRocks",permalink:"/docs/study/db/OLAP/StarRocks",draft:!1,tags:[],version:"current",lastUpdatedAt:1715320143,formattedLastUpdatedAt:"2024\u5e745\u670810\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Kylin",permalink:"/docs/study/db/OLAP/Kylin"},next:{title:"\u7efc\u5408\u6982\u8ff0",permalink:"/docs/study/db/SQL/\u7efc\u5408\u6982\u8ff0"}},i={},p=[{value:"\u80cc\u666f\u4fe1\u606f",id:"\u80cc\u666f\u4fe1\u606f",level:4},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:4}],l={toc:p},u="wrapper";function d(t){let{components:e,...r}=t;return(0,n.yg)(u,(0,o.A)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h4",{id:"\u80cc\u666f\u4fe1\u606f"},"\u80cc\u666f\u4fe1\u606f"),(0,n.yg)("p",null,"Doris \u6700\u65e9\u662f\u89e3\u51b3\u767e\u5ea6\u51e4\u5de2\u7edf\u8ba1\u62a5\u8868\u7684\u4e13\u7528\u7cfb\u7edf\uff0c\u968f\u7740\u767e\u5ea6\u4e1a\u52a1\u7684\u98de\u901f\u53d1\u5c55\u5bf9\u7cfb\u7edf\u8fdb\u884c\u4e86\u591a\u6b21\u8fed\u4ee3\uff0c\u9010\u6e10\u627f\u62c5\u8d77\u767e\u5ea6\u5185\u90e8\u4e1a\u52a1\u7684\u7edf\u8ba1\u62a5\u8868\u548c\u591a\u7ef4\u5206\u6790\u9700\u6c42\u30022013 \u5e74\uff0c\u6211\u4eec\u628a Doris \u8fdb\u884c\u4e86 MPP \u6846\u67b6\u7684\u5347\u7ea7\uff0c\u5e76\u5c06\u65b0\u7cfb\u7edf\u547d\u540d\u4e3a Palo \uff0c2017 \u5e74\u6211\u4eec\u4ee5\u767e\u5ea6 Palo \u7684\u540d\u5b57\u5728 GitHub \u4e0a\u8fdb\u884c\u4e86\u5f00\u6e90\uff0c2018 \u5e74\u8d21\u732e\u7ed9 Apache \u57fa\u91d1\u4f1a\u65f6\uff0c\u7531\u4e8e\u4e0e\u56fd\u5916\u6570\u636e\u5e93\u5382\u5546\u91cd\u540d\uff0c\u56e0\u6b64\u9009\u62e9\u7528\u56de\u6700\u521d\u7684\u540d\u5b57\uff0c\u8fd9\u5c31\u662f Apache Doris \u7684\u7531\u6765\u3002"),(0,n.yg)("p",null,"2020 \u5e74 2 \u6708\uff0c\u767e\u5ea6 Doris \u56e2\u961f\u7684\u4e2a\u522b\u540c\u5b66\u79bb\u804c\u521b\u4e1a\uff0c\u57fa\u4e8e Apache Doris\u505a\u4e86\u81ea\u5df1\u7684\u5546\u4e1a\u5316\u95ed\u6e90\u4ea7\u54c1 DorisDB \uff0c\u8fd9\u5c31\u662f StarRocks \u7684\u524d\u8eab\u3002"),(0,n.yg)("p",null,"\u3010\u603b\u7ed3\u3011Doris\u5c5e\u4e8e\u767e\u5ea6\u7684\uff0cApache Doris\u662f\u6709\u767e\u5ea6\u8d21\u732e\u7ed9Apache \u7684\uff0cDorisDB\u662f\u767e\u5ea6\u524d\u5458\u5de5\u57fa\u4e8eApache Doris\u505a\u7684\u5546\u4e1a\u7248\u672c\u5c5e\u4e8e\u53e6\u5916\u7684\u516c\u53f8\uff0c\u540e\u9762\u56e0\u4e3a\u7248\u6743\u7684\u95ee\u9898\uff0c\u5c06DorisDB\u6539\u540d\u4e3aStarRocks\uff0c\u6240\u4ee5StarRocks\u548cDorisDB\u662f\u5c5e\u4e8e\u4e00\u4e2a\u4ea7\u54c1\uff0c\u4e00\u4e2a\u516c\u53f8\u7684\u3002\u4e0d\u77e5\u9053\u5c0f\u4f19\u4f34\uff0c\u8fd8\u8bb0\u4e0d\u8bb0\u5f97\u53e6\u5916\u4e00\u4e2a\u4ea7\u54c1\u7684\u7ecf\u5386\u8ddfDoris\u7684\u7ecf\u5386\u975e\u5e38\u7684\u76f8\u4f3c\uff0c\u90a3\u5c31\u662fpresto\u3002\u8fd9\u91cc\u4e3b\u8981\u8bb2StarRocks\uff0c\u56e0\u4e3aStarRocks\u66f4\u65b0\u8fed\u4ee3\u5f88\u5feb\uff0c\u6d3b\u8dc3\u5ea6\u4e5f\u9ad8\u3002"),(0,n.yg)("p",null,"Apache Doris GitHub\u5730\u5740\uff1a",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"https://github.com/apache/doris")),(0,n.yg)("p",null,"Apache Doris \u5b98\u7f51\u6587\u6863\uff1a",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/get-starting/get-starting.html"},"https://doris.apache.org/docs/get-starting/get-starting.html")),(0,n.yg)("p",null,"StarRocks GitHub\u5730\u5740\uff1a",(0,n.yg)("a",{parentName:"p",href:"https://github.com/StarRocks/starrocks"},"https://github.com/StarRocks/starrocks")),(0,n.yg)("p",null,"StarRocks\u5b98\u65b9\u6587\u6863\uff1a",(0,n.yg)("a",{parentName:"p",href:"https://docs.starrocks.com/zh-cn/main/introduction/StarRocks_intro"},"https://docs.starrocks.com/zh-cn/main/introduction/StarRocks_intro")),(0,n.yg)("h4",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.yg)("p",null,"StarRocks \u662f\u4e00\u6b3e\u9ad8\u6027\u80fd\u5206\u6790\u578b\u6570\u636e\u4ed3\u5e93\uff0c\u4f7f\u7528\u5411\u91cf\u5316\u3001MPP\uff08Massively Parallel Processing\uff1a\u5927\u89c4\u6a21\u5e76\u884c\u5904\u7406\uff09 \u67b6\u6784\u3001\u53ef\u5b9e\u65f6\u66f4\u65b0\u7684\u5217\u5f0f\u5b58\u50a8\u5f15\u64ce\u7b49\u6280\u672f\u5b9e\u73b0\u591a\u7ef4\u3001\u5b9e\u65f6\u3001\u9ad8\u5e76\u53d1\u7684\u6570\u636e\u5206\u6790\u3002StarRocks \u65e2\u652f\u6301\u4ece\u5404\u7c7b\u5b9e\u65f6\u548c\u79bb\u7ebf\u7684\u6570\u636e\u6e90\u9ad8\u6548\u5bfc\u5165\u6570\u636e\uff0c\u4e5f\u652f\u6301\u76f4\u63a5\u5206\u6790\u6570\u636e\u6e56\u4e0a\u5404\u79cd\u683c\u5f0f\u7684\u6570\u636e\u3002StarRocks \u517c\u5bb9 MySQL \u534f\u8bae\uff0c\u53ef\u4f7f\u7528 MySQL \u5ba2\u6237\u7aef\u548c\u5e38\u7528 BI \u5de5\u5177\u5bf9\u63a5\u3002\u540c\u65f6 StarRocks \u5177\u5907\u6c34\u5e73\u6269\u5c55\uff0c\u9ad8\u53ef\u7528\uff0c\u9ad8\u53ef\u9760\uff0c\u6613\u8fd0\u7ef4\u7b49\u7279\u6027\u3002\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5b9e\u65f6\u6570\u4ed3\u3001OLAP \u62a5\u8868\u3001\u6570\u636e\u6e56\u5206\u6790\u7b49\u573a\u666f\u3002"))}d.isMDXComponent=!0}}]);