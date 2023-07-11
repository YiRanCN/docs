"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7944],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=c(r),g=o,y=u["".concat(p,".").concat(g)]||u[g]||d[g]||s;return r?n.createElement(y,a(a({ref:t},i),{},{components:r})):n.createElement(y,a({ref:t},i))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},96:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={},a=void 0,l={unversionedId:"study/db/SQL/PostgreSQL",id:"study/db/SQL/PostgreSQL",title:"PostgreSQL",description:"\u7b80\u4ecb",source:"@site/docs/study/db/SQL/PostgreSQL.md",sourceDirName:"study/db/SQL",slug:"/study/db/SQL/PostgreSQL",permalink:"/docs/study/db/SQL/PostgreSQL",draft:!1,tags:[],version:"current",lastUpdatedAt:1689054522,formattedLastUpdatedAt:"2023\u5e747\u670811\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"MySQL",permalink:"/docs/study/db/SQL/MySQL"},next:{title:"\u7efc\u5408\u6982\u8ff0",permalink:"/docs/study/db/\u5168\u6587\u641c\u7d22\u5f15\u64ce/\u7efc\u5408\u6982\u8ff0"}},p={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"PostGIS",id:"postgis",level:3},{value:"\u5b89\u88c5postgres",id:"\u5b89\u88c5postgres",level:3}],i={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PostgreSQL"),"\xa0(\u4e5f\u53eb Postgres)\u662f\u4e00\u4e2a\u81ea\u7531\u7684",(0,o.kt)("strong",{parentName:"p"},"\u5bf9\u8c61-\u5173\u7cfb\u6570\u636e\u5e93"),"\u670d\u52a1\u5668(\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf)\uff0c\u5b83\u5728\u7075\u6d3b\u7684 BSD-\u98ce\u683c\u8bb8\u53ef\u8bc1\u4e0b\u53d1\u884c\u3002\u5b83\u63d0\u4f9b\u4e86\u76f8\u5bf9\u5176\u4ed6\u5f00\u653e\u6e90\u4ee3\u7801\u6570\u636e\u5e93\u7cfb\u7edf(\u6bd4\u5982 MySQL \u548c Firebird)\uff0c\u548c\u5bf9\u4e13\u6709\u7cfb\u7edf\u6bd4\u5982 Oracle\u3001Sybase\u3001IBM \u7684 DB2 \u548c Microsoft SQL Server\u7684\u4e00\u79cd\u9009\u62e9\u3002"),(0,o.kt)("p",null,'PostgreSQL \u7684 Slogan(\u53e3\u53f7) \u662f "\u4e16\u754c\u4e0a\u6700\u5148\u8fdb\u7684\u5f00\u6e90\u5173\u7cfb\u578b\u6570\u636e\u5e93"\u3002'),(0,o.kt)("h3",{id:"postgis"},"PostGIS"),(0,o.kt)("p",null,"PostGIS\u5728\u5bf9\u8c61\u5173\u7cfb\u578b\u6570\u636e\u5e93PostgreSQL\u4e0a\u589e\u52a0\u4e86\u5b58\u50a8\u7ba1\u7406\u7a7a\u95f4\u6570\u636e\u7684\u80fd\u529b\uff0c\u76f8\u5f53\u4e8eOracle\u7684spatial\u90e8\u5206\u3002PostGIS\u6700\u5927\u7684\u7279\u70b9\u662f\u7b26\u5408\u5e76\u4e14\u5b9e\u73b0\u4e86OpenGIS\u7684\u4e00\u4e9b\u89c4\u8303\uff0c\u662f\u6700\u8457\u540d\u7684\u5f00\u6e90GIS\u6570\u636e\u5e93\u3002"),(0,o.kt)("p",null,"PostGIS\u901a\u8fc7\u5411PostgreSQL\u6dfb\u52a0\u5bf9\u7a7a\u95f4\u6570\u636e\u7c7b\u578b\u3001\u7a7a\u95f4\u7d22\u5f15\u548c\u7a7a\u95f4\u51fd\u6570\u7684\u652f\u6301\uff0c\u5c06PostgreSQL\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u8f6c\u6362\u4e3a\u7a7a\u95f4\u6570\u636e\u5e93\u3002"),(0,o.kt)("p",null,'\u56e0\u4e3aPostGIS\u662f\u5efa\u7acb\u5728PostgreSQL\u4e4b\u4e0a\u7684\uff0c\u6240\u4ee5PostGIS\u81ea\u52a8\u7ee7\u627f\u4e86\u91cd\u8981\u7684"\u4f01\u4e1a\u7ea7"\u7279\u6027\u4ee5\u53ca\u5f00\u653e\u6e90\u4ee3\u7801\u7684\u6807\u51c6\u3002'),(0,o.kt)("p",null,"\u53ef\u4ee5\u8bf4PostGIS\u4ec5\u4ec5\u53ea\u662fPostgreSQL\u7684\u4e00\u4e2a\u63d2\u4ef6\uff0c\u4f46\u662f\u5b83\u5c06PostgreSQL\u53d8\u6210\u4e86\u4e00\u4e2a\u5f3a\u5927\u7684\u7a7a\u95f4\u6570\u636e\u5e93\uff01"),(0,o.kt)("p",null,"\u95ee\u9898\u63cf\u8ff0\uff1a"),(0,o.kt)("p",null,"\u5bf9\u8f66\u8f86\u7684\u4f4d\u7f6e\u4fe1\u606f\u8fdb\u884c\u5b58\u50a8\uff0c\u67e5\u8be2\u8f66\u8f86\u7684\u884c\u9a76\u8f68\u8ff9\u548c\u91cc\u7a0b\u3002"),(0,o.kt)("h3",{id:"\u5b89\u88c5postgres"},"\u5b89\u88c5postgres"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#\ndocker pull postgres:11.19-bullseye\n#\ndocker run \\\n--privileged=true \\\n--restart=always \\\n--name postgres \\\n-e POSTGRES_PASSWORD=Aa0123 \\\n-p 5432:5432 \\\n-v /mnt/docker/postgresql/data:/var/lib/postgresql/data \\\n-d postgres:11.19-bullseye\n# \u53d1\u73b0\u4f7f\u7528DBeaver\u8fde\u63a5\u4e0d\u4e0a\uff0c\u9700\u8981\u4fee\u6539/mnt/docker/postgresql/data/pg_hba.conf \n# \u589e\u52a0\u4e00\u884chost    all             all             192.168.41.69/32            trust\n# 192.168.41.69\u662f\u6211\u81ea\u5df1\u7684ip\n\n")))}d.isMDXComponent=!0}}]);