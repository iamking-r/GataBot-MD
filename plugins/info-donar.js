import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
let media = './media/menus/Menu4paypal.jpg'
let pp = './src/apoyo.jpg'
//await conn.sendButton(m.chat, wm, `https://paypal.me/OficialGD`, pp, m)
await conn.sendButton(m.chat, `${wm}`, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `/menu`]]
  
let donar = `
💖 𝙃𝙤𝙡𝙖!! 𝘼𝙜𝙧𝙖𝙙𝙚𝙯𝙘𝙤 𝙨𝙞 𝙢𝙚 𝘼𝙥𝙤𝙮𝙖𝙨 𝘿𝙤𝙣𝙖𝙣𝙙𝙤. 🎁 𝙈𝙚 𝙖𝙜𝙧𝙖𝙙𝙖 𝙚𝙡 𝙏𝙧𝙖𝙗𝙖𝙟𝙤 𝙦𝙪𝙚 𝙝𝙚 𝙇𝙤𝙜𝙧𝙖𝙙𝙤 𝙮 𝙡𝙤 𝘾𝙤𝙢𝙥𝙖𝙧𝙩𝙤 𝙘𝙤𝙣 𝙐𝙨𝙩𝙚𝙙𝙚𝙨. 𝙂𝙧𝙖𝙘𝙞𝙖𝙨!
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💖 𝙃𝙚𝙡𝙡𝙤!! 𝙄 𝙖𝙥𝙥𝙧𝙚𝙘𝙞𝙖𝙩𝙚 𝙞𝙛 𝙮𝙤𝙪 𝙨𝙪𝙥𝙥𝙤𝙧𝙩 𝙢𝙚 𝙗𝙮 𝙙𝙤𝙣𝙖𝙩𝙞𝙣𝙜. 🎁 𝙄 𝙡𝙞𝙠𝙚 𝙩𝙝𝙚 𝙬𝙤𝙧𝙠 𝙄 𝙝𝙖𝙫𝙚 𝙖𝙘𝙝𝙞𝙚𝙫𝙚𝙙 𝙖𝙣𝙙 𝙨𝙝𝙖𝙧𝙚 𝙬𝙞𝙩𝙝 𝙮𝙤𝙪. 𝙏𝙝𝙖𝙣𝙠 𝙮𝙤𝙪!`.trim()
  
await conn.sendHydrated(m.chat, donar, wm, media, 'https://paypal.me/OficialGD', '🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
function _0x29f5(){const _0x566d80=['chat','10zQulaE','1128940ganLMA','relayMessage','2992230eQzNdo','161nvJXUq','25962YOlrjt','179545SeklXD','34167910xOqfEH','10IIKotd','message','878088DXpOHr','9083456bTUBuy'];_0x29f5=function(){return _0x566d80;};return _0x29f5();}const _0x4683a7=_0x27ac;function _0x27ac(_0x4fd3ff,_0x2f7c1a){const _0x29f56b=_0x29f5();return _0x27ac=function(_0x27ac09,_0x443f1e){_0x27ac09=_0x27ac09-0xda;let _0x324a1d=_0x29f56b[_0x27ac09];return _0x324a1d;},_0x27ac(_0x4fd3ff,_0x2f7c1a);}(function(_0x3b8202,_0x534d5b){const _0x37ffd2=_0x27ac,_0x30c97b=_0x3b8202();while(!![]){try{const _0x12b804=parseInt(_0x37ffd2(0xe4))/0x1*(-parseInt(_0x37ffd2(0xde))/0x2)+-parseInt(_0x37ffd2(0xdb))/0x3+parseInt(_0x37ffd2(0xdf))/0x4*(-parseInt(_0x37ffd2(0xe6))/0x5)+-parseInt(_0x37ffd2(0xe3))/0x6*(parseInt(_0x37ffd2(0xe2))/0x7)+-parseInt(_0x37ffd2(0xdc))/0x8+parseInt(_0x37ffd2(0xe1))/0x9+parseInt(_0x37ffd2(0xe5))/0xa;if(_0x12b804===_0x534d5b)break;else _0x30c97b['push'](_0x30c97b['shift']());}catch(_0x9d0633){_0x30c97b['push'](_0x30c97b['shift']());}}}(_0x29f5,0xb9679));let res=generateWAMessageFromContent(m[_0x4683a7(0xdd)],{'liveLocationMessage':{'degreesLatitude':0x0,'degreesLongitude':0x0,'caption':donar,'sequenceNumber':'0','contextInfo':{'mentionedJid':conn['parseMention'](donar)}}},{'quoted':m});conn[_0x4683a7(0xe0)](m[_0x4683a7(0xdd)],res[_0x4683a7(0xda)],{});
}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
export default handler