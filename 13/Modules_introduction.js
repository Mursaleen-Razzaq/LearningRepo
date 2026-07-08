
//Examples.... Modules...
const store = (function(){
    let itemCount = 0;
    const goodown = []

    return {
        add(name){
            itemCount++
            goodown.push(name)
            return `Store stocked items ${name}`
        },
        count() {
            return itemCount
        },
    list(){
        goodown.slice()
    }
    }
})()

console.log(store.add('Tea 10 packs.'));
console.log(store.add('ghee 10kg.'));
console.log("Count ", store.count());
console.log("List", store.list());

console.log("Direct Goodown ?:", typeof store.goodown);
console.log("Direct Count ?:", typeof store.itemCount);


const accountbook = (function(){
    const recordes = []
    let accesslog = []

    function logAccess(action){
        accesslog.push(`[${new Date().toISOString().slice(0, 10)}] - ${action}`)
    }

    function store(doc){
        logAccess(`Stored: ${doc}`)
        recordes.push(doc)
    }

    function retreive(index){
        logAccess(`Retrived index ${index}`)
        return recordes[index] || "Not Found"
    }

    function getRecordCount(){
        return recordes.length
    }

    function getAccessLog(){
        return accesslog.slice()
    }

    return{
        store,
        retreive,
        count: getRecordCount,
        log: getAccessLog,
    }
})()

accountbook.store("Rice 8kg")
accountbook.store("Sugar 10kg")

console.log("Store retrevie ", accountbook.retreive(0));
console.log("Count ", accountbook.count);
console.log("Log length ", accountbook.log().length);
console.log("Show me type of log access ",typeof accountbook.logAccess);

