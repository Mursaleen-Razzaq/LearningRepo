

//Modifying Documents
const button = document.getElementById("btn");

button.addEventListener("click", function () {

    const container = document.getElementById("container");

    // Prevent adding the same content every click
    if (document.getElementById("newHeading")) {
        return;
    }

    // Create heading
    const heading = document.createElement("h2");
    heading.id = "newHeading";
    heading.textContent = "Welcome to DOM Manipulation";
    heading.classList.add("highlight");
    heading.style.color = "blue";

    // Add title attribute
    heading.setAttribute("title", "This is a heading");

    // Insert at beginning
    container.prepend(heading);

    // Update existing paragraph
    const oldPara = document.getElementById("paragraph");
    oldPara.textContent = "The original paragraph has been updated.";

    // Create new paragraph
    const newPara = document.createElement("p");
    newPara.innerHTML =
        "This paragraph was created using <strong>createElement()</strong>.";

    container.append(newPara);

    // Insert HTML
    heading.insertAdjacentHTML(
        "afterend",
        "<hr><p>This paragraph was inserted using <b>insertAdjacentHTML()</b>.</p>"
    );

    // Clone heading
    const clone = heading.cloneNode(true);
    clone.textContent = "Cloned Heading";

    container.append(clone);

    // Remove clone after 3 seconds
    setTimeout(function () {
        clone.remove();
    }, 3000);

});