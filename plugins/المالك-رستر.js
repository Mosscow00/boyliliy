

const handler = async (m, { conn, isROwner, text }) => {
 
  if (!process.send) throw `*زعلان منك ومش هرستر 🧞*`;
  // conn.readMessages([m.key])
  await m.reply(`*جاري اعادة التفعيل مرة اخرى*`);
  process.send('reset');
};
handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['restart', 'رستر'];
handler.rowner = true;
export default handler;
