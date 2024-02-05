let userEnterMonth = window.prompt(`Please enter a value between 1 and 12 :`)

userEnterMonth = Number(userEnterMonth)

switch(userEnterMonth){
    case 1:
        console.log(`${userEnterMonth} is the first month January`)
        break;
    
    case 2:
        console.log(`${userEnterMonth} is the second month February`)
        break;
    
    case 3:
        console.log(`${userEnterMonth} is the first month March`)
        break;
    
    case 4:
        console.log(`${userEnterMonth} is the second month April`)
        break;

    case 5:
        console.log(`${userEnterMonth} is the first month May`)
        break;
    
    case 6:
        console.log(`${userEnterMonth} is the second month June`)
        break;

    case 7:
        console.log(`${userEnterMonth} is the first month July`)
        break;
    
    case 8:
        console.log(`${userEnterMonth} is the second month August`)
        break;
    
    case 9:
        console.log(`${userEnterMonth} is the first month September`)
        break;
    
    case 10:
        console.log(`${userEnterMonth} is the second month October`)
        break;

    case 11:
        console.log(`${userEnterMonth} is the first month November`)
        break;
    
    case 12:
        console.log(`${userEnterMonth} is the second month December`)
        break;

    default: 
        console.log(`Please enter a number between 1 and 12`)

}