let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^ليلي$/i.test(m.text)) { 
 responses = [ 
 'نعم يعيون ليلي' 
 ]; 
 } else if (/^بوووت|بموووووووووت|بوت$/i.test(m.text)) { 
     responses = [ 
'بيقولو ليلي'
     ]; 
   } else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
 }else if (/^تيست$/i.test(m.text)) { 
     responses = [ 
       'شغال يروحي',  
     ];
  }else if (/^بحبك$/i.test(m.text)) { 
     responses = [ 
        'بحبك أكتر ❤,' ,  
      ];
  }else if (/^بموت فيك$/i.test(m.text)) { 
     responses = [ 
        'بعشقك 💟' ,  
     ];
  }else if (/^كسمك$/i.test(m.text)) { 
     responses = [ 
        'كسمينك' ,  
     ];
  }else if (/^يبنلعرص$/i.test(m.text)) { 
     responses = [ 
        'هو نا بعرص ع امك ؟' ,  
     ];
  }else if (/^بحبو$/i.test(m.text)) { 
     responses = [ 
        'والبوت بيحبك 💟' ,  
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
