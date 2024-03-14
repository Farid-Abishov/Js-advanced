//Fetch ajax'in yerine istifade edeceymiz alternativdir
// function getTextFile(){
//    fetch("example.txt")
//    .then(response=> response.text()) 
//    .then(data=>console.log(data))
//    .catch(err=>console.log(err))
// }
// getTextFile();


//Get JSON
function getJsonFile(){
    fetch("example.json")
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}
getJsonFile();