let pickOne = `Rock`
let pickTwo = `Scissors`

pickOne= pickOne.toLowerCase();
pickTwo= pickTwo.toLowerCase();
switch(true){
    case (pickOne === `rock` && pickTwo === `paper`):
        console.log(`Rock beats Scissors`)
        break;
    case (pickOne === `paper` && pickTwo === `scissors`):
        console.log(`Scissors beats Paper`)
        break;
    case (pickOne === `scissors` && pickTwo === `rock`):
        console.log(`Paper beats Rock`)
        break;
    default:
        console.log(`You must have entered something other than rock paper and scissors`)
}