import { sendWebView,page,card,button } from 'wibucore'
export default {cmd:['aimus'],tag:'ai',desc:'AIMUS AI',async run(m){
  const sock=m.gara||m.conn||global.conn||global.sock
  const html=page(card('🤖 AIMUS AI','<div class="wibu-muted">AI Assistant buatan Mustofa.</div>'+button('BUKA AIMUS','https://aimus.biz.id',{primary:true})),{title:'AIMUS AI'})
  await sendWebView(sock,m.from,html)
}}
