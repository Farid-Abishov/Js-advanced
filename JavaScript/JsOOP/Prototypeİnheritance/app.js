//ES6-dan sonra bu terz miras prosesleri edilmemey baslair ,isin arxa plani ucun bilmeliyik
//Inheritance-Bir Objectin basqa bir Objectden methodlarini ,ozelliklerini miras almasidir

function Person(name,age){
  this.name=name;
  this.age=age;
}
Person.prototype.showinfos=function(){
    console.log("Ad "+this.name+"Yaş "+this.age);
}
// const person=new Person("Farid",21);
// console.log(person)

function Employee(name,age,salary){ 
   this.name=name;
   this.age=age;
   this.salary=salary;
}
Employee.prototype=Object.create(Person.prototype);
const emp1= new Employee("Nurlan ",21,1000);
console.log(emp1)
emp1.showinfos() //Person metodun miras alaraq istifade edildi. 19cu setirdeki kod yazilmasaydi showinfos method istifade olunmayacaq