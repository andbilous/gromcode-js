export const getItemsList = ()=>{
  const elems = document.querySelectorAll('.technology');
  console.dir(elems);
  return elems;
}

export const getItemsArray = () =>{
  const elems = document.querySelectorAll('.tool');
  const arr = Array.from(elems);
  console.dir(arr);
  return arr;
}