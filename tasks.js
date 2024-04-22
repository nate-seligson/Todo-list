export class Task{
    constructor(title, color){
        this.checked = false;

        this.object = document.createElement("div");
        this.object.innerHTML = title
        this.object.style.backgroundColor = color
        this.object.className = "task"
        document.getElementById("tasks").appendChild(this.object)

        this.line = document.createElement("div");
        this.line.className = "line"
        this.line.style.top += ((this.object.clientHeight/2)/window.innerWidth * 100).toString() + "vw";
        this.object.appendChild(this.line)
        this.object.addEventListener("click", this.StrikeThrough.bind(this))
    }
    StrikeThrough(){
        if(!this.checked){
            this.line.style.borderWidth = (this.object.clientHeight / 175).toString() + "vw";
            this.line.style.width="110%";
            this.line.style.transition = "0.5s ease"
            this.checked = true;
        }
        else{
            this.line.style.borderWidth = "0vw";
            this.line.style.width="0%";
            this.checked = false;
            this.line.style.transition = "0.1s ease"
        }
    }
}
export class TaskList{

}