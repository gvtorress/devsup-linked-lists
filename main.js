import { TaskList } from "./task-list.js";
import { Task, TaskStatus } from "./task.js";

const showTasks = (taskList) => {
  taskList.forEach((item) => showTask(item));
};

const showTask = (item) => {
  if (item === null) {
    console.log('Task not found');
    return;
  }
  console.log(item.toString());
};

const task1 = new Task(1, "Daily with a team", "meeting");
const task2 = new Task(2, "Implement some feature", "job", TaskStatus.COMPLETED);
const task3 = new Task(3, "Reading a book", "study", TaskStatus.COMPLETED);
const task4 = new Task(4, "Review a documentation", "job");
const task5 = new Task(5, "Review a project", "meeting");
const task6 = new Task(6, "Deploy a project", "job");
const task7 = new Task(7, "Reading article", "study");


const taskList = new TaskList();

taskList.addTask(task1);
taskList.addTask(task2);
taskList.addTask(task3, 0);
taskList.addTask(task4, 10);
taskList.addTask(task4);
taskList.addTask(task5, 2);
taskList.addTask(task6);
taskList.addTask(task7);

// showTasks(taskList.getTasks());

// console.log('Show tasks by job:')
// showTasks(taskList.getTaskByTag('job'));

// console.log('Show tasks by study:')
// showTasks(taskList.getTaskByTag('study'));

// console.log("Get task by id: 2");
// showTask(taskList.getTaskById(2));

// let id = 3;
// console.log(`Remove task ${id}`);
// taskList.removeTaskById(id);
// showTasks(taskList.getTasks());

// let id = 1;
// console.log(`Set task ${id} to completed...`);
// showTask(taskList.setTaskToCompleted(id));

// showTasks(taskList.getTasks());
// console.log("Update task data:");
// const taskUpdate = new Task(null, "Reading working article", "job");
// showTask(taskList.setTaskDataById(7, taskUpdate));

showTasks(taskList.getTasks());
console.log('Move task...');
taskList.move(7, 1);
showTasks(taskList.getTasks());
