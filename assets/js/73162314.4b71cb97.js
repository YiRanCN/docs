"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6898],{5680:(e,n,l)=>{l.d(n,{xA:()=>y,yg:()=>g});var a=l(6540);function t(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function r(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){t(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function i(e,n){if(null==e)return{};var l,a,t=function(e,n){if(null==e)return{};var l,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],n.indexOf(l)>=0||(t[l]=e[l]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var s=a.createContext({}),u=function(e){var n=a.useContext(s),l=n;return e&&(l="function"==typeof e?e(n):o(o({},n),e)),l},y=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},_=a.forwardRef((function(e,n){var l=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),c=u(l),_=t,g=c["".concat(s,".").concat(_)]||c[_]||d[_]||r;return l?a.createElement(g,o(o({ref:n},y),{},{components:l})):a.createElement(g,o({ref:n},y))}));function g(e,n){var l=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=l.length,o=new Array(r);o[0]=_;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:t,o[1]=i;for(var u=2;u<r;u++)o[u]=l[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}_.displayName="MDXCreateElement"},4398:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=l(8168),t=(l(6540),l(5680));const r={},o=void 0,i={unversionedId:"study/db/SQL/MySQL",id:"study/db/SQL/MySQL",title:"MySQL",description:"\u7248\u672c\u9009\u62e9",source:"@site/docs/study/db/SQL/MySQL.md",sourceDirName:"study/db/SQL",slug:"/study/db/SQL/MySQL",permalink:"/docs/study/db/SQL/MySQL",draft:!1,tags:[],version:"current",lastUpdatedAt:1715757036,formattedLastUpdatedAt:"2024\u5e745\u670815\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"MySQL \u7b14\u8bb0",permalink:"/docs/study/db/SQL/MySQL-\u7b14\u8bb0"},next:{title:"OpenGauss",permalink:"/docs/study/db/SQL/OpenGauss"}},s={},u=[{value:"\u7248\u672c\u9009\u62e9",id:"\u7248\u672c\u9009\u62e9",level:3},{value:"\u4fee\u6539\u65f6\u533a",id:"\u4fee\u6539\u65f6\u533a",level:3},{value:"\u521b\u5efa\u7528\u6237\u5e76\u6388\u6743",id:"\u521b\u5efa\u7528\u6237\u5e76\u6388\u6743",level:3},{value:"\u5185\u5b58\u5206\u914d",id:"\u5185\u5b58\u5206\u914d",level:3},{value:"\u5171\u4eab\u5185\u5b58",id:"\u5171\u4eab\u5185\u5b58",level:4},{value:"Session \u79c1\u6709\u5185\u5b58",id:"session-\u79c1\u6709\u5185\u5b58",level:4},{value:"\u5982\u4f55\u8bbe\u7f6e",id:"\u5982\u4f55\u8bbe\u7f6e",level:4},{value:"\u67e5\u8be2\u4f18\u5316",id:"\u67e5\u8be2\u4f18\u5316",level:3},{value:"\u5197\u4f59\u7d22\u5f15",id:"\u5197\u4f59\u7d22\u5f15",level:3},{value:"\u5b58\u50a8\u5f15\u64ce",id:"\u5b58\u50a8\u5f15\u64ce",level:3},{value:"MyISAM\u548cInnoDB\u533a\u522b",id:"myisam\u548cinnodb\u533a\u522b",level:3},{value:"\u4e50\u89c2\u9501\u4e0e\u60b2\u89c2\u9501\u7684\u533a\u522b",id:"\u4e50\u89c2\u9501\u4e0e\u60b2\u89c2\u9501\u7684\u533a\u522b",level:3},{value:"\u60b2\u89c2\u9501",id:"\u60b2\u89c2\u9501",level:4},{value:"\u4e50\u89c2\u9501",id:"\u4e50\u89c2\u9501",level:4},{value:"\u4e24\u79cd\u9501\u7684\u4f7f\u7528\u573a\u666f",id:"\u4e24\u79cd\u9501\u7684\u4f7f\u7528\u573a\u666f",level:4},{value:"\u65e5\u5fd7\u76f8\u5173/Binlog\u7b49",id:"\u65e5\u5fd7\u76f8\u5173binlog\u7b49",level:3},{value:"Binlog\u5f55\u5165\u683c\u5f0f",id:"binlog\u5f55\u5165\u683c\u5f0f",level:4},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:4},{value:"\u5360\u7528\u78c1\u76d8\u5927\u5c0f/\u6570\u636e\u5927\u5c0f/\u7d22\u5f15\u5927\u5c0f",id:"\u5360\u7528\u78c1\u76d8\u5927\u5c0f\u6570\u636e\u5927\u5c0f\u7d22\u5f15\u5927\u5c0f",level:3},{value:"\u4f18\u5316",id:"\u4f18\u5316",level:3}],y={toc:u},c="wrapper";function d(e){let{components:n,...l}=e;return(0,t.yg)(c,(0,a.A)({},y,l,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h3",{id:"\u7248\u672c\u9009\u62e9"},"\u7248\u672c\u9009\u62e9"),(0,t.yg)("p",null,"\u5f53\u524d\u6bd4\u8f83\u7a33\u5b9a\u7248\u672c\u662f5.6\u30015.7\u548c8.0\uff0c\u5982\u679c\u662f\u65b0\u9879\u76ee\u5f53\u7136\u662f\u75288.0\uff1b6.0\u5c31\u662f\u4e2a\u5e9f\u5f03\u7248\u672c\uff0c7.x\u662fNDB Cluster\u7248\uff1b"),(0,t.yg)("p",null,"mysql8.0\u7684\u4e3b\u8981\u65b0\u7279\u6027\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"hash join\uff1b")),(0,t.yg)("h3",{id:"\u4fee\u6539\u65f6\u533a"},"\u4fee\u6539\u65f6\u533a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"docker exec -it mysql02 bash\ncd /etc/mysql/mysql.conf.d\necho \"default-time_zone = '+8:00'\" >> mysqld.cnf\nexit\ndocker restart mysql02\n")),(0,t.yg)("h3",{id:"\u521b\u5efa\u7528\u6237\u5e76\u6388\u6743"},"\u521b\u5efa\u7528\u6237\u5e76\u6388\u6743"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"-- \u521b\u5efa\u7528\u6237\ncreate user 'xx'@'%' identified by 'xx';\n-- \u6388\u6743\u67d0\u4e2a\u8868\u7684\u67e5\u8be2\u548c\u589e\u52a0\u6743\u9650\ngrant SELECT,INSERT on newcloud.elk_user_func_flow_for_user_op_for_res to 'xx'@'%';\n-- \u5220\u9664\u7528\u6237\ndrop user 'xx'@'%';\n-- \u67e5\u770b\u67d0\u4e2a\u7528\u6237\u7684\u6388\u6743\u4fe1\u606f\nshow grants for 'cloudExtend'@'%'; \n--\nflush privileges;\n")),(0,t.yg)("h3",{id:"\u5185\u5b58\u5206\u914d"},"\u5185\u5b58\u5206\u914d"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u67e5\u8be2\u5171\u4eab\u5185\u5b58\u4f7f\u7528\u60c5\u51b5 \u5355\u4f4d\u662fByte\nshow variables where variable_name in (\n'innodb_buffer_pool_size','innodb_log_buffer_size','innodb_additional_mem_pool_size','key_buffer_size','query_cache_size'\n);\n-- InnoDB \u7f13\u51b2\u6c60\u5212\u5206\u4e3a\u7684\u533a\u57df\u6570\nshow variables like 'innodb_buffer_pool_instances'\n-- \u67e5\u8be2session\u79c1\u6709\u5185\u6d4b\u4f7f\u7528\u60c5\u51b5 \u5355\u4f4d\u662fByte\nshow variables where variable_name in (\n'read_buffer_size','read_rnd_buffer_size','sort_buffer_size','join_buffer_size','binlog_cache_size','tmp_table_size'\n);\n")),(0,t.yg)("p",null,"MySQL \u7684\u5185\u5b58\u5927\u4f53\u53ef\u4ee5\u5206\u4e3a\u5171\u4eab\u5185\u5b58\u548c session \u79c1\u6709\u5185\u5b58\u4e24\u90e8\u5206\uff0c\u4e0b\u9762\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u5404\u90e8\u5206\u7684\u6784\u6210\u3002"),(0,t.yg)("h4",{id:"\u5171\u4eab\u5185\u5b58"},"\u5171\u4eab\u5185\u5b58"),(0,t.yg)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"innodb_buffer_pool\n\u8be5\u90e8\u5206\u7f13\u5b58\u662f Innodb \u5f15\u64ce\u6700\u91cd\u8981\u7684\u7f13\u5b58\u533a\u57df\uff0c\u662f\u901a\u8fc7\u5185\u5b58\u6765\u5f25\u8865\u7269\u7406\u6570\u636e\u6587\u4ef6\u7684\u91cd\u8981\u624b\u6bb5\u3002\u5176\u4e2d\u4e3b\u8981\u5305\u542b\u6570\u636e\u9875\u3001\u7d22\u5f15\u9875\u3001undo \u9875\u3001insert buffer\u3001\u81ea\u9002\u5e94\u54c8\u5e0c\u7d22\u5f15\u3001\u9501\u4fe1\u606f\u4ee5\u53ca\u6570\u636e\u5b57\u5178\u7b49\u4fe1\u606f\u3002\u5728\u8fdb\u884c SQL \u8bfb\u548c\u5199\u7684\u64cd\u4f5c\u65f6\uff0c\u9996\u5148\u5e76\u4e0d\u662f\u5bf9\u7269\u7406\u6570\u636e\u6587\u4ef6\u64cd\u4f5c\uff0c\u800c\u662f\u5148\u5bf9 buffer_pool \u8fdb\u884c\u64cd\u4f5c\uff0c\u7136\u540e\u518d\u901a\u8fc7 checkpoint \u7b49\u673a\u5236\u5199\u56de\u6570\u636e\u6587\u4ef6\u3002\u8be5\u7a7a\u95f4\u7684\u4f18\u70b9\u662f\u53ef\u4ee5\u63d0\u5347\u6570\u636e\u5e93\u7684\u6027\u80fd\u3001\u52a0\u5feb SQL \u8fd0\u884c\u901f\u5ea6\uff0c\u7f3a\u70b9\u662f\u6545\u969c\u6062\u590d\u901f\u5ea6\u8f83\u6162\u3002"),(0,t.yg)("li",{parentName:"ul"},"innodb_log_buffer\n\u8be5\u90e8\u5206\u4e3b\u8981\u5b58\u653e redo log \u7684\u4fe1\u606f\uff0c\u5728 RDS \u4e0a\u4f1a\u8bbe\u7f6e 1 M \u7684\u5927\u5c0f\u3002InnoDB \u4f1a\u9996\u5148\u5c06 redo log \u5199\u5728\u8fd9\u91cc\uff0c\u7136\u540e\u6309\u7167\u4e00\u5b9a\u9891\u7387\u5c06\u5176\u5237\u65b0\u56de\u91cd\u505a\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002\u8be5\u7a7a\u95f4\u4e0d\u9700\u8981\u592a\u5927\uff0c\u56e0\u4e3a\u4e00\u822c\u60c5\u51b5\u4e0b\u8be5\u90e8\u5206\u7f13\u5b58\u4f1a\u4ee5\u8f83\u5feb\u9891\u7387\u5237\u65b0\u81f3 redo log\uff08Master Thread \u4f1a\u6bcf\u79d2\u5237\u65b0\u3001\u4e8b\u52a1\u63d0\u4ea4\u65f6\u4f1a\u5237\u65b0\u3001\u5176\u7a7a\u95f4\u5c11\u4e8e 1/2 \u65f6\u540c\u6837\u4f1a\u5237\u65b0\uff09\u3002"),(0,t.yg)("li",{parentName:"ul"},"innodb_additional_mem_pool\n\u8be5\u90e8\u5206\u4e3b\u8981\u5b58\u653e InnoDB \u5185\u7684\u4e00\u4e9b\u6570\u636e\u7ed3\u6784\uff0c\u5728 RDS \u4e2d\u7edf\u4e00\u8bbe\u7f6e\u4e3a 2 M\u3002\u901a\u5e38\u662f\u5728 buffer_pool \u4e2d\u7533\u8bf7\u5185\u5b58\u7684\u65f6\u5019\u8fd8\u9700\u8981\u5728\u989d\u5916\u5185\u5b58\u4e2d\u7533\u8bf7\u7a7a\u95f4\u5b58\u50a8\u8be5\u5bf9\u8c61\u7684\u7ed3\u6784\u4fe1\u606f\u3002\u8be5\u5927\u5c0f\u4e3b\u8981\u4e0e\u8868\u6570\u91cf\u6709\u5173\uff0c\u8868\u6570\u91cf\u8d8a\u5927\u9700\u8981\u66f4\u5927\u7684\u7a7a\u95f4\u3002"),(0,t.yg)("li",{parentName:"ul"},"key_buffer\n\u8be5\u90e8\u5206\u662f MyISAM \u8868\u7684\u91cd\u8981\u7f13\u5b58\u533a\u57df\uff0c\u6240\u6709\u5b9e\u4f8b\u7edf\u4e00\u4e3a 16 M\u3002\u8be5\u90e8\u5206\u4e3b\u8981\u5b58\u653e MyISAM \u8868\u7684\u952e\u3002MyISAM \u8868\u4e0d\u540c\u4e8e InnoDB \u8868\uff0c\u5176\u7f13\u5b58\u7684\u7d22\u5f15\u7f13\u5b58\u662f\u653e\u5728 key_buffer \u4e2d\u7684\uff0c\u800c\u6570\u636e\u7f13\u5b58\u5219\u5b58\u50a8\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u7684\u5185\u5b58\u4e2d\u3002RDS \u7684\u7cfb\u7edf\u662f MyISAM \u5f15\u64ce\u7684\uff0c\u56e0\u6b64\u5728 RDS \u4e2d\u662f\u7ed9\u4e88\u8be5\u90e8\u5206\u4e00\u5b9a\u91cf\u7684\u7a7a\u95f4\u7684\u3002"),(0,t.yg)("li",{parentName:"ul"},"query_cache\n\u8be5\u90e8\u5206\u662f\u5bf9\u67e5\u8be2\u7ed3\u679c\u505a\u7f13\u5b58\u4ee5\u51cf\u5c11\u89e3\u6790 SQL \u548c\u6267\u884c SQL \u7684\u82b1\u9500\uff0c\u5728 RDS \u4e0a\u5173\u95ed\u4e86\u8be5\u90e8\u5206\u7684\u7f13\u5b58\u3002\u4e3b\u8981\u9002\u5408\u4e8e\u8bfb\u591a\u5199\u5c11\u7684\u5e94\u7528\u573a\u666f\uff0c\u56e0\u4e3a\u5b83\u662f\u6309\u7167 SQL \u8bed\u53e5\u7684 hash \u503c\u8fdb\u884c\u7f13\u5b58\u7684\uff0c\u5f53\u8868\u6570\u636e\u53d1\u751f\u53d8\u5316\u540e\u5373\u5931\u6548\u3002")),(0,t.yg)("h4",{id:"session-\u79c1\u6709\u5185\u5b58"},"Session \u79c1\u6709\u5185\u5b58"),(0,t.yg)("p",null,"\u5171\u4eab\u5185\u5b58\u4e2d\u4ecb\u7ecd\u7684\u5185\u5b58\u7a7a\u95f4\u662f\u5b9e\u4f8b\u521b\u5efa\u65f6\u5373\u5206\u914d\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u5e76\u4e14\u662f\u6240\u6709\u8fde\u63a5\u5171\u4eab\u7684\u3002"),(0,t.yg)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"read_buffer&read_rnd_buffer\n\u5206\u522b\u5b58\u653e\u4e86\u5bf9\u987a\u5e8f\u548c\u968f\u673a\u626b\u63cf\uff08\u4f8b\u5982\u6309\u7167\u6392\u5e8f\u7684\u987a\u5e8f\u8bbf\u95ee\uff09\u7684\u7f13\u5b58\uff0cRDS \u7ed9\u6bcf\u4e2a session \u8bbe\u7f6e 256 K \u7684\u5927\u5c0f\u3002\u5f53 thread \u8fdb\u884c\u987a\u5e8f\u6216\u968f\u673a\u626b\u63cf\u6570\u636e\u65f6\u4f1a\u9996\u5148\u626b\u63cf\u8be5 buffer \u7a7a\u95f4\u4ee5\u907f\u514d\u66f4\u591a\u7684\u7269\u7406\u8bfb\u3002"),(0,t.yg)("li",{parentName:"ul"},"sort_buffer\n\u9700\u8981\u6267\u884c order by \u548c group by \u7684 SQL \u90fd\u4f1a\u5206\u914d sort_buffer\uff0c\u7528\u4e8e\u5b58\u50a8\u6392\u5e8f\u7684\u4e2d\u95f4\u7ed3\u679c\uff0c\u5728 RDS \u4e0a\u8bbe\u7f6e 256 K\u3002\u5728\u6392\u5e8f\u8fc7\u7a0b\u4e2d\uff0c\u82e5\u5b58\u50a8\u91cf\u5927\u4e8e sort_buffer_size\uff0c\u5219\u4f1a\u5728\u78c1\u76d8\u751f\u6210\u4e34\u65f6\u8868\u4ee5\u5b8c\u6210\u64cd\u4f5c\u3002\u5728 Linux \u7cfb\u7edf\u4e2d\uff0c\u5f53\u5206\u914d\u7a7a\u95f4\u5927\u4e8e 2 M \u65f6\u4f1a\u4f7f\u7528 mmap() \u800c\u4e0d\u662f malloc() \u6765\u8fdb\u884c\u5185\u5b58\u5206\u914d\uff0c\u5bfc\u81f4\u6548\u7387\u964d\u4f4e\u3002"),(0,t.yg)("li",{parentName:"ul"},"join_buffer\nMySQL \u4ec5\u652f\u6301 nest loop \u7684 join \u7b97\u6cd5\uff0cRDS \u8bbe\u7f6e 256 K \u7684\u5927\u5c0f\u3002\u5904\u7406\u903b\u8f91\u662f\u9a71\u52a8\u8868\u7684\u4e00\u884c\u548c\u975e\u9a71\u52a8\u8868\u8054\u5408\u67e5\u627e\uff0c\u8fd9\u65f6\u5c31\u53ef\u4ee5\u5c06\u975e\u9a71\u52a8\u8868\u653e\u5165 join_buffer\uff0c\u4e0d\u9700\u8981\u8bbf\u95ee\u62e5\u6709\u5e76\u53d1\u4fdd\u62a4\u673a\u5236\u7684 buffer_pool\u3002"),(0,t.yg)("li",{parentName:"ul"},"binlog_cache\n\u8be5\u533a\u57df\u7528\u6765\u7f13\u5b58\u8be5 thread \u7684 binlog \u65e5\u5fd7\uff0cRDS \u8bbe\u7f6e 256 K \u7684\u5927\u5c0f\u3002\u5728\u4e00\u4e2a\u4e8b\u52a1\u8fd8\u6ca1\u6709 commit \u4e4b\u524d\u4f1a\u5148\u5c06\u5176\u65e5\u5fd7\u5b58\u50a8\u4e8e binlog_cache \u4e2d\uff0c\u7b49\u5230\u4e8b\u52a1 commit \u540e\u4f1a\u5c06\u5176 binlog \u5237\u56de\u78c1\u76d8\u4e0a\u7684 binlog \u6587\u4ef6\u4ee5\u6301\u4e45\u5316\u3002"),(0,t.yg)("li",{parentName:"ul"},"tmp_table\n\u4e0d\u540c\u4e8e\u4e0a\u9762\u5404\u4e2a session \u5c42\u6b21\u7684 buffer\uff0c\u8fd9\u4e2a\u53c2\u6570\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e0a\u4fee\u6539\u3002\u8be5\u53c2\u6570\u662f\u6307\u7528\u6237\u5185\u5b58\u4e34\u65f6\u8868\u7684\u5927\u5c0f\uff0c\u5982\u679c\u8be5 thread \u521b\u5efa\u7684\u4e34\u65f6\u8868\u8d85\u8fc7\u5b83\u8bbe\u7f6e\u7684\u5927\u5c0f\u4f1a\u628a\u4e34\u65f6\u8868\u8f6c\u6362\u4e3a\u78c1\u76d8\u4e0a\u7684\u4e00\u5f20 MyISAM \u4e34\u65f6\u8868\u3002\u5982\u679c\u7528\u6237\u5728\u6267\u884c\u4e8b\u52a1\u65f6\u9047\u5230\u7c7b\u4f3c\u5982\u4e0b\u8fd9\u6837\u7684\u9519\u8bef\uff0c\u53ef\u4ee5\u8003\u8651\u589e\u5927 tmp_table \u7684\u503c\u3002")),(0,t.yg)("h4",{id:"\u5982\u4f55\u8bbe\u7f6e"},"\u5982\u4f55\u8bbe\u7f6e"),(0,t.yg)("p",null,"\u9488\u5bf9\u5f53\u524dMySQL\u4f01\u4e1a\u7528\u6237\u7684\u5b9e\u9645\u73af\u5883\uff08\u5927\u5185\u5b58\uff09\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u5728\u4e13\u7528\u6570\u636e\u5e93\u670d\u52a1\u5668\u4e0a\uff0c\u53ef\u4ee5\u5c06innodb_buffer_pool_size\u8bbe\u7f6e\u4e3a\u8ba1\u7b97\u673a\u7269\u7406\u5185\u5b58\u5927\u5c0f\u768480\uff05;"),(0,t.yg)("li",{parentName:"ol"},"\u5728innodb_buffer_pool_size\u8bbe\u7f6e\u6bd4\u8f83\u5927\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u5c06innodb_buffer_pool_instances\u7684\u503c\u8bbe\u7f6e\u4e3a8-16\uff0c\u4fdd\u8bc1\u4e00\u4e2apool 10G\u4ee5\u4e0a\u3002")),(0,t.yg)("p",null,"\uff08\u6ce8\u610finnodb_buffer_pool_size\u5fc5\u987b\u4e3a\xa0innodb_buffer_pool_instances \u7684\u500d\u6570\uff09"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"#\u901a\u8fc7SQL\u4fee\u6539 \u91cd\u542f\u540e\u5931\u6548 2G\nset global innodb_buffer_pool_size = 2147483648\n\n#\u4fee\u6539my.cnf\u914d\u7f6e \u9700\u8981\u91cd\u542f\ninnodb_buffer_pool_size = 2147483648\ninnodb_buffer_pool_size = 2G\ninnodb_buffer_pool_size = 2048M\n")),(0,t.yg)("h3",{id:"\u67e5\u8be2\u4f18\u5316"},"\u67e5\u8be2\u4f18\u5316"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"#\n-- \u67e5\u8be2\u7f13\u5b58\nshow variables where variable_name in (\n'have_query_cache','query_cache_limit','query_cache_min_res_unit','query_cache_size','query_cache_type','query_cache_wlock_invalidate'\n);\n")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"have_query_cache\uff1a\u5f53\u524d\u7684MYSQL\u7248\u672c\u662f\u5426\u652f\u6301\u201c\u67e5\u8be2\u7f13\u5b58\u201d\u529f\u80fd\u3002"),(0,t.yg)("li",{parentName:"ol"},"query_cache_min_res_unit\uff1a\u67e5\u8be2\u7f13\u5b58\u5206\u914d\u7684\u6700\u5c0f\u5757\uff08\u5b57\u8282\uff09\u3002\u9ed8\u8ba4\u503c\u662f4096\uff084KB\uff09\u3002\u5f53\u67e5\u8be2\u8fdb\u884c\u65f6\uff0cMySQL\u628a\u67e5\u8be2\u7ed3\u679c\u4fdd\u5b58\u5728query cache\uff0c\u4f46\u662f\u5982\u679c\u4fdd\u5b58\u7684\u7ed3\u679c\u6bd4\u8f83\u5927\uff0c\u8d85\u8fc7\u4e86query_cache_min_res_unit\u7684\u503c\uff0c\u8fd9\u65f6\u5019MySQL\u5c06\u4e00\u8fb9\u68c0\u7d22\u7ed3\u679c\uff0c\u4e00\u8fb9\u8fdb\u884c\u4fdd\u5b58\u7ed3\u679c\u3002\u4ed6\u4fdd\u5b58\u7ed3\u679c\u4e5f\u662f\u6309\u9ed8\u8ba4\u5927\u5c0f\u5148\u5206\u914d\u4e00\u5757\u7a7a\u95f4\uff0c\u5982\u679c\u4e0d\u591f\uff0c\u53c8\u8981\u7533\u8bf7\u65b0\u7684\u7a7a\u95f4\u7ed9\u4ed6\u3002\u5982\u679c\u67e5\u8be2\u7ed3\u679c\u6bd4\u8f83\u5c0f\uff0c\u9ed8\u8ba4\u7684query_cache_min_res_unit\u53ef\u80fd\u9020\u6210\u5927\u91cf\u7684\u5185\u5b58\u788e\u7247\uff0c\u5982\u679c\u67e5\u8be2\u7ed3\u679c\u6bd4\u8f83\u5927\uff0c\u9ed8\u8ba4\u7684query_cache_min_res_unit\u53c8\u4e0d\u591f\uff0c\u5bfc\u81f4\u4e00\u76f4\u5206\u914d\u5757\u7a7a\u95f4\uff0c\u6240\u4ee5\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u9700\u6c42\uff0c\u8c03\u8282query_cache_min_res_unit\u7684\u5927\u5c0f\u3002\u6ce8\uff1a\u5982\u679c\u4e0a\u9762\u8bf4\u7684\u5185\u5bb9\u6709\u70b9\u5f2f\u5f2f\u7ed5\uff0c\u90a3\u4e3e\u4e2a\u73b0\u5b9e\u751f\u6d3b\u4e2d\u7684\u4f8b\u5b50\uff0c\u6bd4\u5982\u54b1\u73b0\u5728\u8981\u7ed9\u8fd0\u52a8\u5458\u9001\u6c34\uff0c\u9ed8\u8ba4\u7684\u662f500ml\u7684\u74f6\u5b50\uff0c\u5982\u679c\u8fc7\u6765\u7684\u662f\u5c11\u5e74\u8fd0\u52a8\u5458\uff0c\u53ef\u80fd500ml\u592a\u5927\u4e86\uff0c\u4ed6\u4eec\u559d\u4e0d\u5b8c\uff0c\u9020\u6210\u4e86\u6d6a\u8d39\uff0c\u90a3\u6211\u4eec\u5c31\u53ef\u4ee5\u9009\u62e9300ml\u7684\u74f6\u5b50\uff0c\u5982\u679c\u8fc7\u6765\u7684\u662f\u6210\u5e74\u8fd0\u52a8\u5458\uff0c\u53ef\u80fd500ml\u4e0d\u591f\uff0c\u90a3\u4ed6\u4eec\u4e00\u74f6\u559d\u5b8c\u4e86\uff0c\u53c8\u5f00\u4e00\u74f6\uff0c\u76f4\u63a5\u4e0d\u6e34\u4e3a\u6b62\u3002\u90a3\u4e48\u90a3\u6837\u5f00\u74f6\u5b50\u4e5f\u8981\u65f6\u95f4\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u9009\u62e91000ml\u7684\u74f6\u5b50\u3002"),(0,t.yg)("li",{parentName:"ol"},"query_cache_size\uff1a\u4e3a\u7f13\u5b58\u67e5\u8be2\u7ed3\u679c\u5206\u914d\u7684\u603b\u5185\u5b58\u3002"),(0,t.yg)("li",{parentName:"ol"},"query_cache_type\uff1a\u9ed8\u8ba4\u4e3aon\u3002"),(0,t.yg)("li",{parentName:"ol"},"query_cache_wlock_invalidate\uff1a\u5982\u679c\u8be5\u8868\u88ab\u9501\u4f4f\uff0c\u662f\u5426\u8fd4\u56de\u7f13\u5b58\u4e2d\u7684\u6570\u636e\uff0c\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\u3002")),(0,t.yg)("p",null,"MYSQL\u7684\u67e5\u8be2\u7f13\u5b58\u5b9e\u8d28\u4e0a\u662f\u7f13\u5b58SQL\u7684hash\u503c\u548c\u8be5SQL\u7684\u67e5\u8be2\u7ed3\u679c\uff0c\u5982\u679c\u8fd0\u884c\u76f8\u540c\u7684SQL,\u670d\u52a1\u5668\u76f4\u63a5\u4ece\u7f13\u5b58\u4e2d\u53bb\u6389\u7ed3\u679c\uff0c\u800c\u4e0d\u518d\u53bb\u89e3\u6790\uff0c\u4f18\u5316\uff0c\u5bfb\u627e\u6700\u4f4e\u6210\u672c\u7684\u6267\u884c\u8ba1\u5212\u7b49\u4e00\u7cfb\u5217\u64cd\u4f5c\uff0c\u5927\u5927\u63d0\u5347\u4e86\u67e5\u8be2\u901f\u5ea6\u3002\n\u4f46\u662f\u4e07\u4e8b\u6709\u5229\u4e5f\u6709\u5f0a\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u5f0a\u7aef\u5c31\u662f\u5982\u679c\u8868\u7684\u6570\u636e\u6709\u4e00\u6761\u53d1\u751f\u53d8\u5316\uff0c\u90a3\u4e48\u7f13\u5b58\u597d\u7684\u7ed3\u679c\u5c06\u5168\u90e8\u4e0d\u518d\u6709\u6548\u3002\u8fd9\u5bf9\u4e8e\u9891\u7e41\u66f4\u65b0\u7684\u8868\uff0c\u67e5\u8be2\u7f13\u5b58\u662f\u4e0d\u9002\u5408\u7684\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u5f0a\u7aef\u5c31\u662f\u7f13\u5b58\u673a\u5236\u662f\u901a\u8fc7\u5bf9SQL\u7684hash\uff0c\u5f97\u51fa\u7684\u503c\u4e3akey\uff0c\u67e5\u8be2\u7ed3\u679c\u4e3avalue\u6765\u5b58\u653e\u7684\uff0c\u90a3\u4e48\u5c31\u610f\u5473\u7740SQL\u5fc5\u987b\u5b8c\u5b8c\u5168\u5168\u4e00\u6a21\u4e00\u6837\uff0c\u5426\u5219\u5c31\u547d\u4e0d\u4e2d\u7f13\u5b58\u3002")),(0,t.yg)("p",null,"\u9ed8\u8ba4query_cache_type\u8bbe\u7f6e\u4e3aOFF\uff0c\u5176\u5b9e\u7f51\u4e0a\u8d44\u6599\u548c\u5404\u5927\u4e91\u5382\u5546\u63d0\u4f9b\u7684\u4e91\u670d\u52a1\u5668\u90fd\u662f\u5c06\u8fd9\u4e2a\u529f\u80fd\u5173\u95ed\u7684\uff0c\u4ece\u4e0a\u9762\u7684\u539f\u7406\u6765\u770b\uff0c\u5728\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4ed6\u7684\u5f0a\u7aef\u5927\u4e8e\u4f18\u70b9\u3002"),(0,t.yg)("h3",{id:"\u5197\u4f59\u7d22\u5f15"},"\u5197\u4f59\u7d22\u5f15"),(0,t.yg)("p",null,"\u5197\u4f59\u7d22\u5f15\u6307\u7684\u662f\u7d22\u5f15\u7684\u529f\u80fd\u76f8\u540c\uff0c\u80fd\u591f\u547d\u4e2d\u5c31\u80af\u5b9a\u80fd\u547d\u4e2d \uff0c\u90a3\u4e48\u5c31\u662f\u5197\u4f59\u7d22\u5f15\u5982\uff08name,city \uff09\u548c\uff08name \uff09\u8fd9\u4e24\u4e2a\u7d22\u5f15\u5c31\u662f\u5197\u4f59\u7d22\u5f15\uff0c\u80fd\u591f\u547d\u4e2d\u540e\u8005\u7684\u67e5\u8be2\u80af\u5b9a\u662f\u80fd\u591f\u547d\u4e2d\u524d\u8005\u7684 \u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u90fd\u5e94\u8be5\u5c3d\u91cf\u6269\u5c55\u5df2\u6709\u7684\u7d22\u5f15\u800c\u4e0d\u662f\u521b\u5efa\u65b0\u7d22\u5f15\u3002\nMySQLS.7 \u7248\u672c\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2 sys \u5e93\u7684 schema_redundant_indexes \u8868\u6765\u67e5\u770b\u5197\u4f59\u7d22\u5f15\u3002"),(0,t.yg)("h3",{id:"\u5b58\u50a8\u5f15\u64ce"},"\u5b58\u50a8\u5f15\u64ce"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u67e5\u8be2\u5f53\u524d\u6570\u636e\u5e93\u670d\u52a1\u5668\u652f\u6301\u7684\u5b58\u50a8\u5f15\u64ce\u5217\u8868\nshow engines;\n-- \u67e5\u770b\u9ed8\u8ba4\u7684\u5b58\u50a8\u5f15\u64ce\nshow variables like '%storage_engine%';\n-- \u67e5\u770b\u8868\u7684\u5b58\u50a8\u5f15\u64ce\u53ca\u5176\u4ed6\u76f8\u5173\u4fe1\u606f\nshow table status like \"table_name\";\n")),(0,t.yg)("h3",{id:"myisam\u548cinnodb\u533a\u522b"},"MyISAM\u548cInnoDB\u533a\u522b"),(0,t.yg)("p",null,"MyISAM\u662fMySQL\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\u5f15\u64ce\uff085.5\u7248\u4e4b\u524d\uff09\u3002\u867d\u7136\u6027\u80fd\u6781\u4f73\uff0c\u800c\u4e14\u63d0\u4f9b\u4e86\u5927\u91cf\u7684\u7279\u6027\uff0c\u5305\u62ec\u5168\u6587\u7d22\u5f15\u3001\u538b\u7f29\u3001\u7a7a\u95f4\u51fd\u6570\u7b49\uff0c\u4f46MyISAM\u4e0d\u652f\u6301\u4e8b\u52a1\u548c\u884c\u7ea7\u9501\uff0c\u800c\u4e14\u6700\u5927\u7684\u7f3a\u9677\u5c31\u662f\u5d29\u6e83\u540e\u65e0\u6cd5\u5b89\u5168\u6062\u590d\u3002\u4e0d\u8fc7\uff0c5.5\u7248\u672c\u4e4b\u540e\uff0cMySQL\u5f15\u5165\u4e86InnoDB\uff08\u4e8b\u52a1\u6027\u6570\u636e\u5e93\u5f15\u64ce\uff09\uff0cMySQL 5.5\u7248\u672c\u540e\u9ed8\u8ba4\u7684\u5b58\u50a8\u5f15\u64ce\u4e3aInnoDB\u3002\n\u5927\u591a\u6570\u65f6\u5019\u6211\u4eec\u4f7f\u7528\u7684\u90fd\u662f InnoDB \u5b58\u50a8\u5f15\u64ce\uff0c\u4f46\u662f\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4f7f\u7528 MyISAM \u4e5f\u662f\u5408\u9002\u7684\u6bd4\u5982\u8bfb\u5bc6\u96c6\u7684\u60c5\u51b5\u4e0b\u3002\uff08\u5982\u679c\u4f60\u4e0d\u4ecb\u610f MyISAM \u5d29\u6e83\u56de\u590d\u95ee\u9898\u7684\u8bdd\uff09\u3002"),(0,t.yg)("p",null,"\u4e24\u8005\u7684\u5bf9\u6bd4\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u662f\u5426\u652f\u6301\u884c\u7ea7\u9501: MyISAM \u53ea\u6709\u8868\u7ea7\u9501(table-level locking)\uff0c\u800cInnoDB \u652f\u6301\u884c\u7ea7\u9501(row-level locking)\u548c\u8868\u7ea7\u9501,\u9ed8\u8ba4\u4e3a\u884c\u7ea7\u9501\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u662f\u5426\u652f\u6301\u4e8b\u52a1\u548c\u5d29\u6e83\u540e\u7684\u5b89\u5168\u6062\u590d\uff1aMyISAM\u5f3a\u8c03\u7684\u662f\u6027\u80fd\uff0c\u6bcf\u6b21\u67e5\u8be2\u5177\u6709\u539f\u5b50\u6027,\u5176\u6267\u884c\u6bd4InnoDB\u7c7b\u578b\u66f4\u5feb\uff0c\u4f46\u662f\u4e0d\u63d0\u4f9b\u4e8b\u52a1\u652f\u6301\u3002\u4f46\u662fInnoDB\u63d0\u4f9b\u4e8b\u52a1\u652f\u6301\u4e8b\u52a1\uff0c\u5916\u90e8\u952e\u7b49\u9ad8\u7ea7\u6570\u636e\u5e93\u529f\u80fd\u3002\u5177\u6709\u4e8b\u52a1(commit)\u3001\u56de\u6eda(rollback)\u548c\u5d29\u6e83\u4fee\u590d\u80fd\u529b(crash recovery capabilities)\u7684\u4e8b\u52a1\u5b89\u5168(transaction-safe (ACID compliant))\u578b\u8868\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u662f\u5426\u652f\u6301\u5916\u952e\uff1aMyISAM\u4e0d\u652f\u6301\uff0c\u800cInnoDB\u652f\u6301\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u662f\u5426\u652f\u6301MVCC\uff1a\u4ec5 InnoDB \u652f\u6301\u3002\u5e94\u5bf9\u9ad8\u5e76\u53d1\u4e8b\u52a1, MVCC\u6bd4\u5355\u7eaf\u7684\u52a0\u9501\u66f4\u9ad8\u6548;MVCC\u53ea\u5728 READ COMMITTED\u548c REPEATABLE READ\u4e24\u4e2a\u9694\u79bb\u7ea7\u522b\u4e0b\u5de5\u4f5c;MVCC\u53ef\u4ee5\u4f7f\u7528 \u4e50\u89c2(optimistic)\u9501 \u548c \u60b2\u89c2(pessimistic)\u9501\u6765\u5b9e\u73b0;\u5404\u6570\u636e\u5e93\u4e2dMVCC\u5b9e\u73b0\u5e76\u4e0d\u7edf\u4e00\u3002"),(0,t.yg)("li",{parentName:"ol"},"......")),(0,t.yg)("p",null,"\u300aMySQL\u9ad8\u6027\u80fd\u300b\u4e0a\u9762\u6709\u4e00\u53e5\u8bdd\u8fd9\u6837\u5199\u5230:"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u4e0d\u8981\u8f7b\u6613\u76f8\u4fe1\u201cMyISAM\u6bd4InnoDB\u5feb\u201d\u4e4b\u7c7b\u7684\u7ecf\u9a8c\u4e4b\u8c08\uff0c\u8fd9\u4e2a\u7ed3\u8bba\u5f80\u5f80\u4e0d\u662f\u7edd\u5bf9\u7684\u3002\u5728\u5f88\u591a\u6211\u4eec\u5df2\u77e5\u573a\u666f\u4e2d\uff0cInnoDB\u7684\u901f\u5ea6\u90fd\u53ef\u4ee5\u8ba9MyISAM\u671b\u5c18\u83ab\u53ca\uff0c\u5c24\u5176\u662f\u7528\u5230\u4e86\u805a\u7c07\u7d22\u5f15\uff0c\u6216\u8005\u9700\u8981\u8bbf\u95ee\u7684\u6570\u636e\u90fd\u53ef\u4ee5\u653e\u5165\u5185\u5b58\u7684\u5e94\u7528\u3002")),(0,t.yg)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u6211\u4eec\u9009\u62e9 InnoDB \u90fd\u662f\u6ca1\u6709\u95ee\u9898\u7684\uff0c\u4f46\u662f\u67d0\u4e8b\u60c5\u51b5\u4e0b\u4f60\u5e76\u4e0d\u5728\u4e4e\u53ef\u6269\u5c55\u80fd\u529b\u548c\u5e76\u53d1\u80fd\u529b\uff0c\u4e5f\u4e0d\u9700\u8981\u4e8b\u52a1\u652f\u6301\uff0c\u4e5f\u4e0d\u5728\u4e4e\u5d29\u6e83\u540e\u7684\u5b89\u5168\u6062\u590d\u95ee\u9898\u7684\u8bdd\uff0c\u9009\u62e9MyISAM\u4e5f\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002\u4f46\u662f\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u90fd\u662f\u9700\u8981\u8003\u8651\u5230\u8fd9\u4e9b\u95ee\u9898\u7684\u3002"),(0,t.yg)("h3",{id:"\u4e50\u89c2\u9501\u4e0e\u60b2\u89c2\u9501\u7684\u533a\u522b"},"\u4e50\u89c2\u9501\u4e0e\u60b2\u89c2\u9501\u7684\u533a\u522b"),(0,t.yg)("h4",{id:""}),(0,t.yg)("h4",{id:"\u60b2\u89c2\u9501"},"\u60b2\u89c2\u9501"),(0,t.yg)("p",null,"\u603b\u662f\u5047\u8bbe\u6700\u574f\u7684\u60c5\u51b5\uff0c\u6bcf\u6b21\u53bb\u62ff\u6570\u636e\u7684\u65f6\u5019\u90fd\u8ba4\u4e3a\u522b\u4eba\u4f1a\u4fee\u6539\uff0c\u6240\u4ee5\u6bcf\u6b21\u5728\u62ff\u6570\u636e\u7684\u65f6\u5019\u90fd\u4f1a\u4e0a\u9501\uff0c\u8fd9\u6837\u522b\u4eba\u60f3\u62ff\u8fd9\u4e2a\u6570\u636e\u5c31\u4f1a\u963b\u585e\u76f4\u5230\u5b83\u62ff\u5230\u9501\uff08\u5171\u4eab\u8d44\u6e90\u6bcf\u6b21\u53ea\u7ed9\u4e00\u4e2a\u7ebf\u7a0b\u4f7f\u7528\uff0c\u5176\u5b83\u7ebf\u7a0b\u963b\u585e\uff0c\u7528\u5b8c\u540e\u518d\u628a\u8d44\u6e90\u8f6c\u8ba9\u7ed9\u5176\u5b83\u7ebf\u7a0b\uff09\u3002\u4f20\u7edf\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u91cc\u8fb9\u5c31\u7528\u5230\u4e86\u5f88\u591a\u8fd9\u79cd\u9501\u673a\u5236\uff0c\u6bd4\u5982\u884c\u9501\uff0c\u8868\u9501\u7b49\uff0c\u8bfb\u9501\uff0c\u5199\u9501\u7b49\uff0c\u90fd\u662f\u5728\u505a\u64cd\u4f5c\u4e4b\u524d\u5148\u4e0a\u9501\u3002Java\u4e2dsynchronized\u548cReentrantLock\u7b49\u72ec\u5360\u9501\u5c31\u662f\u60b2\u89c2\u9501\u601d\u60f3\u7684\u5b9e\u73b0\u3002"),(0,t.yg)("h4",{id:"\u4e50\u89c2\u9501"},"\u4e50\u89c2\u9501"),(0,t.yg)("p",null,"\u603b\u662f\u5047\u8bbe\u6700\u597d\u7684\u60c5\u51b5\uff0c\u6bcf\u6b21\u53bb\u62ff\u6570\u636e\u7684\u65f6\u5019\u90fd\u8ba4\u4e3a\u522b\u4eba\u4e0d\u4f1a\u4fee\u6539\uff0c\u6240\u4ee5\u4e0d\u4f1a\u4e0a\u9501\uff0c\u4f46\u662f\u5728\u66f4\u65b0\u7684\u65f6\u5019\u4f1a\u5224\u65ad\u4e00\u4e0b\u5728\u6b64\u671f\u95f4\u522b\u4eba\u6709\u6ca1\u6709\u53bb\u66f4\u65b0\u8fd9\u4e2a\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528\u7248\u672c\u53f7\u673a\u5236\u548cCAS\u7b97\u6cd5\u5b9e\u73b0\u3002\u4e50\u89c2\u9501\u9002\u7528\u4e8e\u591a\u8bfb\u7684\u5e94\u7528\u7c7b\u578b\uff0c\u8fd9\u6837\u53ef\u4ee5\u63d0\u9ad8\u541e\u5410\u91cf\uff0c\u50cf\u6570\u636e\u5e93\u63d0\u4f9b\u7684\u7c7b\u4f3c\u4e8ewrite_condition\u673a\u5236\uff0c\u5176\u5b9e\u90fd\u662f\u63d0\u4f9b\u7684\u4e50\u89c2\u9501\u3002\u5728Java\u4e2djava.util.concurrent.atomic\u5305\u4e0b\u9762\u7684\u539f\u5b50\u53d8\u91cf\u7c7b\u5c31\u662f\u4f7f\u7528\u4e86\u4e50\u89c2\u9501\u7684\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0fCAS\u5b9e\u73b0\u7684\u3002"),(0,t.yg)("h4",{id:"\u4e24\u79cd\u9501\u7684\u4f7f\u7528\u573a\u666f"},"\u4e24\u79cd\u9501\u7684\u4f7f\u7528\u573a\u666f"),(0,t.yg)("p",null,"\u4ece\u4e0a\u9762\u5bf9\u4e24\u79cd\u9501\u7684\u4ecb\u7ecd\uff0c\u6211\u4eec\u77e5\u9053\u4e24\u79cd\u9501\u5404\u6709\u4f18\u7f3a\u70b9\uff0c\u4e0d\u53ef\u8ba4\u4e3a\u4e00\u79cd\u597d\u4e8e\u53e6\u4e00\u79cd\uff0c\u50cf\u4e50\u89c2\u9501\u9002\u7528\u4e8e\u5199\u6bd4\u8f83\u5c11\u7684\u60c5\u51b5\u4e0b\uff08\u591a\u8bfb\u573a\u666f\uff09\uff0c\u5373\u51b2\u7a81\u771f\u7684\u5f88\u5c11\u53d1\u751f\u7684\u65f6\u5019\uff0c\u8fd9\u6837\u53ef\u4ee5\u7701\u53bb\u4e86\u9501\u7684\u5f00\u9500\uff0c\u52a0\u5927\u4e86\u7cfb\u7edf\u7684\u6574\u4e2a\u541e\u5410\u91cf\u3002\u4f46\u5982\u679c\u662f\u591a\u5199\u7684\u60c5\u51b5\uff0c\u4e00\u822c\u4f1a\u7ecf\u5e38\u4ea7\u751f\u51b2\u7a81\uff0c\u8fd9\u5c31\u4f1a\u5bfc\u81f4\u4e0a\u5c42\u5e94\u7528\u4f1a\u4e0d\u65ad\u7684\u8fdb\u884cretry\uff0c\u8fd9\u6837\u53cd\u5012\u662f\u964d\u4f4e\u4e86\u6027\u80fd\uff0c\u6240\u4ee5\u4e00\u822c\u591a\u5199\u7684\u573a\u666f\u4e0b\u7528\u60b2\u89c2\u9501\u5c31\u6bd4\u8f83\u5408\u9002\u3002"),(0,t.yg)("h3",{id:"\u65e5\u5fd7\u76f8\u5173binlog\u7b49"},"\u65e5\u5fd7\u76f8\u5173/Binlog\u7b49"),(0,t.yg)("h4",{id:"binlog\u5f55\u5165\u683c\u5f0f"},"Binlog\u5f55\u5165\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u6709\u4e09\u79cd\u683c\u5f0f\uff0cstatement\uff0crow\u548cmixed\u3002",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"statement\u6a21\u5f0f\u4e0b\uff0c\u6bcf\u4e00\u6761\u4f1a\u4fee\u6539\u6570\u636e\u7684sql\u90fd\u4f1a\u8bb0\u5f55\u5728binlog\u4e2d\u3002\u4e0d\u9700\u8981\u8bb0\u5f55\u6bcf\u4e00\u884c\u7684\u53d8\u5316\uff0c\u51cf\u5c11\u4e86binlog\u65e5\u5fd7\u91cf\uff0c\u8282\u7ea6\u4e86IO\uff0c\u63d0\u9ad8\u6027\u80fd\u3002\u7531\u4e8esql\u7684\u6267\u884c\u662f\u6709\u4e0a\u4e0b\u6587\u7684\uff0c\u56e0\u6b64\u5728\u4fdd\u5b58\u7684\u65f6\u5019\u9700\u8981\u4fdd\u5b58\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u540c\u65f6\u8fd8\u6709\u4e00\u4e9b\u4f7f\u7528\u4e86\u51fd\u6570\u4e4b\u7c7b\u7684\u8bed\u53e5\u65e0\u6cd5\u88ab\u8bb0\u5f55\u590d\u5236\u3002"),(0,t.yg)("li",{parentName:"ul"},"row\u7ea7\u522b\u4e0b\uff0c\u4e0d\u8bb0\u5f55sql\u8bed\u53e5\u4e0a\u4e0b\u6587\u76f8\u5173\u4fe1\u606f\uff0c\u4ec5\u4fdd\u5b58\u54ea\u6761\u8bb0\u5f55\u88ab\u4fee\u6539\u3002\u8bb0\u5f55\u5355\u5143\u4e3a\u6bcf\u4e00\u884c\u7684\u6539\u52a8\uff0c\u57fa\u672c\u662f\u53ef\u4ee5\u5168\u90e8\u8bb0\u4e0b\u6765\u4f46\u662f\u7531\u4e8e\u5f88\u591a\u64cd\u4f5c\uff0c\u4f1a\u5bfc\u81f4\u5927\u91cf\u884c\u7684\u6539\u52a8(\u6bd4\u5982alter table)\uff0c\u56e0\u6b64\u8fd9\u79cd\u6a21\u5f0f\u7684\u6587\u4ef6\u4fdd\u5b58\u7684\u4fe1\u606f\u592a\u591a\uff0c\u65e5\u5fd7\u91cf\u592a\u5927\u3002"),(0,t.yg)("li",{parentName:"ul"},"mixed\uff0c\u4e00\u79cd\u6298\u4e2d\u7684\u65b9\u6848\uff0c\u666e\u901a\u64cd\u4f5c\u4f7f\u7528statement\u8bb0\u5f55\uff0c\u5f53\u65e0\u6cd5\u4f7f\u7528statement\u7684\u65f6\u5019\u4f7f\u7528row\u3002"))),(0,t.yg)("li",{parentName:"ul"},"\u6b64\u5916\uff0c\u65b0\u7248\u7684MySQL\u4e2d\u5bf9row\u7ea7\u522b\u4e5f\u505a\u4e86\u4e00\u4e9b\u4f18\u5316\uff0c\u5f53\u8868\u7ed3\u6784\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\uff0c\u4f1a\u8bb0\u5f55\u8bed\u53e5\u800c\u4e0d\u662f\u9010\u884c\u8bb0\u5f55\u3002")),(0,t.yg)("h4",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("a",{parentName:"li",href:"https://blog.csdn.net/horses/article/details/106053399?utm_medium=distribute.pc_category.none-task-blog-hot-10.nonecase&depth_1-utm_source=distribute.pc_category.none-task-blog-hot-10.nonecase&request_id="},"MySQL \u670d\u52a1\u5668\u4e2d\u7684 6 \u79cd\u65e5\u5fd7\u7c7b\u578b"))),(0,t.yg)("h3",{id:"\u5360\u7528\u78c1\u76d8\u5927\u5c0f\u6570\u636e\u5927\u5c0f\u7d22\u5f15\u5927\u5c0f"},"\u5360\u7528\u78c1\u76d8\u5927\u5c0f/\u6570\u636e\u5927\u5c0f/\u7d22\u5f15\u5927\u5c0f"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u67e5\u770b\u6240\u6709\u6570\u636e\u5e93\u6570\u636e\u5927\u5c0f\u548c\u7d22\u5f15\u5927\u5c0f\nselect TABLE_SCHEMA, \nconcat(truncate(sum(data_length)/1024/1024,2),' MB') as data_size,\nsum(data_length) as data_size_B,\nconcat(truncate(sum(index_length)/1024/1024,2),'MB') as index_size,\nsum(index_length)  as index_size_B\nfrom information_schema.tables\ngroup by TABLE_SCHEMA\norder by data_size_B desc;\n\n-- \u67e5\u770b\u67d0\u4e2a\u6570\u636e\u5e93\u6240\u6709\u6570\u636e\u8868\u6570\u636e\u5927\u5c0f\u548c\u7d22\u5f15\u5927\u5c0f\nselect TABLE_NAME, \nconcat(truncate(sum(data_length)/1024/1024,2),' MB') as data_size,\nsum(data_length) as data_size_B,\nconcat(truncate(sum(index_length)/1024/1024,2),'MB') as index_size,\nsum(index_length)  as index_size_B\nfrom information_schema.tables\n where TABLE_SCHEMA = 'newcloud'\ngroup by TABLE_NAME\norder by data_size_B desc;\n\n-- \u67e5\u770b\u67d0\u4e2a\u6570\u636e\u5e93\u67d0\u4e2a\u6570\u636e\u8868\u6570\u636e\u5927\u5c0f\u548c\u7d22\u5f15\u5927\u5c0f\nselect TABLE_NAME, \nconcat(truncate(sum(data_length)/1024/1024,2),' MB') as data_size,\nsum(data_length) as data_size_B,\nconcat(truncate(sum(index_length)/1024/1024,2),'MB') as index_size,\nsum(index_length)  as index_size_B\nfrom information_schema.tables\nwhere TABLE_SCHEMA = 'newcloud'\nand table_name='log_err_flow'\ngroup by TABLE_NAME\norder by data_size_B desc;\n")),(0,t.yg)("h3",{id:"\u4f18\u5316"},"\u4f18\u5316"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/article/1580260"},"\u7a0b\u5e8f\u5458\u8fdb\u9636\u5fc5\u8bfb\uff0c\u4e07\u5b57\u603b\u7ed3Mysql\u4f18\u5316\u7cbe\u534e\u7bc7"))))}d.isMDXComponent=!0}}]);