let value;
//Stringe çevirme
value=String(123);
value=String(3.24);
value=String(true);
value=String(function(){console.log()});    
value=(10).toString();

//Number'a cevirme
value=Number("123");
value=Number("3.32");
value=Number(null);   //0-olur Number
value=Number(undefined); //Nan
value=Number("salam");  //Nan
value=Number(function(){console.log()});//Nan
value=parseFloat("3.14")//3.14 number
value=parseInt("3.14") // 3 number


const a=34+"34"; //3434 String
// const a=34+Number("34");  68 number
console.log(a)
console.log(typeof a)



console.log(value);
console.log(typeof value)