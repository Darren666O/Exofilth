export async function all(m, conn) {
   
if (!m.isGroup)
return
let chats = global.db.data.chats[m.chat]
if (!chats.expired)
return !0
if (+new Date() > chats.expired) {
let caption = `*${this.user.name}* *SE VA DEL GRUPO!!!, SI QUIERE QUE VUELVA, USE EL COMANDO _#bottemporal_ PARA QUE VUELVA AL GRUPO!!*\n\nβ *ASISTENCIA PARA USUARIOS*\n*https://www.instagram.com/gata_dios*`
let pp = './media/menus/Menu2.jpg'
    
await this.sendButton(m.chat, caption, wm, pp, [['ππΌπππΌ ππππππ | π½ππ π', '.hastapronto']], null)
await this.groupLeave(m.chat)
chats.expired = null
}}

