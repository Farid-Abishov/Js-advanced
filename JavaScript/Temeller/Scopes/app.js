/*
Scope-əhatə dairəsi deməkdir
Scope anlayışı bir dəyişənin haralarda var ola bildiyi ilə bağlıdır.
bir dəyişən function içində yaradılıbsa bu functiondan çöldə mövcuddumu?
bir if blokunun içində yaradılıbsa bu blokdan çöldə mövcuddumu?
və s

1-Global Scope
2-Function Scope
3-Block scope
*/

//Global scopeda yaradilan herbir deyer isdenilen scopeda istifade edile bilir.


//Function scope
//Function scope-nun icinde yaradilan deyerler  bu scopedan colde movcud olmur.
var a=10;
let b=20;
const c=30;
function Func(){
    var a=14;
    let b=40;
    const c=50;
    console.log(a,b,c)
}
Func();
console.log(a,b,c);



//Block
/*
Bir blok icerisinde var ile yaradilan deyisen bu blokdan colde de movcuddur,
lakin let ve constla yaradilan deyisen movcud olmur.
 */
// var a=20;
// if(true){
//     var x=10;
//     let y=2;
//     const z=3;
// }
// console.log(x )  //10
// 10  çöldəki a-nın da dəyərin dəyişdirmiş oluruq və problem yarada bilər
