import { Project } from './project';

const app = (() => {

    let projects = []
    const inboxName = 'Inbox'

    const clearAllProjects = () => {
        projects = [];
    }

    const deleteProject = (project) => {
        app.projects = app.projects.filter( (someProj) => proj !== project)
    }

    const getProjectByName = (projName) => {
        const [project] = app.projects.filter( (someProj) => {someProj.name === projName}
        )
        return project;
    }

    const getTaskById = (taskID, argProject) => {
        const [task] = argProject.tasks.filter((taskItem) => {taskID === taskItem.id})
        return task;
    }

    const getInboxProject = () => {
        const [project] = app.projects.filter((proj) => {proj.name === inboxName})
        return project;
    }

    const addInbox = () => {
        if (getProjectByName(inboxName))
        {
            return; 
        }
        app.projects.push(new Project(inboxName));
    }

    const addProject = (project) => {
        const projectNAmeExist = app.projects.some( (proj) => {proj.name.toLowerCase() === project.name.toLowerCase()});

        if (projectNameExist)
        {
            alert("Duplicate project name, please enter a unique project name");
            return;
        }

        app.projects.push(project);
    }

    return {projects, clearAllProjects, addProject, deleteProject, getProjectByName,
    addInbox, getInboxProject, getTaskById}

})();

export default app;