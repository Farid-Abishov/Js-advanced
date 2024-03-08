let value;

const firstName="Ferid";
const lastName="Abisov";
const langs="Eng,rus,alman,aze"
value=firstName+" "+lastName
value+=" Razi"
value=firstName.length; // 5
value=firstName.concat(" "+lastName+" "+"Razi");
value=firstName.toLowerCase();
value=firstName.toUpperCase();
value=firstName[1]//1ci indexdeki herf
value=firstName[firstName.length-5] //1ci herf yeni 0-ci indexdeki herf  STRING UZUNLUQUNU BILMEYENDE ISTIFADE ETMEK OLAR


value=firstName.indexOf("r") // herfin durdugu indexi gosterir

value=firstName.includes("f") //herf bu stringde varsa true yoxdursa false 

//SPLIT methodu
value=langs.split(","); //Parcalayib arrayda yazir

//Replace methodu
value=langs.replace("rus","French")
console.log(value); 