// const items = document.querySelector('.items');

// const itemsElements = items.querySelector('.items-item');

// let actualElement;

// const onMouseOver = (e) => {
//     console.log(e);

//     actualElement.style.top = e.clientY + 'px';
//     actualElement.style.left = e.clientX + 'px';
// };

// const onMouseUp = (e) => {
//     const mouseUpItem = e.target;

//     items.insertBefore(actualElement, mouseUpItem);

//     actualElement.classList.remove('dragged');
//     actualElement = undefined;

//     document.documentElement.removeEventListener('mouseup', onMouseUp);
//     document.documentElement.removeEventListener('mouseover', onMouseOver);
// };

// items.addEventListener('mousedown', (e) => {
//     e.preventDefault();

//     actualElement = e.target;

//     actualElement.classList.add('dragged');

//     document.documentElement.addEventListener('mouseup', onMouseUp);
//     document.documentElement.addEventListener('mouseover', onMouseOver);
// })
