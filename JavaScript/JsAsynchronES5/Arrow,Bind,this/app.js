const person={
    age:25,

    tellage:function(){
        //this-person
        // console.log(this);
    },
    tellage2:()=>console.log(this)

    //this-window
}

person.tellage();
person.tellage2()