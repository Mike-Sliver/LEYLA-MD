
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `What is he looking for?  enter theme name Enter\nExample*\n*${usedPrefix + command}* bad bunny `
    m.react('ð')
    let result = await yts(text)
    let ytres = result.all
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}â ${v.title}`, [
          ['â¢ â¢ â¢ã ðð¤ððð ãâ¢ â¢ â¢', `${usedPrefix}fgmp3 ${v.url}`, `ð¸ï¸ð *Title* : ${v.title}\nð¸ï¸â *Duraction:* ${v.timestamp}\nð¸ï¸ð *Views:* ${v.views}\nð¸ï¸ð *Published:* ${v.ago}\n`],
          ['â¢ â¢ â¢ã ð¥ðððð ãâ¢ â¢ â¢', `${usedPrefix}fgmp4 ${v.url}`, `ð¸ï¸ð *Title* : ${v.title}\nð¸ï¸â *Duraction:* ${v.timestamp}\nð¸ï¸ð *Views:* ${v.views}\nð¸ï¸ð *Published:* ${v.ago}\n`],
          ['â¢ â¢ â¢ã ðððð¤ðððð£ð¢ ððâ¸ ãâ¢ â¢ â¢', `${usedPrefix}ytadoc ${v.url}`, `ð¸ï¸ð *Title* : ${v.title}\nð¸ï¸â *Duraction:* ${v.timestamp}\nð¸ï¸ð *Views:* ${v.views}\nð¸ï¸ð *Published:* ${v.ago}\n`],
        ['â¢ â¢ â¢ã ðððð¤ðððð£ð¢ ððâ¹ ãâ¢ â¢ â¢', `${usedPrefix}ytvdoc ${v.url}`, `ð¸ï¸ð *Title* : ${v.title}\nð¸ï¸â *Duraction:* ${v.timestamp}\nð¸ï¸ð *Views:* ${v.views}\nð¸ï¸ð *Published:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, 'â­âã *Sá´á´Êá´Ê ð* ãââ±-\nâ~~â¢â¢~~â¢â¢~~â¢â¢~~â¢â¢~~~~', `â ð Êá´Êá´ Éªs ÊÉªsá´ á´Ò Êá´sá´Êá´: *${text}*\nâ°ââââââââââââââââ\nð¬ð¬ð`, lb, `â¦ ðððððð â¦`, listSections, m)
}
handler.help = ['play2']
handler.tags = ['downloader']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 

export default handler