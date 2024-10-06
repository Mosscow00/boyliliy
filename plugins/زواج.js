const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(`*${toM(a)}, يجب أن تتزوج 💍 مع ${toM(b)}, أنتما زوجين جيدين 💓*`, null, {
    mentions: [a, b],
  });
}
handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['جوزني', 'زواج', 'زوجني'];
handler.group = true;
export default handler;
