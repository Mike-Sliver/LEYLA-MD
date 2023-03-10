
import { promisify } from 'util'
import _gis from 'g-i-s'
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `โณ๏ธ enter name \n\n๐ Example : *${usedPrefix + command}* Billie Eilish`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw 'โ error'
  conn.sendFile(m.chat, url, 'img.png', `
โญโโโโโโโช๐ธโซโโโโโโโฎ
โโ RESULTS OF : *${text}*
โโโโโโโยซโขยปโโโโโโ
โโฃ *WIDTH*: ${width}
โโฃ *HEIGHT*: ${height}
โฐโโโโโโโช๐ธโซโโโโโโโฏ`.trim(), m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|gimage|imagen)$/i
handler.diamond = true

export default handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

