"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4429],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=i,y=u["".concat(p,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(8168),i=(n(6540),n(5680));const a={},o=void 0,l={unversionedId:"study/back/spring/Spring\u751f\u547d\u5468\u671f\u63a5\u53e3",id:"study/back/spring/Spring\u751f\u547d\u5468\u671f\u63a5\u53e3",title:"Spring\u751f\u547d\u5468\u671f\u63a5\u53e3",description:"InitializingBean",source:"@site/docs/study/back/spring/Spring\u751f\u547d\u5468\u671f\u63a5\u53e3.md",sourceDirName:"study/back/spring",slug:"/study/back/spring/Spring\u751f\u547d\u5468\u671f\u63a5\u53e3",permalink:"/docs/study/back/spring/Spring\u751f\u547d\u5468\u671f\u63a5\u53e3",draft:!1,tags:[],version:"current",lastUpdatedAt:1728377790,formattedLastUpdatedAt:"2024\u5e7410\u67088\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Spring Security",permalink:"/docs/study/back/spring/SpringSecurity"},next:{title:"SpringCloud\u4e94\u5927\u7ec4\u4ef6",permalink:"/docs/study/back/springcloud/SpringCloud\u4e94\u5927\u7ec4\u4ef6"}},p={},s=[{value:"InitializingBean",id:"initializingbean",level:3},{value:"DisposableBean",id:"disposablebean",level:3},{value:"ApplicationContextInitializer",id:"applicationcontextinitializer",level:3},{value:"ApplicationListener",id:"applicationlistener",level:3},{value:"EnvironmentPostProcessor",id:"environmentpostprocessor",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"initializingbean"},"InitializingBean"),(0,i.yg)("p",null,"\u9700\u8981\u5b9e\u73b0 afterPropertiesSet\u63a5\u53e3\u65b9\u6cd5"),(0,i.yg)("p",null,"\u53c2\u8003 ",(0,i.yg)("a",{parentName:"p",href:"https://blog.csdn.net/qq_37705525/article/details/124808168"},"https://blog.csdn.net/qq_37705525/article/details/124808168")),(0,i.yg)("h3",{id:"disposablebean"},"DisposableBean"),(0,i.yg)("p",null,"\u9700\u8981\u5b9e\u73b0 destroy\u63a5\u53e3\u65b9\u6cd5"),(0,i.yg)("p",null,"\u53c2\u8003 ",(0,i.yg)("a",{parentName:"p",href:"https://blog.csdn.net/zhangduilei/article/details/78606636"},"https://blog.csdn.net/zhangduilei/article/details/78606636")),(0,i.yg)("h3",{id:"applicationcontextinitializer"},"ApplicationContextInitializer"),(0,i.yg)("p",null,"ApplicationContextInitializer \u63a5\u53e3\u7528\u4e8e\u5728 Spring \u5bb9\u5668\u5237\u65b0\u4e4b\u524d\u6267\u884c\u7684\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u901a\u5e38\u7528\u4e8e\u5411 SpringBoot \u5bb9\u5668\u4e2d\u6ce8\u5165\u5c5e\u6027\u3002"),(0,i.yg)("p",null,"\u53c2\u8003 ",(0,i.yg)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/509824476"},"https://zhuanlan.zhihu.com/p/509824476")),(0,i.yg)("h3",{id:"applicationlistener"},"ApplicationListener"),(0,i.yg)("p",null,"\u76d1\u542c\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u5305\u542b\u90e8\u5206\u751f\u547d\u5468\u671f\u7c7b\u578b\u7684\u4e8b\u4ef6\uff0c\u4f8b\u5982ApplicationEnvironmentPreparedEvent"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://blog.csdn.net/qq_21484747/article/details/124855050"},"https://blog.csdn.net/qq_21484747/article/details/124855050")),(0,i.yg)("h3",{id:"environmentpostprocessor"},"EnvironmentPostProcessor"),(0,i.yg)("p",null,"\u4e00\u822c\u7528\u4e8e\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u8fbe\u5230\u591a\u4e2a\u5fae\u670d\u52a1\u5171\u540c\u914d\u7f6e\u7684\u4fee\u6539\u4e0e\u7ef4\u62a4\u3002\u5f53\u6211\u4eec\u6709\u591a\u5957\u73af\u5883(\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u751f\u4ea7\u7b49\u7b49)\u65f6\uff0c\u6bcf\u5957\u73af\u5883\u90fd\u6709\u4e13\u5c5e\u7684\u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u4e8e\u914d\u7f6e\u4e2d\u5fc3(\u4ee5nacos\u4e3a\u4f8b)\uff0c\u53ef\u80fd\u5b58\u653e\u4e8e\u4e0d\u540c\u7684\u914d\u7f6e\u4e2d\u5fc3(\u6bcf\u4e2a\u73af\u5883\u6709\u4e13\u5c5e\u7684\u914d\u7f6e\u4e2d\u5fc3\uff0c\u670d\u52a1\u5730\u5740\u4e0d\u540c)\uff0c\u4e5f\u53ef\u80fd\u5b58\u653e\u4e8e\u540c\u4e00nacos\u7684\u4e0d\u540c\u547d\u540d\u7a7a\u95f4\uff0c\u4e5f\u6216\u8005\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u7684\u4e0d\u540c\u5206\u7ec4\u7b49\u7b49\u3002\u540c\u4e00\u5957\u4ee3\u7801\u5728\u4e0d\u540c\u73af\u5883\u8fd0\u884c\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd9\u65f6\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u9879\u76ee\u542f\u52a8\u65f6\uff0c\u5b9e\u73b0EnvironmentPostProcessor\u63a5\u53e3\uff0c\u5728postProcessEnvironment\u65b9\u6cd5\u4e2d\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u6216\u8005\u542f\u52a8\u547d\u4ee4\u53c2\u6570\uff0c\u4ece\u800c\u83b7\u53d6\u672c\u73af\u5883\u4e0bnacos\u7684\u670d\u52a1\u5730\u5740\uff0c\u6216\u547d\u540d\u7a7a\u95f4\u540d\u79f0\u3001\u5206\u7ec4\u540d\u79f0\u7b49\u7b49\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u6839\u636e\u83b7\u53d6\u7684\u914d\u7f6e\u53c2\u6570\u6216\u73af\u5883\u53d8\u91cf\u6765\u8bfb\u53d6\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4ece\u800c\u5b9e\u73b0\u4e0d\u540c\u73af\u5883\u4f7f\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4e0d\u7528\u4fee\u6539\u4ee3\u7801\u6216\u8005\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://blog.csdn.net/qq_40756113/article/details/123074848"},"https://blog.csdn.net/qq_40756113/article/details/123074848")))}d.isMDXComponent=!0}}]);