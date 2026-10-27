
// const btn = document.getElementById("btn");

// btn.addEventListener("click", function() {
//     document.body.style.backgroundColor = "red";
// });

const btn = document.getElementById("btn");

btn.addEventListener("click", function() {

    const colors = ["red", "blue", "green", "yellow", "pink", "purple"];

    const randomIndex = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomIndex];
});