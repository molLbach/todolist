import { Task } from "./Tasks";
import { ajouterproject, projectsArray ,latestproject,getSelectedProjectId,addTasktoProject} from "./projects";


function displayAlltasks(){

}
function clearTask(){

}
function clearProject(){

}
function editTask(){
    
}

function handleButtonClick(){
const modal = document.querySelector(".modal");
const addproject = document.querySelector(".addproject");
const cancelproject = document.querySelector(".cancelproject");
const btnsubmit = document.querySelector(".btnsubmit");
const projectname = document.querySelector("#projectname");
const projectdesc = document.querySelector("#projectdesc");
const taskbutton = document.querySelector(".addtask");
const taskmodal = document.querySelector(".taskmodal");
const taskcancel = document.querySelector("#taskcancel");
const taskdesc = document.querySelector("#taskdesc");
const priority = document.querySelector("#priority");
const date = document.querySelector("#date");
const taskadd = document.querySelector("#taskadd");

//PROJECTS---------------------------------------------
addproject.addEventListener("click",()=>{
    modal.showModal();
})    
cancelproject.addEventListener("click",()=>{
    modal.close();
    projectdesc.value = "";
    projectname.value = "";
})
btnsubmit.addEventListener("click", ()=>{
let projectname1 = projectname.value;
let projectdesc1 = projectdesc.value;
projectdesc.value = "";
projectname.value = "";
modal.close();
ajouterproject(projectname1,projectdesc1);
console.log(projectsArray);
});

//TASKS---------------------------------------------------
taskbutton.addEventListener("click",()=>{
    taskmodal.showModal();

});
taskcancel.addEventListener("click",()=>{
    taskmodal.close();
    taskdesc.value = "";
    priority.value = "default";
    date.value = ""; 
})

taskadd.addEventListener("click", () => {
    const selectedProjectElement = document.querySelector('.projetstyle.selected');
    const projectId = selectedProjectElement.getAttribute('project-id');
    const selectedProjectInstance = getSelectedProjectId(parseInt(projectId));
    let taskdesc1 = taskdesc.value;
    let date1 = date.value;
    let priority1 = priority.value;
    addTasktoProject(taskdesc1, date1,priority1, selectedProjectInstance);
    console.log(projectsArray);
    taskmodal.close();
  });
  

}


export {handleButtonClick}