//fetch api with callback function
//STEP 1

export function fetchdata(url, callback){
    fetch(url).then((response) => {
        if(response.ok){
            return response.json();
        }else{
            throw new Error ("Fatch api was failed");
        }
    }).catch((error) => {
        console.log(error);
    }).then((data) => callback(data,null)).catch((error) => callback(error,null));
}
fetchdata("http://localhost:3500/songs");

export const apiUrl = "http://localhost:3500/songs";

fetch(apiUrl).then((response) => {
    if(response.ok){
        return response.json();
    }else{
        throw new Error("data not founded 404");
    }
}).catch((error) => {
    console.log(error);
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("data fetched succesfully");
});

export let datas = [
    {id: 1,name:"jowlcorry",age:24,skills:"spring boot | spring data | spring security | java | kuberneties | hiberneties"},
    {id: 2,name:"faleel",age:19,skills:"html | css | javascript | typescript | sass | tailwindcss | testing jest | chrome devtools | accesibilty | react | reactrouter | react native"},
    {id: 3,name:"jason",age:31,skills:"html | css | javascript | express.js | node.js | sql | python "},
];

for(const key in datas){
    console.log(key);
}

//array destucturing
const [first,second] = [1,2,3,4];
console.log(first);
console.log(second);

//destucture with first three numbers
const numbers = [10,20,30,40,50,60];
const [firsted,seconded,thireded] = numbers;
console.log(firsted);
console.log(seconded);
console.log(thireded);
const colors = ['red','green','blue','yello'];
const [primary,secondary,tertiary] = colors;
console.log(primary);
console.log(secondary);
console.log(tertiary);

//object destucturing 
let obdata = {
    name:"faleel",
    gender:"male",
    skills:"web development and app development",
    place : {
        from:"India",
    }
}
console.log(obdata);
console.log(obdata.name);
console.log(obdata.place);
console.log("he's name is:"+obdata.name);
console.log("he's is:"+obdata.gender);
console.log("he is from"+obdata.place);