//High Order function and Callback...

function add(a, b, cb){
let result = a + b;
cb(result);
}
add(2, 4, val => console.log (val))
add(785, 1, val => console.log (val))

add(2, 5, function (val){
    console.log(val);
});

