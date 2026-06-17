
//First Example...
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable 
  alert( message );
}
showMessage(); // Hello, I'm JavaScript!


//Second Example...
let userName = 'John';
function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}
showMessage(); // Hello, John