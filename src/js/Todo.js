export class Todo {
  constructor(element) {
    this.element = element;

    this.addEventListener("click", this.addForm);
  }

  addForm(e) {
    e.preventDefault();
    const label = document.createElement("label");
    const input = document.createElement("input");
    const button = document.createElement("button");
  }
}
