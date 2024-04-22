import { Task } from "./tasks.js";
const inputtask = document.getElementById("inputtask");
const newtask = document.getElementById("newtask");
const colorinput = document.getElementById("colorinput");
const stuff = document.getElementById("stuff");

//get local data
JSON.parse("[" + localStorage.getItem("data") + "]").forEach(function(item){if(item!=null){new Task(item["title"], item["color"], item["checked"])}})
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
            colorinput.style.left = "93%";
            colorinput.style.opacity = "100%";
            colorinput.value = "#" + Math.floor(Math.random()*16777215).toString(16);
            stuff.addEventListener("mouseout", function(){colorinput.removeAttribute("style")}, {once:true})
            break;
    }
})
