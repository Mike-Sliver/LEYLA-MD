import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*where is link?*'
await m.reply(`*_⏳Wait a moment⏳_*`)
m.react(rwait) 
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
let cap = `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ *𝚃𝙸𝚃𝙻𝙴:* ${ttl}\n┆🔸️ *𝚆𝙴𝙸𝙶𝙷𝚃:* ${size}\n╰─────────────────`.trim()
await await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m})
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let cap2 = `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ *𝚃𝙸𝚃𝙻𝙴:* ${n}\n┆🔸️ *𝚆𝙴𝙸𝙶𝙷𝚃:* ${n3}\n╰─────────────────`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m})
} catch {
await conn.reply(m.chat, '*[❗] ᴇʀʀᴏʀ*', m)}
}}
handler.tags = ['downloader']
handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i
export default handler
