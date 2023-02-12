
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `What is he looking for?  enter theme name Enter\nExample*\n*${usedPrefix + command}* bad bunny `
    m.react('📀')
    let result = await yts(text)
    let ytres = result.all
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['• • •「 🅐🅤🅓🅘🅞 」• • •', `${usedPrefix}fgmp3 ${v.url}`, `🔸️📌 *Title* : ${v.title}\n🔸️⌚ *Duraction:* ${v.timestamp}\n🔸️👀 *Views:* ${v.views}\n🔸️📆 *Published:* ${v.ago}\n`],
          ['• • •「 🅥🅘🅓🅔🅞 」• • •', `${usedPrefix}fgmp4 ${v.url}`, `🔸️📌 *Title* : ${v.title}\n🔸️⌚ *Duraction:* ${v.timestamp}\n🔸️👀 *Views:* ${v.views}\n🔸️📆 *Published:* ${v.ago}\n`],
          ['• • •「 🅓🅞🅒🅤🅜🅔🅝🅣🅢 🅜🅟❸ 」• • •', `${usedPrefix}ytadoc ${v.url}`, `🔸️📌 *Title* : ${v.title}\n🔸️⌚ *Duraction:* ${v.timestamp}\n🔸️👀 *Views:* ${v.views}\n🔸️📆 *Published:* ${v.ago}\n`],
        ['• • •「 🅓🅞🅒🅤🅜🅔🅝🅣🅢 🅜🅟❹ 」• • •', `${usedPrefix}ytvdoc ${v.url}`, `🔸️📌 *Title* : ${v.title}\n🔸️⌚ *Duraction:* ${v.timestamp}\n🔸️👀 *Views:* ${v.views}\n🔸️📆 *Published:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, '╭┄〔 *Sᴇᴀʀᴄʜ 🔎* 〕┄⊱-\n┆~~••~~••~~••~~••~~~~', `┆ 📀 ʜᴇʀᴇ ɪs ʟɪsᴛ ᴏғ ʀᴇsᴜʟᴛ: *${text}*\n╰────────────────\n💬💬🍑`, lb, `♦ 𝙍𝙀𝙎𝙐𝙇𝙏 ♦`, listSections, m)
}
handler.help = ['play2']
handler.tags = ['downloader']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 

export default handler