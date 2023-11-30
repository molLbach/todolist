/* class AddTask{
    constructor(title,date,priority,desc){
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.desc = desc;
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
    

 */