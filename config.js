import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['923474187615', 'ππππ πππππ₯ππ', true],
  ['923474187615'], 
  ['923474187615'],
  ['923474187615'] 
] //Numeros de owner 

//ββββββββββββββββββββ ΰΈ^β’ο»β’^ΰΈ

global.mods = ['5511940046860'] 
global.prems = ['923474187615', '5511940046850']

//ββββββββββββββββββββ ΰΈ^β’ο»β’^ΰΈ

global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
// 'fiktod' 'BF39D349845E' '675e34de8a' '0b917b905e6f'
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { 
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm-nhie.onrender.com',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
}

global.imagen1 = ['./media/menu1.jpg']

//ββββββββββββββββββββ ΰΈ^β’ο»β’^ΰΈ

// Sticker WM
global.packname = 'π»π΄ππ»π°-πΌπ³π§β'
global.author = 'ππππ ππππππ₯π'

//ββββββββββββββββββββ ΰΈ^β’ο»β’^ΰΈ

global.fgig = 'https://github.com/DarkAsif'
 
global.yt = 'https://www.youtube.com/@TheLoliBot-MD'

global.fgpyp = 'tiktok.com/@thelolibot_md'

global.faceb = 'https://facebook.com/groups/872989990425789/'

global.vs = '1.5.0'

global.lb = 'Κα΄ΚΚα΄-α΄α΄'
global.lolibot = lb

global.dygp = 'https://wa.me/+923474187615' //grupo del bot

global.nna = 'https://chat.whatsapp.com/JESaesjOEcB6wnGX0QYT9o' //UPDATE

global.fglog = 'https://telegra.ph/file/1861aab98389b13db8588.png' 

global.multiplier = 69 
global.maxwarn = '4' // mΓ‘xima advertencias

//ββββββββββββββββββββ ΰΈ^β’ο»β’^ΰΈ

global.wm = 'Ι΄α΄α΄ α΄Κα΄α΄-α΄α΄'
global.wait = '*β _Loading..._*\n*β°β°β°β±β±β±β±β±*'
global.rwait = 'β'
global.dmoji = 'π€­'
global.done = 'β'
global.error = 'β' 
global.xmoji = 'π₯' 

//ββββββββββββββββββββ ΰΈ^β’ο»β’^ΰΈ

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

//ββββββββββββββββββββ ΰΈ^β’ο»β’^ΰΈ

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
