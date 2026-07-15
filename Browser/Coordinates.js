

const box = document.getElementById("box");
const output = document.getElementById("output");

box.addEventListener("click", function (event) {

    output.innerHTML = `
        <h3>Mouse Coordinates</h3>
        <p><strong>clientX:</strong> ${event.clientX}</p>
        <p><strong>clientY:</strong> ${event.clientY}</p>

        <p><strong>pageX:</strong> ${event.pageX}</p>
        <p><strong>pageY:</strong> ${event.pageY}</p>

        <p><strong>screenX:</strong> ${event.screenX}</p>
        <p><strong>screenY:</strong> ${event.screenY}</p>

        <p><strong>offsetX:</strong> ${event.offsetX}</p>
        <p><strong>offsetY:</strong> ${event.offsetY}</p>
    `;
});