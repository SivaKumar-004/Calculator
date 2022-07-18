function equalclick(){
    var result=eval(document.getElementById("screen").value);
    document.getElementById("screen").value=result;
}
function numberclick(num){
    document.getElementById("screen").value+=num;
}
function clearclick(){
    document.getElementById("screen").value='';
}