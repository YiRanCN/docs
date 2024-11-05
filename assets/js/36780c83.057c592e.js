"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9105],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>f});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=p(r),y=o,f=s["".concat(c,".").concat(y)]||s[y]||d[y]||i;return r?n.createElement(f,u(u({ref:t},l),{},{components:r})):n.createElement(f,u({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=y;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:o,u[1]=a;for(var p=2;p<i;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(8168),o=(r(6540),r(5680));const i={},u=void 0,a={unversionedId:"study/devops/Linux\u8fd0\u7ef4-GRUB",id:"study/devops/Linux\u8fd0\u7ef4-GRUB",title:"Linux\u8fd0\u7ef4-GRUB",description:"GRUB",source:"@site/docs/study/devops/Linux\u8fd0\u7ef4-GRUB.md",sourceDirName:"study/devops",slug:"/study/devops/Linux\u8fd0\u7ef4-GRUB",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-GRUB",draft:!1,tags:[],version:"current",lastUpdatedAt:1730793421,formattedLastUpdatedAt:"2024\u5e7411\u67085\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Linux\u53d1\u884c\u7248",permalink:"/docs/study/devops/Linux\u53d1\u884c\u7248"},next:{title:"Linux\u8fd0\u7ef4-proc",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-proc"}},c={},p=[{value:"GRUB",id:"grub",level:3}],l={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(s,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"grub"},"GRUB"),(0,o.yg)("p",null,"/etc/default/grub\u662f\u4e00\u4e2a\u5728\u57fa\u4e8e Linux \u7684\u7cfb\u7edf\uff08\u5982 Ubuntu\u3001Debian \u7b49\uff09\u4e2d\u7528\u4e8e\u914d\u7f6e GRUB\uff08GRand Unified Bootloader\uff09\u5f15\u5bfc\u52a0\u8f7d\u7a0b\u5e8f\u7684\u91cd\u8981\u6587\u4ef6\u3002GRUB \u662f\u5927\u591a\u6570 Linux \u7cfb\u7edf\u7528\u4e8e\u5f15\u5bfc\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u542f\u52a8\u7684\u5de5\u5177\uff0c\u5b83\u53ef\u4ee5\u8bc6\u522b\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u5185\u6838\u7248\u672c\uff0c\u5e76\u5728\u542f\u52a8\u65f6\u63d0\u4f9b\u4e00\u4e2a\u83dc\u5355\u8ba9\u7528\u6237\u9009\u62e9\u542f\u52a8\u9879\u3002"),(0,o.yg)("p",null,"\u8fd9\u4e2a\u6587\u4ef6\u5305\u542b\u4e86\u8bb8\u591a\u7528\u4e8e\u5b9a\u5236 GRUB \u884c\u4e3a\u7684\u914d\u7f6e\u9009\u9879\uff0c\u8fd9\u4e9b\u9009\u9879\u4f1a\u5728\u7cfb\u7edf\u542f\u52a8\u8fc7\u7a0b\u4e2d\u88ab\u8bfb\u53d6\u5e76\u5e94\u7528\uff0c\u4ee5\u786e\u5b9a\u5982\u4f55\u52a0\u8f7d\u548c\u542f\u52a8\u5185\u6838\u4ee5\u53ca\u76f8\u5173\u7684\u521d\u59cb\u5316\u7a0b\u5e8f\u3002"),(0,o.yg)("p",null,"\u53ef\u4ee5\u8bbe\u7f6e\u5185\u6838\u53c2\u6570"),(0,o.yg)("p",null,"\u5982\u679cDocker info\u8fd4\u56deWARNING: No swap limit support \u53ef\u4ee5\u901a\u8fc7\u6b64\u8bbe\u7f6e\u89e3\u51b3"))}d.isMDXComponent=!0}}]);