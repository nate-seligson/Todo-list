export class Task{
    constructor(title, color){
        this.object = document.createElement("div");
        this.object.innerHTML = title
        this.object.style.backgroundColor = color
        this.object.className = "task"
        document.body.appendChild(this.object)

        this.checkbox = document.createElement("input")
        this.checkbox.type = "checkbox"
        this.checkbox.className = "cbox"
        this.object.appendChild(this.checkbox)
    }
    StrikeThrough(){
        this.line = document.createElement("div");
    }
}
export class TaskList{

}