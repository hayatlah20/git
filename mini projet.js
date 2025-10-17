const prompt = require("prompt-sync")();

function addition(nomber1,nomber2){
    return nomber1+nomber2;
}
function soustraction(nomber1,nomber2){
    return  nomber1-nomber2;
}
function multiplication(nomber1,nomber2){
    return nomber1*nomber2
}
function division (nomber1,nomber2){
 if(nomber2===0){
     alert("erreur:division par zero impossible");
   }else{
   resultat=nomber1/nomber2;}
    return resultat;
}
function puissance (nomber1,nomber2){
    return nomber1**nomber2;
}
function racinecarrée (nomber1,nomber2){
    return math.sqrt(nomber1,nomber2);
}
function factorielle (nomber1,nomber2){
    return nomber1*nomber2;
}


function calculatrice(){
    while(true){
        console.log("--calculatrice--");
        console.log("1.addition(+)");
        console.log("2.soustraction(-)");
        console.log("3.multiplication(*)");
        console.log("4.puissance(^)");
        console.log("5.racinecarée");
        console.log("6.factorielle");
        console.log("7.divition(/)");
        console.log("8.l'historique");
        console.log("9.quiter le programme");

        let choix = prompt("choisir un operation(1-9)");
        let nomber1,nomber2,resultat;
        if(choix>="1" && choix<=5){
            nomber1=Number(prompt("entrer un nomber"));
            nomber2=Number(prompt("entrer un nomber"));
        }
        else if(choix==="6" || choix===7){
            nomber1=prompt("entrer le nomber1:");
        }

        

    }

    let resultat;

 switch (choix) {
    case 1:
        resultat = addition(nomber1,nomber2);
        break;
    case 2:
        resultat = soustraction(nomber1,nomber2);
        break;
    case 3:
        resultat = multiplication(nomber1,nomber2)
        break;     
    case 4:
        resultat = puissance(nomber1,nomber2); 
        break;
    case 5:
        resultat = racinecarrée(nomber1);
        break; 
    case 6:
        resultat = factorielle(nomber1); 
    case 7:
        resultat = division(nomber1,nomber2);
        break;   
    case 8:
        console.log("historique des calculs:");
        if(historique.length===0){
            console.log("auci=un calcul effectue");
        }else{
            historique.forEach(history=>console.log(historique));
        }
      
    }
    console.log("resultat:",resultat);
    historique.push(`le choix "${choix}": ${nomber1} ${nomber2}`);

    
}
calculatrice();



/*function addition(nomber1,nomber2){
    return nomber1+nomber2;
}
function soustraction(nomber1,nomber2){
    return  nomber1-nomber2;
}
function multiplication(nomber1,nomber2){
    return nomber1*nomber2
}
function division (nomber1,nomber2){
 if(nomber2===0){
     alert("erreur:division par zero impossible");
   }else{
   resultat=nomber1/nomber2;}
    return resultat;
}
function puissance (nomber1,nomber2){
    return nomber1**nomber2;
}
function racinecarrée (nomber1,nomber2){
    return math.sqrt(nomber1,nomber2);
}
function factorielle (nomber1,nomber2){
    return nomber1*nomber2;
}*/

calculatrice();





















/*let resultat;
if(choix=="addition"){
    resultat=nomber1=nomber2;
}else if(choix=="soustraction"){
    resultat=nomber1-nomber2;
}
else if(choix=="multiplication"){
   resultat=nomber1*nomber2;
}else if(choix=="puissance"){
    resultat=nomber1**nomber2;
}
else if(choix=="racine carrée"){
    resultat=math.sqrt(nomber1,nomber2);
}
else if(choix=="factorielle"){
    resultat=nomber1*nomber2;
}
else if(choix=="division"){
   if(nomber2===0){
     alert("erreur:division par zero impossible");
   }else{
   resultat=nomber1/nomber2;}
}else{
    alert("erreur:operation invalide");
}*/









