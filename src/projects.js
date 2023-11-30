import {Task} from "./Tasks";

class Project{
    static id=1;
    constructor(title,desc){
            this.title = title;
            this.desc = desc;
            this.tasks = [];
            this.id = Project.id++;
        }
                   
     /* addTask(task) {
     this.tasks.push(task);
      } */
            

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

function addTasktoProject(taskTitle, taskDate, taskPriority, project) {
    const targetProject = project ;
      const newtask = new Task(taskTitle, taskDate, taskPriority);
      targetProject.tasks.push(newtask);
    
    }
    
        

export {ajouterproject, projectsArray,latestproject,populateProject,addTasktoProject};
