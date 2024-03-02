var ul  = document.getElementById("list-container")
var input = document.getElementById("input")

function add(){

    var listitem = document.createElement("li")
    listitem.innerHTML=input.value+ "<button onclick='deleteItem(event)'>Delete</button>"
    ul.append(listitem)
}

function deleteItem(event){
    event.target.parentElement.remove()
}

function changeHue(degrees) {
    main.style.filter = "hue-rotate(" + degrees + "deg)";
}