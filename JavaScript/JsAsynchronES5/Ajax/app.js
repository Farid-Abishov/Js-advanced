const Btn=document.getElementById("btn");
const Ajax=document.getElementById("ajax")
/*
Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
*/
Btn.addEventListener("click",function(){
    //XMLHttpRequest
    const xhr=new XMLHttpRequest();
    
    xhr.onload=function(){  //bu function sadece response hazir olanda isleir
     if(this.status==200){
        console.log(this.responseText);
        Ajax.textContent=this.responseText; //div'in icine yazdiq response'u
     }
    }


    // xhr.onreadystatechange=function(){  //bu function readystate her deyisende calisir 4 defe yeni
    //     if(this.status==200 && this.readyState==4){
    //         console.log(this.responseText);
    //     }
    //     // console.log(this.responseText);
    // }
    
    xhr.open("GET","example.txt",true)
    xhr.send();
})