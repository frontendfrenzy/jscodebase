export function validEmail(email){
    //EMAIL ADDRESS
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validPhoneNumber(phonenumber){
    //PHONENUMBER
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;//international format
    return phoneRegex.test(phonenumber);
}

export function validPassword(password){
    //PASSWORD
    const passswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passswordRegex.test(password);
}

export function validurl(URL){
    //URL
    const UrlRegex = /^(https?:\/\/)?([\w-]+)\.([a-z]{2,6})(\/[\w-]*)*\/?$/;
    return UrlRegex.test(URL);
}

export function validusername(username){
    //USERNAME
    const UserNameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    return UserNameRegex.test(username);
}

export function validdate(date){
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateRegex.test(date)) return false;
    //DATE
    const [year,month,day] = date.split('-').map(Number);
    const dateObj = new Date(year,month - 1,day);
    return dateObj.getFullYear() === year &&
     dateObj.getMonth() === month - 1 &&
     dateObj.getDay() === day;
}

export function validTime(time){
    //TIME
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timeRegex.test(time);
    //valid hours 24 format
}

export function validIP(IP){
    //IP ADDRESS
    const IPRegex = /^(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})(\.(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})){3}$/;
    return IPRegex.test(IP);
}

export function validhexcolor(Color){
    //HEXADECIMAL COLOR
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexColorRegex.test(Color);
}
 export function validCreditCard(cardNumber){
    //CREDIT CARD
    const cardNumberRegex = /^\d{16}$/;
    //checking for 16 digits
    if(!cardNumberRegex.test(cardNumber)) return false;

    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++){
        let digit = parseInt(cardNumber[i]);
        if(i % 2 === 0) digit *= 2;
        if(digit > 9) digit -= 9;
        sum += digit;
    }
    return sum % 10 === 0;
 }

 export function validpostiveinteger(number){
    const positiveIntegerRegex = /^[1-9]\d*$/;
    //POSITIVE INTEGER
    return positiveIntegerRegex.test(number);
 }

 export function valifFileExtention(fileName){
    //FILE EXTANSION
    const fileExtentionRegex = /\.(jpg|jpeg|png|gif)$/i;
    return fileExtentionRegex.test(fileName);
 }

 export function validZIPCode(ZIPCode){
    //ZIP CODE
    const ZIPCodeRegex = /^\d{5}(-\d{4})?$/;
    //Format 12345 or 12345-6789
    return ZIPCodeRegex.test(ZIPCode);
 }

 export function validStrongPassword(Strongpassword){
    //STRONG PASSWORD
    const StrongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return StrongPasswordRegex.test(Strongpassword);
 }

 export function decimalnumber(DecimalNumber){
    //DECIMAL NUMBERS
    const DecimalRegex = /^\d+(\.\d{1,2})?$/;
    return DecimalRegex.test(DecimalNumber);
 }

 export function validJSON(jsonString){
    //JSON STRING
    try{
        JSON.parse(jsonString);
        return true;
    }catch(e){
        return false;
    }
 }

 export function validmacaddress(MAC){
    //MAC ADDRESS
    const MACAddressRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return MACAddressRegex.test(MAC);
 }

 export function validDominName(Domain){
    //DOMAIN NAME
    const DomainNameRegex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,6}$/;
     return DomainNameRegex.test(Domain);
 }

 export function validslug(Slug){
    //SLUG URL FRIENDLY STRING
    const SlugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    return SlugRegex.test(Slug);
 }