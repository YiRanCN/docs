"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5779],{5680:(e,r,n)=>{n.d(r,{xA:()=>i,yg:()=>m});var t=n(6540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),d=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},i=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=d(n),y=o,m=p["".concat(s,".").concat(y)]||p[y]||u[y]||a;return n?t.createElement(m,c(c({ref:r},i),{},{components:n})):t.createElement(m,c({ref:r},i))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var d=2;d<a;d++)c[d]=n[d];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1820:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=n(8168),o=(n(6540),n(5680));const a={},c=void 0,l={unversionedId:"study/docker/Docker\u7684\u4f7f\u7528\u603b\u7ed3",id:"study/docker/Docker\u7684\u4f7f\u7528\u603b\u7ed3",title:"Docker\u7684\u4f7f\u7528\u603b\u7ed3",description:"1. Docker \u5b98\u65b9\u4ed3\u5e93 \xa0https://hub.docker.com",source:"@site/docs/study/docker/Docker\u7684\u4f7f\u7528\u603b\u7ed3.md",sourceDirName:"study/docker",slug:"/study/docker/Docker\u7684\u4f7f\u7528\u603b\u7ed3",permalink:"/docs/study/docker/Docker\u7684\u4f7f\u7528\u603b\u7ed3",draft:!1,tags:[],version:"current",lastUpdatedAt:1710423557,formattedLastUpdatedAt:"2024\u5e743\u670814\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Dockerfile\u4f7f\u7528\u8be6\u89e3",permalink:"/docs/study/docker/Dockerfile\u4f7f\u7528\u8be6\u89e3"},next:{title:"docker-linux",permalink:"/docs/study/docker/docker-linux"}},s={},d=[{value:"\u4fee\u6539\u955c\u50cf\u6e90",id:"\u4fee\u6539\u955c\u50cf\u6e90",level:3},{value:"\u5e38\u7528\u547d\u4ee4\u5927\u5168",id:"\u5e38\u7528\u547d\u4ee4\u5927\u5168",level:3},{value:"\u83b7\u53d6\u67d0\u4e2a docker \u5bb9\u5668\u7684 IP \u5730\u5740",id:"\u83b7\u53d6\u67d0\u4e2a-docker-\u5bb9\u5668\u7684-ip-\u5730\u5740",level:3},{value:"\u5bb9\u5668\u81ea\u52a8\u542f\u52a8",id:"\u5bb9\u5668\u81ea\u52a8\u542f\u52a8",level:3},{value:"\u5bb9\u5668\u65f6\u533a\u95ee\u9898",id:"\u5bb9\u5668\u65f6\u533a\u95ee\u9898",level:3},{value:"\u67e5\u770b\u548c\u6e05\u9664\u5bb9\u5668\u65e5\u5fd7",id:"\u67e5\u770b\u548c\u6e05\u9664\u5bb9\u5668\u65e5\u5fd7",level:3},{value:"\u7248\u672c\u592a\u4f4e \u9700\u8981\u5347\u7ea7",id:"\u7248\u672c\u592a\u4f4e-\u9700\u8981\u5347\u7ea7",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],i={toc:d},p="wrapper";function u(e){let{components:r,...a}=e;return(0,o.yg)(p,(0,t.A)({},i,a,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Docker \u5b98\u65b9\u4ed3\u5e93 \xa0",(0,o.yg)("a",{parentName:"li",href:"https://hub.docker.com"},"https://hub.docker.com")),(0,o.yg)("li",{parentName:"ol"},"\u811a\u672c\u641c\u7d22\u7248\u672c\u53f7 \xa0",(0,o.yg)("a",{parentName:"li",href:"https://blog.csdn.net/CodyGuo/article/details/86515354"},"docker-tags"))),(0,o.yg)("h3",{id:"\u4fee\u6539\u955c\u50cf\u6e90"},"\u4fee\u6539\u955c\u50cf\u6e90"),(0,o.yg)("p",null,"/etc/docker/daemon.json"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "registry-mirrors": ["https://registry.docker-cn.com", "http://hub-mirror.c.163.com", "https://docker.mirrors.ustc.edu.cn"]\n}\n')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"docker info | grep Reg\n")),(0,o.yg)("h3",{id:"\u5e38\u7528\u547d\u4ee4\u5927\u5168"},"\u5e38\u7528\u547d\u4ee4\u5927\u5168"),(0,o.yg)("p",null,"docker --help"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"1.png",src:n(3579).A,width:"750",height:"538"})),(0,o.yg)("h3",{id:"\u83b7\u53d6\u67d0\u4e2a-docker-\u5bb9\u5668\u7684-ip-\u5730\u5740"},"\u83b7\u53d6\u67d0\u4e2a docker \u5bb9\u5668\u7684 IP \u5730\u5740"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id\n")),(0,o.yg)("h3",{id:"\u5bb9\u5668\u81ea\u52a8\u542f\u52a8"},"\u5bb9\u5668\u81ea\u52a8\u542f\u52a8"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"docker run  --restart=always\n#no -  \u5bb9\u5668\u9000\u51fa\u65f6\uff0c\u4e0d\u91cd\u542f\u5bb9\u5668\uff1b\n#on-failure - \u53ea\u6709\u5728\u975e0\u72b6\u6001\u9000\u51fa\u65f6\u624d\u4ece\u65b0\u542f\u52a8\u5bb9\u5668\uff1b\n#always - \u65e0\u8bba\u9000\u51fa\u72b6\u6001\u662f\u5982\u4f55\uff0c\u90fd\u91cd\u542f\u5bb9\u5668\uff1b\n#\u5982\u679c\u521b\u5efa\u65f6\u672a\u6307\u5b9a --restart=always ,\u53ef\u901a\u8fc7update \u547d\u4ee4\ndocker update --restart=always container_name_or_id\ndocker update --restart=no container_name_or_id\n")),(0,o.yg)("h3",{id:"\u5bb9\u5668\u65f6\u533a\u95ee\u9898"},"\u5bb9\u5668\u65f6\u533a\u95ee\u9898"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u5bb9\u5668\u7684\u65f6\u5019\u52a0\u4e0a\u8fd9\u4e2a\u53c2\u6570 \u4f1a\u8ba9\u5bb9\u5668\u91c7\u7528\u5bbf\u4e3b\u673a\u7684\u65f6\u533a\n-v /etc/localtime:/etc/localtime\n")),(0,o.yg)("h3",{id:"\u67e5\u770b\u548c\u6e05\u9664\u5bb9\u5668\u65e5\u5fd7"},"\u67e5\u770b\u548c\u6e05\u9664\u5bb9\u5668\u65e5\u5fd7"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"#\nls -lh $(find /var/lib/docker/containers/ -name *-json.log)\n#\ntruncate -s 0 /var/lib/docker/containers/*/*-json.log\n#\u7528\u4e8e\u67e5\u770bDocker\u7684\u78c1\u76d8\u4f7f\u7528\u60c5\u51b5\ndocker system df\n#\u7528\u4e8e\u67e5\u770bDocker\u7684\u78c1\u76d8\u4f7f\u7528\u60c5\u51b5 \u8be6\u7ec6\u60c5\u51b5\ndocker system df -v\n#\u7528\u4e8e\u6e05\u7406\u78c1\u76d8\uff0c\u5220\u9664\u5173\u95ed\u7684\u5bb9\u5668\u3001\u65e0\u7528\u7684\u6570\u636e\u5377\u548c\u7f51\u7edc\uff0c\u4ee5\u53cadangling\u955c\u50cf\uff08\u5373\u65e0tag\u7684\u955c\u50cf\uff09\ndocker system prune\n#\u6e05\u7406\u5f97\u66f4\u52a0\u5f7b\u5e95\uff0c\u53ef\u4ee5\u5c06\u6ca1\u6709\u5bb9\u5668\u4f7f\u7528Docker\u955c\u50cf\u90fd\u5220\u6389\u3002\ndocker system prune -a\n")),(0,o.yg)("h3",{id:"\u7248\u672c\u592a\u4f4e-\u9700\u8981\u5347\u7ea7"},"\u7248\u672c\u592a\u4f4e \u9700\u8981\u5347\u7ea7"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'# docker build \u62a5\u9519\u5982\u4e0b\nis not a valid repository/tag: invalid reference format\n# \u68c0\u67e5\u7248\u672c docker \u7248\u672c\u592a\u4f4e\ndocker version\n\n\n# \u5378\u8f7d\u65e7\u7248\u672c\nyum -y remove docker*\n# \u5b89\u88c5\u9700\u8981\u7684\u8f6f\u4ef6\u5305\uff0c yum-util \u63d0\u4f9byum-config-manager\u529f\u80fd\uff0c\u53e6\u5916\u4e24\u4e2a\u662fdevicemapper\u9a71\u52a8\u4f9d\u8d56\u7684\nsudo yum install -y yum-utils\n# \u8bbe\u7f6eyum\u6e90\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n# \u5b89\u88c5docker\nyum install docker-ce docker-ce-cli containerd.io\n# \u914d\u7f6e\u56fd\u5185docker\u955c\u50cf\u6e90\nmkdir -p /etc/docker\ntee /etc/docker/daemon.json <<-\'EOF\'\n{\n  "registry-mirrors": [\n  "https://kfwkfulq.mirror.aliyuncs.com",\n  "https://2lqq34jg.mirror.aliyuncs.com",\n  "https://pee6w651.mirror.aliyuncs.com",\n  "https://registry.docker-cn.com",\n  "http://hub-mirror.c.163.com"\n  ],\n  "dns": ["8.8.8.8","8.8.4.4"]\n}\nEOF\n# \u91cd\u542fdocker\nsystemctl daemon-reload\nsystemctl restart docker\n# \u9a8c\u8bc1docker\u7248\u672c\ndocker version\n')),(0,o.yg)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://developer.aliyun.com/article/272173"},"\u53c2\u8003 1")))}u.isMDXComponent=!0},3579:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/1-b23594a1c043f6f3f2961f17d876ef47.png"}}]);