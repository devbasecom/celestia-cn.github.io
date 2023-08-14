import{d as I,h as H,g as P,v as w,a0 as _,a1 as $,a2 as E,a3 as F,o as v,c as y,r as D,l as R,n as u,a4 as B,W as f,j as L,a5 as N,k as C,F as q,G as M,O as U,A as g,a6 as V,a7 as W,a8 as J,a9 as z,aa as G,ab as K,ac as Q,ad as X,ae as Y,af as Z,ag as ee,u as ae,x as te,ah as ne,ai as se,aj as ie,ak as re}from"./chunks/framework.a76ee0a9.js";import{t as le}from"./chunks/theme.0c2f10c9.js";const T=Symbol("addTab"),k=Symbol("updateTab"),O=Symbol("deleteTab"),j=Symbol("tabsProvider");function h(e,n){const a=U(e,n);if(typeof a>"u")throw new Error(`Could not resolve ${e.description}`);return a}const oe=["data-tab-id","aria-hidden"],ce=I({__name:"Tab",props:{panelClass:{type:[String,Object,Array],default:"tabs-component-panel"},id:{type:String,default:null},name:{type:String,required:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},isDisabled:{type:Boolean,default:!1},navItemClass:{type:[String,Object,Array],required:!1,default:null},navItemLinkClass:{type:[String,Object,Array],required:!1,default:null}},setup(e,{expose:n}){const a=e,s=H(!1),i=h(j),o=h(T),p=h(k),l=h(O),r=a.prefix+a.name+a.suffix,t=a.id?a.id:a.name.toLowerCase().replace(/ /g,"-"),c=t+"-pane",d=P(()=>"#"+(a.isDisabled?"":t));return w(()=>i.activeTabHash,()=>{s.value=d.value===i.activeTabHash}),w(()=>Object.assign({},a),()=>{p(t,{name:a.name,header:a.prefix+a.name+a.suffix,isDisabled:a.isDisabled,hash:d.value,index:i.tabs.length,computedId:t,paneId:c,navItemClass:a.navItemClass,navItemLinkClass:a.navItemLinkClass})}),_(()=>{o({name:a.name,header:r,isDisabled:a.isDisabled,hash:d.value,index:i.tabs.length,computedId:t,paneId:c,navItemClass:a.navItemClass,navItemLinkClass:a.navItemLinkClass})}),$(()=>{l(t)}),n({header:r,computedId:t,paneId:c,hash:d,isActive:s}),(m,A)=>E((v(),y("section",{ref:"tab",id:c,"data-tab-id":R(t),"aria-hidden":!s.value,class:u(e.panelClass),role:"tabpanel",tabindex:"-1"},[D(m.$slots,"default")],10,oe)),[[F,s.value]])}});class de{get(n){const a=localStorage.getItem(n);if(a===null)return null;const s=JSON.parse(a);return s?new Date(s.expires)<new Date?(localStorage.removeItem(n),null):s.value:null}set(n,a,s){const i=new Date().getTime(),o=new Date(i+s*6e4);localStorage.setItem(n,JSON.stringify({value:a,expires:o}))}}const S=new de,pe=["aria-controls","aria-selected","href","onClick","innerHTML"],ue=I({__name:"Tabs",props:{cacheLifetime:{type:Number,default:5},options:{type:Object,required:!1,default:()=>({useUrlFragment:!0,defaultTabHash:null})},wrapperClass:{type:[String,Object,Array],default:"tabs-component"},panelsWrapperClass:{type:[String,Object,Array],default:"tabs-component-panels"},navClass:{type:[String,Object,Array],default:"tabs-component-tabs"},navItemClass:{type:[String,Object,Array],default:"tabs-component-tab"},navItemDisabledClass:{type:[String,Object,Array],default:"is-disabled"},navItemActiveClass:{type:[String,Object,Array],default:"is-active"},navItemInactiveClass:{type:[String,Object,Array],default:"is-inactive"},navItemLinkClass:{type:[String,Object,Array],default:"tabs-component-tab-a"},navItemLinkActiveClass:{type:[String,Object,Array],default:"is-active"},navItemLinkInactiveClass:{type:[String,Object,Array],default:"is-inactive"},navItemLinkDisabledClass:{type:[String,Object,Array],default:"is-disabled"}},emits:["changed","clicked"],setup(e,{expose:n,emit:a}){const s=e,i=B({activeTabHash:"",lastActiveTabHash:"",tabs:[]});f(j,i),f(T,l=>{i.tabs.push(l)}),f(k,(l,r)=>{const t=i.tabs.findIndex(c=>c.computedId===l);r.isActive=i.tabs[t].isActive,i.tabs[t]=r}),f(O,l=>{const r=i.tabs.findIndex(t=>t.computedId===l);i.tabs.splice(r,1)});const o=(l,r)=>{r&&!s.options.useUrlFragment&&r.preventDefault();const t=p(l);if(!t)return;if(r&&t.isDisabled){r.preventDefault();return}if(i.lastActiveTabHash===t.hash){a("clicked",{tab:t});return}if(i.tabs.forEach(d=>{d.isActive=d.hash===t.hash}),a("changed",{tab:t}),i.lastActiveTabHash=i.activeTabHash=t.hash,s.cacheLifetime<=0)return;const c=`vue-tabs-component.cache.${window.location.host}${window.location.pathname}`;S.set(c,t.hash,s.cacheLifetime)},p=l=>i.tabs.find(r=>r.hash===l);return L(()=>{if(i.tabs.length){if(window.addEventListener("hashchange",()=>o(window.location.hash)),p(window.location.hash)){o(window.location.hash);return}if(s.cacheLifetime>0){const l=`vue-tabs-component.cache.${window.location.host}${window.location.pathname}`,r=S.get(l);if(r!==null&&p(r)){o(r);return}if(s.options.defaultTabHash&&p("#"+s.options.defaultTabHash)){o("#"+s.options.defaultTabHash);return}}o(i.tabs[0].hash)}}),n({...N(i),selectTab:o,findTab:p}),(l,r)=>(v(),y("div",{class:u(e.wrapperClass)},[C("ul",{role:"tablist",class:u(e.navClass)},[(v(!0),y(q,null,M(i.tabs,(t,c)=>{var d,m;return v(),y("li",{key:c,class:u([(d=t.navItemClass)!=null?d:e.navItemClass,t.isDisabled?e.navItemDisabledClass:"",t.isActive?e.navItemActiveClass:t.isDisabled?"":e.navItemInactiveClass]),role:"presentation"},[C("a",{role:"tab",class:u([(m=t.navItemLinkClass)!=null?m:e.navItemLinkClass,t.isDisabled?e.navItemLinkDisabledClass:"",t.isActive?e.navItemLinkActiveClass:t.isDisabled?"":e.navItemLinkInactiveClass]),"aria-controls":t.paneId,"aria-selected":t.isActive,href:t.hash,onClick:A=>o(t.hash,A),innerHTML:t.header,tabindex:"0"},null,10,pe)],2)}),128))],2),C("div",{class:u(e.panelsWrapperClass)},[D(l.$slots,"default")],2)],2))}});const be={...le,enhanceApp({app:e}){e.component("tabs",ue),e.component("tab",ce)}};function x(e){if(e.extends){const n=x(e.extends);return{...n,...e,async enhanceApp(a){n.enhanceApp&&await n.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const b=x(be),me=I({name:"VitePressApp",setup(){const{site:e}=ae();return L(()=>{te(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),ne(),se(),ie(),b.setup&&b.setup(),()=>re(b.Layout)}});async function fe(){const e=ve(),n=he();n.provide(W,e);const a=J(e.route);return n.provide(z,a),n.component("Content",G),n.component("ClientOnly",K),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),b.enhanceApp&&await b.enhanceApp({app:n,router:e,siteData:Q}),{app:n,router:e,data:a}}function he(){return X(me)}function ve(){let e=g,n;return Y(a=>{let s=Z(a);return s?(e&&(n=s),(e||n===s)&&(s=s.replace(/\.js$/,".lean.js")),g&&(e=!1),ee(()=>import(s),[])):null},b.NotFound)}g&&fe().then(({app:e,router:n,data:a})=>{n.go().then(()=>{V(n.route,a.site),e.mount("#app")})});export{fe as createApp};
