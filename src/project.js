import { v4 as UUIDV4 } from 'uuid';

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.id = UUIDV4();
    }

    addTask = (task) => {
        if (this.tasks.includes(task))
        {
            return;
        }
        this.tasks.push(task)
    }

    deleteTask = (taskID) => {
        this.tasks = this.tasks.filter((task) => task.id !== taskID);
    }
}

function saveProject(target) 
{
    const project = new Project(target['add-project-name'].value);
    return project;
}

export { Project, saveProject };