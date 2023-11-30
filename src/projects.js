import {Task} from "./Tasks";

class Project{
    constructor(title,desc){
            this.title = title;
            this.desc = desc;
            this.tasks = [];
            }
}
let projectsArray = [];
let latestproject;
    
function ajouterproject(title,desc) {
    const newproject = new Project(title,desc);
    projectsArray.push(newproject);
    latestproject = newproject;
}
function populateProject(){
    const projectsdiv = document.querySelector(".projectsdiv");
    let proji = document.createElement("div");
    proji.classList.add("projetstyle");
    let titre = document.createElement("h1");
    titre.textContent = `${latestproject.title}`
    proji.appendChild(titre);
    let descri = document.createElement("p");
    descri.textContent = `${latestproject.desc}`;
    proji.appendChild(descri);
    projectsdiv.appendChild(proji);

}

function addTasktoProject(taskTitle,taskDate,taskPriority,TaskDesc){
    const newtask = new Task(taskTitle,taskDate,taskPriority,TaskDesc);
    latestproject.tasks.push(newtask);
}


export {ajouterproject, projectsArray,latestproject,populateProject};
