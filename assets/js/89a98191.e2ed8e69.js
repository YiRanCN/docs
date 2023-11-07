"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6945],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={},o=void 0,s={unversionedId:"study/net/OpenVPN",id:"study/net/OpenVPN",title:"OpenVPN",description:"\u914d\u7f6e",source:"@site/docs/study/net/OpenVPN.md",sourceDirName:"study/net",slug:"/study/net/OpenVPN",permalink:"/docs/study/net/OpenVPN",draft:!1,tags:[],version:"current",lastUpdatedAt:1699322495,formattedLastUpdatedAt:"2023\u5e7411\u67087\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"MacOS\u7f16\u8bd1OpenVPN",permalink:"/docs/study/net/MacOS\u7f16\u8bd1OpenVPN"},next:{title:"UDP",permalink:"/docs/study/net/UDP"}},l={},c=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u811a\u672c",id:"\u811a\u672c",level:3},{value:"server.conf",id:"serverconf",level:3},{value:"\u914d\u7f6e IP \u8f6c\u53d1\u529f\u80fd",id:"\u914d\u7f6e-ip-\u8f6c\u53d1\u529f\u80fd",level:3},{value:"client.ovpn",id:"clientovpn",level:3},{value:"\u751f\u6210\u5ba2\u6237\u7aef\u8bc1\u4e66",id:"\u751f\u6210\u5ba2\u6237\u7aef\u8bc1\u4e66",level:3},{value:"\u914d\u7f6e\u4e0d\u540c\u7684\u5ba2\u6237\u7aef\u542f\u7528\u4e0d\u540c\u7684\u5b50\u7f51",id:"\u914d\u7f6e\u4e0d\u540c\u7684\u5ba2\u6237\u7aef\u542f\u7528\u4e0d\u540c\u7684\u5b50\u7f51",level:3},{value:"topology",id:"topology",level:3},{value:"tun \u6a21\u5f0f\uff1a",id:"tun-\u6a21\u5f0f",level:4},{value:"tap \u6a21\u5f0f\uff1a",id:"tap-\u6a21\u5f0f",level:4},{value:"\u811a\u672c\u521b\u5efa client",id:"\u811a\u672c\u521b\u5efa-client",level:3},{value:"\u95ee\u9898\uff1a\u8fde\u63a5\u6210\u529f\u540e\uff0c\u5ba2\u6237\u7aef\u65e0\u6cd5\u6b63\u5e38\u8bbf\u95ee\u5176\u4ed6\u7f51\u7ad9",id:"\u95ee\u9898\u8fde\u63a5\u6210\u529f\u540e\u5ba2\u6237\u7aef\u65e0\u6cd5\u6b63\u5e38\u8bbf\u95ee\u5176\u4ed6\u7f51\u7ad9",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.csdn.net/sinat_27690807/article/details/118482528"},"OpenVPN \u4e2d server.conf \u548c client.conf \u914d\u7f6e\u6587\u4ef6\u8be6\u89e3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linuxfly.org/post/86/"},"\u6df1\u5165 openvpn \u914d\u7f6e-\u6709\u6848\u4f8b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.51cto.com/icenycmh/1867641"},"openvpn2.3.12 \u5b89\u88c5\u4e0e easy-rsa3 \u7684\u4f7f\u7528")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.51cto.com/songky/2115052?articleABtest=1"},"\u963f\u91cc\u4e91\u670d\u52a1\u5668\u914d\u7f6e CentOS7.4+OpenVPN-2.4.5+easy-rsa-3.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bajie.dev/zh-cn/posts/20211018-openvpn_limit_bandwidth/"},"OpenVPN \u9650\u5236\u6d41\u91cf\u5e26\u5bbd-\u7f51\u5361\u7ea7\u522b\u9650\u5236")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ilxqx.com/archives/jie-jue-openvpn-ke-hu-duan-suo-you-wang-luo-quan-zou-vpn-de-wen-ti"},"\u89e3\u51b3 OpenVPN \u5ba2\u6237\u7aef\u6240\u6709\u7f51\u7edc\u5168\u8d70 VPN \u7684\u95ee\u9898,server.conf \u548c client.conf \u914d\u7f6e\u6587\u4ef6\u8be6\u89e3"))),(0,i.kt)("h3",{id:"\u811a\u672c"},"\u811a\u672c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88c5\nyum install openvpn\nyum install easy-rsa\n\n# \u51c6\u5907\u76ee\u5f55 \u6ce8\u610f\u7248\u672c\u53f7 \u9700\u8981\u81ea\u884c\u66f4\u6539\ncp /usr/share/doc/openvpn-2.4.5/sample/sample-config-files/server.conf /etc/openvpn\ncp -r /usr/share/easy-rsa/ /etc/openvpn\ncp /usr/share/doc/easy-rsa-3.0.3/vars.example easy-rsa/3.0/vars\n\n# \u521d\u59cb\u5316pki\ncd /etc/openvpn/easy-rsa/3.0\n./easyrsa init-pki\n\n# \u521b\u5efaca\uff0c\u8bb0\u4f4fca\u5bc6\u7801\n./easyrsa build-ca\n\n# \u521b\u5efaDiffie-Hellman\uff0c\u786e\u4fddkey\u7a7f\u8d8a\u4e0d\u5b89\u5168\u7f51\u7edc\n./easyrsa gen-dh\n# \u751f\u6210\u9632\u653b\u51fbkey\u6587\u4ef6\nopenvpn --genkey --secret ta.key\n\n# \u521b\u5efa\u670d\u52a1\u5668\u8bc1\u4e66 \u6ce8\u610f\u540d\u5b57\u4e3avpnserver \u53ef\u4ee5\u66f4\u6539\n./easyrsa gen-req vpnserver nopass\n# \u7b7e\u7ea6\u670d\u52a1\u7aef\u8bc1\u4e66 \u6ce8\u610f\u540d\u5b57\u4e3avpnserver\n./easyrsa sign server vpnserver\n\n# \u5c06\u670d\u52a1\u5668\u8bc1\u4e66\u6574\u7406\u5230\u4e00\u8d77\ncd /etc/openvpn/\nmkdir pki\ncd pki\n/usr/bin/cp -rf ../easy-rsa/3.0/ta.key ./\n/usr/bin/cp -rf ../easy-rsa/3.0/pki/ca.crt ./\n/usr/bin/cp -rf ../easy-rsa/3.0/pki/dh.pem ./\n/usr/bin/cp -rf ../easy-rsa/3.0/pki/issued/vpnserver.crt ./\n/usr/bin/cp -rf ../easy-rsa/3.0/pki/private/vpnserver.key ./\n# \u5c06\u5ba2\u6237\u7aef\u6240\u9700\u8bc1\u4e66\u6574\u7406\u5230\u4e00\u8d77\nmkdir /etc/openvpn/client\ncd /etc/openvpn/client\n/usr/bin/cp -rf ../easy-rsa/3.0/ta.key ./\n/usr/bin/cp -rf ../easy-rsa/3.0/pki/ca.crt ./\n/usr/bin/cp -rf ../easy-rsa/3.0/pki/issued/client001.crt ./\n/usr/bin/cp -rf ../easy-rsa/3.0/pki/private/client001.key ./\n\n# \u542f\u52a8 \u505c\u6b62 \u72b6\u6001\nsystemctl start openvpn@server\nsystemctl stop openvpn@server\nsystemctl status openvpn@server\nsystemctl restart openvpn@server\n")),(0,i.kt)("h3",{id:"serverconf"},"server.conf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#################################################\n# Sample OpenVPN 2.0 config file for            #\n# multi-client server.                          #\n#                                               #\n# This file is for the server side              #\n# of a many-clients <-> one-server              #\n# OpenVPN configuration.                        #\n#                                               #\n# OpenVPN also supports                         #\n# single-machine <-> single-machine             #\n# configurations (See the Examples page         #\n# on the web site for more info).               #\n#                                               #\n# This config should work on Windows            #\n# or Linux/BSD systems.  Remember on            #\n# Windows to quote pathnames and use            #\n# double backslashes, e.g.:                     #\n# "C:\\\\Program Files\\\\OpenVPN\\\\config\\\\foo.key" #\n#                                               #\n# Comments are preceded with \'#\' or \';\'         #\n#################################################\n\n# Which local IP address should OpenVPN\n# listen on? (optional)\n;local a.b.c.d\n\n# Which TCP/UDP port should OpenVPN listen on?\n# If you want to run multiple OpenVPN instances\n# on the same machine, use a different port\n# number for each one.  You will need to\n# open up this port on your firewall.\nport 1194\n\n# TCP or UDP server?\n;proto tcp\nproto udp\n\n# "dev tun" will create a routed IP tunnel,\n# "dev tap" will create an ethernet tunnel.\n# Use "dev tap0" if you are ethernet bridging\n# and have precreated a tap0 virtual interface\n# and bridged it with your ethernet interface.\n# If you want to control access policies\n# over the VPN, you must create firewall\n# rules for the the TUN/TAP interface.\n# On non-Windows systems, you can give\n# an explicit unit number, such as tun0.\n# On Windows, use "dev-node" for this.\n# On most systems, the VPN will not function\n# unless you partially or fully disable\n# the firewall for the TUN/TAP interface.\n;dev tap\ndev tun\n\n# Windows needs the TAP-Win32 adapter name\n# from the Network Connections panel if you\n# have more than one.  On XP SP2 or higher,\n# you may need to selectively disable the\n# Windows firewall for the TAP adapter.\n# Non-Windows systems usually don\'t need this.\n;dev-node MyTap\n\n# SSL/TLS root certificate (ca), certificate\n# (cert), and private key (key).  Each client\n# and the server must have their own cert and\n# key file.  The server and all clients will\n# use the same ca file.\n#\n# See the "easy-rsa" directory for a series\n# of scripts for generating RSA certificates\n# and private keys.  Remember to use\n# a unique Common Name for the server\n# and each of the client certificates.\n#\n# Any X509 key management system can be used.\n# OpenVPN can also use a PKCS #12 formatted key file\n# (see "pkcs12" directive in man page).\nca /etc/openvpn/pki/ca.crt\ncert /etc/openvpn/pki/vpnserver.crt\nkey /etc/openvpn/pki/vpnserver.key  # This file should be kept secret\n\n# Diffie hellman parameters.\n# Generate your own with:\n#   openssl dhparam -out dh2048.pem 2048\ndh /etc/openvpn/pki/dh.pem\n\n# Network topology\n# Should be subnet (addressing via IP)\n# unless Windows clients v2.0.9 and lower have to\n# be supported (then net30, i.e. a /30 per client)\n# Defaults to net30 (not recommended)\n;topology subnet\n\n# Configure server mode and supply a VPN subnet\n# for OpenVPN to draw client addresses from.\n# The server will take 10.8.0.1 for itself,\n# the rest will be made available to clients.\n# Each client will be able to reach the server\n# on 10.8.0.1. Comment this line out if you are\n# ethernet bridging. See the man page for more info.\nserver 10.8.0.0 255.255.255.0\n\n# Maintain a record of client <-> virtual IP address\n# associations in this file.  If OpenVPN goes down or\n# is restarted, reconnecting clients can be assigned\n# the same virtual IP address from the pool that was\n# previously assigned.\nifconfig-pool-persist ipp.txt\n\n# Configure server mode for ethernet bridging.\n# You must first use your OS\'s bridging capability\n# to bridge the TAP interface with the ethernet\n# NIC interface.  Then you must manually set the\n# IP/netmask on the bridge interface, here we\n# assume 10.8.0.4/255.255.255.0.  Finally we\n# must set aside an IP range in this subnet\n# (start=10.8.0.50 end=10.8.0.100) to allocate\n# to connecting clients.  Leave this line commented\n# out unless you are ethernet bridging.\n;server-bridge 10.8.0.4 255.255.255.0 10.8.0.50 10.8.0.100\n\n# Configure server mode for ethernet bridging\n# using a DHCP-proxy, where clients talk\n# to the OpenVPN server-side DHCP server\n# to receive their IP address allocation\n# and DNS server addresses.  You must first use\n# your OS\'s bridging capability to bridge the TAP\n# interface with the ethernet NIC interface.\n# Note: this mode only works on clients (such as\n# Windows), where the client-side TAP adapter is\n# bound to a DHCP client.\n;server-bridge\n\n# Push routes to the client to allow it\n# to reach other private subnets behind\n# the server.  Remember that these\n# private subnets will also need\n# to know to route the OpenVPN client\n# address pool (10.8.0.0/255.255.255.0)\n# back to the OpenVPN server.\n;push "route 192.168.10.0 255.255.255.0"\n;push "route 192.168.20.0 255.255.255.0"\n\n# To assign specific IP addresses to specific\n# clients or if a connecting client has a private\n# subnet behind it that should also have VPN access,\n# use the subdirectory "ccd" for client-specific\n# configuration files (see man page for more info).\n\n# EXAMPLE: Suppose the client\n# having the certificate common name "Thelonious"\n# also has a small subnet behind his connecting\n# machine, such as 192.168.40.128/255.255.255.248.\n# First, uncomment out these lines:\n;client-config-dir ccd\n;route 192.168.40.128 255.255.255.248\n# Then create a file ccd/Thelonious with this line:\n#   iroute 192.168.40.128 255.255.255.248\n# This will allow Thelonious\' private subnet to\n# access the VPN.  This example will only work\n# if you are routing, not bridging, i.e. you are\n# using "dev tun" and "server" directives.\n\n# EXAMPLE: Suppose you want to give\n# Thelonious a fixed VPN IP address of 10.9.0.1.\n# First uncomment out these lines:\n;client-config-dir ccd\n;route 10.9.0.0 255.255.255.252\n# Then add this line to ccd/Thelonious:\n#   ifconfig-push 10.9.0.1 10.9.0.2\n\n# Suppose that you want to enable different\n# firewall access policies for different groups\n# of clients.  There are two methods:\n# (1) Run multiple OpenVPN daemons, one for each\n#     group, and firewall the TUN/TAP interface\n#     for each group/daemon appropriately.\n# (2) (Advanced) Create a script to dynamically\n#     modify the firewall in response to access\n#     from different clients.  See man\n#     page for more info on learn-address script.\n;learn-address ./script\n\n# If enabled, this directive will configure\n# all clients to redirect their default\n# network gateway through the VPN, causing\n# all IP traffic such as web browsing and\n# and DNS lookups to go through the VPN\n# (The OpenVPN server machine may need to NAT\n# or bridge the TUN/TAP interface to the internet\n# in order for this to work properly).\n;push "redirect-gateway def1 bypass-dhcp"\n\n# Certain Windows-specific network settings\n# can be pushed to clients, such as DNS\n# or WINS server addresses.  CAVEAT:\n# http://openvpn.net/faq.html#dhcpcaveats\n# The addresses below refer to the public\n# DNS servers provided by opendns.com.\n;push "dhcp-option DNS 208.67.222.222"\n;push "dhcp-option DNS 208.67.220.220"\npush "dhcp-option DNS 8.8.8.8"\n\n# Uncomment this directive to allow different\n# clients to be able to "see" each other.\n# By default, clients will only see the server.\n# To force clients to only see the server, you\n# will also need to appropriately firewall the\n# server\'s TUN/TAP interface.\nclient-to-client\n\n# Uncomment this directive if multiple clients\n# might connect with the same certificate/key\n# files or common names.  This is recommended\n# only for testing purposes.  For production use,\n# each client should have its own certificate/key\n# pair.\n#\n# IF YOU HAVE NOT GENERATED INDIVIDUAL\n# CERTIFICATE/KEY PAIRS FOR EACH CLIENT,\n# EACH HAVING ITS OWN UNIQUE "COMMON NAME",\n# UNCOMMENT THIS LINE OUT.\n;duplicate-cn\n\n# The keepalive directive causes ping-like\n# messages to be sent back and forth over\n# the link so that each side knows when\n# the other side has gone down.\n# Ping every 10 seconds, assume that remote\n# peer is down if no ping received during\n# a 120 second time period.\nkeepalive 10 120\n\n# For extra security beyond that provided\n# by SSL/TLS, create an "HMAC firewall"\n# to help block DoS attacks and UDP port flooding.\n#\n# Generate with:\n#   openvpn --genkey --secret ta.key\n#\n# The server and each client must have\n# a copy of this key.\n# The second parameter should be \'0\'\n# on the server and \'1\' on the clients.\ntls-auth /etc/openvpn/pki/ta.key 0 # This file is secret\n\n# Select a cryptographic cipher.\n# This config item must be copied to\n# the client config file as well.\n# Note that v2.4 client/server will automatically\n# negotiate AES-256-GCM in TLS mode.\n# See also the ncp-cipher option in the manpage\ncipher AES-256-CBC\n\n# Enable compression on the VPN link and push the\n# option to the client (v2.4+ only, for earlier\n# versions see below)\n;compress lz4-v2\n;push "compress lz4-v2"\n\n# For compression compatible with older clients use comp-lzo\n# If you enable it here, you must also\n# enable it in the client config file.\ncomp-lzo\n\n# The maximum number of concurrently connected\n# clients we want to allow.\nmax-clients 999\n\n# It\'s a good idea to reduce the OpenVPN\n# daemon\'s privileges after initialization.\n#\n# You can uncomment this out on\n# non-Windows systems.\n;user nobody\n;group nobody\n\n# The persist options will try to avoid\n# accessing certain resources on restart\n# that may no longer be accessible because\n# of the privilege downgrade.\npersist-key\npersist-tun\n\n# Output a short status file showing\n# current connections, truncated\n# and rewritten every minute.\nstatus openvpn-status.log\n\n# By default, log messages will go to the syslog (or\n# on Windows, if running as a service, they will go to\n# the "\\Program Files\\OpenVPN\\log" directory).\n# Use log or log-append to override this default.\n# "log" will truncate the log file on OpenVPN startup,\n# while "log-append" will append to it.  Use one\n# or the other (but not both).\n;log         openvpn.log\n;log-append  openvpn.log\n\n# Set the appropriate level of log\n# file verbosity.\n#\n# 0 is silent, except for fatal errors\n# 4 is reasonable for general usage\n# 5 and 6 can help to debug connection problems\n# 9 is extremely verbose\nverb 3\n\n# Silence repeating messages.  At most 20\n# sequential messages of the same message\n# category will be output to the log.\n;mute 20\n\n# Notify the client that when the server restarts so it\n# can automatically reconnect.\nexplicit-exit-notify 1\n')),(0,i.kt)("h3",{id:"\u914d\u7f6e-ip-\u8f6c\u53d1\u529f\u80fd"},"\u914d\u7f6e IP \u8f6c\u53d1\u529f\u80fd"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u8be2\nsysctl net.ipv4.ip_forward\n# \u8bbe\u7f6e\necho 'net.ipv4.ip_forward = 1' >/etc/sysctl.conf\nsysctl -p\n")),(0,i.kt)("p",null,"\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/wangqiaowq/article/details/131802323"},"net.ipv4.ip_forward")),(0,i.kt)("h3",{id:"clientovpn"},"client.ovpn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u76f8\u5f53\u4e8e pull tls-client\nclient\n#\ndev tun\n#\nproto udp\n# \u8fde\u63a5\u8fdc\u7a0bopenvpn server\uff0c\u53ef\u4ee5\u6709\u591a\u4e2a\uff0c\u4f46\u540c\u65f6\u8fde\u63a5\u53ea\u6709\u4e00\u4e2a\nremote 60.204.171.251 1194\nresolv-retry infinite\nnobind\npersist-key\npersist-tun\n#\nca ca.crt\ncert client001.crt\nkey client001.key\ntls-auth ta.key 1\n#\ncomp-lzo\n# \u65e5\u5fd7\u5bb9\u6613\u7ea7\u522b\nverb 3\n")),(0,i.kt)("h3",{id:"\u751f\u6210\u5ba2\u6237\u7aef\u8bc1\u4e66"},"\u751f\u6210\u5ba2\u6237\u7aef\u8bc1\u4e66"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /etc/openvpn/easy-rsa/3.0/\n./easyrsa build-client-full client003\n/usr/bin/cp -rf /etc/openvpn/easy-rsa/3.0/pki/issued/client003.crt /etc/openvpn/client\n/usr/bin/cp -rf /etc/openvpn/easy-rsa/3.0/pki/private/client003.key /etc/openvpn/client\n")),(0,i.kt)("h3",{id:"\u914d\u7f6e\u4e0d\u540c\u7684\u5ba2\u6237\u7aef\u542f\u7528\u4e0d\u540c\u7684\u5b50\u7f51"},"\u914d\u7f6e\u4e0d\u540c\u7684\u5ba2\u6237\u7aef\u542f\u7528\u4e0d\u540c\u7684\u5b50\u7f51"),(0,i.kt)("p",null,"\u4fee\u6539 server.conf \u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u542f\u7528ccd \u589e\u52a0\u4e24\u4e2a\u5b50\u7f51\u8def\u7531\nclient-config-dir ccd\n;route 10.9.0.0 255.255.255.252\nroute 10.9.0.0 255.255.255.0\nroute 10.9.1.0 255.255.255.0\n# \u4fee\u6539topology\u4e3asubnet\ntopology subnet\n")),(0,i.kt)("h3",{id:"topology"},"topology"),(0,i.kt)("h4",{id:"tun-\u6a21\u5f0f"},"tun \u6a21\u5f0f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"subnet\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a. \u4ece pool \u4e2d\u9009\u62e9\u4e00\u4e2a ip \u4f5c\u4e3a client \u7684\u865a\u62df\u7f51\u5361 ip\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"b. \u5c06\u81ea\u5df1\u7684\u5b50\u7f51\u63a9\u7801\u4f5c\u4e3a client \u7684\u5b50\u7f51\u63a9\u7801\u3002")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"p2p\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a.\u4ece pool \u4e2d\u9009\u62e9\u4e00\u4e2a ip \u4f5c\u4e3a client \u7684\u865a\u62df\u7f51\u5361 ip\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"b.\u5c06\u81ea\u5df1\u7684\u5b9e\u9645\u865a\u62df\u7f51\u5361 ip \u4f5c\u4e3a client \u7684\u5bf9\u7aef ip\u3002")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"net30\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a.\u4ece pool \u4e2d\u9009\u62e9 4 \u4e2a\u63a9\u7801\u4e3a 30 \u7684 ip\uff0c\u5c06\u4e2d\u95f4\u4e24\u4e2a ip \u4e2d\u7684\u5927\u8005\u4f5c\u4e3a client \u7684\u865a\u62df\u7f51\u5361 ip\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"b.\u5c06\u5c0f\u8005\u4f5c\u4e3a client \u7684\u5bf9\u7aef ip\u3002"))))),(0,i.kt)("h4",{id:"tap-\u6a21\u5f0f"},"tap \u6a21\u5f0f\uff1a"),(0,i.kt)("p",null,"\u5b8c\u5168\u6309\u7167 tun \u6a21\u5f0f\u7684 1 \u6765\u5206\u914d\u3002"),(0,i.kt)("h3",{id:"\u811a\u672c\u521b\u5efa-client"},"\u811a\u672c\u521b\u5efa client"),(0,i.kt)("p",null,"\u811a\u672c\u521b\u5efa client\uff0c\u81ea\u52a8\u8f93\u5165 ca \u5bc6\u7801\uff0c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#!/usr/bin/expect\n\nset timeout 30\n\nspawn ./easyrsa build-client-full client014 nopass\nexpect "pass"\nsend "weichuang"\nsend "\\n"\ninteract\n')),(0,i.kt)("h3",{id:"\u95ee\u9898\u8fde\u63a5\u6210\u529f\u540e\u5ba2\u6237\u7aef\u65e0\u6cd5\u6b63\u5e38\u8bbf\u95ee\u5176\u4ed6\u7f51\u7ad9"},"\u95ee\u9898\uff1a\u8fde\u63a5\u6210\u529f\u540e\uff0c\u5ba2\u6237\u7aef\u65e0\u6cd5\u6b63\u5e38\u8bbf\u95ee\u5176\u4ed6\u7f51\u7ad9"),(0,i.kt)("p",null,"\u5c06 server.conf \u7684"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},';push "redirect-gateway def1 bypass-dhcp"\n')),(0,i.kt)("p",null,"\u6ce8\u91ca\u6389"))}d.isMDXComponent=!0}}]);