export class Task{
    constructor(title, color){
        this.object = document.createElement("div");
        this.object.innerHTML = title
        this.object.style.backgroundColor = color
        document.body.appendChild(this.object)
    }
}