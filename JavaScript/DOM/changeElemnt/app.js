//REPLACE
const cardbody=document.querySelectorAll(".card-body")[1];
const oldElement=document.querySelector("#tasks-title")  //h5

const newElement=document.createElement("h3");  //h3 

newElement.id="task-title";
newElement.className="card-title";
newElement.textContent="Yeni todolar";

cardbody.replaceChild(newElement,oldElement) //********** 

