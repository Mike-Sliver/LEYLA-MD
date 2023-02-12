
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'VIDEO', description: 'support group', title: packname, body: '𝐃𝐀𝐑𝐊 𝐀𝐒𝐈𝐅🔥👑❤️', thumbnailUrl: pp, sourceUrl: dygp }}} 
   
	//reply 
    global.rpyp = { contextInfo: { externalAdReply: { mediaUrl: fgpyp, mediaType: 'VIDEO', description: 'Github', title: 'Github', body: 'If you like the bot support me with one 🌟', thumbnailUrl: pp, sourceUrl: fgpyp }}}
	
	//reply link yt
    global.yut = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: 'Suscribete : ' + yt, title: 'YouTube', body: '𝙻𝙴𝚈𝙻𝙰-𝙼𝙳', thumbnailUrl: pp, sourceUrl: yt }}}

} 
export default handler
