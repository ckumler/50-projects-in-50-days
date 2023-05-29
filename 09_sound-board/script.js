const sounds = [
    { label: "Closed HH", sound: "closed-hihat", position: 9, key: "9" },
    { label: "Open HH", sound: "open-hihat", position: 8, key: "8" },
    { label: "Clap", sound: "clap", position: 7, key: "7" },
    { label: "Ride", sound: "ride", position: 6, key: "6" },
    { label: "Snare 1", sound: "snare1", position: 5, key: "5" },
    { label: "Snare 2", sound: "snare2", position: 4, key: "4" },
    { label: "Crash", sound: "crash", position: 3, key: "3" },
    { label: "Kick 2", sound: "kick2", position: 2, key: "2" },
    { label: "Kick 1", sound: "kick1", position: 1, key: "1" },
];

const gridContainer = document.querySelector(".grid-container");

sounds.forEach(({ label, sound, position, key }) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    // create a span for the sound label and key
    const labelSpan = document.createElement("span");
    labelSpan.textContent = label;
    labelSpan.classList.add("sound-label");

    const keySpan = document.createElement("span");
    keySpan.textContent = key;
    keySpan.classList.add("key-indicator");

    // append the spans to the button
    btn.appendChild(labelSpan);
    btn.appendChild(keySpan);

    btn.style.gridColumn = ((position - 1) % 3) + 1;
    btn.style.gridRow = 3 - Math.floor((position - 1) / 3);
    gridContainer.appendChild(btn);

    btn.dataset.key = key;

    btn.addEventListener("click", () => {
        playSound(sound);
    });
});

function playSound(sound) {
    const audio = document.getElementById(sound);
    audio.currentTime = 0; // to reset the sound
    audio.play();
}

document.addEventListener("keydown", function (event) {
    const keyPressed = event.key;

    sounds.forEach(({ sound, key }) => {
        if (key === keyPressed) {
            playSound(sound);
            const btn = document.querySelector(`.btn[data-key="${key}"]`);
            btn.classList.add("key-active");
            setTimeout(() => {
                btn.classList.remove("key-active");
            }, 100);
        }
    });
});
