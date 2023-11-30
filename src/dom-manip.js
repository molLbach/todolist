import { ajouterproject, projectsArray ,latestproject,populateProject,addTasktoProject} from "./projects";


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
populateProject();
console.log(latestproject.id);
});


taskbutton.addEventListener("click",()=>{
    taskmodal.showModal();

});
taskcancel.addEventListener("click",()=>{
    taskmodal.close();
    taskdesc.value = "";
    priority.value = "default";
    date.value = ""; 
})

taskadd.addEventListener("click",()=>{
    
    taskmodal.close();
    let taskdesc1 = taskdesc.value;
    let date1 = date.value;
    let priority1 = priority.value;
    addTasktoProject(taskdesc1,date1,priority1);
    


})


}
export {handleButtonClick};