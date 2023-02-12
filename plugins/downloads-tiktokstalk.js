
import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {
	
  if (!text) throw `✳️ Enter the Username of a TikTok` user
try {
  let res = await fg.ttStalk(args[0])
  let txt = `
╭━─━─━─≪≫─━─━─━╮
│   *TIKTOK STALK* 
│——————«•»——————
│🔸*🔖Name:* ${res.name}
│🔸*🔖Username:* ${res.username}
│🔸*👥Followers:* ${res.followers}
│🔸*🫂Following:* ${res.following}
│🔸*📌Desc:* ${res.desc}
│——————«•»——————
│🔸 *🔗 Link* : https://tiktok.com/${res.username}
╰━─━─━─≪≫─━─━─━╯`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
} catch {
    m.reply(`✳️ Check that the username is from TikTok`)
}
}
handler.help = ['tiktokstalk']
handler.tags = ['downloader']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler
