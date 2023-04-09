function addToDo(inputData) {
    const listElement = document.createElement("li");
    const textNode = document.createTextNode(inputData);
    listElement.appendChild(textNode);
    document.getElementById("data").appendChild(listElement);
    document.getElementById("todo").value = "";
}
