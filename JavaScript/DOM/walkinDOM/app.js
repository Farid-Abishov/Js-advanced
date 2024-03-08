let value;
const todolist=document.querySelector(".list-group");
const todo=document.querySelector(".list-group-item:nth-child(2)");
const cardrow=document.querySelector(".card.row");


//Chilnode--Text Daxil  
value=todolist.childNodes;

//Children--Element
value=todolist.children;
value=todolist.children[0].textContent="Farid";
value=todo;


value=cardrow;
value=cardrow.children[2].children[1].textContent="lalala"


value=todolist.firstElementChild; //children[0]  yazmaq evezine
value=todolist.lastElementChild;
value=todolist.children.length;

//Parent element--bir ust element tapma
value=cardrow.parentElement; 

//Sibling element--paralel olan taglar
value=todo.previousElementSibling;
value=todo.nextElementSibling;
value=todo.nextElementSibling.nextElementSibling;
value=todo.previousElementSibling.previousElementSibling; //null
console.log(value);