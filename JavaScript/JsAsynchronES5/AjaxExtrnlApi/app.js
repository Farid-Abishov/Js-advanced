const Btn=document.getElementById("change");
const InputAmount=document.getElementById("amount");
const inputazn=document.getElementById("azn");
Btn.addEventListener("click",change);

function change(){
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://cdn.moneyconvert.net/api/latest.json")

    xhr.onload=function(){
        if(this.status==200){
            const response=JSON.parse(this.responseText)
            console.log(response);
            const rate=response.rates.AZN;
            const amount=Number(InputAmount.value);

            inputazn.value=amount*rate;
        }
    }
    xhr.send()
}