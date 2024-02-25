const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    fetch("https://icanhazdadjoke.com", config)
        .then((response) => response.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke;
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
}
