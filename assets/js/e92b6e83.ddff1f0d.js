"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[817],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=i(n),y=l,f=d["".concat(s,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,c=new Array(a);c[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:l,c[1]=o;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var r=n(8168),l=(n(6540),n(5680));const a={},c=void 0,o={unversionedId:"study/db/NoSQL/Etcd",id:"study/db/NoSQL/Etcd",title:"Etcd",description:"ETCD\u662fCoreOs\u516c\u53f8\u53d1\u5e03\u7684\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u3001\u9ad8\u53ef\u7528\u7684\u3001key-value\u5b58\u50a8\u7684\u6570\u636e\u5e93\u3002\u57fa\u4e8eGo\u8bed\u8a00\u5b9e\u73b0\uff0ck8s\u4e2d\u4e5f\u4f7f\u7528\u4e86ETCD\u4f5c\u4e3a\u6570\u636e\u5e93\u3002\u4e3b\u8981\u7528\u4e8e\u5171\u4eab\u914d\u7f6e\u548c\u670d\u52a1\u53d1\u73b0\u3002\u76f8\u5bf9\u4e8ezookeeper\u91c7\u7528\u7684Paxos\uff0cETCD\u91c7\u7528\u7684\u662fRaft\u7b97\u6cd5\uff0c\u8be5\u7b97\u6cd5\u5177\u5907\u7684\u6027\u80fd\u66f4\u4f73\u3001\u6570\u636e\u4e00\u81f4\u6027\u5f3a\u7b49\u4f18\u70b9\u3002",source:"@site/docs/study/db/NoSQL/Etcd.md",sourceDirName:"study/db/NoSQL",slug:"/study/db/NoSQL/Etcd",permalink:"/docs/study/db/NoSQL/Etcd",draft:!1,tags:[],version:"current",lastUpdatedAt:1728661701,formattedLastUpdatedAt:"2024\u5e7410\u670811\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Cassandra",permalink:"/docs/study/db/NoSQL/Cassandra"},next:{title:"Hadoop",permalink:"/docs/study/db/NoSQL/Hadoop"}},s={},i=[{value:"etcdctl",id:"etcdctl",level:3},{value:"\u6570\u636e\u76f8\u5173\u547d\u4ee4",id:"\u6570\u636e\u76f8\u5173\u547d\u4ee4",level:4},{value:"\u96c6\u7fa4\u7ef4\u62a4\u76f8\u5173\u547d\u4ee4",id:"\u96c6\u7fa4\u7ef4\u62a4\u76f8\u5173\u547d\u4ee4",level:4},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],p={toc:i},d="wrapper";function u(e){let{components:t,...n}=e;return(0,l.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"ETCD\u662fCoreOs\u516c\u53f8\u53d1\u5e03\u7684\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u3001\u9ad8\u53ef\u7528\u7684\u3001key-value\u5b58\u50a8\u7684\u6570\u636e\u5e93\u3002\u57fa\u4e8eGo\u8bed\u8a00\u5b9e\u73b0\uff0ck8s\u4e2d\u4e5f\u4f7f\u7528\u4e86ETCD\u4f5c\u4e3a\u6570\u636e\u5e93\u3002\u4e3b\u8981\u7528\u4e8e\u5171\u4eab\u914d\u7f6e\u548c\u670d\u52a1\u53d1\u73b0\u3002\u76f8\u5bf9\u4e8ezookeeper\u91c7\u7528\u7684Paxos\uff0cETCD\u91c7\u7528\u7684\u662fRaft\u7b97\u6cd5\uff0c\u8be5\u7b97\u6cd5\u5177\u5907\u7684\u6027\u80fd\u66f4\u4f73\u3001\u6570\u636e\u4e00\u81f4\u6027\u5f3a\u7b49\u4f18\u70b9\u3002"),(0,l.yg)("p",null,"ETCD\u5b58\u50a8\u6570\u636e\u91cf\u9ed8\u8ba4\u4e3a2GB\uff0c\u6700\u5927\u53ef\u4ee5\u8bbe\u7f6e\u4e3a8GB\u3002\u9488\u5bf9ETCD\u5b58\u50a8\u6570\u636e\u91cf\u8f83\u5c0f\u7684\u7279\u6027\uff0c\u6545\u5efa\u8baeETCD\u6700\u597d\u4f5c\u4e3a\u70ed\u70b9\u6570\u636e\u5b58\u50a8\u7684\u6570\u636e\u5e93\u4f7f\u7528\uff0c\u800c\u4e0d\u80fd\u4f5c\u4e3a\u5e94\u7528\u6570\u636e\u6301\u4e45\u5316\u7684\u6570\u636e\u5e93\u4f7f\u7528\u3002\u5e38\u89c1\u7684\u4f7f\u7528\u573a\u666f\u5982\u4e0b\uff1a"),(0,l.yg)("p",null,"\u573a\u666f1\uff1a\u670d\u52a1\u53d1\u73b0\uff08Service Discovery\uff09"),(0,l.yg)("p",null,"\u573a\u666f2\uff1a\u6d88\u606f\u53d1\u5e03\u4e0e\u8ba2\u9605"),(0,l.yg)("p",null,"\u573a\u666f3\uff1a\u8d1f\u8f7d\u5747\u8861"),(0,l.yg)("p",null,"\u573a\u666f4\uff1a\u5206\u5e03\u5f0f\u901a\u77e5\u4e0e\u534f\u8c03"),(0,l.yg)("p",null,"\u573a\u666f5\uff1a\u5206\u5e03\u5f0f\u9501\u3001\u5206\u5e03\u5f0f\u961f\u5217"),(0,l.yg)("p",null,"\u573a\u666f6\uff1a\u96c6\u7fa4\u76d1\u63a7\u4e0eLeader\u7ade\u9009\u3002"),(0,l.yg)("p",null,"\u6bd4\u5982\uff1a\u67d0\u4e2a\u7528\u6237\u9700\u8981\u4e00\u4e2a\u5206\u5e03\u5f0f\u5b58\u50a8\u4ed3\u5e93\u6765\u5b58\u50a8\u914d\u7f6e\u4fe1\u606f\uff0c\u5e76\u4e14\u5bf9\u4e8e\u8bfb\u5199\u901f\u5ea6\u3001\u9ad8\u53ef\u7528\u3001\u90e8\u7f72\u4fbf\u6377\u7b49\u65b9\u9762\u90fd\u6709\u8981\u6c42\uff0c\u5219\u8be5\u573a\u666f\u53ef\u4ee5\u4f18\u5148\u8003\u8651ETCD\u6570\u636e\u5e93\u3002\u5f53\u524d\u4f7f\u5e7f\u6cdb\u7684kubernetes\uff0c\u4ea6\u4f7f\u7528ETCD\u6765\u5b58\u50a8docker\u96c6\u7fa4\u7684\u914d\u7f6e\u4fe1\u606f\u3002"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://etcd.io/docs/v3.5/"},"\u5b98\u65b9\u6587\u6863")),(0,l.yg)("h3",{id:"etcdctl"},"etcdctl"),(0,l.yg)("p",null,"etcdctl is a command line client for etcd."),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://github.com/etcd-io/etcd/tree/main/etcdctl"},"\u5b98\u65b9\u6587\u6863")),(0,l.yg)("h4",{id:"\u6570\u636e\u76f8\u5173\u547d\u4ee4"},"\u6570\u636e\u76f8\u5173\u547d\u4ee4"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"# help \n./etcdctl --help\n# \u8fd4\u56de\u6240\u6709 \u5305\u62ecvalue\n./etcdctl get --from-key '' -w fields\n# \u8fd4\u56de\u6240\u6709 \u53ea\u6709key\n./etcdctl get --from-key '' --keys-only -w fields\n# \u6839\u636ekey\u7684\u524d\u7f00\u67e5\u8be2\n./etcdctl get --prefix /apisix/upstreams/451739158021407449 -w fields\n# \u5217\u5f62\u5f0f\u8fd4\u56de\n./etcdctl get --prefix /apisix/upstreams -w fields\n# \u53ea\u8fd4\u56dekey\n./etcdctl get --prefix /apisix/routes -w simple --keys-only\n./etcdctl get --insecure-skip-tls-verify=true --insecure-transport=false --prefix /apisix/routes -w simple --keys-only\n# \u8fd4\u56de\u6307\u5b9akey\n./etcdctl get /apisix/routes/488415811682173648\n# \u66f4\u65b0\u6307\u5b9akey\u7684value\n./etcdctl put /mykey \"my new value\" --if-exists\n")),(0,l.yg)("h4",{id:"\u96c6\u7fa4\u7ef4\u62a4\u76f8\u5173\u547d\u4ee4"},"\u96c6\u7fa4\u7ef4\u62a4\u76f8\u5173\u547d\u4ee4"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"# \u96c6\u7fa4\u5185\u6240\u6709\u8282\u70b9\n./etcdctl member list -w table\n# \u96c6\u7fa4\u5185\u6240\u6709\u8282\u70b9\u72b6\u6001\n./etcdctl endpoint --cluster health\n# \u96c6\u7fa4\u5185\u6240\u6709\u8282\u70b9\u72b6\u6001\n./etcdctl -w table endpoint --cluster status\n# \u62a5\u8b66\u5217\u8868\n./etcdctl alarm list\n")),(0,l.yg)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/638288999"},"\u77e5\u4e4e-ETCD\u6982\u8ff0"))))}u.isMDXComponent=!0}}]);