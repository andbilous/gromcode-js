/* eslint-disable no-param-reassign */
const listElem = document.querySelector(".list");
const inputElem = document.querySelector(".task-input");
const createBtn = document.querySelector(".create-task-btn");
let newTask;

const tasks = [
  { id: "1", text: "Buy milk", done: false },
  { id: "2", text: "Pick up Tom from airport", done: false },
  { id: "3", text: "Visit party", done: false },
  { id: "4", text: "Visit doctor", done: true },
  { id: "5", text: "Buy meat", done: true },
];

const generateId = () => Math.floor(Math.random() * 10000).toString();

const renderTasks = (tasksList) => {
  console.log(tasks);
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.setAttribute("data-id", id);
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
  console.log(tasksElems[1]);
};

inputElem.addEventListener("change", (e) => {
  newTask = { id: generateId(), text: e.target.value, done: false };
});

listElem.addEventListener("click", (e) => {
  const { id } = e.target.dataset;
  tasks.map((item) => {
    if (item.id === id) {
      item.done = !item.done;
      return item;
    }
    return item;
  });
  renderTasks(tasks);
});

createBtn.addEventListener("click", () => {
  if (newTask) {
    tasks.push(newTask);
    newTask = undefined;
    renderTasks(tasks);
    inputElem.value = "";
  }
});

renderTasks(tasks);
