"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1118],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>d});var r=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,y=u(e,["components","mdxType","originalType","parentName"]),c=o(n),g=l,d=c["".concat(p,".").concat(g)]||c[g]||s[g]||a;return n?r.createElement(d,i(i({ref:t},y),{},{components:n})):r.createElement(d,i({ref:t},y))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=g;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[c]="string"==typeof e?e:l,i[1]=u;for(var o=2;o<a;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},10781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var r=n(58168),l=(n(96540),n(15680));const a={},i="PKCS",u={unversionedId:"study/encryption/PKCS",id:"study/encryption/PKCS",title:"PKCS",description:"\u57fa\u672c\u6982\u5ff5",source:"@site/docs/study/encryption/PKCS.md",sourceDirName:"study/encryption",slug:"/study/encryption/PKCS",permalink:"/docs/study/encryption/PKCS",draft:!1,tags:[],version:"current",lastUpdatedAt:1736407756,formattedLastUpdatedAt:"2025\u5e741\u67089\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"OpenSSL",permalink:"/docs/study/encryption/OpenSSL"},next:{title:"PKI",permalink:"/docs/study/encryption/PKI"}},p={},o=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:3},{value:"\u4e0d\u540c\u7248\u672c\u6807\u51c6\u7684\u7528\u9014",id:"\u4e0d\u540c\u7248\u672c\u6807\u51c6\u7684\u7528\u9014",level:3},{value:"\u5404\u4e2a\u6807\u51c6\u7684\u91cd\u70b9\u5185\u5bb9",id:"\u5404\u4e2a\u6807\u51c6\u7684\u91cd\u70b9\u5185\u5bb9",level:3},{value:"\u4e0d\u540c\u6807\u51c6\u7684\u5e94\u7528\u573a\u666f",id:"\u4e0d\u540c\u6807\u51c6\u7684\u5e94\u7528\u573a\u666f",level:3},{value:"PKCS1\u5230PKCS12\u4e4b\u95f4\u7684\u533a\u522b",id:"pkcs1\u5230pkcs12\u4e4b\u95f4\u7684\u533a\u522b",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],y={toc:o},c="wrapper";function s(e){let{components:t,...n}=e;return(0,l.yg)(c,(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"pkcs"},"PKCS"),(0,l.yg)("h3",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,l.yg)("p",null,"PKCS\uff08Public Key Cryptography Standards\uff09\u662f\u4e00\u7cfb\u5217\u5bc6\u7801\u5b66\u6807\u51c6\uff0c\u65e8\u5728\u4fc3\u8fdb\u516c\u94a5\u5bc6\u7801\u5b66\u7684\u53d1\u5c55\u548c\u5e94\u7528\u3002\u8fd9\u4e9b\u6807\u51c6\u7531RSA\u516c\u53f8\uff08\u73b0\u5728\u662fEMC\u516c\u53f8\uff09\u4e8e1991\u5e74\u81f31999\u5e74\u4e4b\u95f4\u5236\u5b9a\uff0c\u5e76\u88abInternet Engineering Task Force\uff08IETF\uff09\u548c\u5176\u4ed6\u7ec4\u7ec7\u91c7\u7eb3\u3002"),(0,l.yg)("h3",{id:"\u4e0d\u540c\u7248\u672c\u6807\u51c6\u7684\u7528\u9014"},"\u4e0d\u540c\u7248\u672c\u6807\u51c6\u7684\u7528\u9014"),(0,l.yg)("p",null,"\u4e0d\u540c\u7684PKCS\u6807\u51c6\u90fd\u6709\u4e0d\u540c\u7684\u7528\u9014\uff0c\u5305\u62ec\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"PKCS #1: \u5b9a\u4e49\u4e86\u516c\u94a5\u5bc6\u7801\u5b66\u7684\u57fa\u672c\u7b97\u6cd5\u548c\u6570\u636e\u683c\u5f0f\uff0c\u4e3b\u8981\u7528\u4e8eRSA\u52a0\u5bc6\u548c\u7b7e\u540d\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #5: \u5b9a\u4e49\u4e86\u7528\u4e8e\u5bc6\u7801\u5b66\u5b89\u5168\u7684\u5bc6\u7801\u57fa\u7840\u8bbe\u65bd\u6280\u672f\uff0c\u5982\u5bc6\u7801\u63a8\u5bfc\u51fd\u6570\u548c\u5bc6\u7801\u52a0\u5bc6\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #7: \u5b9a\u4e49\u4e86\u6570\u5b57\u7b7e\u540d\u3001\u6d88\u606f\u6458\u8981\u3001\u6570\u5b57\u4fe1\u5c01\u7b49\u6d88\u606f\u8bed\u6cd5\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #8: \u5b9a\u4e49\u4e86\u79c1\u94a5\u4fe1\u606f\u8bed\u6cd5\uff0c\u7528\u4e8e\u5728\u4e0d\u540c\u7cfb\u7edf\u4e4b\u95f4\u4f20\u8f93\u548c\u5b58\u50a8\u79c1\u94a5\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #10: \u5b9a\u4e49\u4e86\u8bc1\u4e66\u8bf7\u6c42\u6d88\u606f\u7684\u8bed\u6cd5\uff0c\u7528\u4e8e\u5728\u8bc1\u4e66\u9881\u53d1\u673a\u6784\uff08CA\uff09\u4e2d\u7533\u8bf7\u6570\u5b57\u8bc1\u4e66\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #12: \u5b9a\u4e49\u4e86\u4e2a\u4eba\u4fe1\u606f\u4ea4\u6362\u8bed\u6cd5\uff0c\u7528\u4e8e\u5c06\u7528\u6237\u7684\u79c1\u94a5\u3001\u8bc1\u4e66\u7b49\u6253\u5305\u6210\u4e00\u4e2a\u52a0\u5bc6\u6587\u4ef6\u3002")),(0,l.yg)("h3",{id:"\u5404\u4e2a\u6807\u51c6\u7684\u91cd\u70b9\u5185\u5bb9"},"\u5404\u4e2a\u6807\u51c6\u7684\u91cd\u70b9\u5185\u5bb9"),(0,l.yg)("p",null,"\u4e0d\u540c\u7684PKCS\u6807\u51c6\u90fd\u6709\u5404\u81ea\u7684\u91cd\u70b9\u5185\u5bb9\uff0c\u4f8b\u5982\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"PKCS #1: RSA\u7b97\u6cd5\u7684\u6570\u636e\u683c\u5f0f\u3001\u52a0\u5bc6\u548c\u7b7e\u540d\u64cd\u4f5c\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #5: \u5bc6\u7801\u63a8\u5bfc\u51fd\u6570\u3001\u5bc6\u7801\u52a0\u5bc6\u7b97\u6cd5\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #7: \u6d88\u606f\u7684\u7ed3\u6784\u3001\u6570\u5b57\u7b7e\u540d\u3001\u6d88\u606f\u6458\u8981\u3001\u6570\u5b57\u4fe1\u5c01\u7b49\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #8: \u79c1\u94a5\u7684\u7ed3\u6784\u548c\u683c\u5f0f\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #10: \u8bc1\u4e66\u8bf7\u6c42\u6d88\u606f\u7684\u683c\u5f0f\u3001\u8bc1\u4e66\u9881\u53d1\u673a\u6784\u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #12: \u4e2a\u4eba\u4fe1\u606f\u4ea4\u6362\u6587\u4ef6\u7684\u7ed3\u6784\u3001\u79c1\u94a5\u3001\u8bc1\u4e66\u3001\u5bc6\u7801\u7b49\u5185\u5bb9\u3002")),(0,l.yg)("h3",{id:"\u4e0d\u540c\u6807\u51c6\u7684\u5e94\u7528\u573a\u666f"},"\u4e0d\u540c\u6807\u51c6\u7684\u5e94\u7528\u573a\u666f"),(0,l.yg)("p",null,"PKCS\u6807\u51c6\u5e7f\u6cdb\u5e94\u7528\u4e8e\u8bb8\u591a\u9886\u57df\uff0c\u5305\u62ec\u7f51\u7edc\u901a\u4fe1\u3001\u5b89\u5168\u534f\u8bae\u3001\u6570\u5b57\u8bc1\u4e66\u7ba1\u7406\u7b49\uff0c\u5305\u62ec\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"SSL/TLS\u901a\u4fe1\u534f\u8bae\u4e2d\u7684\u6570\u5b57\u8bc1\u4e66\u548c\u79c1\u94a5\u7ba1\u7406\u3002"),(0,l.yg)("li",{parentName:"ul"},"S/MIME\u52a0\u5bc6\u548c\u7b7e\u540d\u7535\u5b50\u90ae\u4ef6\u3002"),(0,l.yg)("li",{parentName:"ul"},"HTTPS\u7f51\u7ad9\u7684SSL/TLS\u8bc1\u4e66\u7ba1\u7406\u3002"),(0,l.yg)("li",{parentName:"ul"},"VPN\uff08Virtual Private Network\uff09\u8fde\u63a5\u4e2d\u7684\u8eab\u4efd\u8ba4\u8bc1\u548c\u52a0\u5bc6\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u6570\u5b57\u7b7e\u540d\u548c\u7535\u5b50\u6587\u6863\u7684\u9a8c\u8bc1\u3002")),(0,l.yg)("h3",{id:"pkcs1\u5230pkcs12\u4e4b\u95f4\u7684\u533a\u522b"},"PKCS1\u5230PKCS12\u4e4b\u95f4\u7684\u533a\u522b"),(0,l.yg)("p",null,"\u4e0d\u540c\u7684PKCS\u6807\u51c6\u7684\u7248\u672c\u4e4b\u95f4\u7684\u533a\u522b\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"PKCS #1\uff1a\u7528\u4e8eRSA\u7b97\u6cd5\u7684\u6570\u636e\u683c\u5f0f\u548c\u64cd\u4f5c\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #5\uff1a\u5bc6\u7801\u63a8\u5bfc\u51fd\u6570\u548c\u5bc6\u7801\u52a0\u5bc6\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #7\uff1a\u901a\u7528\u6d88\u606f\u8bed\u6cd5\uff0c\u5305\u62ec\u6570\u5b57\u7b7e\u540d\u3001\u6d88\u606f\u6458\u8981\u3001\u6570\u5b57\u4fe1\u5c01\u7b49\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #8\uff1a\u79c1\u94a5\u4fe1\u606f\u8bed\u6cd5\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #10\uff1a\u8bc1\u4e66\u8bf7\u6c42\u6d88\u606f\u8bed\u6cd5\u3002"),(0,l.yg)("li",{parentName:"ul"},"PKCS #12\uff1a\u4e2a\u4eba\u4fe1\u606f\u4ea4\u6362\u8bed\u6cd5\u3002")),(0,l.yg)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.yg)("p",null,"\u603b\u7ed3\uff1a\u8fd9\u4e9b\u6807\u51c6\u4e4b\u95f4\u7684\u533a\u522b\u5728\u4e8e\u5176\u5b9a\u4e49\u7684\u6570\u636e\u7ed3\u6784\u3001\u8bed\u6cd5\u3001\u7528\u9014\u548c\u5e94\u7528\u573a\u666f\u3002\u4f8b\u5982\uff0cPKCS #1\u4e3b\u8981\u7528\u4e8eRSA\u7b97\u6cd5\uff0c\u800cPKCS #7\u7528\u4e8e\u6d88\u606f\u7684\u7b7e\u540d\u548c\u52a0\u5bc6\uff0cPKCS #12\u5219\u7528\u4e8e\u4e2a\u4eba\u4fe1\u606f\u7684\u6253\u5305\u548c\u4ea4\u6362\u3002"),(0,l.yg)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_43757014/article/details/138316278"},"https://blog.csdn.net/weixin_43757014/article/details/138316278"))))}s.isMDXComponent=!0}}]);