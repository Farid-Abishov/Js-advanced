let value;
const programmer={
    name:"Ferid Abishov Razi",
    age:21,
    email:"abisovfarid14@gmail.com",
    langs:["Pyhton","Java","Javascript"],

    adress:{
        city:"Baku",
        street:"Zig Sossesi"
    },
    work:function(){
        console.log("Programci calisiyor");
    }
}

value=programmer;

value=programmer.email;
// value=programmer["email"];
value=programmer.langs
value=programmer.adress.city;
programmer.work(); 
 
const programmers =[
    {
        name:"Ali",
        age:25
    },
    {
     name:"Farid",
     age:25,
     adress:{
       city:"Baku",
       street:"Zig sossesi"
     }
    }

]
value=programmers[1].adress.street;
console.log(value)


