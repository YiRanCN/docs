"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||c;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<c;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const c={sidebar_position:3},l="TCP \u8bbe\u5907\u63a5\u5165",a={unversionedId:"iotcloud/connect/tcp",id:"iotcloud/connect/tcp",title:"TCP \u8bbe\u5907\u63a5\u5165",description:"TCP \u63a5\u5165\u5e94\u8be5\u5c5e\u4e8e\u6700\u4e3a\u4f20\u7edf\u7684\u63a5\u5165\u65b9\u5f0f\uff0c\u534f\u8bae\u53ef\u4ee5\u91c7\u7528\u79c1\u6709\u534f\u8bae\u6216\u901a\u7528\u7684 Modbus \u7b49\u3002",source:"@site/docs/iotcloud/connect/tcp.md",sourceDirName:"iotcloud/connect",slug:"/iotcloud/connect/tcp",permalink:"/docs/iotcloud/connect/tcp",draft:!1,tags:[],version:"current",lastUpdatedAt:1691111432,formattedLastUpdatedAt:"2023\u5e748\u67084\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"iotCloudSidebar",previous:{title:"MQTT \u8bbe\u5907\u63a5\u5165",permalink:"/docs/iotcloud/connect/mqtt"},next:{title:"HTTP \u8bbe\u5907\u63a5\u5165",permalink:"/docs/iotcloud/connect/http"}},i={},u=[{value:"TCP \u6ce8\u518c\u5305",id:"tcp-\u6ce8\u518c\u5305",level:4},{value:"ModbusRTU \u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f",id:"modbusrtu-\u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f",level:4},{value:"\u4e8c\u7ea7\u5236\u79c1\u6709\u534f\u8bae \u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f",id:"\u4e8c\u7ea7\u5236\u79c1\u6709\u534f\u8bae-\u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f",level:4},{value:"\u6587\u672c\u79c1\u6709\u534f\u8bae \u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f",id:"\u6587\u672c\u79c1\u6709\u534f\u8bae-\u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f",level:4}],p={toc:u},d="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tcp-\u8bbe\u5907\u63a5\u5165"},"TCP \u8bbe\u5907\u63a5\u5165"),(0,o.kt)("p",null,"TCP \u63a5\u5165\u5e94\u8be5\u5c5e\u4e8e\u6700\u4e3a\u4f20\u7edf\u7684\u63a5\u5165\u65b9\u5f0f\uff0c\u534f\u8bae\u53ef\u4ee5\u91c7\u7528\u79c1\u6709\u534f\u8bae\u6216\u901a\u7528\u7684 Modbus \u7b49\u3002"),(0,o.kt)("p",null,"\u672c\u5e73\u53f0\u5b9e\u73b0\u4e86 ModbusRTU \u534f\u8bae\uff0c\u4ee5\u53ca\u652f\u6301\u79c1\u6709\u534f\u8bae\u7684 TCP \u4e8c\u8fdb\u5236\u3001TCP \u6587\u672c\u534f\u8bae\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7279\u522b\u8bf4\u660e"),"\uff0cTCP \u8bbe\u5907\u63a5\u5165\uff0c\u4e91\u7aef\u4f5c\u4e3a TCP \u7684\u670d\u52a1\u7aef\uff0c\u66b4\u6f0f\u7684 15000 \u7aef\u53e3\u53f7\uff0c\u8bbe\u5907\u7aef\u4f5c\u4e3a TCP \u7684\u5ba2\u6237\u7aef\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\uff0c\u8be5\u5e73\u53f0\u5b9e\u73b0\u4ee5\u4e0b\u4e09\u79cd\u6a21\u5f0f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ModbusRTU \u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"\u4e8c\u7ea7\u5236\u79c1\u6709\u534f\u8bae \u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"\u6587\u672c\u79c1\u6709\u534f\u8bae \u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f")),(0,o.kt)("h4",{id:"tcp-\u6ce8\u518c\u5305"},"TCP \u6ce8\u518c\u5305"),(0,o.kt)("p",null,"\u4e09\u79cd\u6a21\u5f0f\u7684\u8bbe\u5907\u7aef\u6ce8\u518c\u5230\u4e91\u7aef\u7684\u65b9\u5f0f\u662f\u4e00\u6837\u7684\u3002"),(0,o.kt)("p",null,"\u8bbe\u5907\u7aef\u53d1\u8d77\u5230\u4e91\u7aef\u7684 TCP \u7684\u8fde\u63a5\u6210\u529f\u540e\uff0c\u5e94\u8be5\u7acb\u5373\u53d1\u9001\u6ce8\u518c\u5305\uff0c\u6ce8\u518c\u5305\u7684\u683c\u5f0f\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"${device.code}&${device.pwd}"),"\u3002"),(0,o.kt)("p",null,"\u4e91\u7aef\u9a8c\u8bc1\u6210\u529f\u540e\uff0c\u540e\u7eed\u8bbe\u5907\u7aef\u53d1\u9001\u7684\u6d88\u606f\u624d\u4f1a\u88ab\u6b63\u5e38\u7684\u89e3\u6790\uff0c\u5426\u5219\u4e91\u7aef\u4f1a\u79bb\u5f00\u65ad\u6389 TCP \u8fde\u63a5\u3002"),(0,o.kt)("h4",{id:"modbusrtu-\u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f"},"ModbusRTU \u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f"),(0,o.kt)("p",null,"\u9009\u62e9\u4e86\u6b64\u79cd\u534f\u8bae\u683c\u5f0f\u7684\u8bbe\u5907\uff0c\u5e94\u8be5\u914d\u7f6e ",(0,o.kt)("strong",{parentName:"p"},"Modbus \u914d\u7f6e")," \uff0c\u8ba9\u5c5e\u6027\u548c\u5bc4\u5b58\u5668\u5efa\u7acb\u5173\u7cfb\uff0c\u4ee5\u4fdd\u8bc1\u4e91\u7aef\u53ef\u4ee5\u6839\u636e\u5173\u7cfb\u53bb\u8f6e\u8be2\u8bbe\u5907\u7684\u6570\u636e\u3002"),(0,o.kt)("h4",{id:"\u4e8c\u7ea7\u5236\u79c1\u6709\u534f\u8bae-\u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f"},"\u4e8c\u7ea7\u5236\u79c1\u6709\u534f\u8bae \u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f"),(0,o.kt)("h4",{id:"\u6587\u672c\u79c1\u6709\u534f\u8bae-\u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f"},"\u6587\u672c\u79c1\u6709\u534f\u8bae \u4e91\u7aef\u8f6e\u8be2\u6a21\u5f0f"))}s.isMDXComponent=!0}}]);