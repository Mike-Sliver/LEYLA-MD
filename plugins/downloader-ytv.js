
import fg from 'api-dylux'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let limit = 350 
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `what is he looking for?\nExample :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
    if (!args[0].match(/youtu/gi)) throw `could not download the video try the new`
    await m.reply(`*⏳Wait a moment⏳*`)
	 let chat = global.db.data.chats[m.chat]
	 m.react(rwait) 
	try {
		let q = args[1] || '360p'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
		const dl_url = await yt.video[q].download()
		const title = await yt.title
		const size = await yt.video[q].fileSizeH 
		
       if (size.split('MB')[0] >= limit) return m.reply(`🎶 ᴅᴏᴡɴʟᴏᴀᴅ\n▢ *⚖️ᴡᴇɪɢʜᴛ* : ${size}\n▢ *🎞️ǫᴜᴀʟɪᴛʏ* : ${q}\n\n*_I CAN'T DOWNLOAD THE FILE EXCEEDS THE DOWNLOAD LIMIT_* *+${limit} MB*`)    
	  conn.sendFile(m.chat, dl_url, title + '.mp4', `  
 *📌ᴛɪᴛʟᴇ* : ${title}
 *⚖️ᴡᴇɪɢʜᴛ* : ${size} 
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done) 
		
	} catch {
		 
       m.reply(` Failed try again`) 
		/*const { title, result, quality, size, duration, thumb, channel } = await fg.ytv(args[0]) 
		if (size.split('MB')[0] >= limit) return m.reply(` ≡  *FG YTDL2*\n\n▢ *⚖️Peso* : ${size}\n▢ *🎞️Calidad* : ${quality}\n\n▢ _El archivo supera el límite de descarga_ *+${limit} MB*`)
	conn.sendFile(m.chat, result, title + '.mp4', `
 ≡  *FG YTDL2*
  
▢ *📌Título* : ${title}
▢ *📟 Ext* : mp4
▢ *⚖️Peso* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done)*/ 
	} 
		 
}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['downloader']
handler.command = ['ytmp4', 'fgmp4']
handler.diamond = true

export default handler
