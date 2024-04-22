export class Task{
    constructor(title, color, checked = false){
        this.checked = checked;
        this.title = title;

        this.object = document.createElement("div");
        this.object.innerHTML = title
        this.object.style.backgroundColor = color
        this.object.className = "task"
        document.getElementById("tasks").appendChild(this.object)

        this.line = document.createElement("div");
        this.line.className = "line"
        this.object.appendChild(this.line)
        this.object.addEventListener("click", this.StrikeThrough.bind(this))
        if(this.checked){
            this.checked = false;
            this.StrikeThrough()
        }
    }
    StrikeThrough(){
        if(!this.checked){
            this.line.style.borderWidth = (this.object.clientHeight / 175).toString() + "vw";
            this.line.style.width="110%";
            this.line.style.transition = "0.5s ease"
            this.checked = true;
            this.ChangeData("checked", true)
        }
        else{
            this.line.style.borderWidth = "0vw";
            this.line.style.width="0%";
            this.checked = false;
            this.line.style.transition = "0.1s ease"
            this.ChangeData("checked", false)
        }
    }
    ChangeData(key,val){
        let data = JSON.parse("[" + localStorage.getItem("data") + "]")
        let toChange = data.findIndex((obj) => obj != null && obj["title"] == this.title)
        let newData = data[toChange];
        newData[key] = val;
        data = JSON.stringify(data.with(toChange, newData)).slice(1,-1);
        localStorage.setItem("data", data)
    }
}
export class TaskList{

}