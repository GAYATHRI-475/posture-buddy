const intervalInput = document.getElementById('interval');
const languageSelect = document.getElementById('language');
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
const saveButton = document.getElementById('save');

document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(["interval", "language", "theme"], (data) => {
        if(data.interval) intervalInput.value = data.interval;
        if(data.language) languageSelect.value = data.language;
        if(data.theme) {
            themeToggle.checked = data.theme === "dark"
            themeLabel.textContent = data.theme === "dark" ? "Dark" : "Light";
            document.body.style.background = data.theme === "dark" ? "#111" : "#fff";
            document.body.style.color = data.theme === "dark" ? "#fff" : "#111";
        }
    });
});

themeToggle.addEventListener('change', () => {
    if(themeToggle.checked) {
        document.body.style.background = "#111";
        document.body.style.color = "#fff";
        themeLabel.textContent = "Dark";
    }
    else{
        document.body.style.background = "#fff";
        document.body.style.color = "#111";
        themeLabel.textContent = "Light";
    }
});

saveButton.addEventListener("click", () => {
    const settings = {
        interval: Number(intervalInput.value),
        language: languageSelect.value,
        theme: themeToggle.checked ? "dark" : "light"
    };

    chrome.storage.sync.set(settings, () => {
        alert("Saved!");
    });
});