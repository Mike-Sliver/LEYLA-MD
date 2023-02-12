import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `What is he looking for?  enter song title\n\n*—◉ Example:*\n*${usedPrefix + command} bad bunny*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: '🎵 𝗔𝗨𝗗𝗜𝗢 𝗗𝗢𝗖🎵' }, type: 1 },
{ buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: '🎥 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗖 🎥' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '📋𝗥𝗘𝗦𝗨𝗟𝗧📋' }, type: 1 }, ] 
m.react('🎧')
let texto1 = `╭───≪~*╌◌ᰱ•••⃙⌈🔊 ᴘʟᴀʏ ᴅᴏᴄᴜᴍᴇɴᴛ 🔊⌋•••ᰱ◌╌*~*
│║ 🔸️📌 *ᴛɪᴛʟᴇ:* ${title}
│║ 🔸️📆 *ᴘᴜʙʟɪsʜᴇᴅ:* ${publishedTime}
│║ 🔸️⌚ *ᴅᴜʀᴀᴛɪᴏɴ:* ${durationH}
│║ 🔸️👀 *ᴠɪᴇᴡs:* ${viewH}
│║ 🔸️📇 *ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:* ${description}
│║ 🔸️🔗 *ʟɪɴᴋ:* ${urll}
│║
│║        *████████████┃%100*
╰─•┈┈┈•••✦👑✦•••┈┈┈•─╯⟤`.trim()
let buttonMessage = { "document": { url: "https://wa.me/923474187615" }, "fileName": '❏ 🌿 ʏᴏᴜᴛᴜʙᴇ', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://wa.me/+923474187615` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `╭───≪~*╌◌ᰱ•••⃙❨͟͞P̸͟͞L̸͟A̸͟͞Y̸͟͞❩⃘•••ᰱ◌╌*~*\n│║ 🔸️ 📌 *ᴛɪᴛʟᴇ:* ${title}\n│║ 🔸📆 *ᴘᴜʙʟɪsʜᴇᴅ:* ${published}\n│║ 🔸👀 *ᴠɪᴇᴡs:* ${views}\n│║ 🔸🔗 *ʟɪɴᴋ:* ${url}\n│║\n│║        *████████████┃%100*\n╰─•┈┈┈•••✦💜✦•••┈┈┈•─╯⟤`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '📋𝗥𝗘𝗦𝗨𝗟𝗧📋'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*Sᴇɴᴅɪɴɢ Aᴜᴅɪᴏ Pʟᴇᴀsᴇ Wᴀɪᴛ...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*Try Again🙂*'}}}
handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|playdoc?$/i
export default handler
