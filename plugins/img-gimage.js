
import { promisify } from 'util'
import _gis from 'g-i-s'
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `✳️ enter name \n\n📌 Example : *${usedPrefix + command}* Billie Eilish`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '❎ error'
  conn.sendFile(m.chat, url, 'img.png', `
╭━─━─━─≪📸≫─━─━─━╮
┆✅ RESULTS OF : *${text}*
┆——————«•»——————
┆⏣ *WIDTH*: ${width}
┆⏣ *HEIGHT*: ${height}
╰━─━─━─≪📸≫─━─━─━╯`.trim(), m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|gimage|imagen)$/i
handler.diamond = true

export default handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

