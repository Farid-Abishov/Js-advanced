//Function tanimlama
// function helloWorld(name="bilgi yoxdu",age="bilgi yoxdur"){
//     // if(typeof name==="undefined") name="bilgi yoxdur" //melumat daxil edilmirse function argumentine  default olaraq info yazilmasi
//     // if(typeof age==="undefined")  age="bilgi yoxdur"
//     console.log( `"Ad:" ${name} "yas:" ${age}`);
// }
// helloWorld("Farid",21);
// helloWorld();



/*

function square(x){
    //console.log(x*x);  // RETURN VE CONSOLE.LOG FERQI  
    return x*x;
}

function cube(x){
    // console.log(x*x*x)
    return x*x*x;
}

let a=cube(square(2))
console.log(a)

*/




/*
function hello(){
    return "Hello"
};
console.log(hello());
*/


/* FUNCTION EXPRESSION  --- Function yazdiq buna bir ad vermedik cunki oz bir deyisene beraberdi */
// const hello=function(name){
//     console.log("Salam " +name);
// }
// hello("Ferid")



/*

Jsde 4 cur Function  var
1.Normal
2.Arrow
3.Invoked 
4.Callback
 */


// Callback Function
// function greeting(name) {
//     alert('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);

//INVOKE FUNCTION
(function(name){
    console.log("salam "+name)
})("Farid")