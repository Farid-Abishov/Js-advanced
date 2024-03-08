const cardbody=document.querySelectorAll(".card-body")[1];
const title=document.querySelector("#tasks-title");

//Mouse events

//Click event
// title.addEventListener("click",run);

//Double Click
// title.addEventListener("dblclick",run);

//Mouse Down --clicke benzeyir
// title.addEventListener("mousedown",run);

//Mouse Up--clickden cixdiqmiz zaman yaranir
// title.addEventListener("mouseup",run);


//Mouseover-elementin uzerine geldiyimiz an ,hover kimi
// title.addEventListener("mouseover",run);

//Mouseout-elementin uzerne gelib cixdiqimiz an
// title.addEventListener("mouseout",run);

// function run(e){
//     console.log(e.type ,"salam");
// }



//Input Events
const filter=document.getElementById("filter");

//Focus event
// filter.addEventListener("focus",run)

//Blur event--Input focuse'dan cixanda 
// filter.addEventListener("blur",run)

//Paste event--Inputa neyise copy edib yapisdiranda bas verir
// filter.addEventListener("paste",run)


//Copy event
// filter.addEventListener("copy",run)

//Cut event
// filter.addEventListener("cut",run)

//Select event--Inputdaki yazini secende 
// filter.addEventListener("select",run)

function run(e){
    console.log(e.type)
}