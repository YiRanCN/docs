"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1999],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(6540);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),g=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},i=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),y=g(r),i=s,d=y["".concat(p,".").concat(i)]||y[i]||c[i]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,l=new Array(o);l[0]=i;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[y]="string"==typeof e?e:s,l[1]=a;for(var g=2;g<o;g++)l[g]=r[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}i.displayName="MDXCreateElement"},1716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>g});var n=r(8168),s=(r(6540),r(5680));const o={},l=void 0,a={unversionedId:"study/db/SQL/PostgreSQL",id:"study/db/SQL/PostgreSQL",title:"PostgreSQL",description:"\u7b80\u4ecb",source:"@site/docs/study/db/SQL/PostgreSQL.md",sourceDirName:"study/db/SQL",slug:"/study/db/SQL/PostgreSQL",permalink:"/docs/study/db/SQL/PostgreSQL",draft:!1,tags:[],version:"current",lastUpdatedAt:1728377790,formattedLastUpdatedAt:"2024\u5e7410\u67088\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"OpenGauss",permalink:"/docs/study/db/SQL/OpenGauss"},next:{title:"\u8fbe\u68a6\u6570\u636e\u5e93",permalink:"/docs/study/db/SQL/\u8fbe\u68a6"}},p={},g=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"PostGIS",id:"postgis",level:3},{value:"\u5b89\u88c5postgres",id:"\u5b89\u88c5postgres",level:3},{value:"mysql\u8fc1\u79fb\u5230postgres",id:"mysql\u8fc1\u79fb\u5230postgres",level:3}],u={toc:g},y="wrapper";function c(e){let{components:t,...r}=e;return(0,s.yg)(y,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"PostgreSQL"),"\xa0(\u4e5f\u53eb Postgres)\u662f\u4e00\u4e2a\u81ea\u7531\u7684",(0,s.yg)("strong",{parentName:"p"},"\u5bf9\u8c61-\u5173\u7cfb\u6570\u636e\u5e93"),"\u670d\u52a1\u5668(\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf)\uff0c\u5b83\u5728\u7075\u6d3b\u7684 BSD-\u98ce\u683c\u8bb8\u53ef\u8bc1\u4e0b\u53d1\u884c\u3002\u5b83\u63d0\u4f9b\u4e86\u76f8\u5bf9\u5176\u4ed6\u5f00\u653e\u6e90\u4ee3\u7801\u6570\u636e\u5e93\u7cfb\u7edf(\u6bd4\u5982 MySQL \u548c Firebird)\uff0c\u548c\u5bf9\u4e13\u6709\u7cfb\u7edf\u6bd4\u5982 Oracle\u3001Sybase\u3001IBM \u7684 DB2 \u548c Microsoft SQL Server\u7684\u4e00\u79cd\u9009\u62e9\u3002"),(0,s.yg)("p",null,'PostgreSQL \u7684 Slogan(\u53e3\u53f7) \u662f "\u4e16\u754c\u4e0a\u6700\u5148\u8fdb\u7684\u5f00\u6e90\u5173\u7cfb\u578b\u6570\u636e\u5e93"\u3002'),(0,s.yg)("h3",{id:"postgis"},"PostGIS"),(0,s.yg)("p",null,"PostGIS\u5728\u5bf9\u8c61\u5173\u7cfb\u578b\u6570\u636e\u5e93PostgreSQL\u4e0a\u589e\u52a0\u4e86\u5b58\u50a8\u7ba1\u7406\u7a7a\u95f4\u6570\u636e\u7684\u80fd\u529b\uff0c\u76f8\u5f53\u4e8eOracle\u7684spatial\u90e8\u5206\u3002PostGIS\u6700\u5927\u7684\u7279\u70b9\u662f\u7b26\u5408\u5e76\u4e14\u5b9e\u73b0\u4e86OpenGIS\u7684\u4e00\u4e9b\u89c4\u8303\uff0c\u662f\u6700\u8457\u540d\u7684\u5f00\u6e90GIS\u6570\u636e\u5e93\u3002"),(0,s.yg)("p",null,"PostGIS\u901a\u8fc7\u5411PostgreSQL\u6dfb\u52a0\u5bf9\u7a7a\u95f4\u6570\u636e\u7c7b\u578b\u3001\u7a7a\u95f4\u7d22\u5f15\u548c\u7a7a\u95f4\u51fd\u6570\u7684\u652f\u6301\uff0c\u5c06PostgreSQL\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u8f6c\u6362\u4e3a\u7a7a\u95f4\u6570\u636e\u5e93\u3002"),(0,s.yg)("p",null,'\u56e0\u4e3aPostGIS\u662f\u5efa\u7acb\u5728PostgreSQL\u4e4b\u4e0a\u7684\uff0c\u6240\u4ee5PostGIS\u81ea\u52a8\u7ee7\u627f\u4e86\u91cd\u8981\u7684"\u4f01\u4e1a\u7ea7"\u7279\u6027\u4ee5\u53ca\u5f00\u653e\u6e90\u4ee3\u7801\u7684\u6807\u51c6\u3002'),(0,s.yg)("p",null,"\u53ef\u4ee5\u8bf4PostGIS\u4ec5\u4ec5\u53ea\u662fPostgreSQL\u7684\u4e00\u4e2a\u63d2\u4ef6\uff0c\u4f46\u662f\u5b83\u5c06PostgreSQL\u53d8\u6210\u4e86\u4e00\u4e2a\u5f3a\u5927\u7684\u7a7a\u95f4\u6570\u636e\u5e93\uff01"),(0,s.yg)("p",null,"\u95ee\u9898\u63cf\u8ff0\uff1a"),(0,s.yg)("p",null,"\u5bf9\u8f66\u8f86\u7684\u4f4d\u7f6e\u4fe1\u606f\u8fdb\u884c\u5b58\u50a8\uff0c\u67e5\u8be2\u8f66\u8f86\u7684\u884c\u9a76\u8f68\u8ff9\u548c\u91cc\u7a0b\u3002"),(0,s.yg)("h3",{id:"\u5b89\u88c5postgres"},"\u5b89\u88c5postgres"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"#\ndocker pull postgres:11.19-bullseye\n#\ndocker run \\\n--privileged=true \\\n--restart=always \\\n--name postgres \\\n-e POSTGRES_PASSWORD=Aa0123 \\\n-p 5432:5432 \\\n-v /mnt/docker/postgresql/data:/var/lib/postgresql/data \\\n-d postgres:11.19-bullseye\n# \u53d1\u73b0\u4f7f\u7528DBeaver\u8fde\u63a5\u4e0d\u4e0a\uff0c\u9700\u8981\u4fee\u6539/mnt/docker/postgresql/data/pg_hba.conf \n# \u589e\u52a0\u4e00\u884chost    all             all             192.168.41.69/32            trust\n# 192.168.41.69\u662f\u6211\u81ea\u5df1\u7684ip\n\n")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5728ubuntu\u4e0a\u5b89\u88c5\nsudo apt-get install postgresql -y\nsudo systemctl status postgresql\n#\npasswd postgres\n#\nsu - postgres\n#\npgsql\n#\n\\password postgres\n# \u67e5\u770b\u6240\u6709\u6570\u636e\u5e93\n\\l\n# \u521b\u5efa\u6570\u636e\u5e93\ncreate database xxx with owner=postgres encoding='UTF-8';\n")),(0,s.yg)("h3",{id:"mysql\u8fc1\u79fb\u5230postgres"},"mysql\u8fc1\u79fb\u5230postgres"),(0,s.yg)("p",null,"mysql\u8fc1\u79fb\u5230opengauss \u5c31\u76f8\u5f53\u4e8e mysql\u8fc1\u79fb\u5230postgres"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5728ubuntu\u4e0a\u5b89\u88c5\nsudo apt-get install pgloader -y\n# \u6ce8\u610f\u5bc6\u7801\u7684\u4f7f\u7528\uff0c\u5982\u679c\u643a\u5e26\u7279\u6b8a\u5b57\u7b26@\uff0c\u53ef\u4ee5\u7528\u4e24\u4e2a@\u6807\u8bc6\npgloader mysql://root:yyyyyyyyy@10.20.37.101:3306/ccsp_common pgsql://postgres:yyyyyyyyyy@127.0.0.1:5432/class\n")),(0,s.yg)("p",null,"\u53c2\u8003\u6587\u6863 ",(0,s.yg)("a",{parentName:"p",href:"https://pgloader.readthedocs.io/en/latest/ref/mysql.html#using-default-settings"},"https://pgloader.readthedocs.io/en/latest/ref/mysql.html#using-default-settings")))}c.isMDXComponent=!0}}]);