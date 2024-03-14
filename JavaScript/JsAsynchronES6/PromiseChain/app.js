//Rest api'a request gonderen zaman promise'den istifade ede bilerik
function getData(data){// Promise Objectini qaytaran function 
  
   return new Promise(function(resolve,reject){
       setTimeout(() => {
            if(typeof data==="string"){
              resolve(data)
            }
            else{
              reject (new Error("String bir deyer girin."))
            }
          
       },3000);
   });


}
getData("salam")
.then(response=> console.log(response))
.catch(err=>console.error(err))