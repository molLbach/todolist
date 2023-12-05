import {Task} from "./Tasks";

class Project{
    static id = 1;
    constructor(title,desc){

            this.title = title;
            this.desc = desc;
            this.tasks = [];
            this.id = Project.id++;
        }
                   

}
let projectsArray = [];
let latestproject;
    
function ajouterproject(title, desc) {
    const newproject = new Project(title, desc);
    projectsArray.push(newproject);
    latestproject = newproject;
    populateProject();
}

function populateProject() {
    const projectsdiv = document.querySelector(".projectsdiv");
    let proji = document.createElement("div");
    proji.classList.add("projetstyle");
    proji.setAttribute('project-id', latestproject.id);
    let titre = document.createElement("h1");
    titre.textContent = `${latestproject.title}`
    proji.appendChild(titre);
    let descri = document.createElement("p");
    descri.textContent = `${latestproject.desc}`;
    proji.appendChild(descri);
    proji.addEventListener("click", () => {
        const allProjects = document.querySelectorAll('.projetstyle');
        allProjects.forEach(project => {
            project.classList.remove('selected');
        });

        proji.classList.add('selected');
    });

    projectsdiv.appendChild(proji);
}



function getSelectedProjectId(projectId) {
    const projectInstance = projectsArray.find(function(project) {
        return project.id === projectId;
    });

    return projectInstance;
}


  

function addTasktoProject(taskTitle, taskDate, taskPriority, projectinstance) {

    
      const newTask = new Task(taskTitle, taskDate, taskPriority);

        projectinstance.tasks.push(newTask);
    }

    
        

export {ajouterproject, projectsArray,latestproject,populateProject,addTasktoProject,getSelectedProjectId};