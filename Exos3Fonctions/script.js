let codingSchool18 = [];

function ajouter(personne){
    return codingSchool18.push(personne);
}

//Version simple.
//function retire(personne){
//     return codingSchool18.splice(codingSchool18.indexOf(personne), 1);
// }

//Version compiquée
function retirer (codingSchool18, personne){
    var x = codingSchool18.indexOf(personne);

    while (x !== -1){
        codingSchool18.splice(x, 1);
        x = codingSchool18.indexOf(personne)
    }
}

//Chaque fois qu'on ajoute quelqu'un, une phrase va s'afficher

ajouter("Cactus")
ajouter("Mihai");
ajouter("Ilyas");
ajouter("Mohammed");
ajouter("Yassin");
ajouter("Farhad");
retirer(codingSchool18,"Yassin");
retirer(codingSchool18,"Farhad");
ajouter("Tania");
ajouter("Oussama");
ajouter("Alexis");
retirer(codingSchool18, "Alexis");
ajouter("Issam");
ajouter("Anthony");
ajouter("Loic");
ajouter("Kevin");
ajouter("Junior");
ajouter("Charles");
ajouter("William");
retirer(codingSchool18, "Cactus");
ajouter("Gauthier");
ajouter("Beytullah");
retirer(codingSchool18, "Loic")



console.log(codingSchool18);