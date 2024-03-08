//Arrow Function-Yazılım asanlığı verir


// const hello=()=>{
//     console.log("salam");
// }
// hello();


// const hello=(firsName,lastName)=>{
//     console.log("hello",firsName,lastName);
// }
// hello("Farid","Abishov")



//Function bir dənə argument,parametr alacaqsa moterizeye ehtiyac yoxdu
// const hello=firstName=>{
//     console.log("salam",firstName);
// }
// hello("Farid");



// const hello=firstName=>console.log("salam",firstName); 
// const hello=(firstName,lastName)=>console.log("salam",firstName,lastName); 
// hello("Farid","Abishov");




// const cube=function(x){
// return x*x*x;
// }
// console.log(cube(3));


// const cube=x=>{
//     return x*x*x;
// }
// console.log(cube(4));



//function bir dene emeliyat icra edirse return yazmaya bilerik tek islem edirik ve return olduqunu anlayir.
const cube=x=>x*x*x;
console.log(cube(5));