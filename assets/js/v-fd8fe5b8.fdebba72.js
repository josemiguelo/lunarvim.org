"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[5208],{2934:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e={key:"v-fd8fe5b8",path:"/languages/go.html",title:"Go",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install Syntax Highlighting",slug:"install-syntax-highlighting",children:[]},{level:2,title:"Supported language servers",slug:"supported-language-servers",children:[]},{level:2,title:"Supported formatters",slug:"supported-formatters",children:[]},{level:2,title:"LSP Settings",slug:"lsp-settings",children:[]},{level:2,title:"Debugger",slug:"debugger",children:[]}],filePathRelative:"languages/go.md",git:{updatedTime:1636199576e3,contributors:[{name:"nzlov",email:"wfhtqp@gmail.com",commits:3},{name:"kylo252",email:"59826753+kylo252@users.noreply.github.com",commits:2},{name:"Eric Leijonmarck",email:"eric.leijonmarck@gmail.com",commits:1}]}}},7723:(a,n,s)=>{s.r(n),s.d(n,{default:()=>l});const e=(0,s(6252).uE)('<h1 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall gopls\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="supported-language-servers" tabindex="-1"><a class="header-anchor" href="#supported-language-servers" aria-hidden="true">#</a> Supported language servers</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>go <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;gopls&quot;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="supported-formatters" tabindex="-1"><a class="header-anchor" href="#supported-formatters" aria-hidden="true">#</a> Supported formatters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>go <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;gofmt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;gofumpt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;goimports&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;golines&quot;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="lsp-settings" tabindex="-1"><a class="header-anchor" href="#lsp-settings" aria-hidden="true">#</a> LSP Settings</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>NlspConfig gopls\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Configure <code>json</code> to use auto-completion</p><h2 id="debugger" tabindex="-1"><a class="header-anchor" href="#debugger" aria-hidden="true">#</a> Debugger</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>DIInstall go_delve\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- ~/.config/lvim/ftplugin/go.lua</span>\n<span class="token keyword">local</span> dap_install <span class="token operator">=</span> require <span class="token string">&quot;dap-install&quot;</span>\ndap_install<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token string">&quot;go_delve&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',13),t={},l=(0,s(3744).Z)(t,[["render",function(a,n){return e}]])},3744:(a,n)=>{n.Z=(a,n)=>{for(const[s,e]of n)a[s]=e;return a}}}]);