//Maplar- Key-Value

let myMap=new Map(); // map yaratmaq



const key1="Farid";
const key2={a:10,b:20};
const key3=()=> 2;

//Set
myMap.set(key1,"String Deyer");
myMap.set(key2,"Object Literal Deyer");
myMap.set(key3,"Function Deyer");
// console.log(myMap);


//Get
// console.log(myMap.get(key1))
// console.log(myMap.get(key2))
// console.log(myMap.get(key3))

//Size-nece dene element var
// console.log(myMap.size); //3


// const cities=new Map();

// cities.set("Ankara",5); 
// cities.set("Istanbul",15);
// cities.set("Izmir",3);
// cities.clear(); //remove all elements
// cities.delete("Ankara") //remove element
// console.log(cities.has("Ankara")); // true 
// console.log(cities);

// For Each
// cities.forEach(function(value,key){
//     console.log(key,value)
// })


//For of
// for(let value of cities){
//     console.log(value)  //key value Array kimi qaytarir ['Ankara',5]
// }

// for(let [key,value] of cities){  //Destructing 
//     console.log(key,value)
// }


//Map keys
// for(let key of cities.keys()){
//     console.log(key);  //Sadece key'leri yazdirmaq
// } 

//Map values
// for(let value of cities.values()){
//     console.log(value);  //Sadece value'leri yazdirmaq
// } 


//Arraylerden Map yaratmaq
// const array=[["key1","value1"],["key2","value2"]];
// const lastMap=new Map(array);
// console.log(lastMap)


//Maplardan Array yaratmaq
const cities=new Map();
cities.set("Ankara",5); 
cities.set("Istanbul",15);
cities.set("Izmir",3);

const array=Array.from(cities)
// [['Ankara', 5],['Istanbul', 15],['Izmir', 3]]
console.log(array);
