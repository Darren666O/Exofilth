let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
conn.sendHydrated(m.chat, `${lenguajeGB['smsAvisoEG']()}ππΌ πΏπππππΏππΏπΌ πΏππ πππππ ππΌ πππΏπ πΎππππππππΌπΏπΌ`, wm, null, md, 'πππ©ππ½π€π©-ππΏ', null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)
} else throw `${lenguajeGB['smsAvisoIIG']()}πππ ππ πππ ππππΌ πΎππ *"@"* ππΌππΌ πΏπΌπ πππ πππππππππ ππππππππΎπΌπΏππ:\n*β‘ @user (MenciΓ³n al usuario(a))*\n*β‘ @subject (Nombre de grupo)*\n*β‘ @desc (Description de grupo)*\n\nπππΎππππΏπ πππ πππ *"@"* πππ ππππΏπ ππππππ πΏπ πππ πΎππππππππππ πΌπ πΎππππππππΌπ ππΌππΌπ½ππ-ππΏ`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.botAdmin = true
handler.admin = true
export default handler
