//*رد بوت حرب اليكس

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
 '*اهلا بيك يعمري*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام ورحمة الله*',  
     ]; 
   }else if (/^بخير|بخير الحمد لله $/i.test(m.text)) { 
     responses = [ 
'*دايماً يارب*'
     ]; 
 }else if (/^كداب|شرير$/i.test(m.text)) { 
     responses = [ 
'*ولله م بكدب*'
     ]; 
   }else if (/^مرتبط$/i.test(m.text)) { 
     responses = [ 
'* انا لا بس مطوري بيفكر خدي بالك​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ *'
   ]; 
   }else if (/^بوت بتحبني؟|بوت بتحبنى$/i.test(m.text)) { 
     responses = [ 
'*بموت فيك*',
'*مشبحبك*',
'*يعني راضي عنك*',
]; 
   }else if (/^بوت بتكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*مش فدماغي اصلاً*',
'*أتعب نفسك شوية عشان احبك*',
'*حصل*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هاي يروحي*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر ❤*',  

     ]; 
   } else if (/^عرص|ي عرص|شرموط|ي شرموط|لبوه|ي لبوه$/i.test(m.text)) { 
     responses = [ 
'*صلي علي النبي ي حب م كده 👳🏻‍♂️*'
     ]; 
     }else if (/^🌚|😉|🥹$/i.test(m.text)) { 
     responses = [ 
       '😘',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',  

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'هاي',  

     ];
     }else if (/^بكرهك$/i.test(m.text)) { 
     responses = [ 
       '*طيب*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا*',  

     ]; 
     }else if (/^مساء|مسا$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الخير*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^.menu$/i.test(m.text)) { 
     responses = [ 
       '*غلط اكتب .اوامر*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا♥*',  
     ];
    }else if (/^بوسه|هات بوسه|.بوسه|kiss$/i.test(m.text)) { 
     responses = [ 
        '*محححححححح 💋🫦*' ,  
     ];
    }else if (/^اسكت$/i.test(m.text)) { 
     responses = [ 
        '*مش بمزاجك بلص اسكت انت*' ,  
     ];
    }else if (/^كسمك$/i.test(m.text)) { 
     responses = [ 
        '*كسمين امك عمتاً*' ,  
     ];
    }else if (/^مللللللل$/i.test(m.text)) { 
     responses = [ 
         '*قوم صلي يحب*'  ,  
     ];
    }else if (/^وحشتني|واحشتني$/i.test(m.text)) { 
     responses = [ 
         '*انت اكتر عمتا 🥹💘*'  ,  
     ];
    }else if (/^طارق$/i.test(m.text)) { 
     responses = [ 
         '*مياه عشان شرقت'  ,  
     ];
    }else if (/^حبوني$/i.test(m.text)) { 
     responses = [ 
         '*بحبك عمتا 🥹💗*'  ,  
     ];
     }else if (/^كلموني$/i.test(m.text)) { 
     responses = [ 
         '*تعي بف 🫦*'  ,  
     ];
    }else if (/^بوت احتاويني|بوت احتاويني|احتاويني|احتويني$/i.test(m.text)) { 
     responses = [ 
         '*تعي في حضني ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​🥹​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​❣️*'  ,  
     ];
    }else if (/^بموت فيك$/i.test(m.text)) { 
     responses = [ 
         '*بعشقك عمتاً*'  ,  
     ];
    }else if (/^بعشقك$/i.test(m.text)) { 
     responses = [ 
         '*قلبي اصلا ​​​​​​​​​​​​​​​​​​​​​​​​​​*'  ,  
     ];
    }else if (/^بدمنك$/i.test(m.text)) { 
     responses = [ 
         '*ي بختي اصلا*'  ,  
     ];
    }else if (/^يبوت$/i.test(m.text)) { 
     responses = [ 
         '*اي بوت دي يخويا هو نا بلعب معاك*'  ,  
     ];
    }else if (/^حبني$/i.test(m.text)) { 
     responses = [ 
         '* بحبك و بموت فيك ولله ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​🥹​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​❣️*'  ,  
     ];
    }else if (/^زوبري$/i.test(m.text)) { 
     responses = [ 
         '*دا هوا يصحبي*'  ,  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
