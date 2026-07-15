// Display form properties
function showFormInfo() {

    // Get the form
    const form = document.getElementById("myForm");

    // Form Properties
    console.log("===== FORM PROPERTIES =====");
    console.log("Form ID:", form.id);
    console.log("Form Name:", form.name);
    console.log("Form Length:", form.length);
    console.log("Form Action:", form.action);
    console.log("Form Method:", form.method);
    console.log("Form Elements:", form.elements);
    console.log("Username:", form.elements["username"].value);
    console.log("Email:", form.elements["email"].value);

    // Form Methods
    console.log("===== FORM METHODS =====");
    console.log("checkValidity():", form.checkValidity());

    // Show information on the page
    alert(
        "Form ID: " + form.id +
        "\nLength: " + form.length +
        "\nMethod: " + form.method +
        "\nUsername: " + form.elements["username"].value +
        "\nEmail: " + form.elements["email"].value
    );
}

// Reset the form
function resetForm() {
    document.getElementById("myForm").reset();
}

// Prevent the form from submitting and reloading the page
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form Submitted Successfully!");
});