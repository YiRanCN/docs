"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[310],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>N});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=a.createContext({}),p=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},y=function(e){var n=p(e.components);return a.createElement(g.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,N=m["".concat(g,".").concat(u)]||m[u]||s[u]||i;return t?a.createElement(N,l(l({ref:n},y),{},{components:t})):a.createElement(N,l({ref:n},y))}));function N(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},47001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const i={},l=void 0,o={unversionedId:"study/program/Golang/CGO",id:"study/program/Golang/CGO",title:"CGO",description:"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684cgo\u652f\u6301\u7684\u51fd\u6570\u548c\u7c7b\u578b\u4ee5\u53ca\u67e5\u8be2\u7684\u65b9\u6cd5\uff1a",source:"@site/docs/study/program/Golang/CGO.md",sourceDirName:"study/program/Golang",slug:"/study/program/Golang/CGO",permalink:"/docs/study/program/Golang/CGO",draft:!1,tags:[],version:"current",lastUpdatedAt:1733196184,formattedLastUpdatedAt:"2024\u5e7412\u67083\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Golang",permalink:"/docs/study/program/Golang/"},next:{title:"Golang\u4f9d\u8d56\u5e93\u4ee3\u7406",permalink:"/docs/study/program/Golang/Golang\u4f9d\u8d56\u5e93\u4ee3\u7406"}},g={},p=[{value:"\u5e38\u89c1\u652f\u6301\u7684\u7c7b\u578b\uff1a",id:"\u5e38\u89c1\u652f\u6301\u7684\u7c7b\u578b",level:3},{value:"\u5e38\u89c1\u652f\u6301\u7684\u51fd\u6570\uff1a",id:"\u5e38\u89c1\u652f\u6301\u7684\u51fd\u6570",level:3},{value:"\u67e5\u8be2\u65b9\u6cd5\uff1a",id:"\u67e5\u8be2\u65b9\u6cd5",level:3}],y={toc:p},m="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684cgo\u652f\u6301\u7684\u51fd\u6570\u548c\u7c7b\u578b\u4ee5\u53ca\u67e5\u8be2\u7684\u65b9\u6cd5\uff1a"),(0,r.yg)("h3",{id:"\u5e38\u89c1\u652f\u6301\u7684\u7c7b\u578b"},"\u5e38\u89c1\u652f\u6301\u7684\u7c7b\u578b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6570\u503c\u7c7b\u578b"),"\uff1a",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C.char"),"\uff1a\u5bf9\u5e94Go\u8bed\u8a00\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"byte"),"\u7c7b\u578b \u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C.schar"),"\uff1a\u5bf9\u5e94Go\u8bed\u8a00\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"int8"),"\u7c7b\u578b \u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C.uchar"),"\uff1a\u5bf9\u5e94Go\u8bed\u8a00\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"uint8"),"\u7c7b\u578b \u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C.short"),"\uff1a\u5bf9\u5e94Go\u8bed\u8a00\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"int16"),"\u7c7b\u578b \u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C.ushort"),"\uff1a\u5bf9\u5e94Go\u8bed\u8a00\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"uint16"),"\u7c7b\u578b \u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C.int"),"\uff1a\u5bf9\u5e94Go\u8bed\u8a00\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"int32"),"\u7c7b\u578b \u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C.uint"),"\uff1a\u5bf9\u5e94Go\u8bed\u8a00\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"uint32"),"\u7c7b\u578b \u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C.long"),"\uff1a\u5bf9\u5e94Go\u8bed\u8a00\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"int32"),"\u7c7b\u578b \u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C.ulong"),"\uff1a\u5bf9\u5e94Go\u8bed\u8a00\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"uint32"),"\u7c7b\u578b \u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C.longlong"),"\uff1a\u5bf9\u5e94Go\u8bed\u8a00\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"int64"),"\u7c7b\u578b \u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C.ulonglong"),"\uff1a\u5bf9\u5e94Go\u8bed\u8a00\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"uint64"),"\u7c7b\u578b \u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C.float"),"\uff1a\u5bf9\u5e94Go\u8bed\u8a00\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"float32"),"\u7c7b\u578b \u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C.double"),"\uff1a\u5bf9\u5e94Go\u8bed\u8a00\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"float64"),"\u7c7b\u578b \u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C.size_t"),"\uff1a\u53ef\u5f53\u4f5cGo\u8bed\u8a00\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"uint"),"\u65e0\u7b26\u53f7\u6574\u6570\u7c7b\u578b\u5bf9\u5f85 \u3002"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u5b57\u7b26\u4e32\u548c\u5207\u7247\u7c7b\u578b"),"\uff1a",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"*C.char")),"\uff1aC\u8bed\u8a00\u4e2d\u7684\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u4ee5",(0,r.yg)("inlineCode",{parentName:"li"},"null"),"\u5b57\u7b26\u7ed3\u5c3e\uff0c\u53ef\u4e0eGo\u8bed\u8a00\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"string"),"\u7c7b\u578b\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"li"},"C.CString"),"\u3001",(0,r.yg)("inlineCode",{parentName:"li"},"C.GoString"),"\u7b49\u51fd\u6570\u8fdb\u884c\u8f6c\u6362."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"[]byte"),"\u4e0e",(0,r.yg)("inlineCode",{parentName:"strong"},"unsafe.Pointer")),"\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},"[]byte"),"\u5207\u7247\u53ef\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"li"},"C.CBytes"),"\u51fd\u6570\u8f6c\u6362\u4e3a",(0,r.yg)("inlineCode",{parentName:"li"},"unsafe.Pointer"),"\u7c7b\u578b\u7684C\u8bed\u8a00\u5b57\u8282\u6570\u7ec4\uff0c\u53cd\u4e4b\u53ef\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"li"},"C.GoBytes"),"\u51fd\u6570\u5c06C\u8bed\u8a00\u5b57\u8282\u6570\u7ec4\u8f6c\u6362\u4e3a",(0,r.yg)("inlineCode",{parentName:"li"},"[]byte"),"\u5207\u7247."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u7ed3\u6784\u4f53\u3001\u8054\u5408\u3001\u679a\u4e3e\u7c7b\u578b"),"\uff1a\u53ef\u4ee5\u5728Go\u4ee3\u7801\u4e2d\u5b9a\u4e49\u548c\u4f7f\u7528C\u7ed3\u6784\u4f53\uff0c\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"li"},'import "C"'),"\u5bfc\u5165\u540e\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528C\u7ed3\u6784\u4f53\u7c7b\u578b\u6765\u58f0\u660e\u53d8\u91cf\u548c\u64cd\u4f5c\u7ed3\u6784\u4f53\u6210\u5458.")),(0,r.yg)("h3",{id:"\u5e38\u89c1\u652f\u6301\u7684\u51fd\u6570"},"\u5e38\u89c1\u652f\u6301\u7684\u51fd\u6570\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u7c7b\u578b\u8f6c\u6362\u51fd\u6570")," \uff1a",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"C.CString(string)")),"\uff1a\u5c06Go\u8bed\u8a00\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"string"),"\u8f6c\u6362\u4e3aC\u8bed\u8a00\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"*C.char"),"\u7c7b\u578b\uff0c\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u7531C\u8bed\u8a00\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"malloc"),"\u51fd\u6570\u5206\u914d\u5185\u5b58\uff0c\u4f7f\u7528\u540e\u9700\u8c03\u7528",(0,r.yg)("inlineCode",{parentName:"li"},"C.free"),"\u91ca\u653e\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"C.CBytes([]byte)")),"\uff1a\u5c06Go\u8bed\u8a00\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"[]byte"),"\u5207\u7247\u8f6c\u6362\u4e3aC\u8bed\u8a00\u7684\u5b57\u8282\u6570\u7ec4\uff0c\u540c\u6837\u7531",(0,r.yg)("inlineCode",{parentName:"li"},"malloc"),"\u5206\u914d\u5185\u5b58\uff0c\u9700\u624b\u52a8\u91ca\u653e\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"C.GoString(*C.char)")),"\uff1a\u5c06C\u8bed\u8a00\u7684\u4ee5",(0,r.yg)("inlineCode",{parentName:"li"},"null"),"\u7ed3\u5c3e\u7684\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3aGo\u8bed\u8a00\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"string"),"\u7c7b\u578b\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"C.GoStringN(*C.char, C.int)")),"\uff1a\u5c06C\u8bed\u8a00\u7684\u5177\u6709\u660e\u786e\u957f\u5ea6\u7684\u5b57\u7b26\u6570\u7ec4\u8f6c\u6362\u4e3aGo\u8bed\u8a00\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"string"),"\u7c7b\u578b\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"C.GoBytes(unsafe.Pointer, C.int)")),"\uff1a\u5c06C\u8bed\u8a00\u7684\u5177\u6709\u660e\u786e\u957f\u5ea6\u7684\u5b57\u8282\u6570\u7ec4\u8f6c\u6362\u4e3aGo\u8bed\u8a00\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"[]byte"),"\u5207\u7247\u3002"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6807\u51c6\u5e93\u51fd\u6570"),"\uff1a\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528C\u6807\u51c6\u5e93\u4e2d\u7684\u51fd\u6570\uff0c\u5982",(0,r.yg)("inlineCode",{parentName:"li"},"stdio.h"),"\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"puts"),"\u3001",(0,r.yg)("inlineCode",{parentName:"li"},"printf"),"\uff0c",(0,r.yg)("inlineCode",{parentName:"li"},"stdlib.h"),"\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"malloc"),"\u3001",(0,r.yg)("inlineCode",{parentName:"li"},"free"),"\uff0c",(0,r.yg)("inlineCode",{parentName:"li"},"string.h"),"\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"strlen"),"\u7b49.")),(0,r.yg)("h3",{id:"\u67e5\u8be2\u65b9\u6cd5"},"\u67e5\u8be2\u65b9\u6cd5\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u5b98\u65b9\u6587\u6863"),"\uff1aGo\u8bed\u8a00\u7684\u5b98\u65b9\u6587\u6863\u662f\u6700\u6743\u5a01\u7684\u67e5\u8be2\u8d44\u6599\u3002\u53ef\u4ee5\u67e5\u770b ",(0,r.yg)("a",{parentName:"li",href:"https://pkg.go.dev/cmd/cgo"},"cgo command")," \u548c ",(0,r.yg)("a",{parentName:"li",href:"https://pkg.go.dev/runtime/cgo"},"runtime/cgo")," \u7684\u6587\u6863\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u5bf9cgo\u5de5\u5177\u4ee5\u53ca\u76f8\u5173\u51fd\u6570\u3001\u7c7b\u578b\u7b49\u7684\u8be6\u7ec6\u4ecb\u7ecd."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Go\u8bed\u8a00\u7684\u4ee3\u7801\u793a\u4f8b"),"\uff1a\u5728Go\u8bed\u8a00\u7684\u5b98\u65b9\u4ed3\u5e93\u4ee5\u53ca\u4e00\u4e9b\u77e5\u540d\u7684\u5f00\u6e90\u9879\u76ee\u4e2d\uff0c\u53ef\u4ee5\u627e\u5230\u5927\u91cf\u4f7f\u7528cgo\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u901a\u8fc7\u5b66\u4e60\u8fd9\u4e9b\u793a\u4f8b\uff0c\u4e86\u89e3\u4e0d\u540c\u573a\u666f\u4e0bcgo\u652f\u6301\u7684\u51fd\u6570\u548c\u7c7b\u578b\u7684\u4f7f\u7528\u65b9\u6cd5\u3002\u4f8b\u5982\uff0cGo\u8bed\u8a00\u6807\u51c6\u5e93\u4e2d\u7684\u4e00\u4e9b\u4f7f\u7528\u4e86cgo\u7684\u5305\uff0c\u5982",(0,r.yg)("inlineCode",{parentName:"li"},"net"),"\u5305\u4e2d\u4e0e\u7f51\u7edc\u76f8\u5173\u7684\u5e95\u5c42\u5b9e\u73b0\u53ef\u80fd\u4f1a\u6d89\u53ca\u5230cgo\u4e0e\u7cfb\u7edfC\u5e93\u51fd\u6570\u7684\u4ea4\u4e92\u7b49 \u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u5728\u7ebf\u6559\u7a0b\u548c\u535a\u5ba2"),"\uff1a\u8bb8\u591a\u6280\u672f\u535a\u5ba2\u548c\u5728\u7ebf\u6559\u7a0b\u4e5f\u4f1a\u5bf9cgo\u7684\u4f7f\u7528\u8fdb\u884c\u8be6\u7ec6\u8bb2\u89e3\uff0c\u5e76\u5217\u4e3e\u4e00\u4e9b\u5e38\u89c1\u7684\u51fd\u6570\u548c\u7c7b\u578b\u7684\u4f7f\u7528\u793a\u4f8b\uff0c\u5982 ",(0,r.yg)("a",{parentName:"li",href:"https://blog.csdn.net/qq_44470091/article/details/110654875"},"CSDN\u535a\u5ba2")," \u4e0a\u7684\u76f8\u5173\u6587\u7ae0.")))}s.isMDXComponent=!0}}]);