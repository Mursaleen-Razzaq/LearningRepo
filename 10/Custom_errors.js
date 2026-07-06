//Example.. 
try {
    let age = prompt("Enter you age.");
    age = Number.parseInt(age);
    if(age > 120){
        throw new ReferenceError("This is probably not true.")
    }
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);   
}
    console.log("The script is still running.");


class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

//Example...
function checkAge(age) {
  if (typeof age !== 'number') {
    throw new ValidationError('Age must be a number');
  }
  if (age < 0 || age > 120) {
    throw new ValidationError('Age must be between 0 and 120');
  }
  return `Age is valid: ${age}`;
}

try {
  console.log(checkAge(25));
  console.log(checkAge('twenty-five'));
} catch (err) {
  if (err instanceof ValidationError) {
    console.error('Custom error:', err.name, '-', err.message);
  } else {
    console.error('Unexpected error:', err);
  }
}
