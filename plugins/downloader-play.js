
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `What is he looking for?  enter theme name\n\nExample *${usedPrefix + command}* enza remix`
	let vid = (await yts(text)).all[0]
	if (!vid) throw `not found / or the server is down try again`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('π§')
	let play = `β­ββββͺ~*ββα°±β’β’β’ββ¨ΝΝPΝΝΜΈLΝΜΈAΝΝΜΈYΝΝΜΈβ©ββ’β’β’α°±ββ*~*
ββπ *Title* : ${title}
ββπ *Published:* ${ago}
βββ *Duration:* ${timestamp}
ββπ *Views:* ${views}
ββ
ββΒ Β Β Β Β Β Β  *βββββββββββββ%100*
β°ββ’ββββ’β’β’β¦πβ¦β’β’β’ββββ’ββ―β€`
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

