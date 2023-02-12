
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `What is he looking for?  enter theme name\n\nExample *${usedPrefix + command}* enza remix`
	let vid = (await yts(text)).all[0]
	if (!vid) throw `not found / or the server is down try again`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧')
	let play = `╭───≪~*╌◌ᰱ•••⃙❨͟͞P̸͟͞L̸͟A̸͟͞Y̸͟͞❩⃘•••ᰱ◌╌*~*
│║📌 *Title* : ${title}
│║📆 *Published:* ${ago}
│║⌚ *Duration:* ${timestamp}
│║👀 *Views:* ${views}
│║
│║        *████████████┃%100*
╰─•┈┈┈•••✦👑✦•••┈┈┈•─╯⟤`
 await conn.sendButton(m.chat, play, lb, thumbnail, [
    ['AUDIO', `${usedPrefix}fgmp3 ${url}`],
    ['VIDEO', `${usedPrefix}fgmp4 ${url}`]
  ], m, rpl)
}
handler.help = ['play']
handler.tags = ['downloader']
handler.command = ['play', 'playvid']

handler.register = false
export default handler

