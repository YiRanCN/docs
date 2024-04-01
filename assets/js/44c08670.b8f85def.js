"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9489],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=o(t),y=i,g=c["".concat(u,".").concat(y)]||c[y]||d[y]||l;return t?r.createElement(g,p(p({ref:n},s),{},{components:t})):r.createElement(g,p({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,p=new Array(l);p[0]=y;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[c]="string"==typeof e?e:i,p[1]=a;for(var o=2;o<l;o++)p[o]=t[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var r=t(8168),i=(t(6540),t(5680));const l={},p="Linux ip \u547d\u4ee4",a={unversionedId:"study/net/ip",id:"study/net/ip",title:"Linux ip \u547d\u4ee4",description:"ip \u547d\u4ee4\u6765\u81ea iproute \u8f6f\u4ef6\u5305\uff0c\u8f6f\u4ef6\u5305\u63d0\u4f9b\u4e86\u5f88\u591a\u547d\u4ee4\uff08rpm -ql iproute |grep bin\uff09\uff0c\u5982 ss \u547d\u4ee4\u3001bridge\uff0c\u8fd9\u4e9b\u547d\u4ee4\u53ef\u4ee5\u5b8c\u5168\u66ff\u4ee3 ifconfig\u3001netstat\u3001route \u7b49\u547d\u4ee4\u3002",source:"@site/docs/study/net/ip.md",sourceDirName:"study/net",slug:"/study/net/ip",permalink:"/docs/study/net/ip",draft:!1,tags:[],version:"current",lastUpdatedAt:1711958695,formattedLastUpdatedAt:"2024\u5e744\u67081\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"UDP",permalink:"/docs/study/net/UDP"},next:{title:"Linux iptables \u9632\u706b\u5899",permalink:"/docs/study/net/iptables"}},u={},o=[{value:"ip netns",id:"ip-netns",level:3},{value:"ip address",id:"ip-address",level:3},{value:"ip route",id:"ip-route",level:3},{value:"ip link",id:"ip-link",level:3},{value:"ip neigh",id:"ip-neigh",level:3}],s={toc:o},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"linux-ip-\u547d\u4ee4"},"Linux ip \u547d\u4ee4"),(0,i.yg)("p",null,"ip \u547d\u4ee4\u6765\u81ea iproute \u8f6f\u4ef6\u5305\uff0c\u8f6f\u4ef6\u5305\u63d0\u4f9b\u4e86\u5f88\u591a\u547d\u4ee4\uff08rpm -ql iproute |grep bin\uff09\uff0c\u5982 ss \u547d\u4ee4\u3001bridge\uff0c\u8fd9\u4e9b\u547d\u4ee4\u53ef\u4ee5\u5b8c\u5168\u66ff\u4ee3 ifconfig\u3001netstat\u3001route \u7b49\u547d\u4ee4\u3002"),(0,i.yg)("p",null,"ip \u547d\u4ee4\u6709\u5f88\u591a\u5b50\u547d\u4ee4\uff0c\u53ef\u4ee5\u901a\u8fc7 man ip \u67e5\u770b"),(0,i.yg)("p",null,"link - address - addrlabel - route - rule - neigh - ntable - tunnel - tuntap - maddress - mroute - mrule - monitor - xfrm - netns - l2tp - tcp_metrics -\ntoken - macsec"),(0,i.yg)("p",null,"\u67e5\u770b\u547d\u4ee4\u7684\u7528\u6cd5\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ip netns help"),(0,i.yg)("li",{parentName:"ul"},"ip address help"),(0,i.yg)("li",{parentName:"ul"},"ip route help"),(0,i.yg)("li",{parentName:"ul"},"ip link help"),(0,i.yg)("li",{parentName:"ul"},"ip neigh help")),(0,i.yg)("p",null,"\u67e5\u770b\u5e2e\u52a9\u6587\u6863\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"man ip-netns"),(0,i.yg)("li",{parentName:"ul"},"man ip-address"),(0,i.yg)("li",{parentName:"ul"},"man ip-route"),(0,i.yg)("li",{parentName:"ul"},"man ip-link"),(0,i.yg)("li",{parentName:"ul"},"man ip-neighbour")),(0,i.yg)("p",null,"\u66f4\u591a\u547d\u4ee4\u7684\u5e2e\u52a9\u6587\u6863\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\uff1a"),(0,i.yg)("p",null,"rpm -ql iproute |grep man"),(0,i.yg)("h3",{id:"ip-netns"},"ip netns"),(0,i.yg)("p",null,"\u67e5\u770b\u6240\u6709\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\uff0c\u7528\u4e8e\u9694\u79bb\u7f51\u7edc"),(0,i.yg)("h3",{id:"ip-address"},"ip address"),(0,i.yg)("p",null,"address \u53ef\u4ee5\u7b80\u5199\u4e3a a \u6216 ad \u6216 add \u6216 addr"),(0,i.yg)("p",null,"\u67e5\u770b ip"),(0,i.yg)("h3",{id:"ip-route"},"ip route"),(0,i.yg)("p",null,"route \u53ef\u4ee5\u7b80\u5199\u4e3a r \u6216 ro \u6216 rou"),(0,i.yg)("p",null,"\u67e5\u770b\u8def\u7531"),(0,i.yg)("h3",{id:"ip-link"},"ip link"),(0,i.yg)("p",null,"link \u8868\u793a\u94fe\u8def\u5c42\u3002link \u53ef\u4ee5\u7b80\u5199\u4e3a l \u6216 li \u6216 lin"),(0,i.yg)("p",null,"ip l\uff1a\u67e5\u770b\u6240\u6709\u7684\u7f51\u7edc\u8bbe\u5907\uff08\u56e0\u4e3a\u662f\u94fe\u8def\u5c42\uff0c\u6240\u4ee5\u53ea\u663e\u793a MAC \u5730\u5740\uff0c\u4e0d\u663e\u793a IP \u5730\u5740\uff09\u3002\u5176\u4e2d\uff0clo\u3001ens33 \u7b49\u662f\u771f\u5b9e\u7684\u7269\u7406\u8bbe\u5907\uff0c\u901a\u8fc7 ip l add \u547d\u4ee4\u521b\u5efa\u7684\u90fd\u662f\u865a\u62df\u8bbe\u5907\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s/sSQFINJ8RO8Nc4XtcyQIjQ"},"\u8f7b\u677e\u7406\u89e3 Docker \u7f51\u7edc\u865a\u62df\u5316\u57fa\u7840\u4e4b veth \u8bbe\u5907\uff01")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s?__biz=MjM5Njg5NDgwNA==&mid=2247485146&idx=1&sn=e5bfc79ba915df1f6a8b32b87ef0ef78&scene=21#wechat_redirect"},"25 \u5f20\u56fe\uff0c\u4e00\u4e07\u5b57\uff0c\u62c6\u89e3 Linux \u7f51\u7edc\u5305\u53d1\u9001\u8fc7\u7a0b")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s?__biz=MjM5Njg5NDgwNA==&mid=2247484058&idx=1&sn=a2621bc27c74b313528eefbc81ee8c0f&scene=21#wechat_redirect"},"\u56fe\u89e3 Linux \u7f51\u7edc\u5305\u63a5\u6536\u8fc7\u7a0b"))),(0,i.yg)("h3",{id:"ip-neigh"},"ip neigh"),(0,i.yg)("p",null,"neigh \u53ef\u4ee5\u7b80\u5199\u4e3a n \u6216 ne \u6216 nei"),(0,i.yg)("p",null,"ip n\uff1a\u67e5\u770b\u5185\u6838\u4e2d\u8bb0\u5f55\u7684 ARP \u8868\uff08\u4e5f\u5c31\u662f\u94fe\u8def\u5c42\u76f4\u8fde\u7684\u4e3b\u673a\u7684 IP \u548c MAC \u5730\u5740\uff0c\u4e0d\u4e00\u5b9a\u51c6\u786e\uff0c\u9700\u8981\u4e4b\u524d\u8fde\u8fc7\uff09\u3002"))}d.isMDXComponent=!0}}]);