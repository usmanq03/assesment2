let userEnterGrade = window.prompt(`Enter your score :`)

userEnterGrade = Number(userEnterGrade)

switch(true){
    case (userEnterGrade >=90 && userEnterGrade <=100) :
        console.log(`${userEnterGrade} is an A grade in the US grading system`);
        break;
    case (userEnterGrade >=80 && userEnterGrade <=89) :
        console.log(`${userEnterGrade} is a B grade in the US Grading sytem`)
        break;
    case (userEnterGrade >=70 && userEnterGrade <=79) :
        console.log(`${userEnterGrade} is a C grade in the US Grading sytem`)
        break;
    case (userEnterGrade >=60 && userEnterGrade <=69) :
        console.log(`${userEnterGrade} is a D grade in the US Grading sytem`)
        break;
    case (userEnterGrade >=0 && userEnterGrade <=59) :
        console.log(`${userEnterGrade} is a C grade in the US Grading sytem`)
        break;

    default:
        console.log(`You must enter an invalid number or character please enter number between 0 - 100`)
}