//Spread operator

// const langs=["Python","C++","Php","Java"]
// console.log(langs[0],langs[1],langs[2],langs[3]);

//SPREAD OPERATOR
// console.log(...langs); //--console.log(langs[0],langs[1],langs[2],langs[3]); bu hala cevirir SPREAD operator 

// const langs2=["C#","JavaScript",...langs]  
// console.log(langs2);

// const numbers=[1,2,3,4,5,6,7,8,9];
// const [a,b,...number2]=numbers;

// console.log(a,b);
// console.log(number2)


//Arraydaki deyerleri functionda istifade etmek istesek
const addNumbers=(a,b,c)=>console.log(a+b+c);
const numbers=[100,200,300];
addNumbers(...numbers); //Spread 

// addNumbers(numbers[0],numbers[1],numbers[2]) // Köhnə üsul