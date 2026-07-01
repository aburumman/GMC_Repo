// Get references to HTML elements
const colorBox = document.getElementById("colorBox");
const changeColorBtn = document.getElementById("changeColorBtn");

/**
 * Generates a random hexadecimal color.
 * Example: #3FA9D4
 */
function getRandomColor() {
    const characters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        color += characters[randomIndex];
    }

    return color;
}

// Change the box color whenever the button is clicked
changeColorBtn.addEventListener("click", function () {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
});