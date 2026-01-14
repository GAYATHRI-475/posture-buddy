importScripts("message.js");

function createAlarm(interval) {
    chrome.alarms.clear("postureAlarm", () => {
        chrome.alarms.create("postureAlarm", { periodInMinutes : interval });
    });
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(["interval"], (data) => {
        const interval = data.interval || 30;
        createAlarm(interval);
    });
});

function speakMessage(text, language) {
    chrome.tts.stop();
    chrome.tts.speak(text, {
        rate: 0.9,
        pitch: 1.1,
        volume: 1.0,
        lang: language === "tamil" ? "ta-IN" : "en-IN"
    })
}

chrome.alarms.onAlarm.addListener((alarm) => {
    if(alarm.name === "postureAlarm") {
        chrome.storage.sync.get(["language"], (data) => {
            const language = data.language || "english";
            const message = getRandomMessage(language);
            speakMessage(message, language);
        });
    }
});

chrome.storage.onChanged.addListener((changes, area) => {
    if(area === "sync" && changes.interval) {
        createAlarm(changes.interval.newValue);
    }
});
