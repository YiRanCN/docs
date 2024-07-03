"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5599],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(6540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},i="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=c(n),d=s,g=i["".concat(p,".").concat(d)]||i[d]||y[d]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[i]="string"==typeof e?e:s,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(8168),s=(n(6540),n(5680));const a={},o="ssh",l={unversionedId:"study/devops/ssh",id:"study/devops/ssh",title:"ssh",description:"ssh\u8fde\u63a5\u4e0d\u4e0a",source:"@site/docs/study/devops/ssh.md",sourceDirName:"study/devops",slug:"/study/devops/ssh",permalink:"/docs/study/devops/ssh",draft:!1,tags:[],version:"current",lastUpdatedAt:1719996337,formattedLastUpdatedAt:"2024\u5e747\u67083\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"jar\u8fd0\u7ef4-\u76d1\u63a7",permalink:"/docs/study/devops/jar\u8fd0\u7ef4-\u76d1\u63a7"},next:{title:"\u94fe\u8def\u8ffd\u8e2a\u76d1\u63a7",permalink:"/docs/study/devops/\u94fe\u8def\u8ffd\u8e2a\u76d1\u63a7"}},p={},c=[{value:"ssh\u8fde\u63a5\u4e0d\u4e0a",id:"ssh\u8fde\u63a5\u4e0d\u4e0a",level:3},{value:"\u914d\u7f6essh\u514d\u5bc6\u767b\u5f55",id:"\u914d\u7f6essh\u514d\u5bc6\u767b\u5f55",level:3}],u={toc:c},i="wrapper";function y(e){let{components:t,...n}=e;return(0,s.yg)(i,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"ssh"},"ssh"),(0,s.yg)("h3",{id:"ssh\u8fde\u63a5\u4e0d\u4e0a"},"ssh\u8fde\u63a5\u4e0d\u4e0a"),(0,s.yg)("p",null,"\u73b0\u573a\u63cf\u8ff0\uff1a"),(0,s.yg)("p",null,"\u4f7f\u7528ssh ",(0,s.yg)("a",{parentName:"p",href:"mailto:ccsp@10.0.120.44"},"ccsp@10.0.120.44")," \u547d\u4ee4\u540e\uff0c\u8fc7\u4e86\u5f88\u4e45\u624d\u8fd4\u56de"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"Connection closed by 10.0.120.44 port 22\n")),(0,s.yg)("p",null,"\u6709\u7684\u670d\u52a1\u5668\u662f\u53ef\u4ee5\uff0c\u5f53\u65f6\u8fde\u63a5\u4e0d\u4e0a\u7684\u8fd9\u4e2a\u670d\u52a1\u5668\u662fUbuntu\uff0c10.0.120.44\u6240\u5728\u64cd\u4f5c\u7cfb\u7edf\u662f\u6b27\u62c9\u3002"),(0,s.yg)("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a"),(0,s.yg)("p",null,"\u6211\u4e00\u5ea6\u6000\u7591\u662fssh\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u6709\u7684\u670d\u52a1\u5668\u80fd\u591f\u6b63\u5e38\u7684\u8fde\u63a5\uff0c\u800c\u4e14\u7528\u81ea\u5df1\u7684windows\u5ba2\u6237\u7aef\u90fd\u662f\u53ef\u4ee5\u6b63\u5e38\u8fde\u63a5\u7684\u3002"),(0,s.yg)("p",null,"\u4f7f\u7528\u547d\u4ee4 "),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"ssh -v  ccsp@10.0.120.44\n")),(0,s.yg)("p",null,"\u8f93\u51fa\u6253\u5370\u65e5\u5fd7\uff0c\u53d1\u73b0\u4e86\u4e00\u70b9\u8e2a\u8ff9\uff0c"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"debug1: Unspecified GSS failure.  Minor code may provide more information\nNo Kerberos credentials available (default cache: FILE:/tmp/krb5cc_994)\n")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},(0,s.yg)("em",{parentName:"strong"},"\u89e3\u51b3\u65b9\u6848"))),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"ssh -v -o GSSAPIAuthentication=no ccsp@10.0.120.44\n")),(0,s.yg)("p",null,"\u589e\u52a0\u53c2\u6570 \u7981\u7528GSSAPIAuthentication"),(0,s.yg)("p",null,"\u539f\u56e0\u662fclient\u548cserver\u7684ssh\u7248\u672c\u662f\u4e0d\u4e00\u81f4\u7684\uff0cclient\u7684\u7248\u672c\u6709\u70b9\u4f4e\u3002"),(0,s.yg)("h3",{id:"\u914d\u7f6essh\u514d\u5bc6\u767b\u5f55"},"\u914d\u7f6essh\u514d\u5bc6\u767b\u5f55"),(0,s.yg)("p",null,"\u914d\u7f6eSSH\u514d\u5bc6\u767b\u5f55\u7684\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,s.yg)("p",null,"\u751f\u6210SSH\u5bc6\u94a5\u5bf9\u3002\u5728\u672c\u5730\u8ba1\u7b97\u673a\u7684\u7ec8\u7aef\u6216\u547d\u4ee4\u63d0\u793a\u7b26\u4e2d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u751f\u6210SSH\u5bc6\u94a5\u5bf9\uff1assh-keygen -t rsa\uff0c\u8fd9\u5c06\u521b\u5efa\u4e00\u4e2a\u79c1\u94a5\uff08id_rsa\uff09\u548c\u4e00\u4e2a\u516c\u94a5\uff08id_rsa.pub\uff09\u3002"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"#\nssh-keygen -t rsa\n#\nssh-copy-id username@remote_host\n# \u7279\u6b8a\u7aef\u53e3\nssh-copy-id -p 10212 username@remote_host\n#\n")),(0,s.yg)("p",null,"\u5c06\u516c\u94a5\u590d\u5236\u5230\u76ee\u6807\u670d\u52a1\u5668\u3002\u4f7f\u7528ssh-copy-id\u547d\u4ee4\u5c06\u516c\u94a5\u590d\u5236\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\uff0c\u4f8b\u5982ssh-copy-id username@remote_host\uff0c\u5176\u4e2dusername\u662f\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u7528\u6237\u540d\uff0cremote_host\u662f\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u5730\u5740\u6216\u57df\u540d\u3002"),(0,s.yg)("p",null,"\u6d4b\u8bd5\u514d\u5bc6\u767b\u5f55\u3002\u5728\u672c\u5730\u8ba1\u7b97\u673a\u4e0a\u6267\u884cssh\u547d\u4ee4\uff0c\u65e0\u9700\u8f93\u5165\u5bc6\u7801\uff0c\u4f8b\u5982ssh username@remote_host\uff0c\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u5219\u8868\u793aSSH\u514d\u5bc6\u767b\u5f55\u5df2\u6210\u529f\u914d\u7f6e\u3002"),(0,s.yg)("p",null,"\u6b64\u5916\uff0c\u5728\u76ee\u6807\u670d\u52a1\u5668\u4e0a\uff0c\u53ef\u80fd\u9700\u8981\u914d\u7f6eSSH\u670d\u52a1\u4ee5\u5141\u8bb8\u514d\u5bc6\u767b\u5f55\uff0c\u8fd9\u901a\u5e38\u6d89\u53ca\u7f16\u8f91/etc/ssh/sshd_config\u6587\u4ef6\uff0c\u5e76\u6dfb\u52a0RSAAuthentication\ue6ea\u548cPubkeyAuthentication\u9009\u9879\uff0c\u5e76\u91cd\u542fSSH\u670d\u52a1\u3002"))}y.isMDXComponent=!0}}]);