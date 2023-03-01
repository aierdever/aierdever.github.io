import{_ as d,p as r,q as p,s as n,G as s,t as e,P as c,J as i,n as l}from"./framework-d4dfb5a8.js";const u={},v=n("h2",{id:"欢迎使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#欢迎使用","aria-hidden":"true"},"#"),s(" 欢迎使用")],-1),m={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"vuepress 2.0",-1),h=n("code",null,"vue3 + vite",-1),k=n("code",null,"vuepress",-1),g={href:"http://v2.vuepress-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"vuepress-theme-reco",-1),x=i(`<p>需要说明的是，这个主题 集合了 <strong>博客</strong> 和 <strong>文档</strong> 两个功能。 书写博客或文档都是采用最流行的<code>markdown</code>格式。</p><p><strong>注：</strong> 为了便于生成导航，文档请使用 .md 做文件后缀名。</p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><p>书写博客请放置在 <code>blogs</code> 文件夹中，文档请在 <code>docs</code> 目录下根据文档类型，建立目录书写存放。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>aierdever
 ├── blogs  <span class="token comment">//博客总目录</span>
 │   ├── <span class="token number">2023</span> <span class="token comment">//博客分类文件夹</span>
 │   └── howuse<span class="token punctuation">.</span>md
 ├── docs <span class="token comment">//文档总目录</span>
 │   ├── pcwork <span class="token comment">//pc框架文档目录</span>
 │   └── souni <span class="token comment">//souni文档目录</span>
 ├── <span class="token punctuation">.</span>vuepress <span class="token comment">//vuepress 配置目录</span>
 │   ├── config<span class="token punctuation">.</span>ts <span class="token comment">//配置文件</span>
 │   ├── <span class="token keyword">public</span> <span class="token comment">//存放公共资源文件目录</span>
 │   │   ├── blogs <span class="token comment">// 博客资源总文件夹</span>
 │   │   ├── docs <span class="token comment">//文档资源总文件夹</span>
 │   │   │   └── pcwork
 │   │   └── logo<span class="token punctuation">.</span>png
 │   ├── render<span class="token punctuation">.</span>js  <span class="token comment">//运行生成侧边栏文件</span>
 │   ├── sidebar<span class="token punctuation">.</span>js <span class="token comment">//存放侧边栏json数据</span>
 │   ├── styles
 │   │   └── index<span class="token punctuation">.</span>css
 │   └── vue<span class="token operator">-</span>previews <span class="token comment">//vue 预览文件夹</span>
 │       ├── demo<span class="token punctuation">.</span>ts
 │       └── test<span class="token punctuation">.</span>vue
 ├── <span class="token keyword">package</span><span class="token punctuation">.</span>json
 ├── pnpm<span class="token operator">-</span>lock<span class="token punctuation">.</span>yaml
 └── <span class="token constant">README</span><span class="token punctuation">.</span>md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态资源存放目录" tabindex="-1"><a class="header-anchor" href="#静态资源存放目录" aria-hidden="true">#</a> 静态资源存放目录</h2><p>书写博文时，我们经常会有图片或资源需要存放， 为了便于维护和查找，请将资源存放在 <code>/.vuepress/pubilc/</code> 中(如上目录结构，已分类)， 博客请在目录中新建文件夹，分类存放。 如：文档 pcwork 的资源我们就放置在 <code>/.vuepress/pubilc/docs/pcwork</code></p><h2 id="图标使用" tabindex="-1"><a class="header-anchor" href="#图标使用" aria-hidden="true">#</a> 图标使用</h2>`,8),f={href:"https://www.xicons.org/#/zh-CN",target:"_blank",rel:"noopener noreferrer"},w=n("strong",null,[n("code",null,"carbon"),s(" 1 种图标")],-1),q=i(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xicons</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Star<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="博客书写规范" tabindex="-1"><a class="header-anchor" href="#博客书写规范" aria-hidden="true">#</a> 博客书写规范</h2>`,2),y=n("li",null,[s("博客请放置在"),n("code",null,"blogs"),s("里对应年份的文件夹中，文件名为 "),n("code",null,"月日时-内容标题.md"),s("，如： "),n("code",null,"020418-howtouse.md"),s("，这样博客系统会自动帮收入博客列表中，")],-1),j=n("code",null,"Frontmatter",-1),E=n("code",null,"Frontmatter",-1),z={href:"https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},S=n("li",null,[s("注意写好 "),n("code",null,"tags"),s(" 和 "),n("code",null,"categories"),s("，多个字段分组书写，博客会自动根据这些字段自动分类文章。")],-1),B=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
title: 想知道怎么使用这个博客吗？
date: 2023-02-24 16:32
author: bujichong
tags:
 - 说明文档
 - info
categories:
 - 说明文档
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文档书写规范" tabindex="-1"><a class="header-anchor" href="#文档书写规范" aria-hidden="true">#</a> 文档书写规范</h2><ul><li>文档按文件夹放置在 <code>/.vuepress/pubilc/docs/</code> 中。</li><li>根据内容，分类可在文档目录下再建子目录来分类存放，侧导航会根据文件夹来自动分类生成。</li><li>头文件书写，参考如：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
title: &quot;框架目录&quot;
subSidebar: true
categories:
- pc框架
tags:
- pc框架
- 框架基础
comments: true

---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加主导航" tabindex="-1"><a class="header-anchor" href="#添加主导航" aria-hidden="true">#</a> 添加主导航</h2><p>写完手册文档，请在 <code>/.vuepress/config/navbar.ts</code>中添加入口导航，示例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;soUni&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/souni/index.html&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span>
        <span class="token comment">// children: [</span>
        <span class="token comment">//     { text: &quot;指南&quot;, link: &quot;/docs/souni/frame/index.html&quot; },</span>
        <span class="token comment">//     { text: &quot;组件&quot;, link: &quot;/docs/souni/components/index.html&quot; },</span>
        <span class="token comment">//     { text: &quot;Js&quot;, link: &quot;/docs/souni/js/index.html&quot; },</span>
        <span class="token comment">// ],</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面中添加导航" tabindex="-1"><a class="header-anchor" href="#页面中添加导航" aria-hidden="true">#</a> 页面中添加导航</h2><p>为了更好的导航所有文档，我们专门设置了文档首页： <code>docs/index.md</code>，书写完文档，请将自己文档的导航目录添加到这个文件中。 为了更好的显示文档的导航，我们定制了2个专有容器 <code>nav-group</code> 和 <code>nav</code>，</p><p><strong>使用方法:</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: nav-group [组标题]
    ::: nav [导航图标]
    <span class="token url">[<span class="token content">导航文字</span>](<span class="token url">链接</span>)</span>
    :::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),C={href:"https://www.xicons.org/#/zh-CN",target:"_blank",rel:"noopener noreferrer"},F=n("strong",null,[n("code",null,"carbon"),s(" 图标")],-1),N=i(`<p><strong>示例代码：</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: nav-group pc框架手册
    ::: nav Home
    <span class="token url">[<span class="token content">首页</span>](<span class="token url">/docs/pcwork/index/</span>)</span>
    :::
    ::: nav Book
    <span class="token url">[<span class="token content">框架基础</span>](<span class="token url">/docs/pcwork/1.base/1.files.md</span>)</span>
    :::
    ::: nav Carbon3DPrintMesh
    <span class="token url">[<span class="token content">样式及图标</span>](<span class="token url">/docs/pcwork/2.css/1.grid.md</span>)</span>
    :::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>显示效果：</strong></p>`,3),D={class:"nav-group-container"},L=n("h4",{class:"nav-group-title"},"pc框架手册",-1),V={class:"nav-container nav",style:{"background-color":"#E9EAEF"}},A={class:"nav-container nav",style:{"background-color":"#E1F9F7"}},H={class:"nav-container nav",style:{"background-color":"#EAEBFD"}},M=i(`<h2 id="侧边栏目录" tabindex="-1"><a class="header-anchor" href="#侧边栏目录" aria-hidden="true">#</a> 侧边栏目录</h2><p>文档是不会自动生成侧边栏的，书写文档后请运行下命令生成侧边栏，或者build 网站直接使用 <code>go</code> 命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## npm</span>
<span class="token function">npm</span> run side
<span class="token comment">##npm run go </span>

<span class="token comment">## yarn</span>
<span class="token function">yarn</span> side

<span class="token comment">## pnpm</span>
<span class="token function">pnpm</span> side
<span class="token comment">## pnpm go </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2><p>为了更加愉快的书写 文档 和 博客，推荐使用 <code>Typora</code>~</p>`,5);function P(R,X){const a=l("ExternalLinkIcon"),o=l("xicons"),t=l("RouterLink");return r(),p("div",null,[v,n("p",null,[s("欢迎入驻爱尔前端文档博客~ 这个博客是采用 "),n("a",m,[b,e(a)]),s("创建，整个渲染是基于 "),h,s(" 的， 同时，我们集成了最流行的 "),k,s(" 主题 "),n("a",g,[_,e(a)]),s("。")]),x,n("p",null,[s("vuepress-theme-reco@2.x 是通过 Xicons 来配置图标的，"),n("a",f,[s("Xicons"),e(a)]),s(" 只集成了 "),w,s("，几乎可以满足绝大部分场景。 如果想要在 markdown 中输出一个星星图标 "),e(o,{icon:"Star"}),s("，你就可以在 markdown 中这样编辑代码：")]),q,n("ul",null,[y,n("li",null,[s("博客的头部文件请注意正确书写 "),j,s("，很多的 "),E,s("名称和方式，请"),n("a",z,[s("参考官方文档"),e(a)]),s("。")]),S]),B,n("p",null,[s("图标从 "),n("a",C,[s("Xicons"),e(a)]),s(" 的 "),F,s(" 中查找，设置 icon名称即可。")]),N,n("div",D,[L,n("div",V,[e(o,{class:"xicon",iconSize:"28",icon:"Home"}),n("p",null,[e(t,{to:"/docs/pcwork/index/"},{default:c(()=>[s("首页")]),_:1})])]),n("div",A,[e(o,{class:"xicon",iconSize:"28",icon:"Book"}),n("p",null,[e(t,{to:"/docs/pcwork/1.base/1.files.html"},{default:c(()=>[s("框架基础")]),_:1})])]),n("div",H,[e(o,{class:"xicon",iconSize:"28",icon:"Carbon3DPrintMesh"}),n("p",null,[e(t,{to:"/docs/pcwork/2.css/1.grid.html"},{default:c(()=>[s("样式及图标")]),_:1})])])]),M])}const J=d(u,[["render",P],["__file","022416-howtouse.html.vue"]]);export{J as default};
