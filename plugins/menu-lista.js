import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 

let pp = '.media/menu2.jpg'
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, diamond, registered, self, level, role } = global.db.data.users[m.sender]
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
}) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 


const sections = [  
{
title: `LEYLA-MD🧚‍ Click Here`,
rows: [
       {title: "ɪɴғᴏ", description: "to get bot info", rowId: `${usedPrefix}grouplist`},
        {title: "ᴄʀᴇᴀᴛᴏʀ", description: "to get owner number", rowId: `${usedPrefix}owner`},
        {title: "ᴀʟʟ ᴍᴇɴᴜ", description: "to get all menu", rowId: `${usedPrefix}menucompleto`},
      {title: "ᴇsᴛᴀᴅᴏ", description: "to get status", rowId: `${usedPrefix}estado`},
      {title: "ɢʀᴏᴜᴘs", description: "to get bot groups", rowId: `${usedPrefix}grupos`},
      {title: "ᴘɪɴɢ", description: "to check ping", rowId: `${usedPrefix}ping`},
      {title: "ᴇɴᴀʙʟᴇ", description: "active or deactive ", rowId: `${usedPrefix}enable`},
      {title: "ʜɪᴅᴇᴛᴀɢ", description: "hide tag", rowId: `${usedPrefix}hidetag`},
      {title: "ᴛᴀɢᴀʟʟ", description: "tagall", rowId: `${usedPrefix}tagall`},
      {title: "ᴅᴇʟ", description: "to delete message", rowId: `${usedPrefix}del`},
              {title: "ᴡᴏʀᴋ", description: "working", rowId: `${usedPrefix}work`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `~ HELLO ${taguser}*`, footer: `
╭┄〔 ≪ •🌐• ≫ 〕┄⊱
┆📡 WELCOME 
┆◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┆🎁 ɪɴғᴏ 🎁
┆◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┆□ ⏱️ *ʜᴏᴜʀs:* ${time}    
┆□ ⏰ *ᴀᴄᴛɪᴠᴀᴛᴇ:* ${uptime}
┆□ 𓃠 *ᴠᴇʀsɪᴏɴ ᴏғ ʙᴏᴛ:* ${vs}
┆□ 👥 *ᴜsᴇʀ(s):* ${Object.keys(global.db.data.users).length} 
┆□ ♨️ *ᴍᴏᴅᴏ:* ${self ? '*𝚙𝚛𝚒𝚟𝚊ᴛᴇ*' : '*𝚙𝚞𝚋𝚕𝚒𝚌*'}
┆◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┆💞 ɪɴғᴏ ᴏғ ᴜsᴇʀ 💞
┆◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┆□ 👑 ᴘʀᴇᴍɪᴜᴍ: ${user.premiumTime > 0 ? '✅' : '❌'}
┆□ ❇️ ʀᴇɢɪsᴛʀᴇᴅ: ${registered ? '✅': '❎'}
└────ׂ─ׂ─ׂ─ׂ─────
*ʟᴇʏʟᴀ-ᴍᴅ ✨*`, pp,
title: null,
buttonText: "🅒🅛🅘🅒🅚", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.register = true
export default handler


function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Karachi').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶`
  if (time >= 4) {
    res = `𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶`
  }
  if (time >= 11) {
    res = `𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶`
  }
  if (time >= 15) {
    res = `𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶`
  }
  if (time >= 17) {
    res = `𝙶𝙾𝙾𝙳 𝙽𝙸𝙶𝚃𝙷`
  }
  return res
} 