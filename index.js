const getSection = (num) =>
  document
    .querySelector(`span[data-number="${num.toString()}"]`)
    .parentElement.getAttribute("data-section");
