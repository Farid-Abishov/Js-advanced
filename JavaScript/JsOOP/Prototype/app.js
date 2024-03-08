//Prototype--JavaScriptde Class yoxdur,ES6 class seklinde yaziriq lakin arxa terefde prototype'lara cevrilir
//Her Objectin Prototype ozeliyi var ve onun icinde de bir dene Object prototype var ve bunun sayesinde en temel prototypede yazilan yeni  object prototypeda yazilan methodlari Miras ala bilirk.
//Prototype Objectler arasi Inheritance,yəni miras almaqimizi sağlayır
// Iki Objectin ortaq methodlarini Prototype icine yaziriq --Iki eyni method kopyasi olusturmuruq

function Employee(name,age,){
    this.name=name;
    this.age=age;
    // this.showinfo=function(){
    //     console.log("Ad:" +this.name +"  Yaş:"+this.age);
    // }  //her object bu showinfo metoduna sahib olsa yaddasda yer dolacaq menasiz yere**
}
Employee.prototype.showinfo=function(){ //butun objectler bu prototype'a sahib olduqu ucun showinfo methoduna sahib olur
    console.log("Ad:" +this.name +" Yaş:"+this.age);
} 
const emp1=new Employee("Farid",21)
const emp2=new Employee("Ali",23)
console.log(emp2)
emp2.showinfo();
