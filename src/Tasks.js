class Task{
  constructor(title,date,priority){
      this.title = title;
      this.date = date;
      this.priority = priority;
      this.completed = false;
  }
  toggleCompleted() {
      this.completed === false
        ? (this.completed = true)
        : (this.completed = false);
      if (this.completed === true)
        this.completedDate = new Date().toLocaleString(navigator.languages[0], {
          year: "numeric",
          month: "short",
          day: "2-digit"
        });
        if (this.completed === false) this.completedDate = "";

      return this;


  }
  togglePriority() {
      this.priority === false ? (this.priority = true) : (this.priority = false);
      return this;
    }
}


function populateTask(projectInstance) {
let latesttask = projectInstance.tasks.length-1;
const refreshdiv = document.querySelector(".refreshdiv");
let task = document.createElement("div");
task.classList.add("taskstyle");

let taskdesc = document.createElement("h1");
taskdesc.textContent = projectInstance.tasks[latesttask].title; 

let taskdate = document.createElement("p"); 
taskdate.textContent = projectInstance.tasks[latesttask].date; 

let taskPriority = document.createElement("p"); 
taskPriority.textContent = projectInstance.tasks[latesttask].priority; 

task.appendChild(taskdesc);
task.appendChild(taskdate);
task.appendChild(taskPriority);

refreshdiv.appendChild(task);
}

export{Task,populateTask};
