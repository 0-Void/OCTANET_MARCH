let inputbx = document.querySelector('#inputbx');
let list = document.querySelector('#list');

inputbx.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

function addItem(inputValue) {
    if (inputValue.trim() === '') {
        alert("Write something!");
    } else {
        let listItem = document.createElement("li");
        listItem.textContent = inputValue;
        listItem.classList.add("text-lg", "p-2", "rounded-2xl", "shadow-xl", "bg-blue-300", "mt-4", "font-serif", "outline-none", "border-none", "flex", "ml-20", "mr-20","mb-5", "pl-5", "cursor-pointer","item-center","text-purple-950");

        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        span.classList.add("absolute","text-red-800", "cursor-pointer", "right-24","text-2xl","item-center","font-bold");
        listItem.appendChild(span);

        list.appendChild(listItem);
    }
    inputValue="";
    saveTasks(); 
}

list.addEventListener("click", function(e) {
    if(e.target.tagName==="LI"){
    e.target.classList.toggle("line-through");
    e.target.classList.toggle("bg-green-300");
    saveTasks();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }

},false);

function saveTasks() {
    localStorage.setItem("data", list.innerHTML);
}

function showTasks() {
    list.innerHTML = localStorage.getItem("data");
}

showTasks();


