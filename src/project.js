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

    deleteTask = (task) => {
        this.tasks = this.tasks.filter((item) => {item !== task});
    }
}

function saveProject(target) 
{
    const project = new Project(target['add-project-name'].value);
    return project;
}

export { Project, saveProject };