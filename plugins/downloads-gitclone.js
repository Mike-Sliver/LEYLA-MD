
import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `where is the github link?\n\nExample : ${usedPrefix + command} https://github.com`
    if (!regex.test(args[0])) throw '⚠️ bad link'
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  
    m.reply(`*WAIT A MOMENT, REPOSITORY SENT...*`)
    conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = ['gitclone'] 
handler.diamond = true

export default handler
