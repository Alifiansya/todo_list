const toDoList = [];

let prevToDo = JSON.parse(localStorage.getItem("todos"));
prevToDo = prevToDo || [];

prevToDo.forEach(element => {
    const li = document.createElement("li");
    li.innerHTML = element;
    document.getElementById("data").appendChild(li);
});


function addToDo(inputData) {
    const listElement = document.createElement("li");
    const textNode = document.createTextNode(inputData);
    listElement.appendChild(textNode);
    document.getElementById("data").appendChild(listElement);
    document.getElementById("todo").value = "";

    toDoList.push(inputData);
    localStorage.setItem("todos", JSON.stringify(toDoList));
}
