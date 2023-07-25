import{_ as s,o as a,c as l,U as p}from"./chunks/framework.9243664d.js";const D=JSON.parse('{"title":"在 Bubs testnet 上部署 dapp","description":"","frontmatter":{},"headers":[],"relativePath":"developers/gm-portal-bubs.md","filePath":"developers/gm-portal-bubs.md"}'),n={name:"developers/gm-portal-bubs.md"},o=p(`<h1 id="在-bubs-testnet-上部署-dapp" tabindex="-1">在 Bubs testnet 上部署 dapp <a class="header-anchor" href="#在-bubs-testnet-上部署-dapp" aria-label="Permalink to &quot;在 Bubs testnet 上部署 dapp&quot;">​</a></h1><p>首先，仔细阅读<a href="./bubs-testnet.html">Bubs testnet</a>页面和“<a href="./deploy-on-bubs.html">在 Bubs testnet 上部署智能合约</a>”教程。</p><p><strong>在部署智能合约之前，您需要一个有资金的账户。</strong></p><p>接下来，从 Github 克隆 <code>gm-portal</code> 并启动前端：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/jcstein/gm-portal.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gm-portal/frontend</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre></div><p>在新的终端窗口中，将您的 faucet 的私钥和您使用的 RPC URL 设置为环境变量：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PRIVATE_KEY</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> BUBS_RPC_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://bubs.calderachain.xyz/http</span></span></code></pre></div><p>现在，使用同一个终端切换到 <code>gm-portal/contracts</code> 目录，并使用 Foundry 部署合约：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME</span><span style="color:#C3E88D;">/gm-portal/contracts</span></span>
<span class="line"><span style="color:#FFCB6B;">forge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">script/GmPortal.s.sol:GmPortalScript</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rpc-url</span><span style="color:#A6ACCD;"> $BUBS_RPC_URL </span><span style="color:#C3E88D;">--private-key</span><span style="color:#A6ACCD;"> $PRIVATE_KEY </span><span style="color:#C3E88D;">--broadcast</span></span></code></pre></div><p><img src="https://docs.celestia.org/assets/images/gm_contract-9111b4b1d037bf80d66ecc56e3c2583a.png" alt=""></p><p>在部署输出中找到合约地址，并将其设置为一个变量：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> CONTRACT_ADDRESS</span><span style="color:#89DDFF;">=&lt;</span><span style="color:#C3E88D;">您在上面输出中获取到的合约地</span><span style="color:#A6ACCD;">址</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>接下来，您可以从终端与合约进行交互！</p><p>首先，向合约发送一个“gm”：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cast</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">send</span><span style="color:#A6ACCD;"> $CONTRACT_ADDRESS \\</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gm(string)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--private-key $PRIVATE_KEY \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--rpc-url $BUBS_RPC_URL</span></span></code></pre></div><p>现在，您已经向合约发送了一个“gm”，您可以使用以下命令读取合约中的所有“gm”（GMs）：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cast</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">call</span><span style="color:#A6ACCD;"> $CONTRACT_ADDRESS </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">getAllGms()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rpc-url</span><span style="color:#A6ACCD;"> $BUBS_RPC_URL</span></span></code></pre></div><p>接下来，查询所有 gm 的总数，它将以十六进制值返回：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cast</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">call</span><span style="color:#A6ACCD;"> $CONTRACT_ADDRESS </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">getTotalGms()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rpc-url</span><span style="color:#A6ACCD;"> $BUBS_RPC_URL</span></span></code></pre></div><p>为了在前端与合约进行交互，您需要给您在以太坊钱包中的账户充值。使用以下命令将资金转移到外部账户：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> RECEIVER</span><span style="color:#89DDFF;">=&lt;</span><span style="color:#C3E88D;">receiver</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ETH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">addres</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">cast</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">send</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--private-key</span><span style="color:#A6ACCD;"> $PRIVATE_KEY $RECEIVER </span><span style="color:#C3E88D;">--value</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">ether</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rpc-url</span><span style="color:#A6ACCD;"> $BUBS_RPC_URL</span></span></code></pre></div><p>如果您在与设置私钥的终端不同的终端上操作，您可能需要再次设置私钥。</p><h2 id="更新前端页面" tabindex="-1">更新前端页面 <a class="header-anchor" href="#更新前端页面" aria-label="Permalink to &quot;更新前端页面&quot;">​</a></h2><p>接下来，在您可以在前端与合约进行交互之前，您需要更新一些内容：</p><ul><li>将 <code>gm-portal/frontend/src/App.tsx</code> 中的合约地址更改为您的合约地址。</li><li>在 <code>gm-portal/frontend/src/main.tsx</code> 中匹配您的 L2 链的链信息配置。</li><li>如果您更改了合约，请从 <code>gm-portal/contracts/out/GmPortal.sol/GmPortal.json</code> 更新 <code>gm-portal/frontend/GmPortal.json</code> 中的 ABI。您可以通过以下方式完成更新：</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME</span></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev/gm-portal/contracts/out/GmPortal.sol/GmPortal.json</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev/gm-portal/frontend</span></span></code></pre></div><h2 id="与前端页面交互" tabindex="-1">与前端页面交互 <a class="header-anchor" href="#与前端页面交互" aria-label="Permalink to &quot;与前端页面交互&quot;">​</a></h2><p>现在，请使用您充值资金的以太坊钱包登录，并在您的<code>GM portal</code>上发布一条 GM！ <img src="https://docs.celestia.org/assets/images/gm_bubs-784564e670c1b52b1af9a250b4a7d113.png" alt=""></p><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-label="Permalink to &quot;下一步&quot;">​</a></h2><p>使用这个技术栈可以构建许多不同的项目。以下是一些适合使用这个技术栈构建的项目：</p><ul><li>链上游戏</li><li>去中心化社交媒体</li><li>NFT 门票 rollup</li><li>在 Celestia 上使用 Optimism</li><li>在 Celestia 上构建 OP Craft</li></ul>`,31),e=[o];function t(c,r,C,i,y,d){return a(),l("div",null,e)}const h=s(n,[["render",t]]);export{D as __pageData,h as default};
