//Call ,Apply,Bind-Function prototype'nin icinde olan 3 dene method'dur
//bir Function'u ferqli objectlerde istifade ede bilirik
const obj1={
    number1:10,
    number2:20
}
const obj2={
    number1:30,
    number2:40
}

function addNumbers(number3,number4){
    console.log(this.number1+this.number2+number3+number4)
}

//Call
// addNumbers.call(obj1,100,200)
// addNumbers.call(obj2,100,200)


//Apply Call'la birebir eynidir lakin argumentleri array seklinde vermek lazimdir
// addNumbers.apply(obj1,[100,200])



//Bind-Function'un copy'sini yaradir ve bunu isdediyimiz yerde istifade ede bilerik
function getNumbers(number3,number4){
  return this.number1+this.number2+number3+number4
}

const copyFunc1=getNumbers.bind(obj1);
const copyFunc2=getNumbers.bind(obj2);
console.log(copyFunc1(100,200))
console.log(copyFunc2(100,200))


//Bunlarin harda istifade olunmasi novbeti derse bax