import { ajouterproject, projectsArray ,latestproject,populateProject} from "./projects";


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
})



}


export {handleButtonClick};