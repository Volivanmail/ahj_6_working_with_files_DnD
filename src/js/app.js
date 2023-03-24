import { Todo } from "./Todo";

const todo = new Todo(document.querySelectorAll(".column"));

document.addEventListener("DOMContentLoaded", () => {
  todo.loadTasks();
//   if (storageData !== null) {
//     display.initTasks(storageData);
//   } else return;
});
