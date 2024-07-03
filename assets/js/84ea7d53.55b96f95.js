"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[0],{5680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>m});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),u=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},y=function(e){var t=u(e.components);return a.createElement(g.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),o=u(n),c=r,m=o["".concat(g,".").concat(c)]||o[c]||d[c]||l;return n?a.createElement(m,p(p({ref:t},y),{},{components:n})):a.createElement(m,p({ref:t},y))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=c;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[o]="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(8168),r=(n(6540),n(5680));const l={},p=void 0,i={unversionedId:"study/net/vpn",id:"study/net/vpn",title:"vpn",description:"\u7b80\u4ecb",source:"@site/docs/study/net/vpn.md",sourceDirName:"study/net",slug:"/study/net/vpn",permalink:"/docs/study/net/vpn",draft:!1,tags:[],version:"current",lastUpdatedAt:1719996337,formattedLastUpdatedAt:"2024\u5e747\u67083\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"tuntap",permalink:"/docs/study/net/tuntap"},next:{title:"\u4ee3\u7406",permalink:"/docs/study/net/\u4ee3\u7406"}},g={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u5206\u7c7b",id:"\u5206\u7c7b",level:3},{value:"\u6309 VPN \u7684\u534f\u8bae\u5206\u7c7b",id:"\u6309-vpn-\u7684\u534f\u8bae\u5206\u7c7b",level:4},{value:"\u5206\u7c7b\u6bd4\u8f83",id:"\u5206\u7c7b\u6bd4\u8f83",level:4},{value:"OpenVPN",id:"openvpn",level:3},{value:"PPTP",id:"pptp",level:3},{value:"L2TP",id:"l2tp",level:3},{value:"IKEv2/IPSec",id:"ikev2ipsec",level:3},{value:"SSTP",id:"sstp",level:3},{value:"WireGuard",id:"wireguard",level:3},{value:"Shadowsocks",id:"shadowsocks",level:3},{value:"\u5bf9\u6bd4",id:"\u5bf9\u6bd4",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],y={toc:u},o="wrapper";function d(e){let{components:t,...l}=e;return(0,r.yg)(o,(0,a.A)({},y,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.yg)("p",null,"\u865a\u62df\u4e13\u7528\u7f51\u7edc(VPN)\u7684\u529f\u80fd\u662f\uff1a\u5728\u516c\u7528\u7f51\u7edc\u4e0a\u5efa\u7acb\u4e13\u7528\u7f51\u7edc\uff0c\u8fdb\u884c\u52a0\u5bc6\u901a\u8baf\u3002\u5728\u4f01\u4e1a\u7f51\u7edc\u4e2d\u6709\u5e7f\u6cdb\u5e94\u7528\u3002VPN \u7f51\u5173\u901a\u8fc7\u5bf9\u6570\u636e\u5305\u7684\u52a0\u5bc6\u548c\u6570\u636e\u5305\u76ee\u6807\u5730\u5740\u7684\u8f6c\u6362\u5b9e\u73b0\u8fdc\u7a0b\u8bbf\u95ee\u3002VPN \u53ef\u901a\u8fc7\u670d\u52a1\u5668\u3001\u786c\u4ef6\u3001\u8f6f\u4ef6\u7b49\u591a\u79cd\u65b9\u5f0f\u5b9e\u73b0\u3002"),(0,r.yg)("p",null,"VPN \u5c5e\u4e8e\u8fdc\u7a0b\u8bbf\u95ee\u6280\u672f\uff0c\u7b80\u5355\u5730\u8bf4\u5c31\u662f\u5229\u7528\u516c\u7528\u7f51\u7edc\u67b6\u8bbe\u4e13\u7528\u7f51\u7edc\u3002\u4f8b\u5982\u67d0\u516c\u53f8\u5458\u5de5\u51fa\u5dee\u5230\u5916\u5730\uff0c\u4ed6\u60f3\u8bbf\u95ee\u4f01\u4e1a\u5185\u7f51\u7684\u670d\u52a1\u5668\u8d44\u6e90\uff0c\u8fd9\u79cd\u8bbf\u95ee\u5c31\u5c5e\u4e8e\u8fdc\u7a0b\u8bbf\u95ee\u3002"),(0,r.yg)("p",null,"\u8ba9\u5916\u5730\u5458\u5de5\u8bbf\u95ee\u5230\u5185\u7f51\u8d44\u6e90\uff0c\u5229\u7528 VPN \u7684\u89e3\u51b3\u65b9\u6cd5\u5c31\u662f\u5728\u5185\u7f51\u4e2d\u67b6\u8bbe\u4e00\u53f0 VPN \u670d\u52a1\u5668\u3002\u5916\u5730\u5458\u5de5\u5728\u5f53\u5730\u8fde\u4e0a\u4e92\u8054\u7f51\u540e\uff0c\u901a\u8fc7\u4e92\u8054\u7f51\u8fde\u63a5 VPN \u670d\u52a1\u5668\uff0c\u7136\u540e\u901a\u8fc7 VPN \u670d\u52a1\u5668\u8fdb\u5165\u4f01\u4e1a\u5185\u7f51\u3002\u4e3a\u4e86\u4fdd\u8bc1\u6570\u636e\u5b89\u5168\uff0cVPN \u670d\u52a1\u5668\u548c\u5ba2\u6237\u673a\u4e4b\u95f4\u7684\u901a\u8baf\u6570\u636e\u90fd\u8fdb\u884c\u4e86\u52a0\u5bc6\u5904\u7406\u3002\u6709\u4e86\u6570\u636e\u52a0\u5bc6\uff0c\u5c31\u53ef\u4ee5\u8ba4\u4e3a\u6570\u636e\u662f\u5728\u4e00\u6761\u4e13\u7528\u7684\u6570\u636e\u94fe\u8def\u4e0a\u8fdb\u884c\u5b89\u5168\u4f20\u8f93\uff0c\u5c31\u5982\u540c\u4e13\u95e8\u67b6\u8bbe\u4e86\u4e00\u4e2a\u4e13\u7528\u7f51\u7edc\u4e00\u6837\uff0c\u4f46\u5b9e\u9645\u4e0a VPN \u4f7f\u7528\u7684\u662f\u4e92\u8054\u7f51\u4e0a\u7684\u516c\u7528\u94fe\u8def\uff0c\u56e0\u6b64 VPN \u79f0\u4e3a\u865a\u62df\u4e13\u7528\u7f51\u7edc\uff0c\u5176\u5b9e\u8d28\u4e0a\u5c31\u662f\u5229\u7528\u52a0\u5bc6\u6280\u672f\u5728\u516c\u7f51\u4e0a\u5c01\u88c5\u51fa\u4e00\u4e2a\u6570\u636e\u901a\u8baf\u96a7\u9053\u3002\u6709\u4e86 VPN \u6280\u672f\uff0c\u7528\u6237\u65e0\u8bba\u662f\u5728\u5916\u5730\u51fa\u5dee\u8fd8\u662f\u5728\u5bb6\u4e2d\u529e\u516c\uff0c\u53ea\u8981\u80fd\u4e0a\u4e92\u8054\u7f51\u5c31\u80fd\u5229\u7528 VPN \u8bbf\u95ee\u5185\u7f51\u8d44\u6e90\uff0c\u8fd9\u5c31\u662f VPN \u5728\u4f01\u4e1a\u4e2d\u5e94\u7528\u5f97\u5982\u6b64\u5e7f\u6cdb\u7684\u539f\u56e0\u3002"),(0,r.yg)("h3",{id:"\u5206\u7c7b"},"\u5206\u7c7b"),(0,r.yg)("h4",{id:"\u6309-vpn-\u7684\u534f\u8bae\u5206\u7c7b"},"\u6309 VPN \u7684\u534f\u8bae\u5206\u7c7b"),(0,r.yg)("p",null,"VPN \u7684\u96a7\u9053\u534f\u8bae\u4e3b\u8981\u6709\u4e09\u79cd\uff0cPPTP\u3001L2TP \u548c IPSec\uff0c\u5176\u4e2d PPTP \u548c L2TP \u534f\u8bae\u5de5\u4f5c\u5728 OSI \u6a21\u578b\u7684\u7b2c\u4e8c\u5c42\uff0c\u53c8\u79f0\u4e3a\u4e8c\u5c42\u96a7\u9053\u534f\u8bae\uff1bIPSec \u662f\u7b2c\u4e09\u5c42\u96a7\u9053\u534f\u8bae\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"OSI \u6a21\u578b",src:n(6323).A,width:"640",height:"273"})),(0,r.yg)("h4",{id:"\u5206\u7c7b\u6bd4\u8f83"},"\u5206\u7c7b\u6bd4\u8f83"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"VPN \u5206\u7c7b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u901f\u5ea6"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5b89\u5168"),(0,r.yg)("th",{parentName:"tr",align:null},"\u52a0\u5bc6"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"OpenVPN"),(0,r.yg)("td",{parentName:"tr",align:null},"\u826f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f18"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f18")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PPTP"),(0,r.yg)("td",{parentName:"tr",align:null},"\u826f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5dee"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5dee")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"L2TP"),(0,r.yg)("td",{parentName:"tr",align:null},"\u826f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5dee"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5dee\uff08\u9664\u975e\u548c IPSec \u914d\u5408\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IKEv2/IPSec"),(0,r.yg)("td",{parentName:"tr",align:null},"\u826f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f18"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f18")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SSTP"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5dee"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5dee"),(0,r.yg)("td",{parentName:"tr",align:null},"\u826f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WireGuard"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f18"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f18"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f18")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Shadowsocks"),(0,r.yg)("td",{parentName:"tr",align:null},"\u826f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u826f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u826f")))),(0,r.yg)("h3",{id:"openvpn"},"OpenVPN"),(0,r.yg)("p",null,"OpenVPN \u662f\u4e00\u4e2a\u57fa\u4e8e OpenSSL \u5e93\u7684",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"\u5e94\u7528\u5c42"))," VPN \u5b9e\u73b0\u3002\u548c\u4f20\u7edf VPN \u76f8\u6bd4\uff0c\u5b83\u7684\u4f18\u70b9\u662f\u7b80\u5355\u6613\u7528\u3002"),(0,r.yg)("p",null,"OpenVpn \u7684\u6280\u672f\u6838\u5fc3\u662f\u865a\u62df\u7f51\u5361\uff0c\u5176\u6b21\u662f SSL \u534f\u8bae\u5b9e\u73b0\u3002"),(0,r.yg)("p",null,"\u5bf9\u865a\u62df\u7f51\u5361\u53ca\u5176\u5728 OpenVpn \u7684\u4e2d\u7684\u5de5\u4f5c\u673a\u7406\u8fdb\u884c\u4ecb\u7ecd\uff1a"),(0,r.yg)("p",null,"\u865a\u62df\u7f51\u5361\u662f\u4f7f\u7528\u7f51\u7edc\u5e95\u5c42\u7f16\u7a0b\u6280\u672f\u5b9e\u73b0\u7684\u4e00\u4e2a\u9a71\u52a8\u8f6f\u4ef6\uff0c\u5b89\u88c5\u540e\u5728\u4e3b\u673a\u4e0a\u591a\u51fa\u73b0\u4e00\u4e2a\u7f51\u5361\uff0c\u53ef\u4ee5\u50cf\u5176\u5b83\u7f51\u5361\u4e00\u6837\u8fdb\u884c\u914d\u7f6e\u3002\u670d\u52a1\u7a0b\u5e8f\u53ef\u4ee5\u5728\u5e94\u7528\u5c42\u6253\u5f00\u865a\u62df\u7f51\u5361\uff0c\u5982\u679c\u5e94\u7528\u8f6f\u4ef6\uff08\u5982 IE\uff09\u5411\u865a\u62df\u7f51\u5361\u53d1\u9001\u6570\u636e\uff0c\u5219\u670d\u52a1\u7a0b\u5e8f\u53ef\u4ee5\u8bfb\u53d6\u5230\u8be5\u6570\u636e\uff0c\u5982\u679c\u670d\u52a1\u7a0b\u5e8f\u5199\u5408\u9002\u7684\u6570\u636e\u5230\u865a\u62df\u7f51\u5361\uff0c\u5e94\u7528\u8f6f\u4ef6\u4e5f\u53ef\u4ee5\u63a5\u6536\u5f97\u5230\u3002\u865a\u62df\u7f51\u5361\u5728\u5f88\u591a\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0b\u90fd\u6709\u76f8\u5e94\u7684\u5b9e\u73b0\uff0c\u8fd9\u4e5f\u662f OpenVpn \u80fd\u591f\u8de8\u5e73\u53f0\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u7406\u7531\u3002"),(0,r.yg)("p",null,"\u5728 OpenVpn \u4e2d\uff0c\u5982\u679c\u7528\u6237\u8bbf\u95ee\u4e00\u4e2a\u8fdc\u7a0b\u7684\u865a\u62df\u5730\u5740\uff08\u5c5e\u4e8e\u865a\u62df\u7f51\u5361\u914d\u7528\u7684\u5730\u5740\u7cfb\u5217\uff0c\u533a\u522b\u4e8e\u771f\u5b9e\u5730\u5740\uff09\uff0c\u5219\u64cd\u4f5c\u7cfb\u7edf\u4f1a\u901a\u8fc7\u8def\u7531\u673a\u5236\u5c06\u6570\u636e\u5305\uff08TUN \u6a21\u5f0f\uff09\u6216\u6570\u636e\u5e27\uff08TAP \u6a21\u5f0f\uff09\u53d1\u9001\u5230\u865a\u62df\u7f51\u5361\u4e0a\uff0c\u670d\u52a1\u7a0b\u5e8f\u63a5\u6536\u8be5\u6570\u636e\u5e76\u8fdb\u884c\u76f8\u5e94\u7684\u5904\u7406\u540e\uff0c\u901a\u8fc7 SOCKET \u4ece\u5916\u7f51\u4e0a\u53d1\u9001\u51fa\u53bb\uff0c\u8fdc\u7a0b\u670d\u52a1\u7a0b\u5e8f\u901a\u8fc7 SOCKET \u4ece\u5916\u7f51\u4e0a\u63a5\u6536\u6570\u636e\uff0c\u5e76\u8fdb\u884c\u76f8\u5e94\u7684\u5904\u7406\u540e\uff0c\u53d1\u9001\u7ed9\u865a\u62df\u7f51\u5361\uff0c\u5219\u5e94\u7528\u8f6f\u4ef6\u53ef\u4ee5\u63a5\u6536\u5230\uff0c\u5b8c\u6210\u4e86\u4e00\u4e2a\u5355\u5411\u4f20\u8f93\u7684\u8fc7\u7a0b\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://community.openvpn.net/openvpn"},"https://community.openvpn.net/openvpn")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://pritunl.com/"},"https://pritunl.com/")),(0,r.yg)("h3",{id:"pptp"},"PPTP"),(0,r.yg)("p",null,"\u7531\u5fae\u8f6f\u548c\u5176\u4ed6\u516c\u53f8\u4e8e 1999 \u5e74\u5f00\u53d1\uff0c\u5e94\u7528\u975e\u5e38\u5e7f\u6cdb\uff0c\u4f46\u662f\u73b0\u5728\u57fa\u672c\u88ab\u8ba4\u4e3a\u662f\u4e0d\u5b89\u5168\u7684\u3001\u8fc7\u65f6\u7684\u3002"),(0,r.yg)("h3",{id:"l2tp"},"L2TP"),(0,r.yg)("p",null,"\u7b2c\u4e8c\u5c42\u96a7\u9053\u534f\u8bae\u5927\u7ea6\u4e0e PPTP \u540c\u65f6\u5f00\u53d1\u3002\u4f5c\u4e3a\u4e00\u79cd\u96a7\u9053\u534f\u8bae\uff0c\u5b83\u672c\u8eab\u4e0d\u52a0\u5bc6\u6570\u636e\uff0c\u56e0\u6b64\u901a\u5e38\u4e0e IPSec \u914d\u5bf9\u3002\u8fd9\u79cd\u6a21\u5757\u5316\u4f7f\u5b83\u80fd\u591f\u5229\u7528 AES \u52a0\u5bc6\u3002"),(0,r.yg)("p",null,"\u548c PPTP \u5dee\u4e0d\u591a\uff0c\u5e94\u7528\u4e5f\u5f88\u5e7f\u6cdb\uff0c\u4f46\u662f\u5b58\u5728\u4e00\u5b9a\u7684\u9632\u706b\u5899\u95ee\u9898\u3002"),(0,r.yg)("h3",{id:"ikev2ipsec"},"IKEv2/IPSec"),(0,r.yg)("p",null,"\u601d\u79d1\u548c\u5fae\u8f6f\u5f00\u53d1\uff0c\u4e5f\u6709\u5f88\u591a\u5f00\u6e90\u7248\u672c\uff0c\u5bf9\u79fb\u52a8\u7aef\u652f\u6301\u66f4\u52a0\u53cb\u597d\u4e00\u4e9b\u3002"),(0,r.yg)("h3",{id:"sstp"},"SSTP"),(0,r.yg)("p",null,"\u662f\u5fae\u8f6f\u5f00\u53d1\u7528\u4e8e\u66ff\u4ee3 PPTP \u7684\u65b0\u534f\u8bae\uff0c\u4f46\u662f\u4e0d\u662f\u5f00\u6e90\u7684\u3002"),(0,r.yg)("h3",{id:"wireguard"},"WireGuard"),(0,r.yg)("p",null,"WireGuard \u662f\u6700\u65b0\u7684\uff0c\u4e8e 2016 \u5e74\u5f00\u53d1\u3002\u4ed6\u7684\u4ee3\u7801\u91cf\u975e\u5e38\u5c0f\uff0c\u53ea\u6709 4K\uff0c\u4ee3\u7801\u91cf\u5c0f\uff0c\u610f\u5473\u7740\u597d\u7ef4\u62a4\u4ee5\u53ca\u5bb9\u6613\u53d1\u73b0\u95ee\u9898\u3002\u5f00\u6e90\u3002"),(0,r.yg)("p",null,"\u53c8\u5feb\u53c8\u5b89\u5168\uff0c\u4f46\u662f\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u7684\u7248\u672c\u8981\u6c42\u8f83\u9ad8\u3002"),(0,r.yg)("h3",{id:"shadowsocks"},"Shadowsocks"),(0,r.yg)("p",null,"Shadowsocks \u662f\u4e00\u4e2a\u514d\u8d39\u7684\u5f00\u6e90\u52a0\u5bc6\u534f\u8bae\u9879\u76ee\u3002\u5b83\u57fa\u4e8e SOCKS5 \u4ee3\u7406\uff0c\u5373 SOCKS \u534f\u8bae\u7684\u7b2c\u4e94\u4e2a\u7248\u672c\uff0c\u7528\u4e8e\u901a\u8fc7\u4ee3\u7406\u8def\u7531\u60a8\u7684\u6d41\u91cf\u3002"),(0,r.yg)("p",null,"Shadowsocks \u65e8\u5728\u63d0\u4f9b\u8fd9\u79cd\u52a0\u5bc6\uff0c\u56e0\u4e3a\u5b83\u7684\u76ee\u7684\u53ea\u6709\u4e00\u4e2a\uff1a\u7ed5\u8fc7\u4e2d\u56fd\u9632\u706b\u957f\u57ce\u3002"),(0,r.yg)("h3",{id:"\u5bf9\u6bd4"},"\u5bf9\u6bd4"),(0,r.yg)("p",null,"IPSec \u534f\u8bae\u5de5\u4f5c\u5728 OSI \u6a21\u578b\u7684\u7b2c\u4e09\u5c42\uff0c\u4f7f\u5176\u5728\u5355\u72ec\u4f7f\u7528\u65f6\u9002\u4e8e\u4fdd\u62a4\u57fa\u4e8e TCP \u6216 UDP \u7684\u534f\u8bae\uff08\u5982\u5b89\u5168\u5957\u63a5\u5b50\u5c42\uff08SSL\uff09\u5c31\u4e0d\u80fd\u4fdd\u62a4 UDP \u5c42\u7684\u901a\u4fe1\u6d41\uff09\u3002\u8fd9\u5c31\u610f\u5473\u7740\uff0c\u4e0e\u4f20\u8f93\u5c42\u6216\u66f4\u9ad8\u5c42\u7684\u534f\u8bae\u76f8\u6bd4\uff0cIPSec \u534f\u8bae\u5fc5\u987b\u5904\u7406\u53ef\u9760\u6027\u548c\u5206\u7247\u7684\u95ee\u9898\uff0c\u8fd9\u540c\u65f6\u4e5f\u589e\u52a0\u4e86\u5b83\u7684\u590d\u6742\u6027\u548c\u5904\u7406\u5f00\u9500\u3002\u76f8\u5bf9\u800c\u8a00\uff0cSSL/TLS \u4f9d\u9760\u66f4\u9ad8\u5c42\u7684 TCP\uff08OSI \u7684\u7b2c\u56db\u5c42\uff09\u6765\u7ba1\u7406\u53ef\u9760\u6027\u548c\u5206\u7247\u3002"),(0,r.yg)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://baike.baidu.com/item/%E8%99%9A%E6%8B%9F%E4%B8%93%E7%94%A8%E7%BD%91%E7%BB%9C/8747869?fromtitle=VPN&fromid=382304&fr=aladdin#reference-2"},"\u767e\u5ea6\u767e\u79d1-VPN")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://baike.baidu.com/item/OpenVPN/10718662?fr=aladdin"},"\u767e\u5ea6\u767e\u79d1-OpenVPN")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.w3cschool.cn/completemessageformat/"},"w3cshool-\u62a5\u6587\u683c\u5f0f\u5927\u5168"))))}d.isMDXComponent=!0},6323:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/osi-795934f0caf8f9ab1c108a754fd16564.webp"}}]);