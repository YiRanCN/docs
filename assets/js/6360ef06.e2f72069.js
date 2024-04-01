"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5543],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var y=a.createContext({}),s=function(e){var t=a.useContext(y),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(y.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,y=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,m=c["".concat(y,".").concat(d)]||c[d]||p[d]||i;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var y in t)hasOwnProperty.call(t,y)&&(o[y]=t[y]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(8168),n=(r(6540),r(5680));const i={},l=void 0,o={unversionedId:"study/back/\u6570\u636e\u5e93\u76f8\u5173/JPA-MyBatis",id:"study/back/\u6570\u636e\u5e93\u76f8\u5173/JPA-MyBatis",title:"JPA-MyBatis",description:"JPA",source:"@site/docs/study/back/\u6570\u636e\u5e93\u76f8\u5173/JPA-MyBatis.md",sourceDirName:"study/back/\u6570\u636e\u5e93\u76f8\u5173",slug:"/study/back/\u6570\u636e\u5e93\u76f8\u5173/JPA-MyBatis",permalink:"/docs/study/back/\u6570\u636e\u5e93\u76f8\u5173/JPA-MyBatis",draft:!1,tags:[],version:"current",lastUpdatedAt:1711958695,formattedLastUpdatedAt:"2024\u5e744\u67081\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"\u9632\u8303\u6f0f\u6d1e\u653b\u51fb",permalink:"/docs/study/back/\u4fe1\u606f\u5b89\u5168/\u9632\u8303\u6f0f\u6d1e\u653b\u51fb"},next:{title:"Java\u6570\u636e\u5e93\u8fde\u63a5\u6c60",permalink:"/docs/study/back/\u6570\u636e\u5e93\u76f8\u5173/Java\u6570\u636e\u5e93\u8fde\u63a5\u6c60"}},y={},s=[{value:"JPA",id:"jpa",level:3},{value:"MyBatis",id:"mybatis",level:3},{value:"\u4e24\u8005\u5bf9\u6bd4",id:"\u4e24\u8005\u5bf9\u6bd4",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],u={toc:s},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h3",{id:"jpa"},"JPA"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"JPA \u662f Java Persistence API \u7684\u7b80\u79f0\uff0c\u4e2d\u6587\u540d Java \u6301\u4e45\u5c42 API \u3002"),(0,n.yg)("li",{parentName:"ul"},"\u662f Java EE 5.0 \u5e73\u53f0\u6807\u51c6\u7684 ORM \u89c4\u8303\uff0c\u4f7f\u5f97\u5e94\u7528\u7a0b\u5e8f\u4ee5\u7edf\u4e00\u7684\u65b9\u5f0f\u8bbf\u95ee\u6301\u4e45\u5c42\u3002\u65e2\u7136\u662f\u89c4\u8303\uff0c\u90a3\u80af\u5b9a\u5c31\u9700\u8981\u6280\u672f\u6765\u5b9e\u73b0\u8fd9\u4e2a\u89c4\u8303\uff0c\u6240\u4ee5 Hibernate3.2+\u3001TopLink 10.1.3 \u4ee5\u53ca OpenJPA \u90fd\u63d0\u4f9b\u4e86 JPA \u7684\u5b9e\u73b0\u3002")),(0,n.yg)("h3",{id:"mybatis"},"MyBatis"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"MyBatis \u662f\u652f\u6301\u666e\u901a SQL \u67e5\u8be2\uff0c\u5b58\u50a8\u8fc7\u7a0b\u548c\u9ad8\u7ea7\u6620\u5c04\u7684\u4f18\u79c0\u6301\u4e45\u5c42\u6846\u67b6\u3002"),(0,n.yg)("li",{parentName:"ul"},"MyBatis \u6d88\u9664\u4e86\u51e0\u4e4e\u6240\u6709\u7684 JDBC \u4ee3\u7801\u548c\u53c2\u6570\u7684\u624b\u5de5\u8bbe\u7f6e\u4ee5\u53ca\u7ed3\u679c\u96c6\u7684\u68c0\u7d22\u3002"),(0,n.yg)("li",{parentName:"ul"},"MyBatis \u4f7f\u7528\u7b80\u5355\u7684 XML \u6216\u6ce8\u89e3\u7528\u4e8e\u914d\u7f6e\u548c\u539f\u59cb\u6620\u5c04\uff0c\u5c06\u63a5\u53e3\u548c Java \u7684 POJOs\uff08Plain Ordinary Java Objects\uff0c\u666e\u901a\u7684 Java \u5bf9\u8c61\uff09\u6620\u5c04\u6210\u6570\u636e\u5e93\u4e2d\u7684\u8bb0\u5f55\u3002")),(0,n.yg)("h3",{id:"\u4e24\u8005\u5bf9\u6bd4"},"\u4e24\u8005\u5bf9\u6bd4"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"MyBatis \u6ca1\u6709\u5b9e\u73b0 JPA \u89c4\u8303\uff0c\u5c5e\u4e8e\u534a\u81ea\u52a8 ORM \u6620\u5c04\u5de5\u5177\uff0c\u5728 MyBatis \u4e2d\uff0c\u7a0b\u5e8f\u5458\u9700\u8981\u81ea\u5df1\u7f16\u5199 Sql \u8bed\u53e5\u3002"),(0,n.yg)("li",{parentName:"ul"},"JPA \u662f Repository\uff0cMyBatis \u662f Mapper\u3002"),(0,n.yg)("li",{parentName:"ul"},"MyBatis \u652f\u6301\u5b9a\u5236\u5316 SQL\u3001\u5b58\u50a8\u8fc7\u7a0b\u4ee5\u53ca\u9ad8\u7ea7\u6620\u5c04\u3002JPA \u4ec5\u652f\u6301\u7b80\u5355\u7684\u6620\u5c04\uff0c\u5b83\u6620\u5c04\u5b9e\u4f53\u7c7b\u5c5e\u6027\u5230\u6570\u636e\u5e93\u8868\u7684\u5b57\u6bb5\u4e0a\u3002"),(0,n.yg)("li",{parentName:"ul"},"MyBatis \u9700\u8981\u624b\u52a8\u8fdb\u884c\u5206\u9875\uff0c\u800c JPA \u53ef\u4ee5\u4f7f\u7528\u6846\u67b6\u81ea\u5e26\u7684\u5206\u9875\u673a\u5236\u3002")),(0,n.yg)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"JPA \u5bf9\u4e8e\u5355\u8868\u7684\u7b80\u5355\u67e5\u8be2\u786e\u5b9e\u7b80\u5355\u65b9\u4fbf\u53c8\u5b9e\u7528\u3002"),(0,n.yg)("li",{parentName:"ul"},"mybatis ,\u53ea\u80fd\u8bf4\u5bf9\u4e8e\u591a\u8868\u67e5\u8be2\u786e\u5b9e\u662f\u6bd4\u8f83\u652f\u6301\u3002\u5c24\u5176\u662f\u5728\u4e1a\u52a1\u903b\u8f91\u591a\u662f\u591a\u8868\u5173\u8054\u7684\u60c5\u51b5\u4e0b\uff0cmybatis \u7edd\u5bf9\u6bd4 jpa \u8981\u66f4\u52a0\u9002\u5408\u3002\u65e0\u8bba\u662f\u4ee5\u540e\u7684\u7ef4\u62a4\u8fd8\u662f\u4e1a\u52a1\u7684\u53d8\u66f4\u90fd\u65b9\u4fbf\u4e0d\u5c11\u3002")),(0,n.yg)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_49794051/article/details/111903009"},"CSDN-\u9c7c\u548c\u718a\u638c\u517c\u5f97\uff1a\u540c\u65f6\u4f7f\u7528 JPA \u548c Mybatis"))))}p.isMDXComponent=!0}}]);