//Es6 Inheritance
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//   }
//   Person.prototype.showinfos=function(){
//       console.log("Ad "+this.name+"Yaş "+this.age);
//   }
//   // const person=new Person("Farid",21);
//   // console.log(person)
  
//   function Employee(name,age,salary){ 
//      this.name=name;
//      this.age=age;
//      this.salary=salary;
//   }
//   Employee.prototype=Object.create(Person.prototype);
//   const emp1= new Employee("Nurlan ",21,1000);
//   console.log(emp1)
//   emp1.showinfos() //Person metodun miras alaraq istifade edildi.



////Es6 Inheritance
class Person{  //Superclass,BaseClass
    constructor(name,age){
      this.name=name;
      this.age=age;
    }
    showinfos(){
        console.log("Ad "+this.name+" Yaş "+this.age);
    }
}

class Employee extends Person { //DerivedClass,SubClass
    constructor(name,age,salary){
        // this.name=name;
        // this.age=age;
        super(name,age);
        this.salary=salary; 
      }
      showinfos(){
        console.log("Ad "+this.name+" Yaş "+this.age+" Maas "+this.salary);
    } //overriting etdik ve bu metod istifade oluncaq +salary yazilan
}

const emp=new Employee("Farid",21,1000);
// console.log(emp)
emp.showinfos()