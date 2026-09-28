import { sendAIRich,createAIRich } from './airich.js'
import { page,card } from './html.js'
import { button } from './buttons.js'
export const createWebView=createAIRich
export const sendWebView=sendAIRich
export function webviewHTML(url,o={}) {
  if(!/^https?:\/\//i.test(String(url||''))) throw new TypeError('wibucore: URL harus http/https')
  const u=String(url).replaceAll('"','&quot;')
  return page(card(o.title||'WebView',`<div class="wibu-muted">Memuat aplikasi web...</div><iframe src="${u}" style="width:100%;height:${Number(o.height)||620}px;border:0;border-radius:16px;background:#fff" loading="lazy"></iframe>${button('BUKA DI BROWSER',url,{primary:true})}`),{title:o.title||'WebView',accent:o.accent})
}
export const urlWebView=webviewHTML
