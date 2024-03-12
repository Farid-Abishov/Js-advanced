//Callback Function--Normal bir function'dir lakin biz bunu basqa bir function'a parametr kimi gondere bilerik

// const langs=["Pyhton","Java","C++"];

// langs.forEach(function(lang){
//     console.log(lang);
// })

// const Btn=document.getElementById("btn");

// Btn.addEventListener("click",function(){
//     console.log("click")
// })


// function process1(){
//    setTimeout(function(){
//     console.log("process1");
//    },3000)
// }
// function process2(){
//     setTimeout(function(){
//         console.log("process2");
//     },2000)
// }

// process1();
// process2();
//process2 process1'i gozlemiyecek asinxron olaraq isleyecek 



//Lakin ,biz bunun qarsisini istesek callback ile ala bilerik
// function process1(callback){
//     setTimeout(function(){
//      console.log("process1");
//      callback();
//     },3000)
//  }
//  function process2(){
//      setTimeout(function(){
//          console.log("process2");
//      },2000)
//  }
 
//  process1(process2);



//Her hansi bir deyer alan zaman hansisa function'un islemesini isteyirikse bunu callback ile ede bilirik
const langs=["Pyhton","Java","C++"];

function addLang(lang,callback){ //***
    setTimeout(function(){
        langs.push(lang)
        console.log("Added"); 
        callback(); // ***
    },2000)  
}


function getAlllangs(){
   setTimeout(function(){
    langs.forEach(function(lang){
        console.log(lang)
    })
   },1000)
}

addLang("JavaScript",getAlllangs); //***
// getAlllangs()  

//Asinxron calisdiqi ucun birinci 1saniye muddeti olan calisacaq ve biz deyer elave olunmadan alllangs'i alacagiq
//bunu ise callback ile qarsisin ala bilerik