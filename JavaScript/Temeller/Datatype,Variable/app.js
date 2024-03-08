// var a,b,c;
// a=10;
// b=20;
// c=30;
// console.log(a,b,c);

//Dəyişən tipləri 2 cür olur :Primitive və Reference

//Primitive

/*NUMBER*/
// var a=20;
// var b=3.14;
// console.log(typeof a);
// console.log(typeof b);

/*STRING= yazı*/
// const name="Farid";
// console.log(typeof name);

/*BOOLEAN=mentiq */
// var a=true;
// console.log(typeof a);


/*NULL*/
// var a=null;
// console.log(typeof a); //object cixir amma  bu JSde bir xetadir ,primitive deyisen tipidir eslinde.Hec bir deyer dasimir


/*UNDEFINED--Declare edilir lakin Hec bir deyer verilmir */
// var a;
// console.log(typeof a);



//Reference

/*ARRAY */
// var numbers=[1,2,3,4,5]
// console.log(numbers);
// console.log(numbers[0]);
// console.log(typeof numbers);


/*OBJECT */
// var person={
//     name:"Ferid",
//     age:21
// }
// console.log(person)
// console.log(typeof person)


/*FUNCTION */
// var hello=function(){
//     console.log("salam necesen");
// }
// hello();
// console.log(typeof hello);
// console.log(hello)


/*Reference tipin ozelliyi  */
// var a=[1,2,3];
// var b=a;
// a.push(4);
// console.log(b );