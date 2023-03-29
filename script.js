const containerEl = document.querySelector(".container");
const btnEl = document.getElementById("btn");


function randomColor() {
    const chars = "0123456789abcdef"
    let color = "";
    for (let i = 0; i< 6; i++) {
        let randNum = Math.floor(Math.random() * chars.length);
        
        color += chars.substring(randNum, randNum + 1);
        console.log(color);
    }
    return color;
}

function colorClear() {
    while (containerEl.hasChildNodes()) {
        containerEl.removeChild(containerEl.firstChild);
    }
}


function colorGenerator() {
    colorClear();
    for (let index = 0; index < 30; index++) {
        const colorContainerEl = document.createElement("div");
        colorContainerEl.classList.add("color-container");
        colorContainerEl.innerText = "#" + randomColor();
        colorContainerEl.style.backgroundColor = colorContainerEl.innerText;
        containerEl.appendChild(colorContainerEl);
        
    }
}

colorGenerator();
btnEl.addEventListener("click", colorGenerator);