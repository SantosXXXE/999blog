import{_ as n,c as l,j as i,a as t,G as k,a2 as h,B as p,o as e}from"./chunks/framework.CqvaAnBq.js";const C=JSON.parse('{"title":"如何解除CkilL病毒的自启动","description":"","frontmatter":{"lastUpdated":"2024-07-04T00:00:00.000Z"},"headers":[],"relativePath":"ckill.md","filePath":"ckill.md","lastUpdated":1720051200000}'),E={name:"ckill.md"};function r(d,s,g,y,F,c){const a=p("ArticleMetadata");return e(),l("div",null,[s[0]||(s[0]=i("h1",{id:"如何解除ckill病毒的自启动",tabindex:"-1"},[t("如何解除CkilL病毒的自启动 "),i("a",{class:"header-anchor",href:"#如何解除ckill病毒的自启动","aria-label":'Permalink to "如何解除CkilL病毒的自启动"'},"​")],-1)),k(a),s[1]||(s[1]=h(`<div class="caution custom-block github-alert"><p class="custom-block-title">CAUTION</p><p>强调用户在快速浏览文档时也不应忽略的重要信息。<br><strong>了解自启动病毒的危害和预防方法，使用户能够保护自己的计算机和网络环境不受恶意软件的威胁</strong></p></div><p><code>Ck1lL</code>是一个采用C++编写的恶意软件，设计狡猾，它不仅封装了必要的<code>DLL</code>以隐藏其恶意行为，还能够结束用户桌面会话，同时在命令提示符中输出恐吓信息进行心理攻击。尤为严重的是，它具有改写注册表自启动项的能力，以实现开机自启，达到持续感染的目的。此外，该恶意软件具备先进的反检测技术，能够逃避包括火绒和360在内的主流安全软件的检测，使之难以被识别和清除点 <br></p><p>以下展示的是一个简易工具，它通过c++代码来清除<code>CkilL</code>恶意软件对注册表所做的修改。该工具的目的是撤销病毒对系统自启动设置的不当更改，以防止其在系统重启后再次激活，从而保护您的系统不受进一步侵害，并维持注册表的完整性。</p><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;Windows.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;iostream&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 删除自启动注册表项</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RemoveSelfStartupEntry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    HKEY hKey;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 打开注册表键</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RegOpenKeyExW</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HKEY_CURRENT_USER, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">L&quot;Software</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Microsoft</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Windows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CurrentVersion</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Run&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, KEY_WRITE, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hKey) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ERROR_SUCCESS) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 删除自启动项</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> wchar_t*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> appName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> L&quot;WindowsSystem&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RegDeleteValueW</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hKey, appName) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ERROR_SUCCESS) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::wcerr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> L&quot;无法删除注册表值: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> appName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 关闭注册表键</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    RegCloseKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hKey);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 删除自启动项</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RemoveSelfStartupEntry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::wcout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> L&quot;自启动项已删除。&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::wcerr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> L&quot;删除自启动项失败。&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>如果你发现这篇指南有用，或者有改进建议，请随时联系我们或参与讨论。</strong>🎉 🎉 🎉</p>`,5))])}const A=n(E,[["render",r]]);export{C as __pageData,A as default};