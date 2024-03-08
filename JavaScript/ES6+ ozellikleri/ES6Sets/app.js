// Setler-Klasterler

const mySet= new Set();

mySet.add(100)
mySet.add(120)
mySet.add(3.14)
mySet.add("Farid")
mySet.add(true)
mySet.add([1,2,3,4])
mySet.add({a:10,b:20})
// console.log(mySet);

const mySet2=new Set([100,120,3.14,"Farid",true,{a:10,b:20}])  //Arraydan bir set duzeltdik
// console.log(mySet2);

//for Each
// mySet2.forEach(function(value){
//     console.log(value);
// })


//For of
// for(let value of mySet2){
//     console.log(value);
// }


//Setlerden array yaratmaq
 const array=Array.from(mySet2);
 console.log(array);