"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1995],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>T});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):S(S({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),s=o,T=u["".concat(l,".").concat(s)]||u[s]||y[s]||a;return r?n.createElement(T,S(S({ref:t},p),{},{components:r})):n.createElement(T,S({ref:t},p))}));function T(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,S=new Array(a);S[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,S[1]=c;for(var i=2;i<a;i++)S[i]=r[i];return n.createElement.apply(null,S)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>S,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(8168),o=(r(6540),r(5680));const a={},S="SSL TLS HTTPS",c={unversionedId:"study/encryption/SSL_TLS",id:"study/encryption/SSL_TLS",title:"SSL TLS HTTPS",description:"\u4e3a\u4e86\u4fdd\u8bc1\u7f51\u7edc\u901a\u4fe1\u7684\u5b89\u5168\u6027\uff0c\u9700\u8981\u5bf9\u7f51\u7edc\u4e0a\u4f20\u9012\u7684\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\u3002\u73b0\u5728\u4e3b\u6d41\u7684\u52a0\u5bc6\u65b9\u6cd5\u5c31\u662f SSL (Secure Socket Layer)\uff0cTLS (Transport Layer Security)\u3002\u540e\u8005\u6bd4\u524d\u8005\u8981\u65b0\u4e00\u4e9b\uff0c\u4e0d\u8fc7\u5728\u5f88\u591a\u573a\u5408\u8fd8\u662f\u7528 SSL \u6307\u4ee3 SSL \u548c TLS\u3002",source:"@site/docs/study/encryption/SSL_TLS.md",sourceDirName:"study/encryption",slug:"/study/encryption/SSL_TLS",permalink:"/docs/study/encryption/SSL_TLS",draft:!1,tags:[],version:"current",lastUpdatedAt:1728661701,formattedLastUpdatedAt:"2024\u5e7410\u670811\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"PKI",permalink:"/docs/study/encryption/PKI"},next:{title:"\u52a0\u89e3\u5bc6",permalink:"/docs/study/encryption/"}},l={},i=[{value:"SSL/TLS",id:"ssltls",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],p={toc:i},u="wrapper";function y(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"ssl-tls-https"},"SSL TLS HTTPS"),(0,o.yg)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1\u7f51\u7edc\u901a\u4fe1\u7684\u5b89\u5168\u6027\uff0c\u9700\u8981\u5bf9\u7f51\u7edc\u4e0a\u4f20\u9012\u7684\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\u3002\u73b0\u5728\u4e3b\u6d41\u7684\u52a0\u5bc6\u65b9\u6cd5\u5c31\u662f SSL (Secure Socket Layer)\uff0cTLS (Transport Layer Security)\u3002\u540e\u8005\u6bd4\u524d\u8005\u8981\u65b0\u4e00\u4e9b\uff0c\u4e0d\u8fc7\u5728\u5f88\u591a\u573a\u5408\u8fd8\u662f\u7528 SSL \u6307\u4ee3 SSL \u548c TLS\u3002"),(0,o.yg)("h3",{id:"ssltls"},"SSL/TLS"),(0,o.yg)("p",null,"SSL\uff08Secure Socket Layer\uff09\u662f\u6307\u5b89\u5168\u5957\u63a5\u5b57\u5c42\uff0c\u7b80\u800c\u8a00\u4e4b\uff0c\u5b83\u662f\u4e00\u9879\u6807\u51c6\u6280\u672f\uff0c\u53ef\u786e\u4fdd\u4e92\u8054\u7f51\u8fde\u63a5\u5b89\u5168\uff0c\u4fdd\u62a4\u4e24\u4e2a\u7cfb\u7edf\u4e4b\u95f4\u53d1\u9001\u7684\u4efb\u4f55\u654f\u611f\u6570\u636e\uff0c\u9632\u6b62\u7f51\u7edc\u72af\u7f6a\u5206\u5b50\u8bfb\u53d6\u548c\u4fee\u6539\u4efb\u4f55\u4f20\u8f93\u4fe1\u606f\uff0c\u5305\u62ec\u4e2a\u4eba\u8d44\u6599\u3002TLS\uff08Transport Layer Security\uff0c\u4f20\u8f93\u5c42\u5b89\u5168\uff09\u662f\u66f4\u4e3a\u5b89\u5168\u7684\u5347\u7ea7\u7248 SSL\u3002"),(0,o.yg)("p",null,"TLS 1.0 \u7248\u5b9e\u9645\u4e0a\u6700\u521d\u4f5c\u4e3a SSL 3.1 \u7248\u5f00\u53d1\uff0cHTTPS \u662f\u5728 HTTP \u534f\u8bae\u57fa\u7840\u4e0a\u5b9e\u65bd TLS \u52a0\u5bc6\uff0c\u6240\u6709\u7f51\u7ad9\u4ee5\u53ca\u5176\u4ed6\u90e8\u5206 web \u670d\u52a1\u90fd\u4f7f\u7528\u8be5\u534f\u8bae\u3002\u56e0\u6b64\uff0c\u4efb\u4f55\u4f7f\u7528 HTTPS \u7684\u7f51\u7ad9\u90fd\u4f7f\u7528 TLS \u52a0\u5bc6\u3002\u4e0d\u540c\u7248\u672c\u7684 TLS \u534f\u8bae\u5185\u5bb9\u7ea6\u5b9a\u4e0d\u4e00\u6837\uff0c\u8fd9\u4e5f\u4f1a\u7ed9 HTTPS \u5efa\u7acb\u8fde\u63a5\u65f6\u9700\u8981\u63e1\u624b\u534f\u5546\u7684\u4fe1\u606f\u9020\u6210\u5dee\u5f02\u3002"),(0,o.yg)("p",null,"TLS \u5df2\u7ecf\u5b8c\u5168\u7684\u4ee3\u66ff\u6389 SSL \u4e86\uff0c\u6240\u4ee5\u53ea\u63a8\u8350 TLS\uff1b\u76ee\u524d\u7684 SSL \u8bc1\u4e66\u8bb8\u53ef\uff0c\u4e0b\u53d1\u7684\u5176\u5b9e\u90fd\u662f SSL/TLS \u8bc1\u4e66\u3002"),(0,o.yg)("p",null,"HTTP \u662f\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae\uff0c\u4fe1\u606f\u662f\u660e\u6587\u4f20\u8f93\uff1bHTTPS\uff0c\u4e5f\u79f0\u4f5c HTTP over TLS\uff0c\u5219\u662f\u5177\u6709\u5b89\u5168\u6027\u7684 SSL \u52a0\u5bc6\u4f20\u8f93\u534f\u8bae\u3002"),(0,o.yg)("p",null,"HTTPS \u534f\u8bae\u9700\u8981\u5230\u8bc1\u4e66\u9881\u53d1\u673a\u6784 (Certificate Authority\uff0c\u7b80\u79f0 CA)\u7533\u8bf7\u8bc1\u4e66\uff0c\u901a\u8fc7\u6570\u5b57\u8bc1\u4e66\u7ba1\u7406\u670d\u52a1\u5b8c\u6210\u8bc1\u4e66\u8d2d\u4e70\u3001\u7533\u8bf7\uff0c\u5e76\u5c06\u8bc1\u4e66\u90e8\u7f72\u5230\u60a8\u7684 Web \u670d\u52a1\u5668\u540e\uff0cWeb \u670d\u52a1\u5c06\u4f1a\u901a\u8fc7 HTTPS \u52a0\u5bc6\u534f\u8bae\u6765\u4f20\u8f93\u6570\u636e\u3002"),(0,o.yg)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/36981565"},"\u6d45\u8c08 SSL/TLS \u5de5\u4f5c\u539f\u7406")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/416587205"},"SSL/TLS \u4e0e IPSec \u5bf9\u6bd4"))))}y.isMDXComponent=!0}}]);