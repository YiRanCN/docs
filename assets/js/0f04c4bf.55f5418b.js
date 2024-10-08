"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6784],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=l(n),y=o,m=s["".concat(c,".").concat(y)]||s[y]||u[y]||p;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,i=new Array(p);i[0]=y;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<p;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var r=n(8168),o=(n(6540),n(5680));const p={sidebar_position:1},i=void 0,a={unversionedId:"study/back/maven/pom\u6587\u4ef6\u4e2d\u7684scope\u6807\u7b7e",id:"study/back/maven/pom\u6587\u4ef6\u4e2d\u7684scope\u6807\u7b7e",title:"pom\u6587\u4ef6\u4e2d\u7684scope\u6807\u7b7e",description:"\u5206\u7c7b",source:"@site/docs/study/back/maven/pom\u6587\u4ef6\u4e2d\u7684scope\u6807\u7b7e.md",sourceDirName:"study/back/maven",slug:"/study/back/maven/pom\u6587\u4ef6\u4e2d\u7684scope\u6807\u7b7e",permalink:"/docs/study/back/maven/pom\u6587\u4ef6\u4e2d\u7684scope\u6807\u7b7e",draft:!1,tags:[],version:"current",lastUpdatedAt:1728377790,formattedLastUpdatedAt:"2024\u5e7410\u67088\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"studySidebar",previous:{title:"WSL",permalink:"/docs/study/back/WSL"},next:{title:"mvnw",permalink:"/docs/study/back/maven/mvnw"}},c={},l=[{value:"\u5206\u7c7b",id:"\u5206\u7c7b",level:3},{value:"compile",id:"compile",level:4},{value:"provided",id:"provided",level:4},{value:"runtime",id:"runtime",level:4},{value:"test",id:"test",level:4},{value:"system",id:"system",level:4},{value:"import",id:"import",level:4},{value:"\u6ce8\u610f\uff1a",id:"\u6ce8\u610f",level:3}],d={toc:l},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"\u5206\u7c7b"},"\u5206\u7c7b"),(0,o.yg)("h4",{id:"compile"},"compile"),(0,o.yg)("p",null,"\u9ed8\u8ba4\u7684scope\uff0c\u8868\u793a dependency \u90fd\u53ef\u4ee5\u5728\u751f\u547d\u5468\u671f\u4e2d\u4f7f\u7528\u3002\u800c\u4e14\uff0c\u8fd9\u4e9bdependencies \u4f1a\u4f20\u9012\u5230\u4f9d\u8d56\u7684\u9879\u76ee\u4e2d\u3002\u9002\u7528\u4e8e\u6240\u6709\u9636\u6bb5\uff0c\u4f1a\u968f\u7740\u9879\u76ee\u4e00\u8d77\u53d1\u5e03\u3002"),(0,o.yg)("h4",{id:"provided"},"provided"),(0,o.yg)("p",null,"\u8ddfcompile\u76f8\u4f3c\uff0c\u4f46\u662f\u8868\u660e\u4e86dependency \u7531JDK\u6216\u8005\u5bb9\u5668\u63d0\u4f9b\uff0c\u4f8b\u5982Servlet AP\u548c\u4e00\u4e9bJava EE APIs\u3002\u8fd9\u4e2ascope \u53ea\u80fd\u4f5c\u7528\u5728\u7f16\u8bd1\u548c\u6d4b\u8bd5\u65f6\uff0c\u540c\u65f6\u6ca1\u6709\u4f20\u9012\u6027\u3002"),(0,o.yg)("h4",{id:"runtime"},"runtime"),(0,o.yg)("p",null,"\u8868\u793adependency\u4e0d\u4f5c\u7528\u5728\u7f16\u8bd1\u65f6\uff0c\u4f46\u4f1a\u4f5c\u7528\u5728\u8fd0\u884c\u548c\u6d4b\u8bd5\u65f6\uff0c\u5982JDBC\u9a71\u52a8\uff0c\u9002\u7528\u8fd0\u884c\u548c\u6d4b\u8bd5\u9636\u6bb5\u3002"),(0,o.yg)("h4",{id:"test"},"test"),(0,o.yg)("p",null,"\u8868\u793adependency\u4f5c\u7528\u5728\u6d4b\u8bd5\u65f6\uff0c\u4e0d\u4f5c\u7528\u5728\u8fd0\u884c\u65f6\u3002 \u53ea\u5728\u6d4b\u8bd5\u65f6\u4f7f\u7528\uff0c\u7528\u4e8e\u7f16\u8bd1\u548c\u8fd0\u884c\u6d4b\u8bd5\u4ee3\u7801\u3002\u4e0d\u4f1a\u968f\u9879\u76ee\u53d1\u5e03\u3002"),(0,o.yg)("h4",{id:"system"},"system"),(0,o.yg)("p",null,"\u8ddfprovided \u76f8\u4f3c\uff0c\u4f46\u662f\u5728\u7cfb\u7edf\u4e2d\u8981\u4ee5\u5916\u90e8JAR\u5305\u7684\u5f62\u5f0f\u63d0\u4f9b\uff0cmaven\u4e0d\u4f1a\u5728repository\u67e5\u627e\u5b83\u3002"),(0,o.yg)("h4",{id:"import"},"import"),(0,o.yg)("p",null,"\u8fd9\u4e2a\u6807\u7b7e\u5c31\u662f \u5f15\u5165\u8be5dependency\u7684pom\u4e2d\u5b9a\u4e49\u7684\u6240\u6709dependency\u5b9a\u4e49"),(0,o.yg)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f\uff1a"),(0,o.yg)("p",null,'import\u6807\u7b7e\u503c\u53ea\u80fd\u5728dependencyManagement\u6807\u7b7e\u4e0b\u4f7f\u7528\uff01\n\u5e76\u4e14\u4ec5\u7528\u4e8etype\u4e3a"pom"\u7684dependency\uff0c\u5176\u610f\u4e49\u4e3a\u5f15\u5165\u8be5dependency\u7684pom\u4e2d\u5b9a\u4e49\u7684\u6240\u6709dependency\u5b9a\u4e49'))}u.isMDXComponent=!0}}]);