import{S as e,i as t,s,m as n,j as r,o as l,p as o,q as a,r as c,u as i,v as f,w as h,f as g,x as m,a as u,e as p,t as d,y as v,g as $,c as b,b as j,d as y,h as I,k as x,A as E,z as S}from"./client.653b4de9.js";import{I as q}from"./item.b4247460.js";import{s as w}from"./store.5b2fc2e7.js";function B(e,t,s){const n=e.slice();return n[5]=t[s],n}function D(e,t,s){const n=e.slice();return n[2]=t[s],n}function H(e){let t,s;return t=new q({props:{name:e[5].name,category:e[5].category,image:e[5].image,description:e[5].description,href:"recipes/"+e[5].slug}}),{c(){o(t.$$.fragment)},l(e){a(t.$$.fragment,e)},m(e,n){c(t,e,n),s=!0},p(e,s){const n={};1&s&&(n.name=e[5].name),1&s&&(n.category=e[5].category),1&s&&(n.image=e[5].image),1&s&&(n.description=e[5].description),1&s&&(n.href="recipes/"+e[5].slug),t.$set(n)},i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){i(t.$$.fragment,e),s=!1},d(e){f(t,e)}}}function N(e){let t,s,o=e[2]==e[5].slug&&H(e);return{c(){o&&o.c(),t=n()},l(e){o&&o.l(e),t=n()},m(e,n){o&&o.m(e,n),r(e,t,n),s=!0},p(e,s){e[2]==e[5].slug?o?(o.p(e,s),3&s&&l(o,1)):(o=H(e),o.c(),l(o,1),o.m(t.parentNode,t)):o&&(S(),i(o,1,1,(()=>{o=null})),h())},i(e){s||(l(o),s=!0)},o(e){i(o),s=!1},d(e){o&&o.d(e),e&&g(t)}}}function V(e){let t,s,o=e[0],a=[];for(let t=0;t<o.length;t+=1)a[t]=N(B(e,o,t));const c=e=>i(a[e],1,1,(()=>{a[e]=null}));return{c(){for(let e=0;e<a.length;e+=1)a[e].c();t=n()},l(e){for(let t=0;t<a.length;t+=1)a[t].l(e);t=n()},m(e,n){for(let t=0;t<a.length;t+=1)a[t].m(e,n);r(e,t,n),s=!0},p(e,s){if(3&s){let n;for(o=e[0],n=0;n<o.length;n+=1){const r=B(e,o,n);a[n]?(a[n].p(r,s),l(a[n],1)):(a[n]=N(r),a[n].c(),l(a[n],1),a[n].m(t.parentNode,t))}for(S(),n=o.length;n<a.length;n+=1)c(n);h()}},i(e){if(!s){for(let e=0;e<o.length;e+=1)l(a[e]);s=!0}},o(e){a=a.filter(Boolean);for(let e=0;e<a.length;e+=1)i(a[e]);s=!1},d(e){m(a,e),e&&g(t)}}}function k(e){let t,s,n,o,a,c,f,E,q,w=e[1],B=[];for(let t=0;t<w.length;t+=1)B[t]=V(D(e,w,t));const H=e=>i(B[e],1,1,(()=>{B[e]=null}));return{c(){t=u(),s=p("div"),n=p("h1"),o=d("Saved Items"),a=u(),c=p("hr"),f=u(),E=p("div");for(let e=0;e<B.length;e+=1)B[e].c();this.h()},l(e){v('[data-svelte="svelte-s18bby"]',document.head).forEach(g),t=$(e),s=b(e,"DIV",{class:!0});var r=j(s);n=b(r,"H1",{class:!0});var l=j(n);o=y(l,"Saved Items"),l.forEach(g),a=$(r),c=b(r,"HR",{class:!0}),f=$(r),E=b(r,"DIV",{class:!0});var i=j(E);for(let e=0;e<B.length;e+=1)B[e].l(i);i.forEach(g),r.forEach(g),this.h()},h(){document.title="Kitchefs | Saved Items",I(n,"class","svelte-1fqofn3"),I(c,"class","svelte-1fqofn3"),I(E,"class","row"),I(s,"class","container")},m(e,l){r(e,t,l),r(e,s,l),x(s,n),x(n,o),x(s,a),x(s,c),x(s,f),x(s,E);for(let e=0;e<B.length;e+=1)B[e].m(E,null);q=!0},p(e,[t]){if(3&t){let s;for(w=e[1],s=0;s<w.length;s+=1){const n=D(e,w,s);B[s]?(B[s].p(n,t),l(B[s],1)):(B[s]=V(n),B[s].c(),l(B[s],1),B[s].m(E,null))}for(S(),s=w.length;s<B.length;s+=1)H(s);h()}},i(e){if(!q){for(let e=0;e<w.length;e+=1)l(B[e]);q=!0}},o(e){B=B.filter(Boolean);for(let e=0;e<B.length;e+=1)i(B[e]);q=!1},d(e){e&&g(t),e&&g(s),m(B,e)}}}function z(){return this.fetch("recipes.json").then((e=>e.json())).then((e=>({recipes:e})))}function A(e,t,s){let n;E(e,w,(e=>s(1,n=e)));let{recipes:r}=t;return e.$$set=e=>{"recipes"in e&&s(0,r=e.recipes)},[r,n]}export default class extends e{constructor(e){super(),t(this,e,A,k,s,{recipes:0})}}export{z as preload};
