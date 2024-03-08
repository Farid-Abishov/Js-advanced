const element=document.querySelector("#clear-todos");
//Element ozəllikləri
// console.log(element.id);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.className);
// console.log(element.textContent); //yalniz tag icinde yazilan sozu :sTüm Taskları Temizleyin
// console.log(element.innerHTML); //Tag icinde yazilmis taglari bele string kimi verir: <p>s</p>Tüm Taskları Temizleyin

/*Ozəlikləri dəyiştirmə */
// element.className="btn btn-primary";
// element.style.color="#000";
// element.href="https://www.youtube.com";
// element.target="_blank";
// element.textContent="Silin";

// const el=document.querySelectorAll(".list-group-item");
// el.forEach(function(e){
//     e.style.color="red";
// })

let element2=document.querySelector("li:last-child");
 element2=document.querySelector("li:first-child");
 element2=document.querySelector("li:nth-child(2)");
 element2=document.querySelector("li:nth-child(3)"); 
 element2=document.querySelectorAll("li:nth-child(odd)"); // 1 ve 3cu 
 element2=document.querySelectorAll("li:nth-child(even)"); // 2 ve 4cu 

 element2.forEach(function(e){
    e.style.background="#ccc"
    e.style.color="red "
 })

console.log(element2);






// console.log(element);