"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8351],{5680:(t,e,n)=>{n.d(e,{xA:()=>s,yg:()=>y});var r=n(6540);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,p=function(t,e){if(null==t)return{};var n,r,p={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(p[n]=t[n]);return p}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(p[n]=t[n])}return p}var o=r.createContext({}),i=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=i(t.components);return r.createElement(o.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,p=t.mdxType,a=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),l=i(n),m=p,y=l["".concat(o,".").concat(m)]||l[m]||d[m]||a;return n?r.createElement(y,c(c({ref:e},s),{},{components:n})):r.createElement(y,c({ref:e},s))}));function y(t,e){var n=arguments,p=e&&e.mdxType;if("string"==typeof t||p){var a=n.length,c=new Array(a);c[0]=m;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[l]="string"==typeof t?t:p,c[1]=u;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9906:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=n(8168),p=(n(6540),n(5680));const a={},c=void 0,u={unversionedId:"study/net/\u6293\u5305\u5de5\u5177",id:"study/net/\u6293\u5305\u5de5\u5177",title:"\u6293\u5305\u5de5\u5177",description:"tcpdump",source:"@site/docs/study/net/\u6293\u5305\u5de5\u5177.md",sourceDirName:"study/net",slug:"/study/net/\u6293\u5305\u5de5\u5177",permalink:"/docs/study/net/\u6293\u5305\u5de5\u5177",draft:!1,tags:[],version:"current",lastUpdatedAt:1728661701,formattedLastUpdatedAt:"2024\u5e7410\u670811\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"\u5f02\u5730\u7ec4\u7f51",permalink:"/docs/study/net/\u5f02\u5730\u7ec4\u7f51"},next:{title:"\u7f51\u7edc\u541e\u5410\u91cf\u6d4b\u91cf\u5de5\u5177",permalink:"/docs/study/net/\u7f51\u7edc\u541e\u5410\u91cf\u6d4b\u91cf\u5de5\u5177"}},o={},i=[{value:"tcpdump",id:"tcpdump",level:3},{value:"netstat",id:"netstat",level:3}],s={toc:i},l="wrapper";function d(t){let{components:e,...n}=t;return(0,p.yg)(l,(0,r.A)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,p.yg)("h3",{id:"tcpdump"},"tcpdump"),(0,p.yg)("p",null,"tcpdump \u662f\u4e00\u4e2a\u5f88\u5e38\u7528\u7684\u7f51\u7edc\u5305\u5206\u6790\u5de5\u5177\uff0c\u53ef\u4ee5\u7528\u6765\u663e\u793a\u901a\u8fc7\u7f51\u7edc\u4f20\u8f93\u5230\u672c\u7cfb\u7edf\u7684 TCP/IP \u4ee5\u53ca\u5176\u4ed6\u7f51\u7edc\u7684\u6570\u636e\u5305\u3002tcpdump \u4f7f\u7528 libpcap \u5e93\u6765\u6293\u53d6\u7f51\u7edc\u62a5\uff0c\u8fd9\u4e2a\u5e93\u5728\u51e0\u4e4e\u5728\u6240\u6709\u7684 Linux/Unix \u4e2d\u90fd\u6709\u3002"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre",className:"language-shell"},"tcpdump -i eth0   #\u6355\u83b7\u6307\u5b9a\u63a5\u53e3(\u7f51\u5361)\u7684\u6570\u636e\u5305 \u53ef\u901a\u8fc7 netstat -i\u67e5\u770b\u7f51\u5361\u8bbe\u5907\ntcpdump -i eth0 -c 3   #\u6355\u83b7\u6307\u5b9a\u4e2a\u6570\u7684\u6570\u636e\u5305\uff083\u4e2a\u6570\u636e\u5305\uff09\ntcpdump -A -i eth0    #\u7528ASCII\u7801\u683c\u5f0f\u8f93\u51fa\u6355\u83b7\u7684\u6570\u636e\u5305\ntcpdump -D    #\u663e\u793a\u53ef\u7528\u7684\u7cfb\u7edf\u63a5\u53e3\ntcpdump -XX -i eth0   #\u7528\u5341\u516d\u8fdb\u5236\u548cASCII\u7801\u683c\u5f0f\u663e\u793a\u6355\u83b7\u7684\u6570\u636e\u5305\ntcpdump -w tempDump.pcap -i eth0   #\u628a\u6355\u83b7\u7684\u6570\u636e\u5305\u5199\u5165\u5230\u4e00\u4e2a.pcap\u540e\u7f00\u7684\u6587\u4ef6\u4e2d\ntcpdump -r tempDump.pcap    #\u8bfb\u53d6\u6355\u83b7\u6570\u636e\u5305\u6587\u4ef6\u7684\u5185\u5bb9\ntcpdump -n -i eth0    # \u5355\u4e2a n \u8868\u793a\u4e0d\u89e3\u6790\u57df\u540d\uff0c\u76f4\u63a5\u663e\u793a IP\ntcpdump -i eth0 tcp    #\u6355\u83b7TCP\u7c7b\u578b\u7684\u6570\u636e\u5305\ntcpdump -i eth0 port 22   #\u6355\u83b7\u6307\u5b9a\u7aef\u53e3\uff08\u8fd9\u91cc\u662f22\uff09\u7684\u6570\u636e\u5305\ntcpdump -i eth0 src \u6e90ip\u5730\u5740   #\u6355\u83b7\u8bf7\u6c42\u6e90\u662f 192.169.12.101 \u7684\u6570\u636e\u5305\ntcpdump -i eth0 dst \u76ee\u6807ip\u5730\u5740   #\u6355\u83b7\u6307\u5b9a\u76ee\u7684IP\u7684\u6570\u636e\u5305\ntcpdump -i eth6 dst host \u76ee\u6807ip\u5730\u5740 and port 8800 -w data.pcap  #\u6293\u53d6\u6307\u5b9a\u7f51\u5361\uff0c\u6307\u5b9aIP\u548c\u7aef\u53e3\u7684\u6570\u636e\u5305 \u5e76\u5199\u5165\u5230data.pcap\u6587\u4ef6\u4e2d\ntcpdump host 192.168.12.101 and 192.168.1.201 -w out &  #\u540e\u53f0\u6293\u53d6\u4e24\u4e3b\u673a\u4e4b\u95f4\u7684\u6570\u636e\ntcpdump -nn #\u5355\u4e2a n \u8868\u793a\u4e0d\u89e3\u6790\u57df\u540d\uff0c\u76f4\u63a5\u663e\u793a IP\uff1b\u4e24\u4e2a n \u8868\u793a\u4e0d\u89e3\u6790\u57df\u540d\u548c\u7aef\u53e3\u3002\u8fd9\u6837\u4e0d\u4ec5\u65b9\u4fbf\u67e5\u770b IP \u548c\u7aef\u53e3\u53f7\uff0c\u800c\u4e14\u5728\u6293\u53d6\u5927\u91cf\u6570\u636e\u65f6\u975e\u5e38\u9ad8\u6548\uff0c\u56e0\u4e3a\u57df\u540d\u89e3\u6790\u4f1a\u964d\u4f4e\u6293\u53d6\u901f\u5ea6\n")),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/611443192"},"\u77e5\u4e4e\uff1atcpdump \u8be6\u89e3&\u5b9e\u6218"))),(0,p.yg)("h3",{id:"netstat"},"netstat"),(0,p.yg)("p",null,"netstat \u662f\u4e00\u4e2a\u76d1\u63a7 TCP/IP \u7f51\u7edc\u7684\u975e\u5e38\u6709\u7528\u7684\u5de5\u5177\uff0c\u5b83\u53ef\u4ee5\u663e\u793a\u8def\u7531\u8868\u3001\u7f51\u7edc\u8fde\u63a5\u4ee5\u53ca\u6bcf\u4e00\u4e2a\u7f51\u7edc\u63a5\u53e3\u8bbe\u5907\u7684\u72b6\u6001\u4fe1\u606f\u3002netstat \u7528\u4e8e\u663e\u793a\u4e0e IP\u3001TCP\u3001UDP \u548c ICMP \u534f\u8bae\u76f8\u5173\u7684\u7edf\u8ba1\u6570\u636e\uff0c\u4e00\u822c\u7528\u4e8e\u68c0\u9a8c\u672c\u673a\u5404\u7aef\u53e3\u7684\u7f51\u7edc\u8fde\u63a5\u60c5\u51b5\u3002"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre",className:"language-shell"},"netstat -at          #\u67e5\u770b\u5f53\u524d\u5df2\u7ecf\u5efa\u7acb\u7684tcp\u8fde\u63a5\nnetstat -au          #\u5217\u51fa\u6240\u6709 udp \u7aef\u53e3\nnetstat -lt          #\u53ea\u5217\u51fa\u6240\u6709\u76d1\u542c\u4e2d\u7684 tcp\u7c7b\u578b\u7684 \u7aef\u53e3\nnetstat -lu          #\u53ea\u5217\u51fa\u6240\u6709\u76d1\u542c\u4e2d\u7684 udp\u7c7b\u578b\u7684\u7aef\u53e3\nnetstat -antp        #\u67e5\u770b\u6240\u6709\u5df2\u7ecf\u5efa\u7acb\u7684tcp\u8fde\u63a5\uff0c\u5e76\u4e14\u57df\u540d\u4ee5\u6570\u5b57\u5f62\u5f0f\u663e\u793a\nnetstat -tupl        #\u67e5\u770b\u6240\u6709\u76d1\u542c\u7684tcp\u548cudp\u53ca\u8fdb\u7a0b\u540d\u4fe1\u606f\uff08udp\u4e0d\u80fd\u76d1\u542c\uff0c\u4f46\u53ef\u4ee5\u67e5\u770b\u662f\u5426\u5728\u5360\u7528\uff09\nnetstat -s           #\u663e\u793a\u6240\u6709\u7aef\u53e3\u7684\u7edf\u8ba1\u4fe1\u606f\nnetstat -st \u6216 -su   #\u663e\u793a TCP \u6216 UDP \u7aef\u53e3\u7684\u7edf\u8ba1\u4fe1\u606f\nnetstat -i           #\u67e5\u770b\u7f51\u5361\u63a5\u53e3\u4fe1\u606f\nnetstat -tulnp |grep nginx   #\u67e5\u770bnginx\u670d\u52a1\u7684\u7f51\u7edc\u4fe1\u606f\n")))}d.isMDXComponent=!0}}]);