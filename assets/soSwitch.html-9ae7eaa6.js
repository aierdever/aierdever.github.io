import{_ as s,p as e,q as o,s as n,G as a,t as p,J as c,n as l}from"./framework-d4dfb5a8.js";const r={},i=c(`<blockquote><p><strong>so-switch组件</strong> 是继承 <code>u-switch</code> 接口包装的开关组件。</p></blockquote><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><p><strong>模板代码</strong>：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>so-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.switchVal<span class="token punctuation">&quot;</span></span> <span class="token attr-name">on-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">off-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeSwitch<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>so-switch</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>js代码</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">form</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">switchVal</span><span class="token operator">:</span><span class="token string">&#39;1&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">changeSwitch</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>v-model/value</td><td>值</td><td>Boolean,String,Number</td><td>&#39;&#39;</td><td>-</td></tr><tr><td>on-value</td><td>开启时对应值</td><td>Boolean,String,Number</td><td>true</td><td>-</td></tr><tr><td>off-value</td><td>关闭对应值</td><td>Boolean,String,Number</td><td>false</td><td>-</td></tr></tbody></table><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>方法名</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>Function(val)</td><td>返回切换值</td></tr></tbody></table><h2 id="method" tabindex="-1"><a class="header-anchor" href="#method" aria-hidden="true">#</a> Method</h2><table><thead><tr><th>方法名</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table>`,12),u={href:"https://www.uviewui.com/components/switch.html",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"u-switch",-1);function h(k,v){const t=l("ExternalLinkIcon");return e(),o("div",null,[i,n("p",null,[a("更多说明请查看 "),n("a",u,[d,a("组件介绍"),p(t)])])])}const b=s(r,[["render",h],["__file","soSwitch.html.vue"]]);export{b as default};