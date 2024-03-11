//Ajax istifade ederek Json faylindaki infolari almaq
const Btn=document.getElementById("ajax");
Btn.addEventListener("click",getAllEmployees);

function getAllEmployees(){
    const xhr=new XMLHttpRequest(); //Object yaradiriq
    xhr.open("GET","employees.json",true)  //true ---Prosesin asinxron olmasini secmekdir
    
    xhr.onload=function(){   
        let list=document.querySelector("#employees");
     if(this.status==200){
        const employees=JSON.parse(this.responseText);
        employees.forEach(function(employee){
             list.innerHTML +=
            ` 
            <tr>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
            </tr> 
           `
        });

     }
    }

    xhr.send();


}
