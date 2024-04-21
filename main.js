import { Task } from "./tasks.js";
function CreateTask(input = "", color = "red"){
    new Task(input, color)
}
document.getElementById("newtask").addEventListener("click", function(){CreateTask(document.getElementById("inputtask").value, document.getElementById("colorinput").value); document.getElementById("inputtask").value = ""})