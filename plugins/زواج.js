const toM = (a) =>  @  + a.split( @ )[0];

function handler(m, { groupMetadata }) {
  const participants = groupMetadata.participants.map((v) => v.id);
  
  // التأكد من أن المستخدم في قائمة المشاركين
  const userId = m.sender;
  if (!participants.includes(userId)) {
    m.reply( ❌ عذرًا، لا يمكنك استخدام هذا الأمر إلا في مجموعة! );
    return;
  }

  // اختيار شريك عشوائي
  let partner;
  do {
    partner = participants.getRandom();
  } while (partner === userId); // التأكد من عدم اختيار المستخدم نفسه

  // إرسال الرسالة مع ذكر الأسماء
  m.reply(`${toM(userId)}, حان الوقت لتجد شريكك! 💖\n` +
           `📅 يجب أن تتزوج مع ${toM(partner)}! \n` +
           `✨ أنتما ثنائي رائع، نأمل أن تكونا سعيدين معًا! 💍`, null, {
    mentions: [userId, partner],
  });
}

handler.help = [ formarpareja ];
handler.tags = [ main ,  fun ];
handler.command = [ زواج ,  جواز ];
handler.group = true;

export default handler;
