document.addEventListener("DOMContentLoaded", function() {
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");
    const colorBox = document.getElementById("colorBox");
    const hexValue = document.getElementById("hexValue");

    function updateColor() {
        const red = parseInt(redInput.value) || 0;
        const green = parseInt(greenInput.value) || 0;
        const blue = parseInt(blueInput.value) || 0;

        redRange.value = red;
        greenRange.value = green;
        blueRange.value = blue;

        const color = `rgb(${red}, ${green}, ${blue})`;
        colorBox.style.backgroundColor = color;

        const hex = rgbToHex(red, green, blue);
        hexValue.innerText = `#${hex}`;
    }

    function rgbToHex(r, g, b) {
        return componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    redInput.addEventListener("input", updateColor);
    greenInput.addEventListener("input", updateColor);
    blueInput.addEventListener("input", updateColor);

    redRange.addEventListener("input", function() {
        redInput.value = redRange.value;
        updateColor();
    });

    greenRange.addEventListener("input", function() {
        greenInput.value = greenRange.value;
        updateColor();
    });

    blueRange.addEventListener("input", function() {
        blueInput.value = blueRange.value;
        updateColor();
    });

    updateColor();
});
