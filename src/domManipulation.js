import app from './appdata';
import storage from './localstorage';
import { Project } from './project'; 
import { Task } from './task';

storage.read();

const domManipulation = (() => {
  // Selectors
  const navProjectsContent = document.getElementById('nav-projects-content');
  const newProjectButton = document.getElementById('new-project-button');
  const popUpForm = document.getElementById('pop-up-form');
  const projectTitle = document.getElementById('project-title');
  const popUpAddProject = document.getElementById('pop-up-add-project');
  const mainTasksHeader = document.getElementById('main-tasks-header');
  const mainTasksContentNone = document.getElementById("main-tasks-content-none");
  const mainTasksContentForm = document.querySelector("#main-tasks-content-form")
  const newTaskButton = document.getElementById('new-task-button');
  const formID = document.getElementById('form-id');
  const taskTitle = document.getElementById('task-title');
  const projectName = document.getElementById('project-name');
  const dateTimeBtn = document.getElementById('datetime-btn');
  const mainTasksContent = document.getElementById('main-tasks-content');
  const formX = document.getElementById('form-x');
  const formX2 = document.getElementById('form-x2');

  let activeProject = "";

  newProjectButton.addEventListener("click", () => {
    popUpAddProject.style.display = "flex";
  })

  formX2.addEventListener("click", () => {
    projectTitle.value = "";
    popUpAddProject.style.display = "none";
  })

  popUpForm.addEventListener('submit', () => {
    const projectTitleValue = projectTitle.value
    const newProject = new Project(projectTitleValue);
    app.addProject(newProject);
    addProjectToSidebar(newProject);
    popUpAddProject.style.display = 'none';
    projectTitle.value = '';
    storage.save();
    console.log("did a save");
  });

  function addProjectToSidebar(newProject) {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    projectItem.textContent = newProject.name;
    clickSidebarProject(newProject, projectItem);
    navProjectsContent.appendChild(projectItem);
    storage.save();
    console.log("did a save");
  }
  
  function clickSidebarProject(newProject, projectItem) {
    projectItem.addEventListener("click", () => {
      displayTasks(newProject);
      activeProject = newProject;
      mainTasksHeader.textContent = newProject.name;
      mainTasksContentNone.textContent = ''; 
      const plusSignText = document.createTextNode('Click on the plus sign to add more tasks!');
      const plusSignIcon = document.createElement('i');
      plusSignIcon.classList.add('fas', 'fa-plus'); 
      plusSignIcon.style.cursor = 'pointer';
      plusSignClick(plusSignIcon);
      mainTasksContentNone.appendChild(plusSignIcon);
      mainTasksContentNone.appendChild(plusSignText);
    })
    storage.save();
    console.log("did a save");
  }

  function plusSignClick(plusSignIcon)
  {
    plusSignIcon.addEventListener("click", () => {
      mainTasksContentForm.style.display = "flex";
    })
    storage.save();
    console.log("did a save");
  }

  formX.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("we in here");
    taskTitle.value = "";
    dateTimeBtn.value = "";
    console.log(" reseting");
    mainTasksContentForm.style.display = "none";
    console.log("switched display");
    storage.save();
    console.log("did a save");
  })

  formID.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskTitleValue = taskTitle.value;
    const taskDueDateValue = dateTimeBtn.value;
    const newTask = createTask(taskTitleValue, taskDueDateValue);
    activeProject.addTask(newTask); 
    taskTitle.value = '';
    dateTimeBtn.value = '';
    mainTasksContentForm.style.display = 'none';
    displayTasks(activeProject);
    storage.save();
    console.log("did a save");
  })

  function createTask(title, dueDate)
  {
    const newTask = new Task(title);
    newTask.addDueDate(dueDate);
    storage.save();
    console.log("did a save");
    return newTask;
  }

  function displayTasks(activeProject_) 
  {
    mainTasksContent.innerHTML = '';
    activeProject_.tasks.forEach( (task) => {
      const taskItem = document.createElement("div");
      taskItem.classList.add("task-item-display");
      const task_title = document.createElement("div");
      task_title.textContent = task.title;
      const task_date = document.createElement("div");
      task_date.textContent = formatDueDate(task.dueDate);
      const delete_button = document.createElement("button");
      delete_button.classList.add("delete-task-button");
      delete_button.textContent = "X";
      delete_button.addEventListener("click", () => {
        const taskId = task.id
        activeProject_.deleteTask(taskId)
        displayTasks(activeProject_);
      })

      taskItem.appendChild(task_title);
      taskItem.appendChild(task_date);
      taskItem.appendChild(delete_button);

      mainTasksContent.appendChild(taskItem);
      storage.save();
      console.log("did a save");
    })
  }

  function formatDueDate(due_date)
  {
    if (due_date == "")
    {
      return "No Due Date";
    }
    else 
    {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return due_date.toLocaleDateString(undefined, options);
    }
  }

  return {};

})();

export default domManipulation;