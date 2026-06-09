const btn = document.querySelector("#tema")

btn.addEventListener("click", function() {
    localStorage.setItem("tema", "dark")
    const temaSalvo = localStorage.getItem("tema")
    if (temaSalvo === "dark") {
        document.body.classList.add("dark")
    }
});