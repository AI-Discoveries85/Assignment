//Write a program that creates Objects containing these items.
//Dtattype of person object
interface person {
    age : number,
    name : string, 
    nationality : string, 
    Student : Boolean 
} 
//person object
let person :person = { 
    age : 20 ,
    name : 'Ali', 
    nationality : 'Pakistani', 
    Student : true 
} 
//print person
console.log(person);  

//Dtattype of car object
interface care { 
    maker : String, 
    color :string,
    automatic : true, 

}
//care object
let car = {
    maker : 'Toyota',
    color : ' Black', 
    automatic : true 
} 
//print car
console.log(car);