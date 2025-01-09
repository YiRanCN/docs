"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7782],{15680:(e,t,n)=>{n.d(t,{xA:()=>i,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||y[d]||s;return n?r.createElement(m,c(c({ref:t},i),{},{components:n})):r.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,c=new Array(s);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var p=2;p<s;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(58168),o=(n(96540),n(15680));const s={},c=void 0,a={unversionedId:"study/system/shell\u7f16\u7a0b\u667aexpect",id:"study/system/shell\u7f16\u7a0b\u667aexpect",title:"shell\u7f16\u7a0b\u667aexpect",description:"expect",source:"@site/docs/study/system/shell\u7f16\u7a0b\u667aexpect.md",sourceDirName:"study/system",slug:"/study/system/shell\u7f16\u7a0b\u667aexpect",permalink:"/docs/study/system/shell\u7f16\u7a0b\u667aexpect",draft:!1,tags:[],version:"current",lastUpdatedAt:1736407756,formattedLastUpdatedAt:"2025\u5e741\u67089\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"openWRT",permalink:"/docs/study/system/openWRT"},next:{title:"yum-dnf",permalink:"/docs/study/system/yum-dnf"}},l={},p=[{value:"expect",id:"expect",level:3}],i={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"expect"},"expect"),(0,o.yg)("p",null,"expect \u662f\u4e00\u4e2a\u514d\u8d39\u7684\u7f16\u7a0b\u5de5\u5177\uff0c\u7528\u6765\u5b9e\u73b0\u81ea\u52a8\u7684\u4ea4\u4e92\u5f0f\u4efb\u52a1\uff0c\u800c\u65e0\u9700\u4eba\u4e3a\u5e72\u9884\u3002"),(0,o.yg)("p",null,"\u8fd9\u4e2a\u5de5\u5177\u5728\u5904\u7406\u8c03\u7528\u5176\u4ed6\u5de5\u5177\uff0c\u8f93\u5165\u5bc6\u7801\u4e4b\u7c7b\u7684\u4ea4\u4e92\uff0c\u975e\u5e38\u6709\u7528\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'expect -c "\nset timeout 10;\nspawn ssh -p $port $user@$ip;\nexpect {\n    \\"password:\\" {send \\"$pwd\\r\\";}\n    \\"yes/no\\" {send \\"yes\\r\\"; exp_continue;}\n};\nexpect \\"$\\";\nsend \\"$remote_command\\r\\";\nexpect \\"$\\";\nsend \\"exit\\r\\";\n" >> node${ind}_${ip}.log\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://blog.csdn.net/givenchy_yzl/article/details/118079170"},"CSDN-shell \u7f16\u7a0b\u4e4b expect"))))}y.isMDXComponent=!0}}]);