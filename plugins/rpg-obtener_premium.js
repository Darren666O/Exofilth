let handler = async (m, { conn, text, usedPrefix, command, args }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
	
let template = (args[0] || '').toLowerCase() 
if (/comprar|prem1/i.test(command)) {
var tiempoPremium = 5 * text //tiempo total 
var tiempoDecretado = 5 * 1 //tiempo decretado 
const gata = 15
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*πππππππ ππ ππππππ πΏπ ππππππ πππππππ*\nπππππ πππ πππππππ ππππ ππππ½ππ\n\n*β€ ποΈ 1 = ${tiempoDecretado} MIMUTOS*\n*β€ ${gata} ${rpgshop.emoticon('limit')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}ππππ ππ πΌπΎππππΌ πππππππ\nππππ ππππ½πππ πΌπΎπΎπππππΏ\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.limit < gata) return conn.reply(m.chat, `${ag}ππ πππππ πππππΎππππππ *${rpgshop.emoticon('limit')}* ππΌππΌ πΌπΏππππππ ποΈ πππππππ πΎπππππ ${rpgshopp.emoticon('limit')} ππ ππΌ πππππΏπΌ πππΌππΏπ ππ πΎπππΌππΏπ *${usedPrefix}buy* π ππππΏππ ππππΏππ ππΌππΌ ππ½πππππ ππΌππΌππΎππΌπ πΎππ ππ πΎπππΌππΏπ *${usedPrefix}sell*`, fkontak, m)
user.limit -= gata * text

var tiempo = 300000 * text //180000 3min | 300000 5 min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];
//let imgpre = 'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg' 

await conn.sendButton(m.chat,`${eg}*β­ββββββ π βββββββ?*
*βποΈ πππππΏ πΌππππΌ ππ πππππππ!!!*
*β*
*ββ¨ ππππ½ππ : ππππ*
*βΒ» ${user.name}*
*βπ° ππΌππ : ππΌπππππ Β»  -${gata * text} ${rpgshopp.emoticon('limit')}*
*βπ πππππΌ Β» ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*βπ ππ ππππΏπΌπ Β» ${user.limit} ${rpgshopp.emoticon('limit')}*
*βπ ππππππ : ππππ Β» ${tiempoPremium} min*
*βπ πππππ Β» ${user.premiumTime - now} seg*
*β°ββββββ π βββββββ―*`, `π» *Ahora tiene Premium por lo tanto no va tener lΓ­mites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`π π¨π¦π¨ππ₯ππ’π¦ π£π₯ππ ππ¨π  π`, `${usedPrefix}listprem`],
[`ποΈ ππΌπ ππππππ πππππππ ποΈ`, `${usedPrefix + command} 1`],
[`π½ πππ¦ππ₯π¨π§ππ₯ π£π₯ππ ππ¨π  π½`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//βββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ

if (/prem2/i.test(command)) {
var tiempoPremium = 15 * text //tiempo total 
var tiempoDecretado = 15 * 1 //tiempo decretado 
const gata = 35
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*πππππππ ππ ππππππ πΏπ ππππππ πππππππ*\nπππππ πππ πππππππ ππππ ππππ½ππ\n\n*β€ ποΈ 1 = ${tiempoDecretado} MIMUTOS*\n*β€ ${gata} ${rpgshop.emoticon('kyubi')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}ππππ ππ πΌπΎππππΌ πππππππ\nππππ ππππ½πππ πΌπΎπΎπππππΏ\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata) return conn.reply(m.chat, `${ag}ππ πππππ πππππΎππππππ *${rpgshop.emoticon('kyubi')}* ππΌππΌ πΌπΏππππππ ποΈ πππππππ πΎπππππ ${rpgshopp.emoticon('kyubi')} ππ ππΌ πππππΏπΌ πππΌππΏπ ππ πΎπππΌππΏπ *${usedPrefix}buy* π ππππΏππ ππππΏππ ππΌππΌ ππ½πππππ ππΌππΌππΎππΌπ πΎππ ππ πΎπππΌππΏπ *${usedPrefix}sell*`, fkontak, m)
user.kyubi -= gata * text
    
var tiempo = 900000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*β­ββββββ π βββββββ?*
*βποΈ πππππΏ πΌππππΌ ππ πππππππ!!!*
*β*
*ββ¨ ππππ½ππ : ππππ Β» ${user.name}*
*βπ° ππΌππ : ππΌπππππ Β»  -${gata * text} ${rpgshopp.emoticon('kyubi')}*
*βπ πππππΌ Β» ${user.limit + gata} ${rpgshopp.emoticon('kyubi')}*
*βπ ππ ππππΏπΌπ Β» ${user.limit} ${rpgshopp.emoticon('kyubi')}*
*βπ ππππππ : ππππ Β» ${tiempoPremium} min*
*βπ πππππ Β» ${user.premiumTime - now} seg*
*β°ββββββ π βββββββ―*`, `π» *Ahora tiene Premium por lo tanto no va tener lΓ­mites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`π π¨π¦π¨ππ₯ππ’π¦ π£π₯ππ ππ¨π  π`, `${usedPrefix}listprem`],
[`ποΈ ππΌπ ππππππ πππππππ ποΈ`, `${usedPrefix + command} 1`],
[`π½ πππ¦ππ₯π¨π§ππ₯ π£π₯ππ ππ¨π  π½`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//βββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ
	
if (/prem3/i.test(command)) {
var tiempoPremium = 30 * text //tiempo total 
var tiempoDecretado = 30 * 1 //tiempo decretado 
const gata = 25
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*πππππππ ππ ππππππ πΏπ ππππππ πππππππ*\nπππππ πππ πππππππ ππππ ππππ½ππ\n\n*β€ ποΈ 1 = ${tiempoDecretado} MIMUTOS*\n*β€ ${gata} ${rpgshop.emoticon('emerald')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}ππππ ππ πΌπΎππππΌ πππππππ\nππππ ππππ½πππ πΌπΎπΎπππππΏ\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.emerald < gata) return conn.reply(m.chat, `${ag}ππ πππππ πππππΎππππππ *${rpgshop.emoticon('emerald')}* ππΌππΌ πΌπΏππππππ ποΈ πππππππ πΎπππππ ${rpgshopp.emoticon('emerald')} ππ ππΌ πππππΏπΌ πππΌππΏπ ππ πΎπππΌππΏπ *${usedPrefix}buy* π ππππΏππ ππππΏππ ππΌππΌ ππ½πππππ ππΌππΌππΎππΌπ πΎππ ππ πΎπππΌππΏπ *${usedPrefix}sell*`, fkontak, m)
user.emerald -= gata * text
    
var tiempo = 1800000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*β­ββββββ π βββββββ?*
*βποΈ πππππΏ πΌππππΌ ππ πππππππ!!!*
*β*
*ββ¨ ππππ½ππ : ππππ Β» ${user.name}*
*βπ° ππΌππ : ππΌπππππ Β»  -${gata * text} ${rpgshopp.emoticon('emerald')}*
*βπ πππππΌ Β» ${user.limit + gata} ${rpgshopp.emoticon('emerald')}*
*βπ ππ ππππΏπΌπ Β» ${user.limit} ${rpgshopp.emoticon('emerald')}*
*βπ ππππππ : ππππ Β» ${tiempoPremium} min*
*βπ πππππ Β» ${user.premiumTime - now} seg*
*β°ββββββ π βββββββ―*`, `π» *Ahora tiene Premium por lo tanto no va tener lΓ­mites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`π π¨π¦π¨ππ₯ππ’π¦ π£π₯ππ ππ¨π  π`, `${usedPrefix}listprem`],
[`ποΈ ππΌπ ππππππ πππππππ ποΈ`, `${usedPrefix + command} 1`],
[`π½ πππ¦ππ₯π¨π§ππ₯ π£π₯ππ ππ¨π  π½`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//βββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ
	
if (/prem4/i.test(command)) {
var tiempoPremium = 1 * text //tiempo total 
var tiempoDecretado = 1 * 1 //tiempo decretado 
const gata = 50
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*πππππππ ππ ππππππ πΏπ ππππππ πππππππ*\nπππππ πππ πππππππ ππππ ππππ½ππ\n\n*β€ ποΈ 1 = ${tiempoDecretado} HORA(S)*\n*β€ ${gata} ${rpgshop.emoticon('trash')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}ππππ ππ πΌπΎππππΌ πππππππ\nππππ ππππ½πππ πΌπΎπΎπππππΏ\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.trash < gata) return conn.reply(m.chat, `${ag}ππ πππππ πππππΎππππππ *${rpgshop.emoticon('trash')}* ππΌππΌ πΌπΏππππππ ποΈ πππππππ πΎπππππ ${rpgshopp.emoticon('trash')} ππ ππΌ πππππΏπΌ πππΌππΏπ ππ πΎπππΌππΏπ *${usedPrefix}buy* π ππππΏππ ππππΏππ ππΌππΌ ππ½πππππ ππΌππΌππΎππΌπ πΎππ ππ πΎπππΌππΏπ *${usedPrefix}sell*`, fkontak, m)
user.trash -= gata * text
    
var tiempo = 3600000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*β­ββββββ π βββββββ?*
*βποΈ πππππΏ πΌππππΌ ππ πππππππ!!!*
*β*
*ββ¨ ππππ½ππ : ππππ Β» ${user.name}*
*βπ° ππΌππ : ππΌπππππ Β»  -${gata * text} ${rpgshopp.emoticon('trash')}*
*βπ πππππΌ Β» ${user.limit + gata} ${rpgshopp.emoticon('trash')}*
*βπ ππ ππππΏπΌπ Β» ${user.limit} ${rpgshopp.emoticon('trash')}*
*βπ ππππππ : ππππ Β» ${tiempoPremium} hora(s)*
*βπ πππππ Β» ${user.premiumTime - now} seg*
*β°ββββββ π βββββββ―*`, `π» *Ahora tiene Premium por lo tanto no va tener lΓ­mites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`π π¨π¦π¨ππ₯ππ’π¦ π£π₯ππ ππ¨π  π`, `${usedPrefix}listprem`],
[`ποΈ ππΌπ ππππππ πππππππ ποΈ`, `${usedPrefix + command} 1`],
[`π½ πππ¦ππ₯π¨π§ππ₯ π£π₯ππ ππ¨π  π½`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//βββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ
	
if (/prem5/i.test(command)) {
var tiempoPremium = 3 * text //tiempo total 
var tiempoDecretado = 3 * 1 //tiempo decretado 
const gata = 40
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*πππππππ ππ ππππππ πΏπ ππππππ πππππππ*\nπππππ πππ πππππππ ππππ ππππ½ππ\n\n*β€ ποΈ 1 = ${tiempoDecretado} HORA(S)*\n*β€ ${gata} ${rpgshop.emoticon('berlian')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}ππππ ππ πΌπΎππππΌ πππππππ\nππππ ππππ½πππ πΌπΎπΎπππππΏ\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.berlian < gata) return conn.reply(m.chat, `${ag}ππ πππππ πππππΎππππππ *${rpgshop.emoticon('berlian')}* ππΌππΌ πΌπΏππππππ ποΈ πππππππ πΎπππππ ${rpgshopp.emoticon('berlian')} ππ ππΌ πππππΏπΌ πππΌππΏπ ππ πΎπππΌππΏπ *${usedPrefix}buy* π ππππΏππ ππππΏππ ππΌππΌ ππ½πππππ ππΌππΌππΎππΌπ πΎππ ππ πΎπππΌππΏπ *${usedPrefix}sell*`, fkontak, m)
user.berlian -= gata * text
    
var tiempo = 10800000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*β­ββββββ π βββββββ?*
*βποΈ πππππΏ πΌππππΌ ππ πππππππ!!!*
*β*
*ββ¨ ππππ½ππ : ππππ Β» ${user.name}*
*βπ° ππΌππ : ππΌπππππ Β»  -${gata * text} ${rpgshopp.emoticon('berlian')}*
*βπ πππππΌ Β» ${user.limit + gata} ${rpgshopp.emoticon('berlian')}*
*βπ ππ ππππΏπΌπ Β» ${user.limit} ${rpgshopp.emoticon('berlian')}*
*βπ ππππππ : ππππ Β» ${tiempoPremium} hora(s)*
*βπ πππππ Β» ${user.premiumTime - now} seg*
*β°ββββββ π βββββββ―*`, `π» *Ahora tiene Premium por lo tanto no va tener lΓ­mites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`π π¨π¦π¨ππ₯ππ’π¦ π£π₯ππ ππ¨π  π`, `${usedPrefix}listprem`],
[`ποΈ ππΌπ ππππππ πππππππ ποΈ`, `${usedPrefix + command} 1`],
[`π½ πππ¦ππ₯π¨π§ππ₯ π£π₯ππ ππ¨π  π½`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//βββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ
	
if (/prem6/i.test(command)) {
var tiempoPremium = 7 * text //tiempo total 
var tiempoDecretado = 7 * 1 //tiempo decretado 
const gata = 70
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*πππππππ ππ ππππππ πΏπ ππππππ πππππππ*\nπππππ πππ πππππππ ππππ ππππ½ππ\n\n*β€ ποΈ 1 = ${tiempoDecretado} HORA(S)*\n*β€ ${gata} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}ππππ ππ πΌπΎππππΌ πππππππ\nππππ ππππ½πππ πΌπΎπΎπππππΏ\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < gata) return conn.reply(m.chat, `${ag}ππ πππππ πππππΎππππππ *${rpgshop.emoticon('joincount')}* ππΌππΌ πΌπΏππππππ ποΈ πππππππ πΎπππππ ${rpgshopp.emoticon('joincount')} ππ ππΌ πππππΏπΌ πππΌππΏπ ππ πΎπππΌππΏπ *${usedPrefix}buy* π ππππΏππ ππππΏππ ππΌππΌ ππ½πππππ ππΌππΌππΎππΌπ πΎππ ππ πΎπππΌππΏπ *${usedPrefix}sell*`, fkontak, m)
user.joincount -= gata * text
    
var tiempo = 25200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*β­ββββββ π βββββββ?*
*βποΈ πππππΏ πΌππππΌ ππ πππππππ!!!*
*β*
*ββ¨ ππππ½ππ : ππππ Β» ${user.name}*
*βπ° ππΌππ : ππΌπππππ Β»  -${gata * text} ${rpgshopp.emoticon('joincount')}*
*βπ πππππΌ Β» ${user.limit + gata} ${rpgshopp.emoticon('joincount')}*
*βπ ππ ππππΏπΌπ Β» ${user.limit} ${rpgshopp.emoticon('joincount')}*
*βπ ππππππ : ππππ Β» ${tiempoPremium} hora(s)*
*βπ πππππ Β» ${user.premiumTime - now} seg*
*β°ββββββ π βββββββ―*`, `π» *Ahora tiene Premium por lo tanto no va tener lΓ­mites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`π π¨π¦π¨ππ₯ππ’π¦ π£π₯ππ ππ¨π  π`, `${usedPrefix}listprem`],
[`ποΈ ππΌπ ππππππ πππππππ ποΈ`, `${usedPrefix + command} 1`],
[`π½ πππ¦ππ₯π¨π§ππ₯ π£π₯ππ ππ¨π  π½`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//βββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ
	
if (/prem7/i.test(command)) {
var tiempoPremium = 24 * text //tiempo total 
var tiempoDecretado = 24 * 1 //tiempo decretado 
const gata = 65
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*πππππππ ππ ππππππ πΏπ ππππππ πππππππ*\nπππππ πππ πππππππ ππππ ππππ½ππ\n\n*β€ ποΈ 1 = ${tiempoDecretado} HORA(S)*\n*β€ ${gata} ${rpgshop.emoticon('diamond')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}ππππ ππ πΌπΎππππΌ πππππππ\nππππ ππππ½πππ πΌπΎπΎπππππΏ\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.diamond < gata) return conn.reply(m.chat, `${ag}ππ πππππ πππππΎππππππ *${rpgshop.emoticon('diamond')}* ππΌππΌ πΌπΏππππππ ποΈ πππππππ πΎπππππ *${rpgshopp.emoticon('diamond')}* ππ ππΌ πππππΏπΌ πππΌππΏπ ππ πΎπππΌππΏπ *${usedPrefix}buy* π ππππΏππ ππππΏππ ππΌππΌ ππ½πππππ ππΌππΌππΎππΌπ πΎππ ππ πΎπππΌππΏπ *${usedPrefix}sell*`, fkontak, m)
user.diamond -= gata * text
    
var tiempo = 86400000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*β­ββββββ π βββββββ?*
*βποΈ πππππΏ πΌππππΌ ππ πππππππ!!!*
*β*
*ββ¨ ππππ½ππ : ππππ Β» ${user.name}*
*βπ° ππΌππ : ππΌπππππ Β»  -${gata * text} ${rpgshopp.emoticon('diamond')}*
*βπ πππππΌ Β» ${user.limit + gata} ${rpgshopp.emoticon('diamond')}*
*βπ ππ ππππΏπΌπ Β» ${user.limit} ${rpgshopp.emoticon('diamond')}*
*βπ ππππππ : ππππ Β» ${tiempoPremium} hora(s)*
*βπ πππππ Β» ${user.premiumTime - now} seg*
*β°ββββββ π βββββββ―*`, `π» *Ahora tiene Premium por lo tanto no va tener lΓ­mites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`π π¨π¦π¨ππ₯ππ’π¦ π£π₯ππ ππ¨π  π`, `${usedPrefix}listprem`],
[`ποΈ ππΌπ ππππππ πππππππ ποΈ`, `${usedPrefix + command} 1`],
[`π½ πππ¦ππ₯π¨π§ππ₯ π£π₯ππ ππ¨π  π½`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//βββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ
	
if (/prem8/i.test(command)) {
var tiempoPremium = 3 * text //tiempo total 
var tiempoDecretado = 3 * 1 //tiempo decretado 
const gata = 80
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*πππππππ ππ ππππππ πΏπ ππππππ πππππππ*\nπππππ πππ πππππππ ππππ ππππ½ππ\n\n*β€ ποΈ 1 = ${tiempoDecretado} DΓA(S)*\n*β€ ${gata} ${rpgshop.emoticon('gold')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}ππππ ππ πΌπΎππππΌ πππππππ\nππππ ππππ½πππ πΌπΎπΎπππππΏ\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.gold < gata) return conn.reply(m.chat, `${ag}ππ πππππ πππππΎππππππ *${rpgshop.emoticon('gold')}* ππΌππΌ πΌπΏππππππ ποΈ πππππππ πΎπππππ ${rpgshopp.emoticon('gold')} ππ ππΌ πππππΏπΌ πππΌππΏπ ππ πΎπππΌππΏπ *${usedPrefix}buy* π ππππΏππ ππππΏππ ππΌππΌ ππ½πππππ ππΌππΌππΎππΌπ πΎππ ππ πΎπππΌππΏπ *${usedPrefix}sell*`, fkontak, m)
user.gold -= gata * text
    
var tiempo = 259200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*β­ββββββ π βββββββ?*
*βποΈ πππππΏ πΌππππΌ ππ πππππππ!!!*
*β*
*ββ¨ ππππ½ππ : ππππ Β» ${user.name}*
*βπ° ππΌππ : ππΌπππππ Β»  -${gata * text} ${rpgshopp.emoticon('gold')}*
*βπ πππππΌ Β» ${user.limit + gata} ${rpgshopp.emoticon('gold')}*
*βπ ππ ππππΏπΌπ Β» ${user.limit} ${rpgshopp.emoticon('gold')}*
*βπ ππππππ : ππππ Β» ${tiempoPremium} dΓ­a(s)*
*βπ πππππ Β» ${user.premiumTime - now} seg*
*β°ββββββ π βββββββ―*`, `π» *Ahora tiene Premium por lo tanto no va tener lΓ­mites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`π π¨π¦π¨ππ₯ππ’π¦ π£π₯ππ ππ¨π  π`, `${usedPrefix}listprem`],
[`ποΈ ππΌπ ππππππ πππππππ ποΈ`, `${usedPrefix + command} 1`],
[`π½ πππ¦ππ₯π¨π§ππ₯ π£π₯ππ ππ¨π  π½`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//βββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ
	
if (command) {
switch (template) {		
case 'premium':
case 'vip':
case 'prem':
case 'pass':
case 'pase':
const sections = [{
title: comienzo + ' ποΈ π£ π₯ π π  π π¨ π  ποΈ ' + fin,
rows: [
{title: "π π£π₯ππ ππ¨π  - ππππ¦π β΅ : π£ππ¦π¦ β΅", rowId: `${usedPrefix}prem1 1`, description: `βͺ π£π?ππ² ππ?ππΆπ°πΌ : ππ?ππΆπ° π£π?ππ\nβͺ 15 ${rpgshop.emoticon('limit')} β 5 min π£πΏπ²πΊπΆππΊ\n`},
{title: "π π£π₯ππ ππ¨π  - ππππ¦π βΆ : π£ππ¦π¦ βΆ", rowId: `${usedPrefix}prem2 1`, description: `βͺ π£π?ππ² π§πΌπΏπΏπ² π±π² ππ»π°π?π»ππΌ : ππ΅π?πΏπΊ π£π?ππ\nβͺ 35 ${rpgshop.emoticon('kyubi')} β 15 min π£πΏπ²πΊπΆππΊ\n`},
{title: "π π£π₯ππ ππ¨π  - ππππ¦π β· : π£ππ¦π¦ β·", rowId: `${usedPrefix}prem3 1`, description: `βͺ π£π?ππ² π©π²πΏπ±πππ°πΌ : ππΏπ²π²π»πΆππ΅ π£π?ππ\nβͺ 25 ${rpgshop.emoticon('emerald')} β 30 min π£πΏπ²πΊπΆππΊ\n`},
{title: "π π£π₯ππ ππ¨π  - ππππ¦π βΈ : π£ππ¦π¦ βΈ", rowId: `${usedPrefix}prem4 1`, description: `βͺ π£π?ππ² π₯π²ππΆπ±ππΌπ πππ’ : πππ’ πͺπ?πππ² π£π?ππ\nβͺ 50 ${rpgshop.emoticon('trash')} β 1 h π£πΏπ²πΊπΆππΊ\n`},
{title: "β¦οΈ π£π₯ππ ππ¨π  - ππππ¦π βΉ : π£ππ¦π¦ βΉ", rowId: `${usedPrefix}prem5 1`, description: `βͺ π£π?ππ² ππ?ππ? ππΏπΆπΉπΉπ?π»ππ² : ππΏπΆπΉπΉπΆπ?π»π πππ»π π£π?ππ\nβͺ 40 ${rpgshop.emoticon('berlian')} β 3 h π£πΏπ²πΊπΆππΊ\n`},
{title: "πͺ π£π₯ππ ππ¨π  - ππππ¦π βΊ : π£ππ¦π¦ βΊ", rowId: `${usedPrefix}prem6 1`, description: `βͺ π£π?ππ² ππΊπΌ π±π²πΉ ππΏπΆπ½ππΌ : ππΏππ½ππΌ π π?πππ²πΏ π£π?ππ\nβͺ 70 ${rpgshop.emoticon('joincount')} β 7 h π£πΏπ²πΊπΆππΊ\n`},
{title: "π+ π£π₯ππ ππ¨π  - ππππ¦π β» : π£ππ¦π¦ β»", rowId: `${usedPrefix}prem7 1`, description: `βͺ π£π?ππ² ππ²πΊπ? π£πΉππ : ππ²πΊ π£πΉππ π£π?ππ\nβͺ 65 ${rpgshop.emoticon('diamond')} β 24 h π£πΏπ²πΊπΆππΊ\n`},
{title: "π π£π₯ππ ππ¨π  - ππππ¦π βΌ : π£ππ¦π¦ βΌ", rowId: `${usedPrefix}prem8 1`, description: `βͺ π£π?ππ² π§πΆπ²πΊπ½πΌ π±π² π’πΏπΌ : ππΌπΉπ±π²π» π§πΆπΊπ² π£π?ππ\nβͺ 80 ${rpgshop.emoticon('gold')} β 3 d π£πΏπ²πΊπΆππΊ\n`}
]},{
title: comienzo + ' π ππππ πππππππ π ' + fin,
rows: [
{title: "ποΈ π¨ π¦ π¨ π π₯ π π’ π¦   π£ π₯ π π  π π¨ π ", rowId: usedPrefix + 'listprem'},
{title: "π π§ π’ π£   π  π¨ π‘ π π π π", rowId: usedPrefix + 'top'},
{title: "π π π π¦ π π₯ π¨ π§ π π₯   π£ π₯π π  π π¨ π ", rowId: usedPrefix + 'allmenu'}
	
]}]

const listMessage = {
  text: `π ππ’π π£π₯π π¨π‘ π§ππ£π’ ππ π£ππ¦π π£ππ₯π π¦ππ₯ π¨π‘ π¨π¦π¨ππ₯ππ’(π) π£π₯ππ ππ¨π !!!\n\nππ¨π¬ π π§π¬π£π π’π π£ππ¦π¦ π§π’ ππππ’π π π π£π₯ππ ππ¨π  π¨π¦ππ₯!!!`,
  footer: global.wm,
  title: `${htki} *ποΈ π£π₯ππ ππ¨π  ποΈ* ${htka}`,
  buttonText: `ποΈ π¦ππ₯ π£π₯ππ ππ¨π  π`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
break	
		
}}}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(comprar|prem1|prem2|prem3|prem4|prem5|prem6|prem7|prem8|premium|vip|prem|pass|pase)$/i

export default handler
