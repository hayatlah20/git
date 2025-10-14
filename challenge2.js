const prompt = require("prompt-sync")();
/*exercice 1*/

/*let nomber = parseInt(prompt("entrer un nomber:"));
if(nomber%2 == 0){
    console.log("le nomber est pair");
}else{
    console.log("le nomber est impair");

}*/


/*exercice 2*/

/*let A = parseFloat(prompt("entrer un nomber:"));
if(A>0){
    console.log("le nomber est posotif");
}else if(A<0){
    console.log("le nomber est negatif");
}else{
    console.log("le nomber est null");
}*/


/*exercice 3*/

/*let age = parseFloat(prompt("entrer un age:"));
if(age>=18){
    console.log("Éligibldeux e au vote");
}else{
    console.log("Non éligible");
}*/


/*exercice 4*/

/*let nbrA = parseFloat(prompt("entrer un nomber:"));
let nbrB = parseFloat(prompt("entrer un nomber:"));
if(nbrA>nbrB){
    console.log("le plus grand est:"+nbrA);
}else{
    console.log("le plus grand est:"+nbrB);
}*/


/*exercice 5*/

/*let score =30;
switch(score){
    case(score>=90 && score<=100):
     console.log =("A");
     break;
    case(score>=80 && score<=89):
     console.log =("B");
     break;
    case(score>=70 && score<=79):
     console.log =("C");
     break;
    case(score>=60 && score<=69):
     console.log =("D");
     break;
    case(score<60):
     console.log =("F");
     break;
    default:
        console.log("non trouvabale");
}*/


/*exercice 6*/

/*let annee = parseInt(prompt("entrer un annee:"));
if(annee%4 == 0){
    console.log("l'annee" +annee+ "est bissextile");
}else if(annee%100 !=0 && annee%400 == 0){
    console.log("l'annee" +annee+ "est bissextile");
}else{
    console.log("l'annee" +annee+ "n'est pas bissextile");
}*/


/*exercice 8*/

/*let couleur = String(prompt("entrer un couleur:"));
if(couleur=="rouge"){
    console.log("Arrêt" );
}else if(couleur=="jeun"){
    console.log("Préparez-vous");
}else if(couleur== "vert"){
    console.log("Allez");
}else{
    console.log("sortie");
}*/

/*exercice 9*/

/*let nomber = parseFloat(prompt("entrer un nomber"));
if(nomber%3==0){
    console.log("Fizz");
}else if(nomber%5==0){
    console.log("Buzz");
}else if(nomber%3==0 && nomber%5==0){
    console.log("FizzBuzz");
}else{
    console.log(nomber);
}*/

/*exercice 10*/

let Nomutilisateur = "admie";
let MotDePasse = "1234" ;
let nonu = String(prompt("entrer un nom:"));
let motp = String(prompt("entrer un mot de passe"));
if(nonu==Nomutilisateur && motp==MotDePasse){
    console.log("Bienvenue Admin");
}else if(nonu == Nomutilisateur && motp != MotDePasse){
    console.log("Mot de passe incorrect");
}else{
    console.log("Utilisateur introuvable");
}





