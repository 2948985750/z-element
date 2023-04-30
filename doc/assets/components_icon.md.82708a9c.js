import{z as p,T as o}from"./chunks/zIcon.0c95d5a0.js";import{d as c,a as r,j as s,w as a,l as t,m as F,o as D,h as l,b as n}from"./app.e268d7d9.js";import"./chunks/commonjsHelpers.042e6b4d.js";const y=t(`<h1 id="icon-图标" tabindex="-1">Icon 图标 <a class="header-anchor" href="#icon-图标" aria-hidden="true">#</a></h1><p>z-ui 提供了一套常用的图标集合。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@heroicons/vue</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>你可以选择任意一个图标库并不拘泥于某个库，使用时将图标组件作为默认插槽传递给<code>z-icon</code>组件即可。</p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-hidden="true">#</a></h2><p><code>z-icon</code>的宽高默认是自适应的所以你需要设定它</p>`,7),i={class:"flex-box"},d=t(`<details class="details custom-block"><summary>展开/关闭代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flex-box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">z-icon</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">TrashIcon</span><span style="color:#89DDFF;"> /&gt;&lt;/</span><span style="color:#F07178;">z-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">z-icon</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">TrashIcon</span><span style="color:#89DDFF;"> /&gt;&lt;/</span><span style="color:#F07178;">z-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">z-icon</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">TrashIcon</span><span style="color:#89DDFF;"> /&gt;&lt;/</span><span style="color:#F07178;">z-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">z-icon</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">TrashIcon</span><span style="color:#89DDFF;"> /&gt;&lt;/</span><span style="color:#F07178;">z-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">z-icon</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">TrashIcon</span><span style="color:#89DDFF;"> /&gt;&lt;/</span><span style="color:#F07178;">z-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">z-icon</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">TrashIcon</span><span style="color:#89DDFF;"> /&gt;&lt;/</span><span style="color:#F07178;">z-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">postcss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">.flex-box {</span></span>
<span class="line"><span style="color:#A6ACCD;">  @apply flex justify-around h-6;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt; div {</span></span>
<span class="line"><span style="color:#A6ACCD;">    @apply basis-1/6;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="图标集合" tabindex="-1">图标集合 <a class="header-anchor" href="#图标集合" aria-hidden="true">#</a></h2>`,2),m=JSON.parse('{"title":"Icon 图标","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"图标集合","slug":"图标集合","link":"#图标集合","children":[]}],"relativePath":"components/icon.md"}'),C={name:"components/icon.md"},f=c({...C,setup(A){return(u,h)=>{const e=F("ClientOnly");return D(),r("div",null,[y,s(e,null,{default:a(()=>[l("div",i,[l("div",null,[s(n(p),null,{default:a(()=>[s(n(o))]),_:1})]),l("div",null,[s(n(p),null,{default:a(()=>[s(n(o))]),_:1})]),l("div",null,[s(n(p),null,{default:a(()=>[s(n(o))]),_:1})]),l("div",null,[s(n(p),null,{default:a(()=>[s(n(o))]),_:1})]),l("div",null,[s(n(p),null,{default:a(()=>[s(n(o))]),_:1})]),l("div",null,[s(n(p),null,{default:a(()=>[s(n(o))]),_:1})])])]),_:1}),d])}}});export{m as __pageData,f as default};
