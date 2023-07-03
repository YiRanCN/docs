"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5069],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(r),v=l,m=s["".concat(u,".").concat(v)]||s[v]||d[v]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=v;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},8178:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),l=(r(7294),r(3905));const a={},o=void 0,i={unversionedId:"study/program/JAVA/Vert.x",id:"study/program/JAVA/Vert.x",title:"Vert.x",description:"\u7b80\u4ecb",source:"@site/docs/study/program/JAVA/Vert.x.md",sourceDirName:"study/program/JAVA",slug:"/study/program/JAVA/Vert.x",permalink:"/docs/study/program/JAVA/Vert.x",draft:!1,tags:[],version:"current",lastUpdatedAt:1688373431,formattedLastUpdatedAt:"2023\u5e747\u67083\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"RxJava",permalink:"/docs/study/program/JAVA/RxJava"},next:{title:"npm",permalink:"/docs/study/program/JS/npm"}},u={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"Vert.x Core",id:"vertx-core",level:3},{value:"\u6d41\u5f0f\u4ee3\u7801\u98ce\u683c",id:"\u6d41\u5f0f\u4ee3\u7801\u98ce\u683c",level:3},{value:"Don\u2019t call us, we\u2019ll call you",id:"dont-call-us-well-call-you",level:3},{value:"Verticle",id:"verticle",level:3},{value:"Event Bus",id:"event-bus",level:3}],c={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/eclipse-vertx/vert.x"},"GitHub\u5730\u5740"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://vertx.io"},"\u5b98\u7f51"),"\n",(0,l.kt)("a",{parentName:"p",href:"http://vertxchina.github.io/vertx-translation-chinese/"},"Vert.x \u5b98\u65b9\u6587\u6863\u4e2d\u6587\u7ffb\u8bd1")),(0,l.kt)("p",null,"Vert.x is a tool-kit for building reactive applications on the JVM.\nVert.x\u662f\u5efa\u7acb\u5728JVM\u4e0a\u7528\u4e8e\u6784\u5efa\u201c\u5f02\u6b65\u975e\u963b\u585e\u5e94\u7528\u201d\u7684\u4e00\u5957\u5de5\u5177\u96c6\u5408\u3002\n\u6ce8\u610f\uff1a\u4ed6\u4e0d\u662fjava\u6846\u67b6\uff0c\u5b83\u662f\u4e00\u5957\u5de5\u5177\u96c6\uff0c\u6216\u8005\u8bf4\u53eb\u7c7b\u5e93\u3002"),(0,l.kt)("h3",{id:"vertx-core"},"Vert.x Core"),(0,l.kt)("p",null,"Vert.x \u7684\u6838\u5fc3 Java API \u88ab\u6211\u4eec\u79f0\u4e3a Vert.x Core\u3002\nVert.x Core \u63d0\u4f9b\u4e86\u4e0b\u5217\u529f\u80fd:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f16\u5199 TCP \u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef"),(0,l.kt)("li",{parentName:"ul"},"\u7f16\u5199\u652f\u6301 WebSocket \u7684 HTTP \u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef"),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u603b\u7ebf"),(0,l.kt)("li",{parentName:"ul"},"\u5171\u4eab\u6570\u636e \u2014\u2014 \u672c\u5730\u7684Map\u548c\u5206\u5e03\u5f0f\u96c6\u7fa4Map"),(0,l.kt)("li",{parentName:"ul"},"\u5468\u671f\u6027\u3001\u5ef6\u8fdf\u6027\u52a8\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u548c\u64a4\u9500 Verticle \u5b9e\u4f8b"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u62a5\u5957\u63a5\u5b57"),(0,l.kt)("li",{parentName:"ul"},"DNS\u5ba2\u6237\u7aef"),(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7cfb\u7edf\u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u53ef\u7528\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u7fa4")),(0,l.kt)("h3",{id:"\u6d41\u5f0f\u4ee3\u7801\u98ce\u683c"},"\u6d41\u5f0f\u4ee3\u7801\u98ce\u683c"),(0,l.kt)("p",null,"\u4e00\u4e2a\u6d41\u5f0f\u7684API\u8868\u793a\u5c06\u591a\u4e2a\u65b9\u6cd5\u7684\u8c03\u7528\u94fe\u5728\u4e00\u8d77\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'request.response().putHeader("Content-Type", "text/plain").write("some text").end();\n')),(0,l.kt)("p",null,"\u8fd9\u662f\u8d2f\u7a7f Vert.x API \u4e2d\u7684\u4e00\u4e2a\u901a\u7528\u6a21\u5f0f\uff0c\u6240\u4ee5\u8bf7\u9002\u5e94\u8fd9\u79cd\u4ee3\u7801\u98ce\u683c\u3002"),(0,l.kt)("h3",{id:"dont-call-us-well-call-you"},"Don\u2019t call us, we\u2019ll call you"),(0,l.kt)("p",null,"Vert.x \u7684 API \u5927\u90e8\u5206\u90fd\u662f\u4e8b\u4ef6\u9a71\u52a8\u7684\u3002\u8fd9\u610f\u5473\u7740\u5f53\u60a8\u611f\u5174\u8da3\u7684\u4e8b\u60c5\u53d1\u751f\u65f6\uff0c\u5b83\u4f1a\u4ee5\u4e8b\u4ef6\u7684\u5f62\u5f0f\u53d1\u9001\u7ed9\u60a8\u3002"),(0,l.kt)("p",null,'\u9664\u4e86\u5f88\u5c11\u7684\u7279\u4f8b\uff08\u5982\u4ee5 "Sync" \u7ed3\u5c3e\u7684\u67d0\u4e9b\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c\uff09\uff0cVert.x\u4e2d\u7684\u6240\u6709API\u90fd\u4e0d\u4f1a\u963b\u585e\u8c03\u7528\u7ebf\u7a0b\u3002'),(0,l.kt)("p",null,"\u6211\u4eec\u524d\u8fb9\u63d0\u8fc7 Vert.x \u7684 API \u90fd\u662f\u4e8b\u4ef6\u9a71\u52a8\u7684\uff0c\u5f53\u6709\u4e8b\u4ef6\u65f6 Vert.x \u4f1a\u5c06\u4e8b\u4ef6\u4f20\u7ed9\u5904\u7406\u5668\u6765\u5904\u7406\u3002\u5728\u591a\u6570\u60c5\u51b5\u4e0b\uff0cVert.x\u4f7f\u7528\u88ab\u79f0\u4e3a Event Loop \u7684\u7ebf\u7a0b\u6765\u8c03\u7528\u60a8\u7684\u5904\u7406\u5668\u3002\u6211\u4eec\u79f0\u4e4b\u4e3a Reactor \u6a21\u5f0f\uff08\u8bd1\u8005\u6ce8\uff1aReactor Pattern \u7ffb\u8bd1\u6210\u4e86\u53cd\u5e94\u5668\u6a21\u5f0f\uff09\u3002\u60a8\u4e4b\u524d\u4e5f\u8bb8\u542c\u8bf4\u8fc7\u5b83\uff0c\u4f8b\u5982 Node.js \u5b9e\u73b0\u4e86\u8fd9\u79cd\u6a21\u5f0f\u3002\n\u5728\u4e00\u4e2a\u6807\u51c6\u7684\u53cd\u5e94\u5668\u5b9e\u73b0\u4e2d\uff0c\u6709 \u4e00\u4e2a\u72ec\u7acb\u7684 Event Loop \u4f1a\u5faa\u73af\u6267\u884c\uff0c\u5904\u7406\u6240\u6709\u5230\u8fbe\u7684\u4e8b\u4ef6\u5e76\u4f20\u9012\u7ed9\u5904\u7406\u5668\u5904\u7406\u3002\n\u5355\u4e00\u7ebf\u7a0b\u7684\u95ee\u9898\u5728\u4e8e\u5b83\u5728\u4efb\u610f\u65f6\u523b\u53ea\u80fd\u8fd0\u884c\u5728\u4e00\u4e2a\u6838\u4e0a\u3002\u5982\u679c\u60a8\u5e0c\u671b\u5355\u7ebf\u7a0b\u53cd\u5e94\u5668\u5e94\u7528\uff08\u5982\u60a8\u7684 Node.js \u5e94\u7528\uff09\u6269\u5c55\u5230\u591a\u6838\u670d\u52a1\u5668\u4e0a\uff0c\u5219\u9700\u8981\u542f\u52a8\u5e76\u4e14\u7ba1\u7406\u591a\u4e2a\u4e0d\u540c\u7684\u8fdb\u7a0b\u3002\nVert.x\u7684\u5de5\u4f5c\u65b9\u5f0f\u6709\u6240\u4e0d\u540c\u3002\u6bcf\u4e2a Vertx \u5b9e\u4f8b\u7ef4\u62a4\u7684\u662f \u591a\u4e2aEvent Loop \u7ebf\u7a0b\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f1a\u6839\u636e\u673a\u5668\u4e0a\u53ef\u7528\u7684\u6838\u6570\u91cf\u6765\u8bbe\u7f6e Event Loop \u7684\u6570\u91cf\uff0c\u60a8\u4ea6\u53ef\u81ea\u884c\u8bbe\u7f6e\u3002\n\u8fd9\u610f\u5473\u7740 Vertx \u8fdb\u7a0b\u80fd\u591f\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u6269\u5c55\uff0c\u4e0e Node.js \u4e0d\u540c\u3002\n\u6211\u4eec\u5c06\u8fd9\u79cd\u6a21\u5f0f\u79f0\u4e3a Multi-Reactor \u6a21\u5f0f\uff08\u591a\u53cd\u5e94\u5668\u6a21\u5f0f\uff09\uff0c\u533a\u522b\u4e8e\u5355\u7ebf\u7a0b\u7684 Reactor \u6a21\u5f0f\uff08\u53cd\u5e94\u5668\u6a21\u5f0f\uff09\u3002"),(0,l.kt)("p",null,"Vert.x \u4e2d\u7684 ",(0,l.kt)("a",{parentName:"p",href:"http://vertx.io/docs/apidocs/io/vertx/core/Future.html"},"Future")," \u53ef\u4ee5\u7528\u6765\u534f\u8c03\u591a\u4e2a\u5f02\u6b65\u64cd\u4f5c\u7684\u7ed3\u679c\u3002\u5b83\u652f\u6301\u5e76\u53d1\u7ec4\u5408\uff08\u5e76\u884c\u6267\u884c\u591a\u4e2a\u5f02\u6b65\u8c03\u7528\uff09\u548c\u987a\u5e8f\u7ec4\u5408\uff08\u4f9d\u6b21\u6267\u884c\u5f02\u6b65\u8c03\u7528\uff09\u3002"),(0,l.kt)("h3",{id:"verticle"},"Verticle"),(0,l.kt)("p",null,"Verticle \u662f\u7531 Vert.x \u90e8\u7f72\u548c\u8fd0\u884c\u7684\u4ee3\u7801\u5757\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e00\u4e2a Vert.x \u5b9e\u4f8b\u7ef4\u62a4\u4e86N\uff08\u9ed8\u8ba4\u60c5\u51b5\u4e0bN = CPU\u6838\u6570 x 2\uff09\u4e2a Event Loop \u7ebf\u7a0b\u3002Verticle \u5b9e\u4f8b\u53ef\u4f7f\u7528\u4efb\u610f Vert.x \u652f\u6301\u7684\u7f16\u7a0b\u8bed\u8a00\u7f16\u5199\uff0c\u800c\u4e14\u4e00\u4e2a\u7b80\u5355\u7684\u5e94\u7528\u7a0b\u5e8f\u4e5f\u53ef\u4ee5\u5305\u542b\u591a\u79cd\u8bed\u8a00\u7f16\u5199\u7684 Verticle\u3002\u60a8\u53ef\u4ee5\u5c06 Verticle \u60f3\u6210 Actor Model \u4e2d\u7684 Actor\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u901a\u5e38\u662f\u7531\u5728\u540c\u4e00\u4e2a Vert.x \u5b9e\u4f8b\u4e2d\u540c\u65f6\u8fd0\u884c\u7684\u8bb8\u591a Verticle \u5b9e\u4f8b\u7ec4\u5408\u800c\u6210\u3002\u4e0d\u540c\u7684 Verticle \u5b9e\u4f8b\u901a\u8fc7\u5411 Event Bus \u4e0a\u53d1\u9001\u6d88\u606f\u6765\u76f8\u4e92\u901a\u4fe1\u3002"),(0,l.kt)("p",null,"\u8fd9\u513f\u6709\u4e09\u79cd\u4e0d\u540c\u7c7b\u578b\u7684 Verticle\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Stardand Verticle\uff1a\u8fd9\u662f\u6700\u5e38\u7528\u7684\u4e00\u7c7b Verticle \u2014\u2014 \u5b83\u4eec\u6c38\u8fdc\u8fd0\u884c\u5728 Event Loop \u7ebf\u7a0b\u4e0a\u3002\u7a0d\u540e\u7684\u7ae0\u8282\u6211\u4eec\u4f1a\u8ba8\u8bba\u66f4\u591a\u3002"),(0,l.kt)("li",{parentName:"ul"},"Worker Verticle\uff1a\u8fd9\u7c7b Verticle \u4f1a\u8fd0\u884c\u5728 Worker Pool \u4e2d\u7684\u7ebf\u7a0b\u4e0a\u3002\u4e00\u4e2a\u5b9e\u4f8b\u7edd\u5bf9\u4e0d\u4f1a\u88ab\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u6267\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},"Multi-Threaded Worker Verticle\uff1a\u8fd9\u7c7b Verticle \u4e5f\u4f1a\u8fd0\u884c\u5728 Worker Pool \u4e2d\u7684\u7ebf\u7a0b\u4e0a\u3002\u4e00\u4e2a\u5b9e\u4f8b\u53ef\u4ee5\u7531\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u6267\u884c\uff08\u8bd1\u8005\u6ce8\uff1a\u56e0\u6b64\u9700\u8981\u5f00\u53d1\u8005\u81ea\u5df1\u786e\u4fdd\u7ebf\u7a0b\u5b89\u5168\uff09\u3002")),(0,l.kt)("h3",{id:"event-bus"},"Event Bus"),(0,l.kt)("p",null,"Event Bus \u662f Vert.x \u7684\u795e\u7ecf\u7cfb\u7edf\u3002\n\u6bcf\u4e00\u4e2a Vert.x \u5b9e\u4f8b\u90fd\u6709\u4e00\u4e2a\u5355\u72ec\u7684 Event Bus \u5b9e\u4f8b\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 Vertx \u5b9e\u4f8b\u7684 ",(0,l.kt)("a",{parentName:"p",href:"http://vertx.io/docs/apidocs/io/vertx/core/Vertx.html#eventBus--"},"eventBus")," \u65b9\u6cd5\u6765\u83b7\u5f97\u5bf9\u5e94\u7684 EventBus \u5b9e\u4f8b\u3002\nVert.x\u4f1a\u5c3d\u5b83\u6700\u5927\u52aa\u529b\u53bb\u4f20\u9012\u6d88\u606f\uff0c\u5e76\u4e14\u4e0d\u4f1a\u4e3b\u52a8\u4e22\u5f03\u6d88\u606f\u3002\u8fd9\u79cd\u65b9\u5f0f\u79f0\u4e3a \u5c3d\u529b\u4f20\u8f93(Best-effort delivery)\u3002\n\u4f46\u662f\uff0c\u5f53 Event Bus \u4e2d\u7684\u5168\u90e8\u6216\u90e8\u5206\u53d1\u751f\u6545\u969c\u65f6\uff0c\u5219\u53ef\u80fd\u4f1a\u4e22\u5931\u6d88\u606f\u3002\n\u82e5\u60a8\u7684\u5e94\u7528\u5173\u5fc3\u4e22\u5931\u7684\u6d88\u606f\uff0c\u60a8\u5e94\u8be5\u7f16\u5199\u5177\u6709\u5e42\u7b49\u6027\u7684\u5904\u7406\u5668\uff0c\u5e76\u4e14\u60a8\u7684\u53d1\u9001\u8005\u53ef\u4ee5\u5728\u6062\u590d\u540e\u91cd\u8bd5\u3002"),(0,l.kt)("p",null,"Event Bus \u4e0d\u4ec5\u4ec5\u5b58\u5728\u4e8e\u5355\u4e2a Vert.x \u5b9e\u4f8b\u4e2d\u3002\u901a\u8fc7\u60a8\u5728\u7f51\u7edc\u4e0a\u5c06\u4e0d\u540c\u7684 Vert.x \u5b9e\u4f8b\u96c6\u7fa4\u5728\u4e00\u8d77\uff0c\u5b83\u53ef\u4ee5\u5f62\u6210\u4e00\u4e2a\u5355\u4e00\u7684\u3001\u5206\u5e03\u5f0f\u7684Event Bus\u3002"))}d.isMDXComponent=!0}}]);