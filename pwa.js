(function(){
  // 注册 Service Worker
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
      .then(reg=>console.log('✅ PWA Service Worker 已注册'))
      .catch(err=>console.error('❌ PWA 注册失败:',err));
  }

  // 壁纸管理
  window.applyWallpaper=function(id){
    localStorage.setItem('mn_bg',id);
    
    if(id==='random'){
      document.body.style.backgroundImage='url(https://www.dmoe.cc/random.php)';
      document.body.style.backgroundSize='cover';
      document.body.style.backgroundPosition='center';
      document.body.style.backgroundAttachment='fixed';
      document.body.style.backgroundColor='transparent';
      console.log('🖼️ 随机壁纸已加载');
    }else if(id==='fixed'){
      const fixedUrl=localStorage.getItem('mn_fixed_bg');
      if(fixedUrl){
        document.body.style.backgroundImage='url('+fixedUrl+')';
        document.body.style.backgroundSize='cover';
        document.body.style.backgroundPosition='center';
        document.body.style.backgroundAttachment='fixed';
        document.body.style.backgroundColor='transparent';
      }
    }else if(id==='none'){
      document.body.style.backgroundImage='none';
      document.body.style.backgroundColor='var(--bg)';
    }
  };

  window.setFixedWallpaper=function(url){
    localStorage.setItem('mn_fixed_bg',url);
    if(localStorage.getItem('mn_bg')==='fixed'){
      applyWallpaper('fixed');
    }
  };

  function initWallpaper(){
    const savedBg=localStorage.getItem('mn_bg')||'random';
    applyWallpaper(savedBg);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',initWallpaper);
  }else{
    initWallpaper();
  }

  let deferredPrompt;
  window.addEventListener('beforeinstallprompt',e=>{
    console.log('📲 PWA 可安装');
  });

  window.addEventListener('appinstalled',()=>{
    console.log('✅ PWA 已安装');
  });
})();