//While 
// let i=0;
// while(i<=10){  //sonsuz dovr
//     console.log(i); 
//     i+=2;
// }

// let i=0;
// while(i<=10){
//   console.log(i);
//   if(i==5){
//     break;
//   }
//   i++;
// }

// let langs=["Rus","Eng","Alman"];
// let index=0;
// while(index<langs.length){
//     console.log(langs[index]);
//     index++;
// }

/*FOR  */
// let langs=["Rus","Eng","Alman"];
// for(index=0;index<langs.length;index++){
//     console.log(langs[index]);
// }


/**FOR EACH--Her bir elementin uzerinde tek-tek gezir */
// lang-ı javascript ozu gonderir.  lang her dongude 1-ci Rus sora Eng sora Alman olur
//Bu Rus,Eng,Alman hansi array indexine uygun olduqnu yazdirmaq ucun langdan sonra istenilen deyisen  yaza bilerik js avtomatik gonderir .Meselen  index,salam,Kitab 
let langs=["Rus","Eng","Alman"];
langs.forEach(function(lang,Kitab ) {
   console.log(lang,Kitab ); 
});



//MAP functionu -Reactda cox istifade olunur
const users=[
{name:"Farid",age:31},
{name:"Brad",age:43},
{name:"Joey",age:12},
{name:"Ali",age:21},
];

// bu objectdeki adlardan ibaret olan array duzeltmek istesek
const names=users.map(function(user){
    return user.name;
})
const ages=users.map((user)=>user.age);
console.log(names);
console.log(ages);


// It creates a new array by calling a function on every element of the original array and storing the results in a new array
const posts = [
    { id: 1, title: "Sample Title 1", description: "Lorem ipsum dolor sit amet" },
    { id: 2, title: "Sample Title 2", description: "Lorem ipsum dolor sit amet" },
    { id: 3, title: "Sample Title 3", description: "Lorem ipsum dolor sit amet" },
  ];
  const postIds = posts.map((post) => post.id); //arrow function =>
  console.log(postIds)


  //FOR IN & FOR OF

  let list = [4, 5, 6];

  for (let i in list) {
     console.log(i); // "0", "1", "2",  indexleri qaytarir
  }
  
  for (let i of list) {
     console.log(i); // "4", "5", "6"  obyektin ozunu 
  }

 