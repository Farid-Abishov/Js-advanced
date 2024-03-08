//Syntactic Sugar
//Ilk Constructor yaradiriq

// function Employee(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }
// Employee.prototype.showinfos=function(){
//     console.log("Ad: "+ this.name+" yas:"+this.age+" maas: "+this.salary);
// }
// const emp=new Employee("Farid",21,1000);
// console.log(emp)
// emp.showinfos();



//ES6
class Employee {
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    showinfos(){
        console.log("Ad: "+ this.name+" yas:"+this.age+" maas: "+this.salary);
    }
}
const emp=new Employee("Farid",21,1000);
console.log(emp)
emp.showinfos();