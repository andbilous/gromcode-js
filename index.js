const listElem = document.querySelector(".list");
const inputElem = document.querySelector(".task-input");
const createBtn = document.querySelector(".create-task-btn");

const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const generateId = () => Math.floor(Math.random() * 10000).toString();

const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.setAttribute("data-id", index);
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

const addTask = () => {
  if (!inputElem.value) {
    return;
  }
  const newTask = {
    text: inputElem.value,
    done: false,
  };
  tasks.push(newTask);
  renderTasks(tasks);
};

const toogleTask = (e) => {
  if (e.target.classList.contains("list__item-checkbox")) {
    const { id } = e.target.dataset;
    tasks[id].done = e.target.checked;
    renderTasks(tasks);
  }
};

listElem.addEventListener("click", toogleTask);

createBtn.addEventListener("click", addTask);

renderTasks(tasks);
