let doList = document.querySelector(".search-list");
let toDoInput = document.querySelector(".search input");
let Add = document.querySelector(".search button");
let userMsg = document.querySelector(".warning p");
function addTask(taskText) {
    if (taskText.trim() === "") {
        userMsg.innerHTML = "You must write something.";
        return;
    }

    userMsg.innerHTML = "";

    let todos = JSON.parse(localStorage.getItem("todo")) || [];

    todos.push(taskText);
    localStorage.setItem("todo", JSON.stringify(todos));

    let taskBox = document.createElement("div");
    let task = document.createElement("p");
    task.textContent = taskText;
    task.classList.add('do', 'fw-bold');
    taskBox.appendChild(task);
    taskBox.classList.add('task', 'rounded-4');
    const buttons = document.createElement("div");
    buttons.classList.add('d-flex', 'gap-2')
    const checked = document.createElement('button');
    checked.innerHTML = '<i class="fas fa-check"></i>';
    checked.classList.add('check-btn', 'border-0', 'ps-3', 'pe-3', 'pt-2', 'pb-2', 'rounded-3');
    buttons.appendChild(checked);


    const deleted = document.createElement('button');
    deleted.innerHTML = '<i class="fas fa-trash"></i>';
    deleted.classList.add('delete-btn', 'border-0', 'ps-3', 'pe-3', 'pt-2', 'pb-2', 'rounded-3');
    buttons.appendChild(deleted);
    taskBox.appendChild(buttons);

    doList.appendChild(taskBox);

    toDoInput.value = "";
    getTodo();
}

Add.addEventListener("click", () => {
    addTask(toDoInput.value);
});
function getTodo() {
    doList.innerHTML = "";
    let done = JSON.parse(localStorage.getItem("done")) || [];
    let todos = JSON.parse(localStorage.getItem("todo")) || [];
    todos.forEach((element, index) => {
        let taskBox = document.createElement("div");
        let task = document.createElement("p");
        task.textContent = element;
        task.classList.add('do', 'fw-bold');
        taskBox.appendChild(task);
        if (done.includes(element)) {
            taskBox.classList.add('task-checked', 'rounded-4');
        } else {
            taskBox.classList.add('task', 'rounded-4');
        }

        const buttons = document.createElement("div");
        buttons.classList.add('d-flex', 'gap-2');

        const checked = document.createElement('button');
        checked.innerHTML = '<i class="fas fa-check"></i>';
        checked.classList.add('check-btn', 'border-0', 'ps-3', 'pe-3', 'pt-2', 'pb-2', 'rounded-3');
        buttons.appendChild(checked);
        checked.addEventListener("click", () => {
            taskBox.classList.replace('task', 'task-checked');
            if (!done.includes(element)) {
                done.push(element);
                localStorage.setItem("done", JSON.stringify(done));
            }
        });


        const deleted = document.createElement('button');
        deleted.innerHTML = '<i class="fas fa-trash"></i>';
        deleted.classList.add('delete-btn', 'border-0', 'ps-3', 'pe-3', 'pt-2', 'pb-2', 'rounded-3');
        buttons.appendChild(deleted);

        deleted.addEventListener("click", () => {
            todos.splice(index, 1);
            done = done.filter((item,) => item !== index);
            localStorage.setItem("todo", JSON.stringify(todos));
            localStorage.setItem("done", JSON.stringify(done));
            getTodo();
        });

        taskBox.appendChild(buttons);
        doList.appendChild(taskBox);
    });
}

getTodo();
