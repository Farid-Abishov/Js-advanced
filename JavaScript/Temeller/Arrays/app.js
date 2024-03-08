//Arrayda birden cox ferqli verilenler saxlana bilir Jsde
var value;
var numbers=[1,3,2,5,49,8];

// numbers.splice(0,3); bu index araliqni ayirir  0 1 2 ,3 daxil deyil.
// value=numbers; 

// value=numbers.reverse()  ters
value=numbers.sort() //ilk reqeme gore artan sira ile duzur 1 ,2 ,3 , 49 ,8 |



// normal artan sira ile duzulmesi ucun function yazmaliyiq 
value=numbers.sort(function(x,y){
    return(x-y)
})
value=numbers.sort(function(x,y){
    return(y-x) //y-x yeni ikinci qebul edeceyi arqument bizim arraydaki 2ci elementdi deye cixanda musbet alir ve azalan yazilir
}) //azalan sira ile 
console.log(value);