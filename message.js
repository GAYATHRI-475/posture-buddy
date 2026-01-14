const MESSAGES = {
    english: [
        "Hey! Sit straight! 😄",
        "Back straight = Happy back!",
        "Don't slouch, hero! 💪",
        "Stretch & reset your posture!",
        "Time to sit properly!"
    ],

    tamil: [
        "Deyyyy! Nalla ukkaaru da 😤",
        "Posture ah seri pannu! Back pain varum 😬",
        "Enna da idhu? Slouching again ah?",
        "Straight ah ukkaaru! Hero intro scene da 🎬",
        "Back care panna vendama? Ippo correct ah ukkaaru!"
    ]
};

function getRandomMessage(language) {
    const msgs = MESSAGES[language] || MESSAGES.english;
    return msgs[Math.floor(Math.random() * msgs.length)];
}