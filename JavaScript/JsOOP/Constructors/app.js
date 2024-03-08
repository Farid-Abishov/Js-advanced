// console.log(this);
 //Window Objectini gosterir cunki en esas object windowdu.Lakin biz öz objectimizi yaratdiqmizda bu this window objectini yox oz objectimizi gosterecek.


//  const emp1={
//     name:"Farid",
//     age:21
//  }
//  const emp2={
//     name:"Ali",
//     age:24
//  }

// //  Object.freeze(emp1); 
//  emp1.salary=1000; //salary ozelliyini add etdik
//  console.log(emp1);


 //Constructors
 //  const date=new Date(); // Date eslinde JavaScriptde bu sekilde yazilmis functiondir
 //  console.log(date);
 //Tek bir Function yaradiriq ve bundan istediyimiz qeder Object yarada bilirik.
 function Employee(name,age,salary){  //Constructor function -qurucu functioin 
   this.name=name;
   this.age=age;
   this.salary=salary;
   this.showInfos=function(){
    console.log(this.name,this.age);
   }
   console.log(this) //Global scope olsaydi window objectini gostererdi lakin emp1 emp2 objectini gosterir

}
const emp1=new Employee("Farid",21,1000);
const emp2=new Employee("Ali",24,2500);
emp1.showInfos();
console.log(emp1,emp2);