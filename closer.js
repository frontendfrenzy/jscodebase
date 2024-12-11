import { Connect } from "vite";

//closer
export function outerfunction(){
    let outervariable = "Iam a Outer";

    function innerfunction(){
        let innervariable = "Iam a inner";
        console.log(innervariable);
    }
    innerfunction();
    console.log(outervariable);
}
outerfunction();

//promise
export const data = new Promise((resolve,reject) => {
    setTimeout(() => {
        const ans = "faleel";
        if(ans){
            resolve(ans);
        }else{
            reject("error occured");
        }
    },3000);
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

//async and await
export function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
export async function asyncfunction(){
    console.log('Start');
    await delay(2000);
    console.log('Middle');
    await delay(3000);
    console.log('End');
    await delay(4000);
}
asyncfunction();

//error handling
try{
    console.log("hello this is error handle using for fetch api datas");
}catch(error){
    console.log(error);
}finally{
    console.log("Succesfull");
}

//class
export class Person{
    constructor(name,age,skills){
        this._name = name;
        this._age = age;
        this._skills = skills;
    }
    get fulldata(){
        return `${this._name} your age is ${this._age} and your skills is ${this._skills}`
    }
    set name(newname){
        this._name = newname;
    }
    set age(newage){
        this._age = newage;
    }
    set skills(newskills){
        this._skills = newskills;
    }
}
const person = new Person('faleel',19,'web development and app development');
console.log(person);