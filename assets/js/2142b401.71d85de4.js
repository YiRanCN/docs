"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2857],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),d=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),k=o,b=p["".concat(a,".").concat(k)]||p[k]||s[k]||c;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=k;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<c;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9055:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const c={},i=void 0,l={unversionedId:"study/docker/docker-centos",id:"study/docker/docker-centos",title:"docker-centos",description:"docker pull alpine:3.18.3",source:"@site/docs/study/docker/docker-centos.md",sourceDirName:"study/docker",slug:"/study/docker/docker-centos",permalink:"/docs/study/docker/docker-centos",draft:!1,tags:[],version:"current",lastUpdatedAt:1691655520,formattedLastUpdatedAt:"2023\u5e748\u670810\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Docker\u7684\u4f7f\u7528\u603b\u7ed3",permalink:"/docs/study/docker/Docker\u7684\u4f7f\u7528\u603b\u7ed3"},next:{title:"docker-mysql",permalink:"/docs/study/docker/docker-mysql"}},a={},d=[],u={toc:d},p="wrapper";function s(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"docker pull alpine:3.18.3"),(0,o.kt)("p",null,"docker run -d \\\n-p 1883:1883 \\\n-p 8080:8080 \\\n-p 8081:8081 \\\n-p 8000:8000 \\\n-p 15000:15000 \\\n--privileged=true \\\n-e TZ=Asia/Shanghai \\\n--name alpine-study \\\nalpine:3.18.3"),(0,o.kt)("p",null,'FROM alpine:3.18.3\nMAINTAINER weic "',(0,o.kt)("a",{parentName:"p",href:"mailto:cniiot@163.com"},"cniiot@163.com"),'"\nWORKDIR /root/iot-cloud-backend\nADD jdk-17_linux-x64_bin.tar.gz /root/iot-cloud-backend/\nENV JAVA_HOME=/root/iot-cloud-backend/jdk-17.0.8\nENV PATH=$JAVA_HOME/bin:$PATH'),(0,o.kt)("p",null,"docker build -t jdk17:weic ."),(0,o.kt)("p",null,"docker run -it jdk17:weic /bin/sh"),(0,o.kt)("p",null,"docker pull debian:stable-slim"),(0,o.kt)("p",null,"docker run -d \\\n-p 1883:1883 \\\n-p 8080:8080 \\\n-p 8081:8081 \\\n--privileged=true \\\n-e TZ=Asia/Shanghai \\\n--name debian-study \\\ndebian:stable-slim"),(0,o.kt)("p",null,'FROM debian:stable-slim\nMAINTAINER weic "',(0,o.kt)("a",{parentName:"p",href:"mailto:cniiot@163.com"},"cniiot@163.com"),'"\nWORKDIR /root/iot-cloud-backend\nADD jdk-17_linux-x64_bin.tar.gz /root/iot-cloud-backend/\nENV JAVA_HOME=/root/iot-cloud-backend/jdk-17.0.8\nENV PATH=$JAVA_HOME/bin:$PATH'),(0,o.kt)("p",null,"docker build -t jdk17:weic ."),(0,o.kt)("p",null,"docker run -it jdk17:weic /bin/sh"),(0,o.kt)("p",null,"docker pull centos:centos7.9.2009"),(0,o.kt)("p",null,"docker run -d \\\n-p 1883:1883 \\\n-p 8080:8080 \\\n-p 8081:8081 \\\n--privileged=true \\\n-e TZ=Asia/Shanghai \\\n--name debian-study \\\ncentos:centos7.9.2009"),(0,o.kt)("p",null,'FROM centos:centos7.9.2009\nMAINTAINER weic "',(0,o.kt)("a",{parentName:"p",href:"mailto:cniiot@163.com"},"cniiot@163.com"),'"\nWORKDIR /root/iot-cloud-backend\nADD jdk-17_linux-x64_bin.tar.gz /root/iot-cloud-backend/\nENV JAVA_HOME=/root/iot-cloud-backend/jdk-17.0.8\nENV PATH=$JAVA_HOME/bin:$PATH'),(0,o.kt)("p",null,"docker build -t jdk17:weic ."),(0,o.kt)("p",null,"docker run -it jdk17:weic /bin/sh"))}s.isMDXComponent=!0}}]);