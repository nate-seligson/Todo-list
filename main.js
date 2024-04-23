import { Task } from "./tasks.js";
const inputtask = document.getElementById("task-text-input");
const newtask = document.getElementById("new-task-button");
const colorinput = document.getElementById("task-color-input");
const stuff = document.getElementById("new-task-wrapper");

//get local data
JSON.parse("[" + localStorage.getItem("data") + "]").forEach(function(item){if(item!=null){new Task(item["title"], item["color"], item["checked"])}})
document.body.style.backgroundColor = localStorage.getItem("bg");
document.getElementById("bgcolorpicker").value = localStorage.getItem("bg");
function CreateTask(input = "", color = "red"){
    new Task(input, color)
    localStorage.setItem("data", localStorage.getItem("data") + "," +JSON.stringify({"title": input, "color": color, "checked": false}))
}
function MakeTask(){
    CreateTask(
        inputtask.value, 
        colorinput.value
    );
    inputtask.value = ""
}
newtask.addEventListener("click", function(){MakeTask();})
inputtask.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        MakeTask()
    }
})
//detect keys
document.addEventListener("keydown", function(event){
    switch(event.key){
        case "Control":
        case "Meta":
            if(document.activeElement != inputtask){
                inputtask.focus();
            }
            break;
        case "ArrowRight":
            colorinput.style.left = "92%";
            colorinput.style.opacity = "100%";
            colorinput.value = "#" + Math.floor(Math.random()*16777215).toString(16);
            stuff.addEventListener("mouseout", function(){colorinput.removeAttribute("style")}, {once:true})
            break;
        case "Backspace":
            if(document.activeElement == inputtask){
                return;
            }
            document.getElementById("tasks").removeChild(document.getElementById("tasks").lastChild);
            let data = JSON.parse("[" + localStorage.getItem("data") + "]")
            let toChange = data.findIndex((obj) => obj != null && obj["title"] == document.getElementById("tasks").lastChild.innerHTML)
            data.pop(toChange);
            data = JSON.stringify(data).slice(1,-1)
            localStorage.setItem("data",data);
            break;

    }
})
