//primitves -> numbers, booleans, arrays, loops

let age: number;
age = 12;

let userName : string;
userName = 'Max';

let isInstructor : boolean;
isInstructor = true

//arays and objects
let hobbies: string[];
hobbies = ['sports','cooking'];

type Person = {
    name: string,
    age: number
}

// let person: {
//     name: string,
//     age: number
// }
let person: Person[];

let people: {
    name: string,
    age: number
}[];

//type interference
let course = 'React course'  //here if we assign course to some differnet type then we get error due to type inference


//union type
let courses: string | number = 'React course' ;
courses=1234;

//function and types
function adad(a:number, b:number)
{
    return a + b;    //when we work with functions then the type is added to the return statement also
}

//generics
function insertAtBegining<T>(array: T[], value: T)
{
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBegining(demoArray, -1); //[-1,1,2,3]