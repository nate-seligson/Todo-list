export class Task{
    constructor(title, color){
        this.checked = false;

        this.object = document.createElement("div");
        this.object.innerHTML = title
        this.object.style.backgroundColor = color
        this.object.className = "task"
        document.body.appendChild(this.object)

        this.checkbox = document.createElement("input")
        this.checkbox.type = "checkbox"
        this.checkbox.className = "cbox"
        this.checkbox.addEventListener("click", () => this.StrikeThrough())
        this.object.appendChild(this.checkbox)

        this.line = document.createElement("div");
        this.line.style.width = this.object.style.width
        this.line.className = "line"
        this.object.appendChild(this.line)
    }
    StrikeThrough(){
        if(!this.checked){
            this.line.style.display = "block"
            this.checked = true;
        }
        else{
            this.line.style.display = "none"
            this.checked = false;
        }
    }
}
export class TaskList{

}