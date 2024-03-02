function displayVal(val){
    document.getElementById("display").value = document.getElementById("display").value+val;
}
//In this function we get the input box value = number value. The parameter "val" denotes the button value

function clearDisplayVal(){
    document.getElementById("display").value = "";
}
// In this function if we click clear button it clear the display. For that we used "" Empty double couts.

function calculate(){

    var input = document.getElementById("display").value
    var result = eval(input)

    document.getElementById("display").value = result;
}