export function escapeHTML(value = '') {
  return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#039;")
}
export function css(o={}) {
  const a=o.accent||'#ff8800'
  return `:root{--a:${a};--bg:#050505;--card:#101010;--line:#282828;--txt:#fff;--muted:#999}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}html,body{margin:0;padding:0;background:var(--bg);color:var(--txt);font-family:Arial,Helvetica,sans-serif}body{padding:16px}.wibu-wrap{max-width:620px;margin:auto}.wibu-card{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:18px;margin-bottom:12px}.wibu-title{font-size:20px;font-weight:800;margin-bottom:7px}.wibu-muted{color:var(--muted);font-size:13px;line-height:1.55}.wibu-accent{color:var(--a)}.wibu-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.wibu-btn{display:block;text-decoration:none;text-align:center;color:#fff;background:#181818;border:1px solid #363636;border-radius:14px;padding:12px 10px;margin-top:9px;font-size:13px;font-weight:800}.wibu-btn:active{transform:scale(.98);background:var(--a);color:#000}.wibu-btn-primary{background:var(--a);color:#000;border-color:var(--a)}.wibu-pre{white-space:pre-wrap;word-break:break-word;background:#090909;border:1px solid #252525;border-radius:14px;padding:12px;font:12px/1.5 monospace;color:#ddd}`
}
export function page(body,o={}) {
  const title=escapeHTML(o.title||'Wibucore')
  return `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"><title>${title}</title><style>${css(o)}${o.css||''}</style></head><body><div class="wibu-wrap">${body}</div>${o.script?`<script>${o.script}</script>`:''}</body></html>`
}
export function card(title,content=''){return `<section class="wibu-card"><div class="wibu-title">${escapeHTML(title)}</div>${content}</section>`}
export function text(value,cls='wibu-muted'){return `<div class="${escapeHTML(cls)}">${escapeHTML(value)}</div>`}
export function pre(value){return `<div class="wibu-pre">${escapeHTML(value)}</div>`}
