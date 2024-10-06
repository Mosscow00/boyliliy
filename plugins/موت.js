let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Menu.png')
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/wasted', {
    avatar: pp, 
  }), 'waste.png', `*7A*  
╭━━━[ *⚰️* ]━━━━⬣
┃ *لقد مات*
╯──────────────────╰
┃*المرحوم*  *⌝ ${name}⌞*
 ${KMA} `, m)
}
handler.limit = 4;
handler.help = ['waste @user']
handler.tags = ['fun']
handler.command = ['موت'] 
export default handler
