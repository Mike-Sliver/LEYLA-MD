import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `What is he looking for?  enter song title\n\n*ββ Example:*\n*${usedPrefix + command} bad bunny*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: 'π΅ ππ¨πππ’ ππ’ππ΅' }, type: 1 },
{ buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: 'π₯ π©ππππ’ ππ’π π₯' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: 'ππ₯ππ¦π¨ππ§π' }, type: 1 }, ] 
m.react('π§')
let texto1 = `β­ββββͺ~*ββα°±β’β’β’ββπ α΄Κα΄Κ α΄α΄α΄α΄α΄α΄Ι΄α΄ πββ’β’β’α°±ββ*~*
ββ πΈοΈπ *α΄Ιͺα΄Κα΄:* ${title}
ββ πΈοΈπ *α΄α΄ΚΚΙͺsΚα΄α΄:* ${publishedTime}
ββ πΈοΈβ *α΄α΄Κα΄α΄Ιͺα΄Ι΄:* ${durationH}
ββ πΈοΈπ *α΄ Ιͺα΄α΄‘s:* ${viewH}
ββ πΈοΈπ *α΄α΄sα΄ΚΙͺα΄α΄Ιͺα΄Ι΄:* ${description}
ββ πΈοΈπ *ΚΙͺΙ΄α΄:* ${urll}
ββ
ββΒ Β Β Β Β Β Β  *βββββββββββββ%100*
β°ββ’ββββ’β’β’β¦πβ¦β’β’β’ββββ’ββ―β€`.trim()
let buttonMessage = { "document": { url: "https://wa.me/923474187615" }, "fileName": 'β πΏ Κα΄α΄α΄α΄Κα΄', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://wa.me/+923474187615` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `β­ββββͺ~*ββα°±β’β’β’ββ¨ΝΝPΝΝΜΈLΝΜΈAΝΝΜΈYΝΝΜΈβ©ββ’β’β’α°±ββ*~*\nββ πΈοΈ π *α΄Ιͺα΄Κα΄:* ${title}\nββ πΈπ *α΄α΄ΚΚΙͺsΚα΄α΄:* ${published}\nββ πΈπ *α΄ Ιͺα΄α΄‘s:* ${views}\nββ πΈπ *ΚΙͺΙ΄α΄:* ${url}\nββ\nββΒ Β Β Β Β Β Β  *βββββββββββββ%100*\nβ°ββ’ββββ’β’β’β¦πβ¦β’β’β’ββββ’ββ―β€`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: 'ππ₯ππ¦π¨ππ§π'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*Sα΄Ι΄α΄ΙͺΙ΄Ι’ Aα΄α΄Ιͺα΄ PΚα΄α΄sα΄ Wα΄Ιͺα΄...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*Try Againπ*'}}}
handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|playdoc?$/i
export default handler
