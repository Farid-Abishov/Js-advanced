//Destructing---Arraylardan,Objectlerden deyerleri almaq ucun  istifade edilen qisa yoldur


//Kohne usul
// let number1,number2,number3;
arr=[100,200,300,400];
// number1=arr[0];
// number2=arr[1];
// console.log(number1,number2)
// console.log(...arr);

//Destructing
// [number1,number2,number3]=arr;
// [number1,number2,number3]=[100,200,300,400]; //eslinde bu demekdir sadece destructing ederek qisaltdiq
// const [number1,number2] =arr; //bir setirde yazsaq
// console.log(number1,number2)




//OBJect destructing
// const numbers={
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// }

// let number1=numbers.a; //Old way

//Destructing
// const{number1,number2}=numbers; // // console.log(number1,number2}undefined olacaq
// const{a:number1,c:number2,e:number3}=numbers;
// console.log(number1,number2,number3);




/*Function Destructing */
const getLangs=()=>["Pyhton","java","C++","Js","Mongo"];
// const [lang1,lang2,lang3,...rest]=getLangs();
// console.log(lang1,lang2,lang3,rest);
// console.log(getLangs())

