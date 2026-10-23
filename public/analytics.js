(()=>{
 const id='G-HXM22WWPKP',key='elparian-cookie-preferences',veto='elparian-page-denial';
 let loaded=false,effective=false,pageDenied=false;
 window.dataLayer=window.dataLayer||[];
 const gtag=(...args)=>window.dataLayer.push(args);
 function apply(grant){effective=grant;window['ga-disable-'+id]=!grant;gtag('consent','update',{analytics_storage:grant?'granted':'denied',ad_storage:'denied'});if(grant&&!loaded){loaded=true;gtag('js',new Date());gtag('config',id,{anonymize_ip:true});const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+id;document.head.appendChild(script);}}
 apply(false);
 function read(){try{return JSON.parse(localStorage.getItem(key)||'{}');}catch{return null;}}
 function hasVeto(){try{return Boolean(sessionStorage.getItem(veto));}catch{return true;}}
 const initial=read();if(initial?.analytics===true&&!hasVeto())apply(true);
 function save(choice){
  // Deny this runtime before storage operations; a failed save must not revive an old grant.
  pageDenied=true;apply(false);try{sessionStorage.setItem(veto,'1');}catch{}
  const value=allow=>JSON.stringify({necessary:true,analytics:allow,preferences:false,marketing:false});
  let saved=false;
  try{
   // Clear and verify the session veto before publishing any shared permission.
   if(choice.analytics){sessionStorage.removeItem(veto);if(sessionStorage.getItem(veto)!==null)throw Error('veto not cleared');}
   const stored=value(choice.analytics);localStorage.setItem(key,stored);if(localStorage.getItem(key)!==stored)throw Error('write not retained');
   if(choice.analytics&&hasVeto())throw Error('veto restored');
   saved=true;
  }catch{
   try{sessionStorage.setItem(veto,'1');}catch{}
   // A late failure may have written a grant: try a verified refusal, then removal.
   try{const denied=value(false);localStorage.setItem(key,denied);if(localStorage.getItem(key)!==denied)throw Error('refusal not retained');}
   catch{try{localStorage.removeItem(key);if(localStorage.getItem(key)!==null)throw Error('removal not retained');}catch{}}
  }
  if(saved&&choice.analytics){pageDenied=false;apply(true);}
  return {saved,effective};
 }
 window.elparianAnalytics={save,get effective(){return effective;}};
 window.addEventListener('storage',event=>{if(event.key===key||event.key===null){const choice=read();apply(!pageDenied&&choice?.analytics===true&&!hasVeto());window.dispatchEvent(new Event('elparian-analytics-change'));}});
})();
