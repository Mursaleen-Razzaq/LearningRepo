//Example of Generators in javascript...
function* simpleGenerator() {
  yield 'First';
  yield 'Second';
  return 'Done';
}

const gen = simpleGenerator();
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 


function makeIterator(start = 0, end = Infinity, step = 1){
    let nextStart = start;
    let iterationCount = 0;

    return {
        next(){
            let result;
            if(iterationCount < end){
                result = {value: nextStart, done: false}
                nextStart = nextStart + step;
                iterationCount++;
                return result;
            }

            return {value: iterationCount, done: true};
        },
    };
}

const myItrator = makeIterator(1, 10, 2);
let result = myItrator.next();

while(!result.done) {
    console.log(result.value);
    result = myItrator.next();
}

//
function* count(){
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
}

const even = count();

for(const v of even){
    console.log(v); 
}

//
function* makeMyItratorNew(start, end, step = 1) {
    for(let i = start; i <= end; i += step){
        yield i;
    }
}
const btn = document.getElementById("next-btn")

let one = makeMyItratorNew(1, 10, 1);

btn.addEventListener("click", () => {
    btn.innerText = one.next().value;
    
});