export function dragAndDrop(e, element) {
  const closest = document.elementFromPoint(e.clientX, e.clientY);
  const { top } = closest.getBoundingClientRect();

  if (closest.classList.contains("todo-container")) {
    if (e.pageY > window.scrollY + top + closest.offsetHeight / 2) {
      closest
        .closest(".todo")
        .insertBefore(element, closest.nextElementSibling);
    } else {
      closest.closest(".todo").insertBefore(element, closest);
    }
  } else if (
    closest.classList.contains("todo") &&
    !closest.querySelector(".todo-container")
  ) {
    closest.append(element);
  }
}
