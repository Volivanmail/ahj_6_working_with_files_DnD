export class Todo {
  constructor(elementList) {
    this.elementList = elementList;

    this.addForm = this.addForm.bind(this);

    this.elementList.forEach((element) => {
      this.element = element;
      element.addEventListener("click", this.addForm);
    });
  }

  addForm(e) {
    e.preventDefault();
    // console.log(this.element);
    const parent = this.element.closest(".form-todo");
    // console.log(parent);
    const label = document.createElement("label");
    const input = document.createElement("textarea");
    const button = document.createElement("button");
    const addFormLink = parent.querySelector(".form-todo-link");
    parent.prepend(label);
    label.appendChild(input);
    label.appendChild(button);
    label.classList.add("label");
    input.classList.add("input");
    button.classList.add("button");
    button.textContent = "Добавить задачу";
    input.placeholder = "Описание задачи";
    input.required = true;
    input.rows = 5;
    input.maxLength = 300;
    addFormLink.style.display = "none";
  }
}
