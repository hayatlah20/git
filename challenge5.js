/*exercice1*/

/*function SommeTableau(tab){
    let somme = 0;
    for(let i = 0;i<tab.length;i++){
        somme = somme + tab[i];
    }
    return somme;
}
let tableau =[2,4,6,8,5];
let Somme = SommeTableau(tableau);
console.log("la somme des element dans le tableau est:"+Somme);*/

/*exercice 2*/

/*function MaxTableau(tab){
    let max=tab[0];
    for(i=0;i<tab.length;i++){
        if(tab[i]>max){
         max = tab[i];
        }
    }
    return max;
}
let monTableau=[2,9,4,7,3,8];
let maximum= MaxTableau(monTableau);
console.log("le plus grand element est:"+maximum);*/

/*exercice4*/

/*function InverserTableau(tab){
    let nouveauTab=[];
    let mess = ("les entier on ordre invers est:\n");
    for(let i=tab.length -1;i>=0;i--){
        mess = mess+tab[i] +"\n" ;  
        nouveauTab.push(...tab);
     }
     return mess;
}
let monTab=[1,2,3,4,5];
let incroisont=InverserTableau(monTab);
console.log("les element en order invers est:"+incroisont);*/

/*exercice6*/

/*
function ProduitTableau(tab){
    let Mul=tab[1];
    for(i=1;i<tab.length;i++){
        Mul=Mul*tab[i];
        console.log(tab[i]+"x"+i+"="+Mul);
    }
    return Mul;
}
let MonTabl=[3,5,2];
let produit=ProduitTableau(MonTabl);
console.log("table de multiplication est:"+produit);*/

/*exercice5*/


/*function filtrerPairs(tab){
    tab.filter((nomber) => {
        return nomber % 2 === 0;
});
}
let monTablaeu=[2,3,6,1,5,10];
let nbrP=filtrerPairs(monTablaeu);
console.log("les nomber pair est:"+nbrP);*/

/*exercice7*/

/*function moyenne(tab){
    let somme = 0;
    for(let i=0;i<tab.length;i++){
        somme = somme + tab[i];
    }
     let moyenne = somme / tab.lenght;
     return moyenne;
}
let monTabl = [7,5,3,4,6];
let moyene = moyenne(monTabl);
console.log("la moyenne des valeurs de tableau est:"+moyene); */

/*exercice9*/

/*function Fusionner(tab1,tab2){
    let nouveauTableau = [...tab1,...tab2];
    console.log(nouveauTableau);
}
let tab1 = [1,2,3];
let tab2 = [4,5,6];
let fuss = Fusionner(tab1,tab2);*/

/*exercice11*/

/*function tableMultiplication(n){
    let tab = [];
 for(let i = 1;i<=10;i++){
     tab.push(n*i);
 }
    return tab;
}
console.log(tableMultiplication(2));*/

/*exercice8*/

/*function doubler(tab){
    let tabl = [];
    for(let i =0;i<tab.length;i++){
        tabl.push(tab[i]*2);
    }
     return tabl;
}
let MonTabl = [2,4,3,5,6];
let doubel = doubler(MonTabl);
console.log(doubel);*/

/*exercice10*/

function supprimerDoublons(tab){
    let tableau = [...new Set(tab)];
    console.log(tableau);
}
let tabl = [2,4,2,3,7,4,5,3];
let doub = supprimerDoublons(tabl);


