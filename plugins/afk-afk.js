let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`${lenguajeGB['smsAvisoAG']()}ππ πππππππππ πΌ ${conn.getName(m.sender)} ππππΌππΌ πππΌπΎππππ *(πΌππ)*\n\nππππππ πΏπ ππΌ πππΌπΎπππππΏπΌπΏ *(πΌππ)*${text ? ': ' + text : ''}
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler
