export const createButton = (text) => {
  const btn = document.createElement("button");
  btn.textContent = text;
  document.querySelector("body").appendChild(btn);
};
