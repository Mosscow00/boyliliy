import fetch from 'node-fetch';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) throw 'ايوة.. ممكن توضح اكتر ؟?';
    await m.react('🤖');

    const prompt = encodeURIComponent(text);
    let userid = conn.getName(m.sender) || "default"
    let apiurl = `https://api.guruapi.tech/ai/gpt4?username=${userid}&query=hii${prompt}`;

    const result = await fetch(apiurl);
    const response = await result.json();
    
    if (!response.msg) throw 'No result found';

    const replyText = response.msg;
    await conn.sendButton(
      m.chat, 
      replyText, 
      author, 
      'https://envs.sh/Bre.jpg', 
      [['.المطور']], 
      null, 
      [['قــنـاة الــبــوت', `https://whatsapp.com/channel/0029VaoOUTCA89MgywLh6s19`]], 
      m
    );
  } catch (error) {
    console.error(error);
    m.reply('*تقدر تسألني سؤال وارد عليك*');
  }
};

handler.help = ['gpt4 <text>'];
handler.tags = ['tools'];
handler.command = /^(بوت)$/i;

export default handler;
