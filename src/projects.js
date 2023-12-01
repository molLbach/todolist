import {Task} from "./Tasks";

class Project{
    constructor(title,desc){
            this.title = title;
            this.desc = desc;
            this.tasks = [];
            this.id = null;
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
    proji.addEventListener("click", () => {
      const allProjects = document.querySelectorAll('.projetstyle');
      allProjects.forEach(project => {
          project.removeAttribute("id");
      });
      proji.id = "id";
      console.log(proji);
  });
          
   projectsdiv.appendChild(proji);
        
}

function getProjectById(projectsArray) {
  let projectWithId = projectsArray.find(project => project.id === "id");
  return projectWithId;
}

  

function addTasktoProject(taskTitle, taskDate, taskPriority, projectId) {
    const newtask = new Task(taskTitle, taskDate, taskPriority);
      projectId.tasks.push(newtask);}
        
      
    
    
    
        

export {ajouterproject, projectsArray,latestproject,populateProject,addTasktoProject,getProjectById};
