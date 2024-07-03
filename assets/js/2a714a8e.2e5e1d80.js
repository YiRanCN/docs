"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7448],{5680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>y});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,y=d["".concat(s,".").concat(g)]||d[g]||u[g]||p;return t?n.createElement(y,a(a({ref:r},l),{},{components:t})):n.createElement(y,a({ref:r},l))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=g;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2813:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=t(8168),o=(t(6540),t(5680));const p={},a="Spring Boot",i={unversionedId:"study/back/spring/SpringBoot",id:"study/back/spring/SpringBoot",title:"Spring Boot",description:"\u5e38\u770b\u6587\u6863",source:"@site/docs/study/back/spring/SpringBoot.md",sourceDirName:"study/back/spring",slug:"/study/back/spring/SpringBoot",permalink:"/docs/study/back/spring/SpringBoot",draft:!1,tags:[],version:"current",lastUpdatedAt:1719996337,formattedLastUpdatedAt:"2024\u5e747\u67083\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Spring AOP",permalink:"/docs/study/back/spring/SpringAOP"},next:{title:"Spirng Framework",permalink:"/docs/study/back/spring/SpringFramework"}},s={},c=[{value:"\u5e38\u770b\u6587\u6863",id:"\u5e38\u770b\u6587\u6863",level:3},{value:"\u4e24\u79cd\u65b9\u5f0f\u7ba1\u7406\u4f9d\u8d56",id:"\u4e24\u79cd\u65b9\u5f0f\u7ba1\u7406\u4f9d\u8d56",level:3},{value:"\u7ee7\u627f",id:"\u7ee7\u627f",level:4},{value:"\u4f9d\u8d56\u7ba1\u7406",id:"\u4f9d\u8d56\u7ba1\u7406",level:4},{value:"bootstrap.properties/yml",id:"bootstrappropertiesyml",level:3}],l={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(d,(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"spring-boot"},"Spring Boot"),(0,o.yg)("h3",{id:"\u5e38\u770b\u6587\u6863"},"\u5e38\u770b\u6587\u6863"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/3.2.0/reference/html/"},"V3.2.0 \u5b98\u65b9\u53c2\u8003\u6587\u6863\uff0c\u6ca1\u4e8b\u591a\u770b\u770b"))),(0,o.yg)("h3",{id:"\u4e24\u79cd\u65b9\u5f0f\u7ba1\u7406\u4f9d\u8d56"},"\u4e24\u79cd\u65b9\u5f0f\u7ba1\u7406\u4f9d\u8d56"),(0,o.yg)("h4",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    <version>2.1.1.RELEASE</version>\n</parent>\n")),(0,o.yg)("h4",{id:"\u4f9d\u8d56\u7ba1\u7406"},"\u4f9d\u8d56\u7ba1\u7406"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-dependencies</artifactId>\n            <version>2.1.1.RELEASE</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")),(0,o.yg)("h3",{id:"bootstrappropertiesyml"},"bootstrap.properties/yml"),(0,o.yg)("p",null,"\u5355\u7eaf\u505a Spring Boot \u5f00\u53d1\uff0c\u53ef\u80fd\u4e0d\u592a\u5bb9\u6613\u9047\u5230 bootstrap.properties \u914d\u7f6e\u6587\u4ef6\uff0c\u4f46\u662f\u5728\u7ed3\u5408 Spring Cloud \u65f6\uff0c\u8fd9\u4e2a\u914d\u7f6e\u5c31\u4f1a\u7ecf\u5e38\u9047\u5230\u4e86\uff0c\u7279\u522b\u662f\u5728\u9700\u8981\u52a0\u8f7d\u4e00\u4e9b\u8fdc\u7a0b\u914d\u7f6e\u6587\u4ef6\u7684\u65f6\u4faf\u3002"),(0,o.yg)("p",null,"bootstrap.properties \u5728 application.properties \u4e4b\u524d\u52a0\u8f7d\uff0c\u914d\u7f6e\u5728\u5e94\u7528\u7a0b\u5e8f\u4e0a\u4e0b\u6587\u7684\u5f15\u5bfc\u9636\u6bb5\u751f\u6548\u3002\u4e00\u822c\u6765\u8bf4\u6211\u4eec\u5728 Spring Cloud Config \u6216\u8005 Nacos \u4e2d\u4f1a\u7528\u5230\u5b83\u3002bootstrap.properties \u88ab Spring ApplicationContext \u7684\u7236\u7c7b\u52a0\u8f7d\uff0c\u8fd9\u4e2a\u7c7b\u5148\u4e8e\u52a0\u8f7d application.properties \u7684 ApplicatonContext \u542f\u52a8\u3002"))}u.isMDXComponent=!0}}]);