import{d as m,o as t,c as r,w as l,g as c,f as s,t as f,z as $,e as i,F as g,l as k,y as C,M as Y,a5 as A,a8 as w,a9 as B,q as L,s as P,r as S,m as u,aa as V,a7 as F}from"./app-fSIXTrMj.js";import{o as z}from"./index-Bj38XWP1.js";import{_ as D}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BfnS4rgv.js";const E=["title"],I=["src","alt","on-error"],N=m({__name:"YunAlbum",props:{album:{}},setup(_){return(e,a)=>{const n=$;return t(),r(n,{class:"yun-album-list-item",to:e.album.url},{default:l(()=>[c("figure",{title:e.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":s(z)},null,40,I),c("figcaption",null," 「"+f(e.album.caption)+"」 ",1)],8,E)]),_:1},8,["to"])}}}),R={class:"yun-album-list"},T=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(e,a)=>{const n=N;return t(),i("div",R,[(t(!0),i(g,null,k(e.albums,o=>(t(),r(n,{key:o.url,album:o},null,8,["album"]))),128))])}}}),q={text:"center",class:"yun-text-light",p:"2"},j=m({__name:"albums",setup(_){const{t:e}=C(),a=Y(),n=A(a);w([B({"@type":"CollectionPage"})]);const o=L(()=>a.value.albums||[]);return(p,H)=>{const d=F,h=D,y=T,b=P("RouterView");return t(),i(g,null,[p.$slots["sidebar-child"]?(t(),r(d,{key:0},{default:l(()=>[S(p.$slots,"sidebar-child")]),_:3})):(t(),r(d,{key:1})),u(b,null,{default:l(({Component:v})=>[(t(),r(V(v),null,{"main-header":l(()=>[u(h,{title:s(n)||s(e)("title.album"),icon:s(a).icon||"i-ri-gallery-line",color:s(a).color,"page-title-class":s(a).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":l(()=>[c("div",q,f(s(e)("counter.albums",o.value.length)),1),u(y,{albums:o.value},null,8,["albums"]),u(b)]),_:2},1024))]),_:1})],64)}}});export{j as default};