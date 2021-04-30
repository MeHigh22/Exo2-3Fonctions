// function reverseNumber(num) {
// 	return (
//     parseInt(num)
//         //On va convertir notre num en string pour utiliser split dessus
//         .toString()
//         //Convertir notre string dans un array de caractères
//         .split('')
//         //On fait un reverse de l'array
//         .reverse()
//         //On joint tout dans une string
//         .join('')

//     ) 
// }

// console.log(reverseNumber(856));

// function divPar2(number){
//     let result = number / 2;
//     if(number % 2 == 0){
//         return console.log(`Le ${number} est divisible par 2. ${number}/2 = ${result}`)
//     } else{
//         console.log("Ce nombre n'est pas divisible par deux.");
//     }
// }

// let input;

// function logIn(mdp){
//     do {
//         let input = prompt("Saissiez un mot de passe")
//         if (input == mdp){
//             alert("Vous êtes connectés")
//             break;
//         }
//         else if (input != mdp){
//             input = prompt("Mais connard, tu as oublié ton mdp ou quoi?")
//         }
//     } while (input != mdp);
// }

// logIn("JeanClaudeVanDamme")