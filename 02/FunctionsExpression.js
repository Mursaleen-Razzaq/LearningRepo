
function ask(question, yes, no){
  if(confirm(question)) yes();
    else no();
}

function showOk(){
    alert("Do you agree.");
}
function showCancel(){
    alert("You Cancel.");
}

ask("Do you agree?", showOk, showCancel);