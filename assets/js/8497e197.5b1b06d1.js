"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7441],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,g=u["".concat(c,".").concat(d)]||u[d]||y[d]||l;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(58168),o=(n(96540),n(15680));const l={},a=void 0,i={unversionedId:"study/encryption/\u6d88\u606f\u6458\u8981\u7b97\u6cd5\u603b\u7ed3",id:"study/encryption/\u6d88\u606f\u6458\u8981\u7b97\u6cd5\u603b\u7ed3",title:"\u6d88\u606f\u6458\u8981\u7b97\u6cd5\u603b\u7ed3",description:"\u6d88\u606f\u6458\u8981\uff08Message Digest\uff09\u53c8\u79f0\u4e3a\u6570\u5b57\u6458\u8981\uff08Digital Digest\uff09\u3002\u5b83\u662f\u4e00\u4e2a\u552f\u4e00\u5bf9\u5e94\u4e00\u4e2a\u6d88\u606f\u6216\u6587\u672c\u7684\u56fa\u5b9a\u957f\u5ea6\u7684\u503c\uff0c\u5b83\u7531\u4e00\u4e2a\u5355\u5411 Hash \u52a0\u5bc6\u51fd\u6570\u5bf9\u6d88\u606f\u8fdb\u884c\u4f5c\u7528\u800c\u4ea7\u751f\u3002\u5982\u679c\u6d88\u606f\u5728\u9014\u4e2d\u6539\u53d8\u4e86\uff0c\u5219\u63a5\u6536\u8005\u901a\u8fc7\u5bf9\u6536\u5230\u6d88\u606f\u7684\u65b0\u4ea7\u751f\u7684\u6458\u8981\u4e0e\u539f\u6458\u8981\u6bd4\u8f83\uff0c\u5c31\u53ef\u77e5\u9053\u6d88\u606f\u662f\u5426\u88ab\u6539\u53d8\u4e86\u3002\u56e0\u6b64\u6d88\u606f\u6458\u8981\u4fdd\u8bc1\u4e86\u6d88\u606f\u7684\u5b8c\u6574\u6027\u3002",source:"@site/docs/study/encryption/\u6d88\u606f\u6458\u8981\u7b97\u6cd5\u603b\u7ed3.md",sourceDirName:"study/encryption",slug:"/study/encryption/\u6d88\u606f\u6458\u8981\u7b97\u6cd5\u603b\u7ed3",permalink:"/docs/study/encryption/\u6d88\u606f\u6458\u8981\u7b97\u6cd5\u603b\u7ed3",draft:!1,tags:[],version:"current",lastUpdatedAt:1733196184,formattedLastUpdatedAt:"2024\u5e7412\u67083\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"\u6570\u5b57\u8bc1\u4e66",permalink:"/docs/study/encryption/\u6570\u5b57\u8bc1\u4e66"},next:{title:"\u7b49\u4fdd\u548c\u5bc6\u8bc4",permalink:"/docs/study/encryption/\u7b49\u4fdd_\u5bc6\u8bc4"}},c={},s=[{value:"MD5",id:"md5",level:3},{value:"SHA",id:"sha",level:3},{value:"MAC",id:"mac",level:3}],p={toc:s},u="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"\u6d88\u606f\u6458\u8981\uff08Message Digest\uff09\u53c8\u79f0\u4e3a\u6570\u5b57\u6458\u8981\uff08Digital Digest\uff09\u3002\u5b83\u662f\u4e00\u4e2a\u552f\u4e00\u5bf9\u5e94\u4e00\u4e2a\u6d88\u606f\u6216\u6587\u672c\u7684\u56fa\u5b9a\u957f\u5ea6\u7684\u503c\uff0c\u5b83\u7531\u4e00\u4e2a\u5355\u5411 Hash \u52a0\u5bc6\u51fd\u6570\u5bf9\u6d88\u606f\u8fdb\u884c\u4f5c\u7528\u800c\u4ea7\u751f\u3002\u5982\u679c\u6d88\u606f\u5728\u9014\u4e2d\u6539\u53d8\u4e86\uff0c\u5219\u63a5\u6536\u8005\u901a\u8fc7\u5bf9\u6536\u5230\u6d88\u606f\u7684\u65b0\u4ea7\u751f\u7684\u6458\u8981\u4e0e\u539f\u6458\u8981\u6bd4\u8f83\uff0c\u5c31\u53ef\u77e5\u9053\u6d88\u606f\u662f\u5426\u88ab\u6539\u53d8\u4e86\u3002\u56e0\u6b64\u6d88\u606f\u6458\u8981\u4fdd\u8bc1\u4e86\u6d88\u606f\u7684\u5b8c\u6574\u6027\u3002"),(0,o.yg)("p",null,'\u6d88\u606f\u6458\u8981\u91c7\u7528\u5355\u5411 Hash \u51fd\u6570\u5c06\u9700\u52a0\u5bc6\u7684\u660e\u6587"\u6458\u8981"\u6210\u4e00\u4e32\u56fa\u5b9a\u4f4d\u6570\uff08\u5982 128bit\uff09\u7684\u5bc6\u6587\uff0c\u8fd9\u4e00\u4e32\u5bc6\u6587\u4ea6\u79f0\u4e3a\u6570\u5b57\u6307\u7eb9\uff08Finger Print\uff09\uff0c\u5b83\u6709\u56fa\u5b9a\u7684\u957f\u5ea6\uff0c\u4e14\u4e0d\u540c\u7684\u660e\u6587\u6458\u8981\u6210\u5bc6\u6587\uff0c\u5176\u7ed3\u679c\u603b\u662f\u4e0d\u540c\u7684\uff0c\u800c\u540c\u6837\u7684\u660e\u6587\u5176\u6458\u8981\u5fc5\u5b9a\u4e00\u81f4\u3002\u8fd9\u6837\u8fd9\u4e32\u6458\u8981\u4fbf\u53ef\u6210\u4e3a\u9a8c\u8bc1\u660e\u6587\u662f\u5426\u662f\u201c\u771f\u8eab\u201d\u7684\u201c\u6307\u7eb9\u201d\u4e86\u3002'),(0,o.yg)("p",null,"\u6d88\u606f\u6458\u8981\u5177\u6709\u4e0d\u53ef\u9006\u6027\uff0c\u5728\u6d88\u606f\u6458\u8981\u751f\u6210\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u4e22\u5931\u5f88\u591a\u539f\u6587\u7684\u4fe1\u606f\uff0c\u800c\u4e14\u65e0\u6cd5\u627e\u56de\u3002\u4e00\u4e2a\u597d\u7684\u6458\u8981\u7b97\u6cd5\uff0c\u662f\u6781\u96be\u4ea7\u751f Hash \u78b0\u649e\u7684\uff0c\u4e5f\u5c31\u662f\u627e\u5230\u53e6\u4e00\u6bb5\u660e\u6587\u7ecf\u8ba1\u7b97\u540e\u4ea7\u751f\u76f8\u540c\u7684\u6458\u8981\u3002"),(0,o.yg)("h3",{id:"md5"},"MD5"),(0,o.yg)("p",null,"MD \u662f\u5e94\u7528\u975e\u5e38\u5e7f\u6cdb\u7684\u4e00\u4e2a\u7b97\u6cd5\u5bb6\u65cf\uff0c\u5c24\u5176\u662f MD5\uff08Message-Digest Algorithm 5\uff0c\u6d88\u606f\u6458\u8981\u7b97\u6cd5\u7248\u672c 5\uff09\uff0c\u5b83\u7531 MD2\u3001MD3\u3001MD4 \u53d1\u5c55\u800c\u6765\uff0c\u7531 Ron Rivest\uff08RSA \u516c\u53f8\uff09\u5728 1992 \u5e74\u63d0\u51fa\uff0c\u76ee\u524d\u88ab\u5e7f\u6cdb\u5e94\u7528\u4e8e\u6570\u636e\u5b8c\u6574\u6027\u6821\u9a8c\u3001\u6570\u636e\uff08\u6d88\u606f\uff09\u6458\u8981\u3001\u6570\u636e\u52a0\u5bc6\u7b49\u3002MD2\u3001MD4\u3001MD5 \u90fd\u4ea7\u751f 16 \u5b57\u8282\uff08128 \u4f4d\uff09\u7684\u6821\u9a8c\u503c\uff0c\u4e00\u822c\u7528 32 \u4f4d\u5341\u516d\u8fdb\u5236\u6570\u8868\u793a\u3002MD2 \u7684\u7b97\u6cd5\u8f83\u6162\u4f46\u76f8\u5bf9\u5b89\u5168\uff0cMD4 \u901f\u5ea6\u5f88\u5feb\uff0c\u4f46\u5b89\u5168\u6027\u4e0b\u964d\uff0cMD5 \u6bd4 MD4 \u66f4\u5b89\u5168\u3001\u901f\u5ea6\u66f4\u5feb\u3002"),(0,o.yg)("p",null,"\u76ee\u524d\u5728\u4e92\u8054\u7f51\u4e0a\u8fdb\u884c\u5927\u6587\u4ef6\u4f20\u8f93\u65f6\uff0c\u90fd\u8981\u5f97\u7528 MD5 \u7b97\u6cd5\u4ea7\u751f\u4e00\u4e2a\u4e0e\u6587\u4ef6\u5339\u914d\u7684\u3001\u5b58\u50a8 MD5 \u503c\u7684\u6587\u672c\u6587\u4ef6\uff08\u540e\u7f00\u540d\u4e3a .md5 \u6216.md5sum\uff09\uff0c\u8fd9\u6837\u63a5\u6536\u8005\u5728\u63a5\u6536\u5230\u6587\u4ef6\u540e\uff0c\u5c31\u53ef\u4ee5\u5229\u7528\u4e0e SFV \u7c7b\u4f3c\u7684\u65b9\u6cd5\u6765\u68c0\u67e5\u6587\u4ef6\u5b8c\u6574\u6027\uff0c\u76ee\u524d\u7edd\u5927\u591a\u6570\u5927\u578b\u8f6f\u4ef6\u516c\u53f8\u6216\u5f00\u6e90\u7ec4\u7ec7\u90fd\u662f\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u6765\u6821\u9a8c\u6570\u636e\u5b8c\u6574\u6027\uff0c\u800c\u4e14\u90e8\u5206\u64cd\u4f5c\u7cfb\u7edf\u4e5f\u4f7f\u7528\u6b64\u7b97\u6cd5\u6765\u5bf9\u7528\u6237\u5bc6\u7801\u8fdb\u884c\u52a0\u5bc6\uff0c\u53e6\u5916\uff0c\u5b83\u4e5f\u662f\u76ee\u524d\u8ba1\u7b97\u673a\u72af\u7f6a\u4e2d\u6570\u636e\u53d6\u8bc1\u7684\u6700\u5e38\u7528\u7b97\u6cd5\u3002\u4e0e MD5 \u76f8\u5173\u7684\u5de5\u5177\u6709\u5f88\u591a\uff0c\u5982 WinMD5 \u7b49\u3002"),(0,o.yg)("h3",{id:"sha"},"SHA"),(0,o.yg)("p",null,"SHA\uff08Secure Hash Algorithm\uff09\u662f\u7531\u7f8e\u56fd\u4e13\u95e8\u5236\u5b9a\u5bc6\u7801\u7b97\u6cd5\u7684\u6807\u51c6\u673a\u6784\u2014\u2014\u7f8e\u56fd\u56fd\u5bb6\u6807\u51c6\u6280\u672f\u7814\u7a76\u9662\uff08NIST\uff09\u5236\u5b9a\u7684\uff0cSHA \u7cfb\u5217\u7b97\u6cd5\u7684\u6458\u8981\u957f\u5ea6\u5206\u522b\u4e3a\uff1aSHA-1 \u4e3a 20 \u5b57\u8282\uff08160 \u4f4d\uff09\u3001SHA-224 \u4e3a 32 \u5b57\u8282\uff08224 \u4f4d\uff09\u3001SHA-256 \u4e3a 32 \u5b57\u8282\uff08256 \u4f4d\uff09\u3001SHA-384 \u4e3a 48 \u5b57\u8282\uff08384 \u4f4d\uff09\u3001SHA-512 \u4e3a 64 \u5b57\u8282\uff08512 \u4f4d\uff09\uff0c\u7531\u4e8e\u5b83\u4ea7\u751f\u7684\u6570\u636e\u6458\u8981\u7684\u957f\u5ea6\u66f4\u957f\uff0c\u56e0\u6b64\u66f4\u96be\u4ee5\u53d1\u751f\u78b0\u649e\uff0c\u56e0\u6b64\u8f83\u4e4b MD5 \u66f4\u4e3a\u5b89\u5168\uff0c\u5b83\u662f\u672a\u6765\u6570\u636e\u6458\u8981\u7b97\u6cd5\u7684\u53d1\u5c55\u65b9\u5411\u3002\u7531\u4e8e SHA \u7cfb\u5217\u7b97\u6cd5\u7684\u6570\u636e\u6458\u8981\u957f\u5ea6\u8f83\u957f\uff0c\u56e0\u6b64\u5176\u8fd0\u7b97\u901f\u5ea6\u4e0e MD5 \u76f8\u6bd4\uff0c\u4e5f\u76f8\u5bf9\u8f83\u6162\u3002"),(0,o.yg)("p",null,"\u76ee\u524d SHA1 \u7684\u5e94\u7528\u8f83\u4e3a\u5e7f\u6cdb\uff0c\u4e3b\u8981\u5e94\u7528\u4e8e CA \u548c\u6570\u5b57\u8bc1\u4e66\u4e2d\uff0c\u53e6\u5916\u5728\u76ee\u524d\u4e92\u8054\u7f51\u4e2d\u6d41\u884c\u7684 BT \u8f6f\u4ef6\u4e2d\uff0c\u4e5f\u662f\u4f7f\u7528 SHA1 \u6765\u8fdb\u884c\u6587\u4ef6\u6821\u9a8c\u7684\u3002"),(0,o.yg)("h3",{id:"mac"},"MAC"),(0,o.yg)("p",null,"MAC \u7b97\u6cd5 (Message Authentication Codes \u6d88\u606f\u8ba4\u8bc1\u7801\u7b97\u6cd5) \u542b\u6709\u5bc6\u94a5\u7684\u6563\u5217\u51fd\u6570\u7b97\u6cd5\uff0c\u517c\u5bb9\u4e86 MD \u548c SHA \u7b97\u6cd5\u7684\u7279\u6027\uff0c\u5e76\u5728\u6b64\u57fa\u7840\u4e0a\u52a0\u4e0a\u4e86\u5bc6\u94a5\u3002\u56e0\u6b64 MAC \u7b97\u6cd5\u4e5f\u7ecf\u5e38\u88ab\u79f0\u4f5c HMAC \u7b97\u6cd5\u3002\u6d88\u606f\u7684\u6563\u5217\u503c\u7531\u53ea\u6709\u901a\u4fe1\u53cc\u65b9\u77e5\u9053\u7684\u5bc6\u94a5\u6765\u63a7\u5236\u3002\u6b64\u65f6 Hash \u503c\u79f0\u4f5c MAC\u3002"),(0,o.yg)("p",null,"\u7ecf\u8fc7 MAC \u7b97\u6cd5\u5f97\u5230\u7684\u6458\u8981\u503c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5341\u516d\u8fdb\u5236\u7f16\u7801\u8868\u793a\uff0c\u5176\u6458\u8981\u503c\u5f97\u957f\u5ea6\u4e0e\u5b9e\u73b0\u7b97\u6cd5\u7684\u6458\u8981\u503c\u957f\u5ea6\u76f8\u540c\u3002\u4f8b\u5982 HmacSHA \u7b97\u6cd5\u5f97\u5230\u7684\u6458\u8981\u957f\u5ea6\u5c31\u662f SHA1 \u7b97\u6cd5\u5f97\u5230\u7684\u6458\u8981\u957f\u5ea6\uff0c\u90fd\u662f 160 \u4f4d\u4e8c\u8fdb\u5236\u6570\uff0c\u6362\u7b97\u6210\u5341\u516d\u8fdb\u5236\u7684\u7f16\u7801\u4e3a 40 \u4f4d\u3002"),(0,o.yg)("p",null,"\u6d41\u7a0b\u5206\u6790\uff1a"),(0,o.yg)("p",null,"\u7532\u4e59\u53cc\u65b9\u8fdb\u884c\u6570\u636e\u4ea4\u6362\u53ef\u4ee5\u91c7\u53d6\u5982\u4e0b\u6d41\u7a0b\uff1a"),(0,o.yg)("p",null,"1.\u7532\u65b9\u5411\u4e59\u65b9\u516c\u5e03\u6458\u8981\u7b97\u6cd5\uff08\u5c31\u662f\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u6458\u8981\u7b97\u6cd5\u540d\uff09"),(0,o.yg)("p",null,"2.\u7532\u4e59\u53cc\u65b9\u6309\u7167\u7ea6\u5b9a\u6784\u9020\u5bc6\u94a5\uff0c\u53cc\u65b9\u62e5\u6709\u76f8\u540c\u7684\u5bc6\u94a5\uff08\u4e00\u822c\u662f\u4e00\u65b9\u6784\u9020\u5bc6\u94a5\u540e\u901a\u77e5\u53e6\u5916\u4e00\u65b9\uff0c\u6b64\u8fc7\u7a0b\u4e0d\u9700\u8981\u901a\u8fc7\u7a0b\u5e8f\u5b9e\u73b0\uff0c\u5c31\u662f\u53cc\u65b9\u7ea6\u5b9a\u4e2a\u5b57\u7b26\u4e32\uff0c\u4f46\u662f\u8fd9\u4e2a\u5b57\u7b26\u4e32\u53ef\u4e0d\u662f\u968f\u4fbf\u8bbe\u5b9a\u7684\uff0c\u4e5f\u662f\u901a\u8fc7\u76f8\u5173\u7b97\u6cd5\u83b7\u53d6\u7684\uff09"),(0,o.yg)("p",null,"3.\u7532\u65b9\u4f7f\u7528\u5bc6\u94a5\u5bf9\u6d88\u606f\u505a\u6458\u8981\u5904\u7406\uff0c\u7136\u540e\u5c06\u6d88\u606f\u548c\u751f\u6210\u7684\u6458\u8981\u6d88\u606f\u4e00\u540c\u53d1\u9001\u7ed9\u4e59\u65b9"),(0,o.yg)("p",null,"4.\u4e59\u65b9\u6536\u5230\u6d88\u606f\u540e\uff0c\u4f7f\u7528\u7532\u65b9\u5df2\u7ecf\u516c\u5e03\u7684\u6458\u8981\u7b97\u6cd5+\u7ea6\u5b9a\u597d\u7684\u5bc6\u94a5 \u5bf9\u6536\u5230\u7684\u6d88\u606f\u8fdb\u884c\u6458\u8981\u5904\u7406\u3002\u7136\u540e\u6bd4\u5bf9\u81ea\u5df1\u7684\u6458\u8981\u6d88\u606f\u548c\u7532\u65b9\u53d1\u8fc7\u6765\u7684\u6458\u8981\u6d88\u606f\u3002\u7504\u522b\u6d88\u606f\u662f\u5426\u662f\u7532\u65b9\u53d1\u9001\u8fc7\u6765\u7684\u3002"))}y.isMDXComponent=!0}}]);