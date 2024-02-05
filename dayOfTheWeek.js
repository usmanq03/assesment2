//using switch case to print name of day for a given number (1- 7)

let userEnteredNum = window.prompt(`Please enter a number between 1 & 7 :`)

userEnteredNum = Number(userEnteredNum)

switch(userEnteredNum){
    case 1 :
        console.log(`That coresponds with Sunday`);
        break;
    
    case 2 :
        console.log(`That corresponds with Monday`);
        break;
    case 3 :
        console.log(`That corresponds with Tuesday`);
        break;
    case 4 :
        console.log(`That corresponds with Wednesday`);
        break;
    case 5 :
        console.log(`That corresponds with Thursday`);
        break;
    case 6 :
        console.log(`That corresponds with Friday`)
        break;
    case 7 :
        console.log(`That corresponds with Saturday`)
        break;
    
    default: console.log(`You enter an invalid number`)
}