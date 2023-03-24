export class Todo {
  constructor(elementList) {
    this.elementList = elementList;
    this.tasks = {};
    this.addForm = this.addForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);

    this.elementList.forEach((element) => {
      this.element = element;
      element.addEventListener("click", (e) => {
        let target = e.target;
        if (target.classList.contains("form-todo-link")) {
          this.addForm(e);
        } else if (target.classList.contains("form-close")) {
          this.closeForm(e);
        } else if (target.classList.contains("button")) {
          this.addTodo(e);
        } else if (target.classList.contains("todo-delete")) {
          this.deleteTodo(e);
        } else return;
      });
    });
  }

  addForm(e) {
    e.preventDefault();
    const parent = e.target.closest(".form-todo");
    const label = document.createElement("label");
    const input = document.createElement("textarea");
    const button = document.createElement("button");
    const buttonClose = document.createElement("button");
    const addFormLink = parent.querySelector(".form-todo-link");
    parent.prepend(label);
    label.appendChild(input);
    label.appendChild(buttonClose);
    label.appendChild(button);
    label.classList.add("label");
    input.classList.add("input");
    button.classList.add("button");
    buttonClose.classList.add("form-close");
    button.textContent = "Добавить задачу";
    buttonClose.textContent = "X";
    input.placeholder = "Описание задачи";
    input.required = true;
    input.rows = 5;
    input.maxLength = 300;
    addFormLink.style.display = "none";
  }

  closeForm(e) {
    e.preventDefault();
    const parent = e.target.closest(".form-todo");
    const label = parent.querySelector(".label");
    const addFormLink = parent.querySelector(".form-todo-link");
    if (label) {
      addFormLink.style.display = "";
      label.remove();
    }
  }

  createTodo(text) {
    const liTodo = document.createElement("li");
    const delTodo = document.createElement("button");
    liTodo.classList.add("todo-container");
    liTodo.textContent = text;
    delTodo.textContent = "X";
    delTodo.classList.add("todo-delete");
    liTodo.appendChild(delTodo);
    return liTodo;
  }

  addTodo(e) {
    e.preventDefault();
    const parent = e.target.closest(".column");
    const textArea = parent.querySelector(".input");
    const ulTodo = parent.querySelector(".todo");
    ulTodo.appendChild(this.createTodo(textArea.value));
    textArea.value = "";
    this.closeForm(e);
    this.saveTasks();
  }

  deleteTodo(e) {
    e.preventDefault();
    const parent = e.target.closest(".todo-container");
    parent.remove();
    this.saveTasks();
  }

  saveTasks() {
    let currentColumn = 0;
    this.elementList.forEach((element) => {
      let numberColumn = String(currentColumn);
      this.tasks[numberColumn] = [];
      const items = element.querySelectorAll(".todo-container");
      items.forEach((item) => {
        this.tasks[numberColumn].push(item.textContent.slice(0, -1));
      });
      currentColumn++;
    });
    localStorage.setItem("data", JSON.stringify(this.tasks));
  }

  loadTasks() {
    this.tasks = JSON.parse(localStorage.getItem("data"));
    let currentColumn = 0;
    this.elementList.forEach((element) => {
      const ulTodo = element.querySelector(".todo");
      let numberColumn = String(currentColumn);
      const listTodo = this.tasks[numberColumn];
      console.log(listTodo);
      listTodo.forEach((todo) => {
        ulTodo.appendChild(this.createTodo(todo));
      });
      currentColumn++;
    });
  }
}
