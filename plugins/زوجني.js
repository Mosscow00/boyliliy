const triggerWord = ".زوجني";

function handleTrigger(message, sender, randomUser) {
    // إذا كان الرسالة تحتوي على كلمة التفعيل
    if (message === triggerWord) {
        // إرسال الرسائل التي تريدها
        sendMention(sender, randomUser);
    }
}

function sendMention(user1, user2) {
    const messages = [
        `مبروك يا عريس 🥳🤵🏻 ${user1}!`,
        `مبروك يا عروسه 🥳👰🏼 ${user2}!`,
        `نتمنى لكم حياة زوجية سعيدة ومليئة بالحب والفرح! 💍💐`
    ];

    // هنا بإمكانك تنفيذ المنطق الذي يرسل الرسائل، حسب المنصة التي تعمل عليها
    messages.forEach(message => {
        console.log(message); // استبدل console.log بالوظيفة التي ترسل الرسالة
    });
}

// مثال لتنفيذ الكود
const message = ".زوجني";
const sender = "أحمد"; // الشخص الذي أرسل الطلب
const randomUser = "فاطمة"; // عروس عشوائية

handleTrigger(message, زوجني, randomUser);
