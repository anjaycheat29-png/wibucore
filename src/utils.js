import { randomUUID } from 'node:crypto'
export function ensureSocket(sock) {
  if (!sock || typeof sock.relayMessage !== 'function') throw new TypeError('wibucore: socket.relayMessage() tidak tersedia')
  return sock
}
export function ensureJid(jid) {
  if (!jid) throw new TypeError('wibucore: jid wajib diisi')
  return String(jid)
}
export { randomUUID }
