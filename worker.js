export default {async fetch(request,env){
 const url=new URL(request.url);
 if(url.protocol==='http:'&&url.hostname==='parianmarket.com'){url.protocol='https:';return new Response(null,{status:308,headers:{Location:url.href}});}
 const error=async()=>{const path=url.pathname.startsWith('/en/')?'/en/404/':'/404';const asset=await env.ASSETS.fetch(new Request(new URL(path,url),{method:'GET'}));const headers=new Headers(asset.headers);headers.delete('location');headers.set('x-robots-tag','noindex');headers.set('cache-control','no-store');return new Response(request.method==='HEAD'?null:await asset.arrayBuffer(),{status:404,headers});};
 if(/^\/(en\/)?404(?:\.html|\/)?$/.test(url.pathname))return error();
 const asset=await env.ASSETS.fetch(request);return asset.status===404?error():asset;
}};
