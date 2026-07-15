 
 //Event Delegation...
 document.querySelector("#images").addEventListener("click", function(e){

    console.log("Clicked:", e.target.tagName);

    if(e.target.tagName === "IMG"){

        console.log(e.target.id);

        let removeImage = e.target.parentNode;

        removeImage.remove();
    }

});