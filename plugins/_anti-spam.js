export async function all(m) {
if (!m.message)
return
this.spam = this.spam ? this.spam : {}
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
if (chat) {
//if (global.owner.includes(m.sender)) throw 'Sin limites !'
if (m.sender in this.spam) {
this.spam[m.sender].count++
if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
if (this.spam[m.sender].count > 5) {
user.banned = true
let caption = `👋 Prohibido *@${m.sender.split("@")[0]}* no spam!`
this.sendButton(m.chat, caption, wm, null, [['Disable Anti Spam', '/disable antispam']], m, { mentions: this.parseMention(caption) })
}
this.spam[m.sender].count = 0
this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
}}
else
this.spam[m.sender] = {
jid: m.sender,
count: 0,
lastspam: 0
}}}
