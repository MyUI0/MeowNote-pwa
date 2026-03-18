const CACHE_NAME='meownote-v1';
const ASSETS=['/','/manifest.json'];

self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)).catch(err=>{
      console.warn('缓存初始化失败:',err);
    })
  );
});

self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  
  // Skip non-http(s) requests (like chrome-extension://, moz-extension://, etc.)
  if(!e.request.url.startsWith('http://')&&!e.request.url.startsWith('https://'))return;
  
  // Skip Cloudflare Insights and other analytics
  if(e.request.url.includes('cloudflareinsights')||e.request.url.includes('beacon.min.js'))return;
  
  // Skip Google Fonts to avoid CORS issues
  if(e.request.url.includes('fonts.googleapis.com')||e.request.url.includes('fonts.gstatic.com'))return;
  
  e.respondWith(
    caches.match(e.request).then(res=>{
      const fetchPromise=fetch(e.request).then(resp=>{
        // Only cache successful responses
        if(!resp||resp.status!==200)return resp;
        if(resp.type!=='basic'&&resp.type!=='cors'&&resp.type!=='no-cors')return resp;
        const clone=resp.clone();
        caches.open(CACHE_NAME).then(cache=>cache.put(e.request,clone)).catch(err=>{
          console.warn('缓存失败:',err);
        });
        return resp;
      }).catch(()=>null);
      return res||fetchPromise;
    }).catch(err=>{
      console.warn('Fetch 错误:',err);
      return null;
    })
  );
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))
  );
});