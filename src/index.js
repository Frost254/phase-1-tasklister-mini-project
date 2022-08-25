document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        handleTodo(e.target.new_task_description.value);
        form.reset();
    })
});

function handleTodo(todo) {
    console.log(todo);
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.textContent = " X "
    btn.addEventListener("click", handleDelete);
    li.textContent = `${todo}  `;
    li.appendChild(btn);
    document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e) {
    e.target.parentNode.remove();
}