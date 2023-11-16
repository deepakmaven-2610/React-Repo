class Animal
{
    constructor(name,height,weight)
    {
        console.log("Create animal name ", name);
        this.name=name;
        this.height=height;
        this.weight=weight;

    }
    nameLength()
    {
        return this.name.length;
    }
}

Animal.planet = "Earth";
var dog = new Animal("Tommy", 124, 24);
var fish =  new Animal("Goldi", 2, 6);

console.log(dog.constructor.planet);
console.log(dog.nameLength());


class Dog extends Animal
{
    constructor(name,height,weight,barkVolume)
    {
        super(name,height,weight);
        this.barkVolume=barkVolume;
    }
    back()
    {
        if(this.barkVolume>50)
        {
            console.log(this.name,"Bark is loud");
        }
        else
        {
            console.log(this.name,"Bark is not loud");
        }
    }
}

var tommy = new Dog("tommy",120,24,56);
tommy.back();