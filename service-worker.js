!function(){"use strict";const e=1608340973102,t="cache"+e,a=["/client/client.1bbc3267.js","/client/inject_styles.5607aec6.js","/client/index.a351da25.js","/client/item.4a0cab20.js","/client/saved_items.50c5e167.js","/client/store.c182e604.js","/client/[slug].e0220831.js","/client/index.60cd6919.js","/client/[slug].8ad96564.js"].concat(["/service-worker-index.html","/favicon.ico","/global.css","/kitchefs_icon.png","/media/anzac-biscuits.jpg","/media/banana-bread.jpg","/media/chocolate-caramel-slice.jpg","/media/cinnamon-doughnuts.jpg","/media/dark-choc-brownies.jpg","/media/gingerbread-house.jpg","/media/guacamole.jpg","/media/hot-cross-buns.jpg","/media/meringue.jpg","/media/pavlova.jpg","/pdf/anzac-biscuits.pdf","/pdf/banana-bread.pdf","/pdf/chocolate-caramel-slice.pdf","/pdf/cinnamon-doughnuts.pdf","/pdf/dark-choc-brownies.pdf","/pdf/guacamole.pdf","/pdf/hot-cross-buns.pdf","/pdf/pavlova.pdf"]),c=new Set(a);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(a))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const a of e)a!==t&&await caches.delete(a);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const a=new URL(t.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&c.has(a.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const a=await fetch(t.request);return e.put(t.request,a.clone()),a}catch(a){const c=await e.match(t.request);if(c)return c;throw a}})))))}))}();
