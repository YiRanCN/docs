"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7355],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>u});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},k=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,k=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,u=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return r?o.createElement(u,a(a({ref:t},k),{},{components:r})):o.createElement(u,a({ref:t},k))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:n,a[1]=c;for(var p=2;p<l;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const l={},a=void 0,c={unversionedId:"study/docker/Docker_Docker-compose",id:"study/docker/Docker_Docker-compose",title:"Docker_Docker-compose",description:"\u5b9a\u4e49",source:"@site/docs/study/docker/Docker_Docker-compose.md",sourceDirName:"study/docker",slug:"/study/docker/Docker_Docker-compose",permalink:"/docs/study/docker/Docker_Docker-compose",draft:!1,tags:[],version:"current",lastUpdatedAt:1697624767,formattedLastUpdatedAt:"2023\u5e7410\u670818\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/study/docker/"},next:{title:"Docker\u7684\u4f7f\u7528\u603b\u7ed3",permalink:"/docs/study/docker/Docker\u7684\u4f7f\u7528\u603b\u7ed3"}},i={},p=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e3a\u4ec0\u4e48\u8981\u7528Docker",id:"\u4e3a\u4ec0\u4e48\u8981\u7528docker",level:3},{value:"Docker\u57fa\u672c\u7ec4\u6210",id:"docker\u57fa\u672c\u7ec4\u6210",level:3},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"Docker Compose",id:"docker-compose",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:4},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4-1",level:4},{value:"\u95ee\u9898\u5904\u7406",id:"\u95ee\u9898\u5904\u7406",level:3}],k={toc:p},d="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,n.kt)("p",null,"Docker\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5bb9\u5668\u5f15\u64ce\uff0c\u5b83\u6709\u52a9\u4e8e\u66f4\u5feb\u5730\u4ea4\u4ed8\u5e94\u7528\u3002\u65b9\u4fbf\u5feb\u6377\u5df2\u7ecf\u662f Docker\u7684\u6700\u5927\u4f18\u52bf\uff0c\u8fc7\u53bb\u9700\u8981\u7528\u6570\u5929\u4e43\u81f3\u6570\u5468\u7684\u4efb\u52a1\uff0c\u5728Docker\u5bb9\u5668\u7684\u5904\u7406\u4e0b\uff0c\u53ea\u9700\u8981\u6570\u79d2\u5c31\u80fd\u5b8c\u6210\u3002"),(0,n.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u7528docker"},"\u4e3a\u4ec0\u4e48\u8981\u7528Docker"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e00\u81f4\u7684\u8fd0\u884c\u73af\u5883\uff1aDocker \u7684\u955c\u50cf\u63d0\u4f9b\u4e86\u9664\u5185\u6838\u5916\u5b8c\u6574\u7684\u8fd0\u884c\u65f6\u73af\u5883\uff0c\u786e\u4fdd\u4e86\u5e94\u7528\u8fd0\u884c\u73af\u5883\u4e00\u81f4\u6027\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u6301\u7eed\u4ea4\u4ed8\u548c\u90e8\u7f72\uff1a\u4f7f\u7528 Docker \u53ef\u4ee5\u901a\u8fc7\u5b9a\u5236\u5e94\u7528\u955c\u50cf\u6765\u5b9e\u73b0\u6301\u7eed\u96c6\u6210\u3001\u6301\u7eed\u4ea4\u4ed8\u3001\u90e8\u7f72\u3002\u4e00\u6b21\u521b\u5efa\u6216\u914d\u7f6e\uff0c\u53ef\u4ee5\u5728\u4efb\u610f\u5730\u65b9\u6b63\u5e38\u8fd0\u884c\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u66f4\u8f7b\u677e\u7684\u8fc1\u79fb\uff1aDocker \u786e\u4fdd\u4e86\u6267\u884c\u73af\u5883\u7684\u4e00\u81f4\u6027\uff0c\u4f7f\u5f97\u5e94\u7528\u7684\u8fc1\u79fb\u66f4\u52a0\u5bb9\u6613\u3002Docker \u53ef\u4ee5\u5728\u5f88\u591a\u5e73\u53f0\u4e0a\u8fd0\u884c\uff0c\u65e0\u8bba\u662f\u7269\u7406\u673a\u3001\u865a\u62df\u673a\u3001\u516c\u6709\u4e91\u3001\u79c1\u6709\u4e91\uff0c\u751a\u81f3\u662f\u7b14\u8bb0\u672c\uff0c\u5176\u8fd0\u884c\u7ed3\u679c\u662f\u4e00\u81f4\u7684\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u66f4\u5feb\u901f\u7684\u542f\u52a8\u65f6\u95f4\uff1aDocker \u5bb9\u5668\u5e94\u7528\uff0c\u7531\u4e8e\u76f4\u63a5\u8fd0\u884c\u4e8e\u5bbf\u4e3b\u5185\u6838\uff0c\u65e0\u9700\u542f\u52a8\u5b8c\u6574\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u56e0\u6b64\u53ef\u4ee5\u505a\u5230\u79d2\u7ea7\u3001\u751a\u81f3\u6beb\u79d2\u7ea7\u7684\u542f\u52a8\u65f6\u95f4\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u66f4\u9ad8\u6548\u7684\u5229\u7528\u7cfb\u7edf\u8d44\u6e90\uff1a\u7531\u4e8e\u5bb9\u5668\u4e0d\u9700\u8981\u8fdb\u884c\u786c\u4ef6\u865a\u62df\u4ee5\u53ca\u8fd0\u884c\u5b8c\u6574\u64cd\u4f5c\u7cfb\u7edf\u7b49\u989d\u5916\u5f00\u9500\uff0cDocker \u5bf9\u7cfb\u7edf\u8d44\u6e90\u7684\u5229\u7528\u7387\u66f4\u9ad8\u3002")),(0,n.kt)("h3",{id:"docker\u57fa\u672c\u7ec4\u6210"},"Docker\u57fa\u672c\u7ec4\u6210"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u955c\u50cf(Images)"),(0,n.kt)("li",{parentName:"ol"},"\u5bb9\u5668(Container)"),(0,n.kt)("li",{parentName:"ol"},"\u955c\u50cf\u4ed3\u5e93(Registry)")),(0,n.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"docker ps"),(0,n.kt)("li",{parentName:"ol"},"docker ps -a"),(0,n.kt)("li",{parentName:"ol"},"docker start xxx"),(0,n.kt)("li",{parentName:"ol"},"dcoker stop xxx"),(0,n.kt)("li",{parentName:"ol"},"docker rm xxx"),(0,n.kt)("li",{parentName:"ol"},"docker rmi xxx"),(0,n.kt)("li",{parentName:"ol"},"docker save -o ./xxx.tar xxx \u5bfc\u51fa\u955c\u50cf"),(0,n.kt)("li",{parentName:"ol"},"docker load -i xxx.tar \u5bfc\u5165\u955c\u50cf"),(0,n.kt)("li",{parentName:"ol"},"docker logs"),(0,n.kt)("li",{parentName:"ol"},"docker inspect xxx \u67e5\u770b\u5bb9\u5668\u8be6\u7ec6\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ol"},"docker port xxx \u5217\u51fa\u6216\u6307\u5b9a\u5bb9\u5668\u7aef\u53e3\u6620\u5c04"),(0,n.kt)("li",{parentName:"ol"},"docker cp ","[dir]"," xxx:","[dir]"),(0,n.kt)("li",{parentName:"ol"},"docker diff xxx \u67e5\u770b\u5bb9\u5668\u548c\u955c\u50cf\u7684\u5dee\u5f02"),(0,n.kt)("li",{parentName:"ol"},"docker kill \u5bb9\u5668id \u5f3a\u5236\u505c\u6b62\u5bb9\u5668"),(0,n.kt)("li",{parentName:"ol"},"docker container logs \u5bb9\u5668id\uff1a\u67e5\u770b\u5bb9\u5668\u65e5\u5fd7"),(0,n.kt)("li",{parentName:"ol"},"docker top \u5bb9\u5668id\uff1a\u67e5\u770b\u5bb9\u5668\u91cc\u7684\u8fdb\u7a0b")),(0,n.kt)("h3",{id:"docker-compose"},"Docker Compose"),(0,n.kt)("p",null,"Docker Compose\u662f docker \u63d0\u4f9b\u7684\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u6765\u5b9a\u4e49\u548c\u8fd0\u884c\u7531\u591a\u4e2a\u5bb9\u5668\u7ec4\u6210\u7684\u5e94\u7528\u3002\u4f7f\u7528 compose\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 YAML \u6587\u4ef6\u58f0\u660e\u5f0f\u7684\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u7684\u5404\u4e2a\u670d\u52a1\uff0c\u5e76\u7531\u5355\u4e2a\u547d\u4ee4\u5b8c\u6210\u5e94\u7528\u7684\u521b\u5efa\u548c\u542f\u52a8\u3002"),(0,n.kt)("h4",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"#\u9700\u8981\u5148\u628apython3\u548cpip3\u5b89\u88c5\u597d\npip3 install docker-compose\ndocker-compose --version\n")),(0,n.kt)("h4",{id:"\u5e38\u7528\u547d\u4ee4-1"},"\u5e38\u7528\u547d\u4ee4"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"docker-compose up -d \xa0 \u540e\u53f0\u542f\u52a8"),(0,n.kt)("li",{parentName:"ol"},"docker-compose ps/stop/start/restart/rm"),(0,n.kt)("li",{parentName:"ol"},"docker-compose scale service=num\xa0\u8bbe\u7f6e\u6307\u5b9a\u670d\u52a1\u8fd0\u884c\u7684\u5bb9\u5668\u4e2a\u6570\u3002\u901a\u8fc7service=num\u7684\u53c2\u6570\u6765\u8bbe\u7f6e\u6570\u91cf")),(0,n.kt)("h3",{id:"\u95ee\u9898\u5904\u7406"},"\u95ee\u9898\u5904\u7406"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://blog.csdn.net/sangfei18829896970/article/details/97754635"},"python\u5b89\u88c5pandas\u5e93\u51fa\u73b0 No module named \u2018_lzma\u2019")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://blog.51cto.com/13362895/2130375"},"docker \u4e4b\u7f51\u7edc\u914d\u7f6e")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/minseo/p/11548177.html"},"Docker\u5165\u95e8\u4e4bdocker-compose"))))}s.isMDXComponent=!0}}]);