 export function basics(){
    //if this concept get current date and its time month date etc.
    let d = new Date;
    console.log(d.toISOString());
    console.log(d.getTime());
    console.log(d.getDate());
    console.log(d.getMonth());
    console.log(d.getHours());
    console.log(d.getMilliseconds());

    //main concept local storage, session storage, cookies
    localStorage.setItem('name','faleel');
    localStorage.getItem('name');
    //localStorage.removeItem('name);
    sessionStorage.setItem('name','faleel');
    sessionStorage.getItem('name');
    //sessionStorage.removeItem('name');

    //cookies
    document.cookie = 'name=faleel; expires=' + new Date(2020,5,6).toUTCString();
    console.log(document.cookie);

    //if else statement
    const username = document.getElementById('#username');
    if(username < 18){
        console.log("Your teen");
    }else{
        console.log("your not teen");
    }

    const userdate = document.getElementById('#userdate');
    console.log(`Your date of Birth: ${userdate}`);

    //while loop
    let mynum = 1;
    while(mynum <= 10){
        mynum++;
        console.log(mynum);
    }

    let digit = 1;
    do{
        digit++;
        console.log(digit);
    }while(digit <= 20);

    for(i = 0;i < 30;i++){
        console.log(i);
    }

    switch(prompt("Enter age:")){
        case '18':
            console.log("Your teen");
            break;
        case '25':
            console.log("Your employer");
            break;
            default:
                console.log("please enter correct digit");
    }

 }
 basics();