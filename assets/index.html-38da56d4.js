import{_ as t,p as a,q as i,s as e,G as n,t as r,J as l,n as s}from"./framework-d4dfb5a8.js";const d={},c=e("strong",null,"soUni",-1),u={href:"https://www.uviewui.com/",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"由来",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#由来","aria-hidden":"true"},"#"),n(" 由来")],-1),_=e("p",null,"​ 虽然Uni官方提供了大量组件，但是这些组件只提供了最底层的功能，尤其在表单组件部分，很大一部分没有实现真正的双向绑定，在实际开发中如果直接使用，会有大量的冗余工作量，是达不到快速开发要求的，uview在整体上Uni进行了大量的包装，但是仍没有很好的解决这些问题，为了业务开发更加关注业务本身，组件尽量做到一步到位的接口提供，对大量组件，尤其是表单组件，表单验证进行了二次封装。",-1),p=e("p",null,"​ 另外，Uni整个框架虽然是基于 Vue(应该整体是Vue2的一个衍生)，但是在实际开发中和使用Vue还是存在很大差异，这些在组件开发细节上尤其明显（应该是对多平台的兼容，Uni对vNode的很多操作是无效的），这些在开发上也是要注意的。",-1),f=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),n(" 安装")],-1),g=e("li",null,"请安装 nodeJs",-1),m={href:"https://www.dcloud.io/hbuilderx.html",target:"_blank",rel:"noopener noreferrer"},w=e("li",null,"下载项目代码，项目代码中集成了 uview 及 soUni整个的环境配置、模板及相关组件。",-1),x=e("li",null,[n("项目根目录下打开 cmd 执行 "),e("code",null,"npm i"),n(" 来安装环境配置")],-1),b=l('<h2 id="环境集成" tabindex="-1"><a class="header-anchor" href="#环境集成" aria-hidden="true">#</a> 环境集成</h2><p>Uni开发环境已经集成了Vue2和各种设备接口，是不需要通过 npm 来安装 Vue、Vuex及基础周边，我们这里只需要安装 路由及周边</p><ul><li><code>uni-simple-router</code> uni路由，此路由和vue-router不是一个东西，只可做拦截处理，真正的页面路径配置本身还是基础在 根目录下的 <code>page.json</code>中</li><li><code>uni-read-pages</code> 用来读取 <code>page.json</code> 中的 page 信息，便于 router 读取和控制页面访问</li></ul><h2 id="page-json" tabindex="-1"><a class="header-anchor" href="#page-json" aria-hidden="true">#</a> page.json</h2><p>项目信息及基础配置在 <code>manifest.json</code> 及 <code>page.json</code> 中，这里业务开发主要关注 <code>page.json</code>，请将开发页面路径注册到 <code>page.json</code>中。</p><h2 id="相关api手册" tabindex="-1"><a class="header-anchor" href="#相关api手册" aria-hidden="true">#</a> 相关API手册</h2><p>除本手册包含的API外，更多 Vue，Uni 和 uView 的 API请查看对应手册。</p>',7),V={href:"https://cn.vuejs.org/v2/api/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://uniapp.dcloud.io/api/README",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.uviewui.com/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://hhyang.cn/",target:"_blank",rel:"noopener noreferrer"};function I(U,A){const o=s("ExternalLinkIcon");return a(),i("div",null,[e("blockquote",null,[e("p",null,[c,n(" 是集成在uni环境里基于最流行的uni框架 "),e("a",u,[n("uview"),r(o)]),n(" 二次包装的一套UI框架，主要处理了环境的配置、公共工具类、路由配置、页面组件等等。")])]),h,_,p,f,e("ul",null,[g,e("li",null,[n("请安装uni官方提供的编辑工具 "),e("a",m,[n("hbuilderx"),r(o)])]),w,x]),b,e("ul",null,[e("li",null,[e("a",V,[n("Vue 2 API"),r(o)])]),e("li",null,[e("a",v,[n("uni 官方API"),r(o)])]),e("li",null,[e("a",k,[n("uView 官方API"),r(o)])]),e("li",null,[e("a",j,[n("uni-simple-router API"),r(o)])])])])}const E=t(d,[["render",I],["__file","index.html.vue"]]);export{E as default};
