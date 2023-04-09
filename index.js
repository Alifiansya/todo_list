function addToDo() {
    const inputData = document.getElementById("todo").value;
    const listElement = document.createElement("li");
    const textNode = document.createTextNode(inputData);
    listElement.appendChild(textNode);
    document.getElementById("data").appendChild(listElement);
    document.getElementById("todo").value = "";
}
function tes() {
    
}
