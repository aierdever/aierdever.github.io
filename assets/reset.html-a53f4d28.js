import{_ as t,p as a,q as s,J as n}from"./framework-d4dfb5a8.js";const e={},d=n(`<blockquote><p><strong>reset组件</strong> 是基于 <code>btn</code>组件包装，reset的作用就是重置 <strong>插入位置所在表单</strong> 的表单值</p></blockquote><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><p><strong>模板代码</strong>：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>submit</span> <span class="token attr-name">@submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>searchSubmit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>查询<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>reset</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>type</td><td>弹窗模式</td><td>String</td><td>&#39;primary&#39;</td><td>primary / success / info/ warning / error</td></tr><tr><td>plain</td><td>按钮是否镂空，背景色透明</td><td>Boolean</td><td>true</td><td>false</td></tr><tr><td>text</td><td>按钮文字</td><td>String</td><td>&#39;重置&#39;</td><td>-</td></tr></tbody></table><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>属性名</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>Handler</td><td>点击按钮除了默认reset事件外，可触发事件</td></tr></tbody></table>`,8),r=[d];function o(p,c){return a(),s("div",null,r)}const i=t(e,[["render",o],["__file","reset.html.vue"]]);export{i as default};