export const squaredNumbers = () => {
  Array.from(document.querySelectorAll(".number")).map((elem) => {
    const currentValue = elem.getAttribute("data-number");
    elem.setAttribute("data-squared-number", currentValue * currentValue);
    return elem;
  });
};

squaredNumbers();
