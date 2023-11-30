 
    class Project{
        constructor(title,desc){
            this.title = title;
            this.desc = desc;
        }
    }
    let projectsArray = [];
    



function ajouterproject(title,desc) {
    const newproject = new Project(title,desc);
    projectsArray.push(newproject);
}


export {ajouterproject, projectsArray};
