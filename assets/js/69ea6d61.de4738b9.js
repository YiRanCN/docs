"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8075],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,y=p["".concat(c,".").concat(f)]||p[f]||l[f]||i;return t?r.createElement(y,a(a({ref:n},d),{},{components:t})):r.createElement(y,a({ref:n},d))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},72415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(58168),o=(t(96540),t(15680));const i={},a=void 0,s={unversionedId:"study/devops/Linux\u8fd0\u7ef4-\u786c\u76d8\u6027\u80fd",id:"study/devops/Linux\u8fd0\u7ef4-\u786c\u76d8\u6027\u80fd",title:"Linux\u8fd0\u7ef4-\u786c\u76d8\u6027\u80fd",description:"fio",source:"@site/docs/study/devops/Linux\u8fd0\u7ef4-\u786c\u76d8\u6027\u80fd.md",sourceDirName:"study/devops",slug:"/study/devops/Linux\u8fd0\u7ef4-\u786c\u76d8\u6027\u80fd",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-\u786c\u76d8\u6027\u80fd",draft:!1,tags:[],version:"current",lastUpdatedAt:1733196184,formattedLastUpdatedAt:"2024\u5e7412\u67083\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"Linux\u8fd0\u7ef4-\u76d1\u63a7\u6570\u636e",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-\u76d1\u63a7\u6570\u636e"},next:{title:"Linux\u8fd0\u7ef4-\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6",permalink:"/docs/study/devops/Linux\u8fd0\u7ef4-\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6"}},c={},u=[{value:"fio",id:"fio",level:3}],d={toc:u},p="wrapper";function l(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"fio"},"fio"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# \u987a\u5e8f\u8bfb\u53d6\u6d4b\u8bd5\n# --name\u53c2\u6570\u7528\u4e8e\u6307\u5b9a\u6d4b\u8bd5\u540d\u79f0\uff0c\n# --filename\u6307\u5b9a\u8981\u6d4b\u8bd5\u7684\u8bbe\u5907\uff08\u8fd9\u91cc\u662f/dev/sda\uff0c\u8868\u793a\u7cfb\u7edf\u4e2d\u7684\u7b2c\u4e00\u5757\u78c1\u76d8\uff09\uff0c\n# --direct=1\u8868\u793a\u4f7f\u7528\u76f4\u63a5 I/O \u6a21\u5f0f\uff0c\u8df3\u8fc7\u64cd\u4f5c\u7cfb\u7edf\u7684\u7f13\u5b58\uff0c\n# --rw=read\u8868\u793a\u6d4b\u8bd5\u8bfb\u53d6\u6a21\u5f0f\uff0c\n# --bs=1M\u8868\u793a\u5757\u5927\u5c0f\u4e3a 1MB\uff0c\n# --size=1G\u8868\u793a\u6d4b\u8bd5\u6570\u636e\u5927\u5c0f\u4e3a 1GB\uff0c\n# --numjobs=1\u8868\u793a\u4f7f\u7528 1 \u4e2a\u7ebf\u7a0b\uff0c\n# --iodepth=1\u8868\u793a I/O \u961f\u5217\u6df1\u5ea6\u4e3a 1\u3002\nfio --name=seq-read --filename=/dev/sda --direct=1 --rw=read --bs=1M --size=1G --numjobs=1 --iodepth=1\n# \u968f\u673a\u5199\u5165\u6d4b\u8bd5\n# \u4e0e\u987a\u5e8f\u8bfb\u53d6\u6d4b\u8bd5\u7c7b\u4f3c\uff0c\u4f46\u8fd9\u91cc\n# --rw = write\u8868\u793a\u6d4b\u8bd5\u5199\u5165\u6a21\u5f0f\uff0c\n# --bs = 4k\u8868\u793a\u5757\u5927\u5c0f\u4e3a 4KB\uff0c\n# --numjobs = 4\u8868\u793a\u4f7f\u7528 4 \u4e2a\u7ebf\u7a0b\uff0c\n# --iodepth = 16\u8868\u793a I/O \u961f\u5217\u6df1\u5ea6\u4e3a 16\uff0c\u8fd9\u79cd\u914d\u7f6e\u66f4\u9002\u5408\u6a21\u62df\u591a\u7528\u6237\u540c\u65f6\u5199\u5165\u5c0f\u6587\u4ef6\u7684\u573a\u666f\uff0c\u5982\u6570\u636e\u5e93\u4e8b\u52a1\u5199\u5165\u3002\nfio --name=rand-write --filename=/dev/sda --direct=1 --rw=write --bs=4k --size=512M --numjobs=4 --iodepth=16\n# \n# \u6d4b\u8bd5\u7ed3\u679c\u89e3\u8bfb\n# \u5e26\u5bbd\uff08Bandwidth\uff09\uff1a\n# \u5355\u4f4d\u901a\u5e38\u662f MB/s \u6216 GB/s\uff0c\u8868\u793a\u6bcf\u79d2\u8bfb\u5199\u7684\u6570\u636e\u91cf\u3002\u4f8b\u5982\uff0c\u6d4b\u8bd5\u7ed3\u679c\u663e\u793a\u987a\u5e8f\u8bfb\u53d6\u5e26\u5bbd\u4e3a 100MB/s\uff0c\u610f\u5473\u7740\u6bcf\u79d2\u53ef\u4ee5\u4ece\u5b58\u50a8\u8bbe\u5907\u8bfb\u53d6 100MB \u7684\u6570\u636e\u3002\u5e26\u5bbd\u8d8a\u9ad8\uff0c\u8bf4\u660e\u5b58\u50a8\u8bbe\u5907\u5728\u8be5\u6a21\u5f0f\u4e0b\u7684\u6570\u636e\u4f20\u8f93\u901f\u5ea6\u8d8a\u5feb\u3002\n# IOPS\uff08Input/Output Operations Per Second\uff09\uff1a\n# \u5373\u6bcf\u79d2 I/O \u64cd\u4f5c\u6b21\u6570\u3002\u5728\u968f\u673a\u8bfb\u5199\u6d4b\u8bd5\u4e2d\uff0cIOPS \u662f\u4e00\u4e2a\u91cd\u8981\u7684\u6307\u6807\u3002\u4f8b\u5982\uff0c\u6d4b\u8bd5\u7ed3\u679c\u663e\u793a\u968f\u673a\u5199\u5165 IOPS \u4e3a 10000\uff0c\u8bf4\u660e\u6bcf\u79d2\u53ef\u4ee5\u8fdb\u884c 10000 \u6b21\u5199\u5165\u64cd\u4f5c\u3002\u5bf9\u4e8e\u6570\u636e\u5e93\u7b49\u5bf9\u5c0f\u6587\u4ef6\u9891\u7e41\u8bfb\u5199\u7684\u5e94\u7528\uff0c\u9ad8 IOPS \u610f\u5473\u7740\u66f4\u597d\u7684\u6027\u80fd\u3002\n# \u5ef6\u8fdf\uff08Latency\uff09\uff1a\n# \u4ee5\u7eb3\u79d2\uff08ns\uff09\u3001\u5fae\u79d2\uff08\u03bcs\uff09\u6216\u6beb\u79d2\uff08ms\uff09\u4e3a\u5355\u4f4d\uff0c\u4ee3\u8868\u6bcf\u4e2a I/O \u64cd\u4f5c\u4ece\u53d1\u8d77\u8bf7\u6c42\u5230\u5b8c\u6210\u7684\u65f6\u95f4\u3002\u4f8b\u5982\uff0c\u5e73\u5747\u5199\u5165\u5ef6\u8fdf\u4e3a 100\u03bcs\uff0c\u8868\u793a\u6bcf\u4e2a\u5199\u5165\u8bf7\u6c42\u5e73\u5747\u9700\u8981 100 \u5fae\u79d2\u624d\u80fd\u5b8c\u6210\u3002\u8f83\u4f4e\u7684\u5ef6\u8fdf\u8868\u793a\u5b58\u50a8\u8bbe\u5907\u80fd\u591f\u66f4\u5feb\u5730\u54cd\u5e94 I/O \u8bf7\u6c42\u3002\n\n")))}l.isMDXComponent=!0}}]);