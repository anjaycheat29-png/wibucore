import {searchChannel,sendWebView,page,card,button,escapeHTML,messageText} from 'wibucore'
export default {cmd:['chsearch'],async run(m,{args}){
  const sock=m.gara||m.conn||global.conn||global.sock,channel=args[0],query=args.slice(1).join(' ')
  if(!channel||!query)return m.reply('Contoh: .chsearch https://whatsapp.com/channel/xxxxx kata')
  const result=await searchChannel(sock,{channel,query,exact:true,count:200})
  const rows=result.messages.map((msg,i)=>card(`HASIL #${i+1}`,`<div class="wibu-muted">${escapeHTML(messageText(msg))}</div>`)).join('')
  const html=page(card('🔎 CHANNEL SEARCH',`<div class="wibu-muted">Query: <span class="wibu-accent">${escapeHTML(query)}</span><br>Hasil: ${result.total}</div>`+button('KEMBALI','#'))+(rows||card('Tidak ditemukan','<div class="wibu-muted">Tidak ada pesan yang cocok.</div>')),{title:'Channel Search'})
  await sendWebView(sock,m.from,html)
}}
