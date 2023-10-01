import { isValid } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import app from './appdata';

class Task {
  constructor(title, description, priority) 
  {
    this.title = title;
    this.dueDate = undefined;
    this.completed = false;
    this.id = uuidv4();
  }

  addDueDate = (date) => 
  {
    const parseDate = new Date(date);
    if (!isValid(parseDate)) return;
    this.dueDate = parseDate;
  };

  toggleCompleted = () => 
  {
    this.completed = !this.completed;
  };

  createTaskFromStorage = (savedTask) => {
    this.title = savedTask.title;
    this.description = savedTask.description;
    this.completed = savedTask.completed;
    this.priority = savedTask.priority;
    this.addDueDate(savedTask.dueDate);
  };
}

function saveTask(target, taskID, project) 
{

  const title = target['add-task-title'].value;
  if (title === '')
  {
      return false;
  } 

  let task;

  if (taskID) 
  {
    task = app.getTaskById(taskID, project);
    task.title = title;
  } 
  else 
  {
    task = new Task(title);
  }

  task.description = target['add-task-description'].value;
  task.addDueDate(target['add-task-date'].value);

  task.priority = undefined;
  target.querySelectorAll('input[type="radio"]').forEach((radio) => {
    if (radio.checked)
    {
        task.priority = radio.value;
    } 
  });

  return task;
}

export { Task, saveTask };