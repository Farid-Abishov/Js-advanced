let value;

value=document;
value=document.all;
value=document.all.length;
value=document.all[document.all.length-1];
value=document.all[1];

// const elements=document.all; //HTML collection
// for(let i=0;i<+document.all.length;i++){
//     console.log(elements[i]);
// }


// //HTML collectionda forEach ile gezmek ucun ilk bashda HTML collectionu Arraya cevirmek lazimdi ****
// const collection=Array.from(elements);
// collection.forEach(function(element){
//  console.log(element)
// });

value=document.body;
value=document.location;
value=document.head;
value=document.location.port; //5500
value=document.location.protocol; //HTTP
value=document.location.href; //http://127.0.0.1:5500/DOM/DomObject/index.html
value=document.location.host; //127.0.0.1:5500
value=document.location.hostname; // 127.0.0.1


console.log(value);
