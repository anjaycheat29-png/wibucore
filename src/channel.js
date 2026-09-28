function norm(x){if(!x)throw new TypeError('wibucore: channel wajib diisi');return String(x).trim()}
async function fetchNews(sock,jid,count){
  if(typeof sock.newsletterFetchMessages!=='function')throw new Error('Baileys tidak menyediakan newsletterFetchMessages()')
  const fn=sock.newsletterFetchMessages.bind(sock)
  const attempts=[()=>fn('active',jid,count),()=>fn(jid,count),()=>fn(jid,count,0,undefined)]
  let last
  for(const run of attempts){try{const r=await run();if(r!=null)return r}catch(e){last=e}}
  throw last||new Error('Gagal mengambil pesan Channel')
}
export async function channelMetadata(sock,channel){
  if(typeof sock?.newsletterMetadata!=='function')throw new Error('Baileys tidak menyediakan newsletterMetadata()')
  return sock.newsletterMetadata(norm(channel))
}
export const getChannelMetadata=channelMetadata
export async function channelMessages(sock,channel,o={}){
  const jid=norm(channel),count=Math.max(1,Math.min(Number(o.count)||100,1000))
  const raw=await fetchNews(sock,jid,count)
  const messages=Array.isArray(raw)?raw:(raw?.messages||raw?.data||raw?.items||[])
  return {jid,total:messages.length,messages,raw}
}
export const getChannelMessages=channelMessages
export function messageText(node){
  if(!node)return''
  const m=node.message||node.msg||node
  const v=[m?.conversation,m?.extendedTextMessage?.text,m?.imageMessage?.caption,m?.videoMessage?.caption,m?.documentMessage?.caption,m?.buttonsResponseMessage?.selectedDisplayText,m?.listResponseMessage?.title,m?.listResponseMessage?.description]
  return v.find(x=>typeof x==='string'&&x.trim())||''
}
export async function channelSearch(sock,o={}){
  const query=String(o.query||'').trim()
  if(!query)throw new TypeError('wibucore: query wajib diisi')
  const source=o.messages?{jid:norm(o.channel||o.jid),messages:o.messages}:await channelMessages(sock,o.channel||o.jid,{count:o.count||200})
  const exact=o.exact!==false
  const messages=source.messages.filter(x=>{const t=messageText(x);return exact?t.includes(query):t.toLowerCase().includes(query.toLowerCase())})
  return {success:true,channel:{jid:source.jid},query,exact,total:messages.length,messages}
}
export const searchChannel=channelSearch
