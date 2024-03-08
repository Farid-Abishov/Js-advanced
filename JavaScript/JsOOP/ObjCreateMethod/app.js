// const obj={
//     test1:function(){
//         console.log("test 1");
//     },
//     test2:function(){
//         console.log("test 2");
//     },
// }

// const emp=Object.create(obj);
// emp.name="Farid";
// emp.age=21;
// console.log(emp)



//An other Example
//First create empty Constructor
function Person(){

}
Person.prototype.test1=function(){
    console.log("Test 1 ")
}
Person.prototype.test2=function(){
    console.log("Test 2")
}
function Employee(name,age){
   this.name=name;
   this.age=age;    
}

Employee.prototype=Object.create(Person.prototype);

const emp=new Employee("Farid",21);
console.log(emp);
emp.test1();