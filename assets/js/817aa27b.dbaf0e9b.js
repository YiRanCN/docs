"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,g=c["".concat(u,".").concat(m)]||c[m]||s[m]||a;return n?o.createElement(g,r(r({ref:t},d),{},{components:n})):o.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(7462),l=(n(7294),n(3905));const a={},r=void 0,i={unversionedId:"study/db/NoSQL/MongoDB",id:"study/db/NoSQL/MongoDB",title:"MongoDB",description:"MongoDB",source:"@site/docs/study/db/NoSQL/MongoDB.md",sourceDirName:"study/db/NoSQL",slug:"/study/db/NoSQL/MongoDB",permalink:"/docs/study/db/NoSQL/MongoDB",draft:!1,tags:[],version:"current",lastUpdatedAt:1699322495,formattedLastUpdatedAt:"2023\u5e7411\u67087\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Ignite",permalink:"/docs/study/db/NoSQL/Ignite"},next:{title:"Redis",permalink:"/docs/study/db/NoSQL/Redis"}},u={},p=[{value:"MongoDB",id:"mongodb",level:3},{value:"\u6587\u6863\u6570\u636e\u5e93",id:"\u6587\u6863\u6570\u636e\u5e93",level:3},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:3},{value:"\u4e0d\u9002\u7528\u573a\u666f",id:"\u4e0d\u9002\u7528\u573a\u666f",level:3},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:3},{value:"db",id:"db",level:4},{value:"collection",id:"collection",level:4},{value:"document",id:"document",level:4},{value:"\u96c6\u7fa4\u6982\u5ff5",id:"\u96c6\u7fa4\u6982\u5ff5",level:3},{value:"mongostat",id:"mongostat",level:3},{value:"mongotop",id:"mongotop",level:3},{value:"\u5907\u4efd/\u6062\u590d",id:"\u5907\u4efd\u6062\u590d",level:3},{value:"\u5206\u9875\u67e5\u8be2",id:"\u5206\u9875\u67e5\u8be2",level:3},{value:"\u65b9\u6848\u4e00",id:"\u65b9\u6848\u4e00",level:4},{value:"\u65b9\u6848\u4e8c",id:"\u65b9\u6848\u4e8c",level:4},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],d={toc:p},c="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"mongodb"},"MongoDB"),(0,l.kt)("p",null,"MongoDB\u662f\u4e00\u4e2a\u4ecb\u4e8e\u5173\u7cfb\u6570\u636e\u5e93\u548c\u975e\u5173\u7cfb\u6570\u636e\u5e93\u4e4b\u95f4\u7684\u4ea7\u54c1\uff0c\u662f\u975e\u5173\u7cfb\u6570\u636e\u5e93\u5f53\u4e2d\u529f\u80fd\u6700\u4e30\u5bcc\uff0c\u6700\u50cf\u5173\u7cfb\u6570\u636e\u5e93\u7684\u3002\u4ed6\u652f\u6301\u7684\u6570\u636e\u7ed3\u6784\u975e\u5e38\u677e\u6563\uff0c\u662f\u7c7b\u4f3cjson\u7684bson\u683c\u5f0f\uff0c\u56e0\u6b64\u53ef\u4ee5\u5b58\u50a8\u6bd4\u8f83\u590d\u6742\u7684\u6570\u636e\u7c7b\u578b\u3002Mongo\u6700\u5927\u7684\u7279\u70b9\u662f\u4ed6\u652f\u6301\u7684\u67e5\u8be2\u8bed\u8a00\u975e\u5e38\u5f3a\u5927\uff0c\u5176\u8bed\u6cd5\u6709\u70b9\u7c7b\u4f3c\u4e8e\u9762\u5411\u5bf9\u8c61\u7684\u67e5\u8be2\u8bed\u8a00\uff0c\u51e0\u4e4e\u53ef\u4ee5\u5b9e\u73b0\u7c7b\u4f3c\u5173\u7cfb\u6570\u636e\u5e93\u5355\u8868\u67e5\u8be2\u7684\u7edd\u5927\u90e8\u5206\u529f\u80fd\uff0c\u800c\u4e14\u8fd8\u652f\u6301\u5bf9\u6570\u636e\u5efa\u7acb\u7d22\u5f15\u3002"),(0,l.kt)("p",null,"Mongo\u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\uff0c\u5f00\u6e90\uff0c\u65e0\u6a21\u5f0f\u7684\u6587\u6863\u578b\u6570\u636e\u5e93\uff0c\u5b83\u5728\u8bb8\u591a\u573a\u666f\u4e0b\u53ef\u7528\u4e8e\u66ff\u4ee3\u4f20\u7edf\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u6216\u952e/\u503c\u5b58\u50a8\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,"MongoDB Version4+\u5f00\u59cb\u539f\u751f\u652f\u6301\u4e8b\u52a1\uff1b\u8c8c\u4f3c\u53ef\u4ee5\u66ff\u6362\u5173\u7cfb\u6570\u636e\u5e93\uff0c\u4f46\u662f\u8fd9\u80fd\u884c\u4e48\uff1f",(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/ExMan/p/9565125.html"},"\u5343\u4e07\u522b\u7528MongoDB\uff1f\u771f\u7684\u5417\uff1f\uff01")," \xa0\u6211\u5bf9\u6b64\u6301\u4fdd\u7559\u610f\u89c1\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u4e3a\u4e86\u4f7f\u7528MongoDB\u800c\u4f7f\u7528MongoDB\uff0c\u4e00\u5b9a\u8981\u597d\u597d\u5206\u6790\uff0c\u4e3b\u8981\u7cbe\u529b\u5e94\u8be5\u653e\u5728\u4f7f\u7528Msql\u7b49\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e0a\uff0c\u5f53\u5173\u7cfb\u578b\u6570\u636e\u5e93\u662f\u5728\u65e0\u6cd5\u6ee1\u8db3\u6216\u8005\u5b9e\u73b0\u8f83\u590d\u6742\u65f6\uff0c\u518d\u53bb\u8003\u8651\u8fd9\u4e2a\u7ec6\u5206\u573a\u666fMongoDB\u662f\u5426\u5408\u9002\u3002")),(0,l.kt)("h3",{id:"\u6587\u6863\u6570\u636e\u5e93"},"\u6587\u6863\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u5173\u7cfb\u6570\u636e\u5e93 schema \u5e26\u6765\u7684\u95ee\u9898\uff0c\u6587\u6863\u6570\u636e\u5e93\u5e94\u8fd0\u800c\u751f\u3002\u6587\u6863\u6570\u636e\u5e93\u6700\u5927\u7684\u7279\u70b9\u5c31\u662f no-schema\uff0c\u53ef\u4ee5\u5b58\u50a8\u548c\u8bfb\u53d6\u4efb\u610f\u7684\u6570\u636e\u3002\u76ee\u524d\u7edd\u5927\u90e8\u5206\u6587\u6863\u6570\u636e\u5e93\u5b58\u50a8\u7684\u6570\u636e\u683c\u5f0f\u662f JSON\uff08\u6216\u8005 BSON\uff09\uff0c\u56e0\u4e3a JSON \u6570\u636e\u662f\u81ea\u63cf\u8ff0\u7684\uff0c\u65e0\u987b\u5728\u4f7f\u7528\u524d\u5b9a\u4e49\u5b57\u6bb5\uff0c\u8bfb\u53d6\u4e00\u4e2a JSON \u4e2d\u4e0d\u5b58\u5728\u7684\u5b57\u6bb5\u4e5f\u4e0d\u4f1a\u5bfc\u81f4 SQL \u90a3\u6837\u7684\u8bed\u6cd5\u9519\u8bef\u3002"),(0,l.kt)("p",null,"\u6587\u6863\u6570\u636e\u5e93\u7684 no-schema \u7279\u6027\uff0c\u7ed9\u4e1a\u52a1\u5f00\u53d1\u5e26\u6765\u4e86\u51e0\u4e2a\u660e\u663e\u7684\u4f18\u52bf\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e\u5b57\u6bb5\u7b80\u5355"),(0,l.kt)("li",{parentName:"ul"},"\u5386\u53f2\u6570\u636e\u4e0d\u4f1a\u51fa\u9519"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5f88\u5bb9\u6613\u5b58\u50a8\u590d\u6742\u6570\u636e")),(0,l.kt)("p",null,"\u6587\u6863\u6570\u636e\u5e93 no-schema \u7684\u7279\u6027\u5e26\u6765\u7684\u8fd9\u4e9b\u4f18\u52bf\u4e5f\u662f\u6709\u4ee3\u4ef7\u7684\uff0c\u6700\u4e3b\u8981\u7684\u4ee3\u4ef7\u5c31\u662f\u4e0d\u652f\u6301\u4e8b\u52a1\u3002\u6587\u6863\u6570\u636e\u5e93\u53e6\u5916\u4e00\u4e2a\u7f3a\u70b9\u5c31\u662f\u65e0\u6cd5\u5b9e\u73b0\u5173\u7cfb\u6570\u636e\u5e93\u7684 join \u64cd\u4f5c\u3002"),(0,l.kt)("h3",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7f51\u7ad9\u5b9e\u65f6\u6570\u636e\u5904\u7406\u3002\u5b83\u975e\u5e38\u9002\u5408\u5b9e\u65f6\u7684\u63d2\u5165\u3001\u66f4\u65b0\u4e0e\u67e5\u8be2\uff0c\u5e76\u5177\u5907\u7f51\u7ad9\u5b9e\u65f6\u6570\u636e\u5b58\u50a8\u6240\u9700\u7684\u590d\u5236\u53ca\u9ad8\u5ea6\u4f38\u7f29\u6027\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7f13\u5b58\u3002\u7531\u4e8e\u6027\u80fd\u5f88\u9ad8\uff0c\u5b83\u9002\u5408\u4f5c\u4e3a\u4fe1\u606f\u57fa\u7840\u8bbe\u65bd\u7684\u7f13\u5b58\u5c42\u3002\u5728\u7cfb\u7edf\u91cd\u542f\u4e4b\u540e\uff0c\u7531\u5b83\u642d\u5efa\u7684\u6301\u4e45\u5316\u7f13\u5b58\u5c42\u53ef\u4ee5\u907f\u514d\u4e0b\u5c42\u7684\u6570\u636e\u6e90\u8fc7\u8f7d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u9ad8\u4f38\u7f29\u6027\u9ad8\u53ef\u7528\u7684\u573a\u666f\u3002MongoDB\u4f7f\u7528\u5206\u7247\u6c34\u5e73\u7f29\u653e\uff0c\u5e76\u4e14\u53ef\u4ee5\u8fd0\u884c\u5728\u591a\u4e2a\u670d\u52a1\u5668\u4e0a\uff0c\u5e73\u8861\u8d1f\u8f7d\u6216\u590d\u5236\u6570\u636e\uff0c\u4ee5\u4fbf\u5728\u786c\u4ef6\u51fa\u73b0\u6545\u969c\u65f6\u4fdd\u6301\u7cfb\u7edf\u6b63\u5e38\u8fd0\u884c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6d77\u91cf\u6570\u636e\u3002")),(0,l.kt)("h3",{id:"\u4e0d\u9002\u7528\u573a\u666f"},"\u4e0d\u9002\u7528\u573a\u666f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8981\u6c42\u9ad8\u5ea6\u4e8b\u52a1\u6027\u7684\u7cfb\u7edf\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4f20\u7edf\u7684\u5546\u4e1a\u667a\u80fd\u5e94\u7528\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u590d\u6742\u7684\u8de8\u6587\u6863\uff08\u8868\uff09\u7ea7\u8054\u67e5\u8be2\u3002")),(0,l.kt)("h3",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,l.kt)("h4",{id:"db"},"db"),(0,l.kt)("p",null,"\u6709\u4e00\u4e9b\u6570\u636e\u5e93\u540d\u662f\u4fdd\u7559\u7684\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u8fd9\u4e9b\u6709\u7279\u6b8a\u4f5c\u7528\u7684\u6570\u636e\u5e93\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"admin"),'\uff1a \u4ece\u6743\u9650\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u8fd9\u662f"root"\u6570\u636e\u5e93\u3002\u8981\u662f\u5c06\u4e00\u4e2a\u7528\u6237\u6dfb\u52a0\u5230\u8fd9\u4e2a\u6570\u636e\u5e93\uff0c\u8fd9\u4e2a\u7528\u6237\u81ea\u52a8\u7ee7\u627f\u6240\u6709\u6570\u636e\u5e93\u7684\u6743\u9650\u3002\u4e00\u4e9b\u7279\u5b9a\u7684\u670d\u52a1\u5668\u7aef\u547d\u4ee4\u4e5f\u53ea\u80fd\u4ece\u8fd9\u4e2a\u6570\u636e\u5e93\u8fd0\u884c\uff0c\u6bd4\u5982\u5217\u51fa\u6240\u6709\u7684\u6570\u636e\u5e93\u6216\u8005\u5173\u95ed\u670d\u52a1\u5668\u3002'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"local:")," \u8fd9\u4e2a\u6570\u636e\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u590d\u5236\uff0c\u53ef\u4ee5\u7528\u6765\u5b58\u50a8\u9650\u4e8e\u672c\u5730\u5355\u53f0\u670d\u52a1\u5668\u7684\u4efb\u610f\u96c6\u5408"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"config"),": \u5f53Mongo\u7528\u4e8e\u5206\u7247\u8bbe\u7f6e\u65f6\uff0cconfig\u6570\u636e\u5e93\u5728\u5185\u90e8\u4f7f\u7528\uff0c\u7528\u4e8e\u4fdd\u5b58\u5206\u7247\u7684\u76f8\u5173\u4fe1\u606f\u3002")),(0,l.kt)("h4",{id:"collection"},"collection"),(0,l.kt)("p",null,"\u6570\u636e\u5e93\u8868/\u96c6\u5408\n\u96c6\u5408\u5c31\u662f MongoDB \u6587\u6863\u7ec4\uff0c\u7c7b\u4f3c\u4e8e RDBMS \uff08\u5173\u7cfb\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff1aRelational Database Management System)\u4e2d\u7684\u8868\u683c\u3002\n\u96c6\u5408\u5b58\u5728\u4e8e\u6570\u636e\u5e93\u4e2d\uff0c\u96c6\u5408\u6ca1\u6709\u56fa\u5b9a\u7684\u7ed3\u6784\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u5728\u5bf9\u96c6\u5408\u53ef\u4ee5\u63d2\u5165\u4e0d\u540c\u683c\u5f0f\u548c\u7c7b\u578b\u7684\u6570\u636e\uff0c\u4f46\u901a\u5e38\u60c5\u51b5\u4e0b\u6211\u4eec\u63d2\u5165\u96c6\u5408\u7684\u6570\u636e\u90fd\u4f1a\u6709\u4e00\u5b9a\u7684\u5173\u8054\u6027\u3002"),(0,l.kt)("h4",{id:"document"},"document"),(0,l.kt)("p",null,"\u6570\u636e\u8bb0\u5f55\u884c/\u6587\u6863\n\u6587\u6863\u662f\u4e00\u7ec4\u952e\u503c(key-value)\u5bf9(\u5373 BSON)\u3002MongoDB \u7684\u6587\u6863\u4e0d\u9700\u8981\u8bbe\u7f6e\u76f8\u540c\u7684\u5b57\u6bb5\uff0c\u5e76\u4e14\u76f8\u540c\u7684\u5b57\u6bb5\u4e0d\u9700\u8981\u76f8\u540c\u7684\u6570\u636e\u7c7b\u578b\uff0c\u8fd9\u4e0e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u6709\u5f88\u5927\u7684\u533a\u522b\uff0c\u4e5f\u662f MongoDB \u975e\u5e38\u7a81\u51fa\u7684\u7279\u70b9\u3002"),(0,l.kt)("h3",{id:"\u96c6\u7fa4\u6982\u5ff5"},"\u96c6\u7fa4\u6982\u5ff5"),(0,l.kt)("p",null,"mongodb\u96c6\u7fa4\u6709\u4e09\u79cd\u6a21\u5f0f\uff0c\u4e3b\u4ece\u6a21\u5f0f\uff0c\u526f\u672c\u96c6\u6a21\u5f0f\u3001sharding\u5206\u7247\u6a21\u5f0f\u3002\u4e3b\u4ece\u6a21\u5f0f\u5b98\u7f51\u4e5f\u4e0d\u518d\u63a8\u8350\u4e0a\u751f\u4ea7\u73af\u5883\uff0c\u4e3b\u8981\u662f\u5b89\u5168\u6027\u592a\u4f4e\u3002\u526f\u672c\u96c6\u548csharding\u6a21\u5f0f\u76ee\u524d\u662f\u7528\u7684\u6700\u5e7f\u7684\u65b9\u6848\uff0c\u901a\u5e38\u8fd92\u79cd\u65b9\u6848\u7684\u9009\u62e9\u901a\u8fc7\u6570\u636e\u91cf\u548c\u5e76\u53d1\u6570\u6765\u6743\u8861\u3002\u5728GB\u7ea7\u522b\u7684\u57fa\u672c\u4e0a\u526f\u672c\u96c6\u65b9\u6848\u53ef\u6ee1\u8db3\uff0cTB\u7ea7\u522b\u6216\u4ee5\u4e0a\u91c7\u7528sharding\u6a21\u5f0f\uff0c\u89e3\u51b3\u5355\u673a\u5bb9\u91cf\u548c\u5355\u673a\u5e76\u53d1\u80fd\u529b\u3002\n\u8fd9\u4e24\u79cd\u65e2\u6709\u81ea\u5df1\u7684\u4f18\u52bf\u4e5f\u6709\u81ea\u5df1\u7684\u7f3a\u70b9\uff0c\u6bd4\u5982sharding\u6a21\u5f0f\u5206\u7247\u8d8a\u591a\uff0c\u6027\u80fd\u81ea\u7136\u4e0b\u964d\u8d8a\u591a\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u662f\u6240\u7528\u7684\u4f7f\u7528\u573a\u666f\u90fd\u5fc5\u987b\u4e0a\u96c6\u7fa4\uff0c\u8981\u56e0\u5730\u5236\u5b9c\u3002")),(0,l.kt)("h3",{id:"mongostat"},"mongostat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#\nmongostat -u admin -p Aa0123 --authenticationDatabase=admin\n")),(0,l.kt)("h3",{id:"mongotop"},"mongotop"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#\nmongotop -u admin -p Aa0123 --authenticationDatabase=admin\n")),(0,l.kt)("h3",{id:"\u5907\u4efd\u6062\u590d"},"\u5907\u4efd/\u6062\u590d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#\u5907\u4efd\u6240\u6709\u8868\nmongodump -h 172.18.92.170 --port 27017   -u \u7528\u6237\u540d -p \u5bc6\u7801 -o  /usr/local/mongodb/bak/\n\n#\u6062\u590d\u6240\u6709\u8868\nmongorestore  --port 27017 -u \u7528\u6237\u540d -p \u5bc6\u7801 --authenticationDatabase admin /usr/local/mongodb/bak/\n")),(0,l.kt)("h3",{id:"\u5206\u9875\u67e5\u8be2"},"\u5206\u9875\u67e5\u8be2"),(0,l.kt)("p",null,"mongo\u7684\u5206\u9875\u76f8\u5173\u529f\u80fd\u6027\u80fd\u8f83\u5dee\uff0c\u9488\u5bf9\u8fd9\u4e2a\u95ee\u9898\u7ecf\u8fc7\u7814\u7a76\u53d1\u73b0\u5728\u5206\u9875\u4e2dskip\u6570\u503c\u8d8a\u5927\u6027\u80fd\u5c31\u8d8a\u4f4e\uff0c\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\u8d8a\u591acount\u6027\u80fd\u5c31\u8d8a\u4f4e\u3002\u9488\u5bf9\u8fd92\u4e2a\u95ee\u9898\u6211\u4eec\u8fdb\u884c\u4e86\u8be6\u7ec6\u7684\u6d4b\u8bd5\uff0c\u5171\u603b\u7ed3\u51fa2\u79cd\u6548\u679c\u4e0d\u9519\u7684\u65b9\u6848\u3002"),(0,l.kt)("h4",{id:"\u65b9\u6848\u4e00"},"\u65b9\u6848\u4e00"),(0,l.kt)("p",null,"\u4f7f\u7528Top N\u7684\u65b9\u5f0f\u9650\u5236\u68c0\u7d22\u6570\u91cf\u6700\u59275000\u6761\uff0c\u4f8b\u5982\u7edf\u8ba1\u7b26\u5408\u6761\u4ef6\u7684\u62a5\u8b66\u8bb0\u5f55\u6761\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'db.AlarmHistory.find({\n  "did": {$in: [\n    "10000000000000001000"\n  ]},\n  "createTime":{ "$gte":1636949672, "$lt":1637381672}\n}).limit(5000).count(true);\n')),(0,l.kt)("p",null,"\u901a\u8fc7limit(5000)\u9650\u5236\u7edf\u8ba1\u6700\u5927\u503c\u5373\u4e3a5000\uff0c\u4ece\u800c\u63d0\u9ad8\u4e86count\u6548\u7387\uff0c\u4f46\u4e5f\u6709\u4e00\u4e9b\u5c40\u9650\u6027\u5c31\u662f\u53ea\u80fd\u7edf\u8ba1\u7b26\u5408\u6761\u4ef6\u7684\u6700\u540e5000\u6761\u6570\u636e\uff0c\u800c\u4e0d\u662f\u7b26\u5408\u6761\u4ef6\u7684\u5168\u90e8\u6570\u636e\u3002"),(0,l.kt)("h4",{id:"\u65b9\u6848\u4e8c"},"\u65b9\u6848\u4e8c"),(0,l.kt)("p",null,"\u901a\u8fc7\u52a0\u8f7d\u66f4\u591a\u7684\u65b9\u5f0f\u5206\u9875\uff0c\u5373\u67e5\u8be2\u4e0b\u4e00\u9875\u65f6\u9700\u8981\u4f20\u9012\u5f53\u524d\u9875\u7684\u6700\u540e\u4e00\u6761\u6570\u636e\u7684\u5e8f\u53f7\uff0c\u8fd9\u6837\u5c31\u7ed5\u8fc7count\u7edf\u8ba1\uff0c\u4f46\u8fd9\u79cd\u65b9\u5f0f\u7684\u5f0a\u7aef\u5728\u4e8e\u9875\u9762\u4e0d\u4f1a\u663e\u793a\u603b\u5171\u591a\u5c11\u6761\u6570\u636e\u3001\u5171\u5206\u591a\u5c11\u9875\u7b49\u6570\u636e\u3002"),(0,l.kt)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.runoob.com/mongodb/mongodb-tutorial.html"},"MongoDB\u6559\u7a0b"))))}s.isMDXComponent=!0}}]);