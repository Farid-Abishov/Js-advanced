//Set TimeOut --Her hansi prosesi mueyyen zaman sonra basladir

// setTimeout(function(){
// console.log("salam");
// },2000); // 2san


//Set Interval--mueyyen muddet araliqinda prosesi tekrarlayir
let i=0;
let value=setInterval(function(){
 i++;
 console.log(i);
},2000)

//Clear Interval-Dayandirmaq ucun
const Btn=document.getElementById("btn");
Btn.addEventListener("click",function(){
    clearInterval(value);
})
