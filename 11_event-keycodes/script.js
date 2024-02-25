const insert = document.getElementById("insert");

window.addEventListener("keydown", function (e) {
    //console.log(e.key, e.code, e.keyCode);
    insert.innerHTML = `
            <div class="key">
                <small>event.key</small>
                <p>${e.key === " " ? "Space" : e.key}</p>
            </div>
            <div class="key">
                <small>event.keyCode</small>
                <p>${e.keyCode}</p>
            </div>
            <div class="key">
                <small>event.code</small>
                <p>${e.code}</p>
            </div>
    `;
});
