//Example Iterables

let range = {
    from: 1,
    to: 5,

[Symbol.iterator]() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if(this.current <= this.last){
                return{done: false, value: this.current++};

            } else {
                return{done: true};
            }
        }
    };
  }
};
for(let value of range){
    console.log(value);
}

console.log("Second Example..");

// Example Async iterables
let range2 = {
    from: 22,
    to: 28,

    [Symbol.asyncIterator]() {
        return {
            current: this.from,
            last: this.to,

            async next() {
                await new Promise(resolve => setTimeout(resolve, 1000));

                if (this.current <= this.last) {
                    return { value: this.current++, done: false };
                }

                return { done: true };
            }
        };
    }
};

let range3 = {
    from: 4,
    to: 9,

    async *[Symbol.asyncIterator]() {
        for (let value = this.from; value <= this.to; value++) {
            await new Promise(resolve => setTimeout(resolve, 3000));
            yield value;
        }
    }
};

(async () => {
    console.log("range2 start");

    for await (const value of range2) {
        console.log(value);
    }

    console.log("range2 finished");

    console.log("range3 start");

    for await (const value of range3) {
        console.log(value);
    }

    console.log("range3 finished");
})();