const filterinput=document.querySelector("#todo");
const todoform=document.querySelector("#todo-form")

// filterinput.addEventListener("focus",function(e){
//      //e event objectidir 
//      console.log(e); //  object cixir
//      console.log(e.type); //focus
//      console.log(e.target);
//      console.log(e.target.placeholder);
//     // console.log("salam");
// })

todoform.addEventListener("submit",function(e){
    console.log("Submit Event")
    
    e.preventDefault() //--> defailt ozelliyi cancel edir 
})