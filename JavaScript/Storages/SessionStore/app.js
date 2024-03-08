//Butonlarin secimi
const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const clear=document.querySelector("#clear");
//Input secimi
const addkey=document.querySelector("#addkey")
const addvalue=document.querySelector("#addkey")
const deletekey=document.querySelector("#addkey")

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);


function addItem(){
    sessionStorage.setItem(addkey.value,addvalue.value)
}

function deleteItem(){
    sessionStorage.removeItem(deletekey.value)
}

function clearItems(){
    sessionStorage.clear()
}
// console.log(addkey);