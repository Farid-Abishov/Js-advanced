// Elementin,tag'in atributlarini deyisdirmek ,silmek,add elemek
// class add elemek
let element;
const todoinput=document.getElementById("todo");


// console.log(todoinput.classList);
todoinput.classList.add("salam");
todoinput.classList.remove("salam");


element=todoinput.getAttribute("placeholder"); //atribute --bir todo girin
element=todoinput.getAttribute("class"); //atribute --form-control
element=todoinput.getAttribute("id"); //atribute --todo
element=todoinput.setAttribute("placeholder","salam")  //atribute deyisdirmek
todoinput.removeAttribute("placeholder"); //placeholder atribute silinir

element=todoinput;

console.log(element);