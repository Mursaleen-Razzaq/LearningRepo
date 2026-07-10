

const styleButton = document.getElementById("styleBtn");
    styleButton.classList.add("style");

const addButton = document.getElementById("addBtn");
    addButton.classList.add("add");

const removeButton = document.getElementById("removeBtn")
   removeButton.classList.add("remove");

const toggleButton = document.getElementById("toggleBtn")
   toggleButton.classList.add("toggle");

const box = document.getElementById("box");

const styleBtn = document.getElementById("styleBtn");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const toggleBtn = document.getElementById("toggleBtn");


// 1. Change inline styles
styleBtn.addEventListener("click", () => {

    box.style.backgroundColor = "lightblue";
    box.style.color = "blue";
    box.style.fontSize = "22px";
    box.style.padding = "30px";

});


// 2. Add a CSS class
addBtn.addEventListener("click", () => {

    box.classList.add("highlight");
    box.classList.add("rounded");

});


// 3. Remove a CSS class
removeBtn.addEventListener("click", () => {

    box.classList.remove("highlight");

});


// 4. Toggle a CSS class
toggleBtn.addEventListener("click", () => {

    box.classList.toggle("dark");

});

