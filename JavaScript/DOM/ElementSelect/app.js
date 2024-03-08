//Element Id'e gore secmek
let element;


element=document.getElementById("todo-form")

//Element Class'a gore secmek
element=document.getElementsByClassName("list-group-item");
element=document.getElementsByClassName("list-group-item")[0]; //ilk li elementi.
//Element Tag'a gore secmek
element=document.getElementsByTagName("div") //butun div taglarini


//Query Selector-Ozelliyi buduki Sehifedeki tek bir elementi secir class eyni olsada .
element=document.querySelector("#todo-form");
element=document.querySelector(".list-group-item");
element=document.querySelector("li");// tag name'a gore secmek 

//Query Selector ile bir yox daha cox element secmek istesek:
//QuerySelectorAll-Butun taglari secir Classname'e gore
element=document.querySelectorAll(".list-group-item");

element.forEach(function(el){
    console.log(el)
})




console.log(element);