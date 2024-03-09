//Static method-Object yaratmadan bu metodan istifade etmek

class Mathematic{
    sqrt(x){
        console.log(x*x)
    }
    static cube(x){
        console.log(x*x*x);
    }
}

Mathematic.cube(2) //Object yaratmadan biz cube metodundan istifade edirik
// Mathematic.sqrt(2);
//Static method Class'in prototype'na yazilmir ona gore de
const math=new Mathematic();
console.log(math)   
// math.cube(3); //error
math.sqrt(2); // 4
