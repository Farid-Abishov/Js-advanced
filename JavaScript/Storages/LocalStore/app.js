//Local Storage

// localStorage.setItem("sa",'sdsads');
// localStorage.setItem("scda",50);


//Get item
// const value=localStorage.getItem("scda");

//clear item
// localStorage.clear();

//Local storage -Array yazma
const arr=["bir","iki","uc"];

localStorage.setItem("arr",JSON.stringify(arr));

value=JSON.parse(localStorage.getItem("arr"));
console.log(value);
