# wibucore

Toolkit inti Wibubots / Baileys.

## Install

```bash
npm install wibucore
```

## Fitur

- AI Rich HTML (`sendAIRich`)
- Rich HTML aliases (`sendRichHTML`)
- WebView / URL WebView
- HTML/CSS/JS page builder
- Button `〔── BUTTON ──〕`
- Button grid
- Channel metadata
- Channel messages
- Exact / contains Channel Search
- ESM, Node 18+
- Tanpa runtime dependency

## AIMUS

```js
import {sendWebView,page,card,button} from 'wibucore'
const html=page(card('🤖 AIMUS AI',button('BUKA AIMUS','https://aimus.biz.id',{primary:true})),{title:'AIMUS AI'})
await sendWebView(sock,jid,html)
```

## AI Rich

```js
import {sendAIRich} from 'wibucore'
await sendAIRich(sock,jid,'<h2>WIBUCORE</h2><p>HTML Rich Response</p>')
```

## Channel Search

```js
import {searchChannel} from 'wibucore'
const result=await searchChannel(sock,{
  channel:'120363xxxxxxxx@newsletter',
  query:'mustofa',
  exact:true,
  count:200
})
```

## Catatan

Rendering primitive Rich HTML bergantung pada client WhatsApp penerima. WebView iframe dapat dibatasi oleh CSP/X-Frame-Options. Channel API bergantung pada dukungan newsletter dari Baileys fork.
