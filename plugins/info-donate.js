
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇💖 𝙃𝙚𝙡𝙡𝙤!!*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`
let img = 'https://ibb.co/tbD3fv7'
conn.sendButton(m.chat, don, 'Click on the button if you want to buy or rent from the bot', img, [['Buy Premium', `${usedPrefix}buyprem`]],m, rpyp)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
