import{_ as c,v as p,b as r,t as o,O as a,F as s,L as l,R as C,M as t}from"./chunks/framework.e3a3562a.js";const W=JSON.parse('{"title":"开发环境","description":"","frontmatter":{},"headers":[],"relativePath":"nodes/environment.md","filePath":"nodes/environment.md"}'),y={name:"nodes/environment.md"},D=s("h1",{id:"开发环境",tabindex:"-1"},[l("开发环境 "),s("a",{class:"header-anchor",href:"#开发环境","aria-label":'Permalink to "开发环境"'},"​")],-1),A=s("p",null,"本教程用来回顾设置你的开发环境以运行 Celestia 软件。这些环境可以用来开发、构建二进制文件和运行节点。",-1),i=s("h2",{id:"安装依赖项",tabindex:"-1"},[l("安装依赖项 "),s("a",{class:"header-anchor",href:"#安装依赖项","aria-label":'Permalink to "安装依赖项"'},"​")],-1),F=s("p",null,"首先，请确保更新和升级操作系统：",-1),d=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"apt"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"update"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"&&"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"apt"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"upgrade"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-y")])])])],-1),u=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"yum"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"update")])])])],-1),h=s("p",null,"以下是执行许多任务（如下载文件、编译和监控节点）所必需的基本软件包：",-1),g=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"apt"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"install"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"curl"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"tar"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"wget"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"clang"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"pkg-config"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"libssl-dev"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"jq"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"build-essential"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"git"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"make"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"ncdu"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-y")])])])],-1),E=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"yum"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"install"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"curl"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"tar"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"wget"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"clang"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"pkg-config"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"libssl-dev"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"jq"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"build-essential"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"git"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"make"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"ncdu"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-y")])])])],-1),m=s("h3",null," 🍺 安装 Homebrew（如已安装可跳过这一步） ",-1),_=s("p",null,[s("code",null,"Homebrew"),l(" 是适用于 "),s("code",null,"macOS"),l(" 和 "),s("code",null,"Linux"),l(" 的软件包管理器，它可以让您安装所需的依赖项。")],-1),B=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"/bin/bash"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-c"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"$('),s("span",{style:{color:"#FFCB6B"}},"curl"),s("span",{style:{color:"#C3E88D"}}," -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh"),s("span",{style:{color:"#89DDFF"}},')"')])])])],-1),b=s("p",null,"请确保运行的命令与下面输出类似：",-1),v=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> "),s("span",{style:{color:"#C3E88D"}},"Next"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"steps:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"-"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Run"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"these"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"three"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"commands"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"in"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"your"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"terminal"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"to"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"add"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Homebrew"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"to"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"your"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"PATH:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#82AAFF"}},"echo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"# Set PATH, MANPATH, etc., for Homebrew."),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},">>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"/Users/joshstein/.zprofile")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#82AAFF"}},"echo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},'eval "$(/opt/homebrew/bin/brew shenv)"'),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},">>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"/Users/joshstein/.zprofile")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#82AAFF"}},"eval"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"$('),s("span",{style:{color:"#FFCB6B"}},"/opt/homebrew/bin/brew"),s("span",{style:{color:"#C3E88D"}}," shenv"),s("span",{style:{color:"#89DDFF"}},')"')])])])],-1),f=s("h3",null," 🗄 安装 wget 和 jq ",-1),$=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"brew"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"install"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"wget"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"&&"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"brew"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"install"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"jq")])])])],-1),w=s("p",null,[s("code",null,"wget"),l(" 是一个用于从互联网上检索文件的工具，而 "),s("code",null,"jq"),l(" 则是一个轻量级的命令行 "),s("code",null,"JSON"),l(" 处理器。")],-1),k=s("h3",{id:"安装-golang",tabindex:"-1"},[l("安装 Golang "),s("a",{class:"header-anchor",href:"#安装-golang","aria-label":'Permalink to "安装 Golang"'},"​")],-1),M=s("p",null,[s("code",null,"celestia-app"),l(" 和 "),s("code",null,"celestia-node"),l(" 是用 "),s("code",null,"Golang"),l(" 编写的，因此我们必须安装 "),s("code",null,"Golang"),l(" 才能编译和运行它们。")],-1),H=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ver"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"1.20.2"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"cd"),s("span",{style:{color:"#A6ACCD"}}," $HOME")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"wget"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://golang.org/dl/go"),s("span",{style:{color:"#A6ACCD"}},"$ver"),s("span",{style:{color:"#C3E88D"}},".linux-amd64.tar.gz"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"rm"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-rf"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"/usr/local/go")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"tar"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-C"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"/usr/local"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-xzf"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"go"),s("span",{style:{color:"#A6ACCD"}},"$ver"),s("span",{style:{color:"#C3E88D"}},".linux-amd64.tar.gz"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"rm"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"go"),s("span",{style:{color:"#A6ACCD"}},"$ver"),s("span",{style:{color:"#C3E88D"}},".linux-amd64.tar.gz"),s("span",{style:{color:"#89DDFF"}},'"')])])])],-1),x=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ver"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"1.20.2"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"cd"),s("span",{style:{color:"#A6ACCD"}}," $HOME")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"wget"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://golang.org/dl/go"),s("span",{style:{color:"#A6ACCD"}},"$ver"),s("span",{style:{color:"#C3E88D"}},".linux-arm64.tar.gz"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"rm"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-rf"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"/usr/local/go")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"tar"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-C"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"/usr/local"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-xzf"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"go"),s("span",{style:{color:"#A6ACCD"}},"$ver"),s("span",{style:{color:"#C3E88D"}},".linux-arm64.tar.gz"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"rm"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"go"),s("span",{style:{color:"#A6ACCD"}},"$ver"),s("span",{style:{color:"#C3E88D"}},".linux-arm64.tar.gz"),s("span",{style:{color:"#89DDFF"}},'"')])])])],-1),z=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ver"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"1.20.2"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"cd"),s("span",{style:{color:"#A6ACCD"}}," $HOME")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"wget"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://golang.org/dl/go"),s("span",{style:{color:"#A6ACCD"}},"$ver"),s("span",{style:{color:"#C3E88D"}},".darwin-arm64.tar.gz"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"rm"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-rf"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"/usr/local/go")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"tar"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-C"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"/usr/local"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-xzf"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"go"),s("span",{style:{color:"#A6ACCD"}},"$ver"),s("span",{style:{color:"#C3E88D"}},".darwin-arm64.tar.gz"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"rm"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"go"),s("span",{style:{color:"#A6ACCD"}},"$ver"),s("span",{style:{color:"#C3E88D"}},".darwin-arm64.tar.gz"),s("span",{style:{color:"#89DDFF"}},'"')])])])],-1),O=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ver"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"1.20.2"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"cd"),s("span",{style:{color:"#A6ACCD"}}," $HOME")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"wget"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://golang.org/dl/go"),s("span",{style:{color:"#A6ACCD"}},"$ver"),s("span",{style:{color:"#C3E88D"}},".darwin-amd64.tar.gz"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"rm"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-rf"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"/usr/local/go")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"tar"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-C"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"/usr/local"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-xzf"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"go"),s("span",{style:{color:"#A6ACCD"}},"$ver"),s("span",{style:{color:"#C3E88D"}},".darwin-amd64.tar.gz"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"rm"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"go"),s("span",{style:{color:"#A6ACCD"}},"$ver"),s("span",{style:{color:"#C3E88D"}},".darwin-amd64.tar.gz"),s("span",{style:{color:"#89DDFF"}},'"')])])])],-1),P=s("p",null,[l("现在我们需要将 "),s("code",null,"/usr/local/go/bin"),l(" 目录添加到 "),s("code",null,"$PATH"),l(" 环境变量中：")],-1),T=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"echo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"export PATH="),s("span",{style:{color:"#A6ACCD"}},"$PATH"),s("span",{style:{color:"#C3E88D"}},":/usr/local/go/bin:"),s("span",{style:{color:"#A6ACCD"}},"$HOME"),s("span",{style:{color:"#C3E88D"}},"/go/bin"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},">>"),s("span",{style:{color:"#A6ACCD"}}," $HOME"),s("span",{style:{color:"#C3E88D"}},"/.bash_profile")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"source"),s("span",{style:{color:"#A6ACCD"}}," $HOME"),s("span",{style:{color:"#C3E88D"}},"/.bash_profile")])])])],-1),U=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"echo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"export PATH="),s("span",{style:{color:"#A6ACCD"}},"$PATH"),s("span",{style:{color:"#C3E88D"}},":/usr/local/go/bin:"),s("span",{style:{color:"#A6ACCD"}},"$HOME"),s("span",{style:{color:"#C3E88D"}},"/go/bin"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},">>"),s("span",{style:{color:"#A6ACCD"}}," $HOME"),s("span",{style:{color:"#C3E88D"}},"/.zshrc")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"source"),s("span",{style:{color:"#A6ACCD"}}," $HOME"),s("span",{style:{color:"#C3E88D"}},"/.zshrc")])])])],-1),j=C('<p>要检查 Go 是否正确安装，请运行以下命令：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span></span></code></pre></div><p>如果已安装输出应该是：</p>',3),R=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"go"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"version"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"go1.20.2"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"linux/amd64")])])])],-1),q=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"go"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"version"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"go1.20.2"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"linux/arm64")])])])],-1),G=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"go"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"version"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"go1.20.2"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"darwin/arm64")])])])],-1),S=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"go"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"version"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"go1.20.2"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"darwin/amd64")])])])],-1);function L(N,I,J,Y,K,Q){const e=t("tab"),n=t("tabs");return p(),r("div",null,[D,A,i,F,o(n,null,{default:a(()=>[o(e,{name:"APT"},{default:a(()=>[d]),_:1}),o(e,{name:"YUM"},{default:a(()=>[u]),_:1})]),_:1}),h,o(n,null,{default:a(()=>[o(e,{name:"APT"},{default:a(()=>[g]),_:1}),o(e,{name:"YUM"},{default:a(()=>[E]),_:1}),o(e,{name:"Mac (Apple/Intel芯片)"},{default:a(()=>[m,_,B,b,v,f,$,w]),_:1})]),_:1}),k,M,o(n,null,{default:a(()=>[o(e,{name:"Ubuntu(AMD)"},{default:a(()=>[H]),_:1}),o(e,{name:"Ubuntu(ARM)"},{default:a(()=>[x]),_:1}),o(e,{name:"Mac(Apple)"},{default:a(()=>[z]),_:1}),o(e,{name:"Mac(Intel)"},{default:a(()=>[O]),_:1})]),_:1}),P,o(n,null,{default:a(()=>[o(e,{name:"bash"},{default:a(()=>[T]),_:1}),o(e,{name:"zsh"},{default:a(()=>[U]),_:1})]),_:1}),j,o(n,null,{default:a(()=>[o(e,{name:"Ubuntu(AMD/ARM)"},{default:a(()=>[R]),_:1}),o(e,{name:"Ubuntu(ARM)"},{default:a(()=>[q]),_:1}),o(e,{name:"Mac(Apple)"},{default:a(()=>[G]),_:1}),o(e,{name:"Mac(Intel)"},{default:a(()=>[S]),_:1})]),_:1})])}const X=c(y,[["render",L]]);export{W as __pageData,X as default};
