import { randomUUID } from 'node:crypto'
import { ensureSocket, ensureJid } from './utils.js'
export const HTML_PRIMITIVE='GenAIaeacdsnwHtmlPrimitive'

export function createAIRich(html,o={}) {
  if(typeof html!=='string'||!html.trim()) throw new TypeError('wibucore: HTML harus berupa string')
  const unified={__typename:'GenAIUnifiedResponse',response_id:o.responseId||randomUUID(),sections:[{__typename:'GenAIUnifiedResponseSection',view_model:{__typename:'GenAISingleLayoutViewModel',primitive:{__typename:HTML_PRIMITIVE,payload:html,trusted_sources:Array.isArray(o.trustedSources)?o.trustedSources:[]}}}]}
  const data=Buffer.from(JSON.stringify(unified),'utf8').toString('base64')
  return {botForwardedMessage:{message:{richResponseMessage:{messageType:1,submessages:[],unifiedResponse:{data},contextInfo:{forwardingScore:1,isForwarded:true,forwardedAiBotMessageInfo:{botJid:o.botJid||'867051314767696@bot'},forwardOrigin:o.forwardOrigin??4}}}}}
}
export async function sendAIRich(sock,jid,html,o={}) {
  ensureSocket(sock); ensureJid(jid)
  return sock.relayMessage(jid,createAIRich(html,o),{messageId:o.messageId||randomUUID()})
}
export const sendRichHTML=sendAIRich
export const createRichHTML=createAIRich
