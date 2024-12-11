//character code

//split
export let something = "focus your mind just show";
//join(" ");
console.log(something.split(" "));

export let alphabets = "itadori yuji";
console.log(alphabets.slice(6));
//index value to show the letter
console.log(alphabets.indexOf('d'));
// show the index value

//repeat 
export let value = "Hello,world";
 console.log(value.repeat(10));

//replace and replace all
export let name = "hello,world";
console.log(name.replace(name));
export let replaceall = " i focus myskill i dont focus love and socialmedia ";
console.log(replaceall.replaceAll("improve"));

//Uppercase and Lowercase
export let inputname = "moniter";
console.log(inputname.toUpperCase());
export let inputplace = "USA";
console.log(inputplace.toLowerCase());

//concat this is using for the word
export let valueone = "hello welcome to";
export let valuetwo = "javascript learning"
console.log(valueone.concat(valuetwo));

//This is also most important
//includes is return boolean value true or false
export let mandalorien = "This is the way";
console.log(mandalorien.includes());

//most important --> rest parameter ...storedvalue
export let maxvalue = [5,2,7];
console.log(Math.max(...maxvalue));
//return maximum value

//main concept array in js
export let nummarrays = [1,2,3,4,5,6,7,8,9];
console.log(nummarrays);
console.log(nummarrays[3]);
//return index value
nummarrays.push(10);
console.log(nummarrays);
nummarrays.pop(9);
console.log(nummarrays.length);

//objects main concept its using for data based code writen
export let personDB = [
    {id:1,name:"michel",age:20,place:"germany"},
    {id:2,name:"james",age:21,place:"scottland"},
    {id:3,name:"chris even",age:25,place:"USA"},
]
console.log(personDB);
console.log(personDB.push({name:"garfield",age:"30",place:"san franccisco"}));
console.log(personDB.pop(3));