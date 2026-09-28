import { escapeHTML } from './html.js'
export function button(label,href='#',o={}) {
  const cls=o.primary?'wibu-btn wibu-btn-primary':'wibu-btn'
  const target=o.newTab===false?'':' target="_blank" rel="noopener noreferrer"'
  return `<a class="${cls}" href="${escapeHTML(href)}"${target}>〔── ${escapeHTML(label)} ──〕</a>`
}
export function buttons(items=[],o={}) {
  const body=items.map(x=>button(x.label,x.href||'#',{primary:x.primary,newTab:x.newTab})).join('')
  return o.grid===false?body:`<div class="wibu-grid">${body}</div>`
}
export const urlButton=button
export function closeButton(label='TUTUP'){return button(label,'#')}
