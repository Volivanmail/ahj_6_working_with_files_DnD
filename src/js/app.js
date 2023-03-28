import { Todo } from "./Todo";
import { dragAndDrop } from "./dnd";

const todo = new Todo(document.querySelectorAll(".column"));

document.addEventListener("DOMContentLoaded", () => {
  const stData = JSON.parse(localStorage.getItem("data"));
  if (stData !== null) {
    todo.loadTasks();
  }
});

const tasks = document.querySelector(".columns");
let draggable = null;
let vanished = null;
let elementWidth;
let elementHeight;
let elementTop;
let elementLeft;

tasks.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("todo-container")) {
    e.preventDefault();
    const { top, left } = e.target.getBoundingClientRect();
    draggable = e.target;
    elementWidth = draggable.offsetWidth;
    elementHeight = draggable.offsetHeight;
    elementLeft = e.pageX - left;
    elementTop = e.pageY - top;

    vanished = e.target.cloneNode(true);
    vanished.innerHTML = "";
    vanished.style.backgroundColor = "darkgray";
    vanished.style.width = elementWidth + "px";
    vanished.style.height = elementHeight + "px";

    draggable.classList.add("dragged");
    e.target.parentNode.insertBefore(vanished, e.target.nextElementSibling);

    draggable.style.width = elementWidth + "px";
    draggable.style.height = elementHeight + "px";
  }
});

tasks.addEventListener("mouseleave", (e) => {
  if (draggable) {
    e.preventDefault();
    vanished.parentNode.removeChild(vanished);
    draggable.classList.remove("dragged");
    draggable.style = "";
    vanished = null;
    draggable = null;
  }
});

tasks.addEventListener("mousemove", (e) => {
  if (draggable) {
    e.preventDefault();
    dragAndDrop(e, vanished);
    draggable.style.left = e.pageX - elementLeft + "px";
    draggable.style.top = e.pageY - elementTop + "px";
  }
});

tasks.addEventListener("mouseup", (e) => {
  if (draggable) {
    dragAndDrop(e, draggable);
    vanished.parentNode.removeChild(vanished);
    draggable.classList.remove("dragged");
    draggable.style = "";
    vanished = null;
    draggable = null;

    todo.saveTasks();
  }
});
