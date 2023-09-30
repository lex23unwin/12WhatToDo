import app from './appdata';
import storage from './localstorage';
import { Project } from './project'; // Make sure the path is correct

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
  });

  function addProjectToSidebar(project) {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    projectItem.textContent = project.name;
    clickSidebarProject(project, projectItem);
    navProjectsContent.appendChild(projectItem);
  }
  
  function clickSidebarProject(project, projectItem) {
    projectItem.addEventListener("click", () => {
      mainTasksHeader.textContent = project.name;
      mainTasksContentNone.textContent = ''; 
      const plusSignText = document.createTextNode('Click on the plus sign to add more tasks!');
      const plusSignIcon = document.createElement('i');
      plusSignIcon.classList.add('fas', 'fa-plus'); 
      plusSignIcon.style.cursor = 'pointer';
      plusSignClick(plusSignIcon);
      mainTasksContentNone.appendChild(plusSignIcon);
      mainTasksContentNone.appendChild(plusSignText);
    })
  }

  function plusSignClick(plusSignIcon)
  {
    plusSignIcon.addEventListener("click", () => {
      mainTasksContentForm.style.display = "flex";
    })
  }

  formX.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("we in here")
    taskTitle.value = "";
    dateTimeBtn.value = "";
    console.log(" reseting")
    mainTasksContentForm.style.display = "none";
    console.log("switched display")
  })



  return {};
})();

export default domManipulation;