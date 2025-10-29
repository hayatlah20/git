const prompt = require("prompt-sync")()

//defi 1
/*let n=+prompt("entrer le nombre: ")
function escalier(){
    let n1=1
    let n2=2
    let somme
    if(n===1) return 1;
    if(n===2) return 2;
    for (let i = 3; i <= n; i++) {
        somme = n1+n2
        n1=n2
        n2=somme
    }
    return n2
}

console.log(escalier());*/

//defi 2
let n=+prompt("entrer le nombre: ")
if(n%3==0 && n%5==!0){
    console.log(" Tech") }
    else if(n%5==0  && n%3==!0){
    console.log(" Lead")}
    else if(n%3==0 && n%5==0){
     console.log(" TechLead")}
else {
    console.log(n);
    }

//defi3
    let tableau = [1, 2, 2, 3, 4, 4, 5]
for (let i = 0; i < tableau.length; i++) {
    for (let j = i+1; j < tableau.length; j++) {
        if(tableau[i] == tableau[j]){
            tableau.splice(j,1)
            j--
        }
    }
}
console.log(tableau);

//defi4
let array= [2, 4, 6, -3, 5, 7]
let sum=0
function somme(){
    for (let i = 0; i < array.length; i++) {
        if(array[i]<0)break
        else {sum=sum+array[i]}
    }
    return sum
}
console.log(somme());

//defi5
let tab=[1,2,3]
for (let i = tab.length-1; i >=0 ; i--) {
    tab.push(tab[i])
}
console.log(tab);

//defi6
let name = "hayat lah "
let count=0
for(let i=0;i<name.length;i++){
    if(name[i]=="a" || name[i]=="h" || name[i]=="u" || name[i]=="i" || name[i]=="o"){
        count++
    }
}
console.log(count);

//defi7
let word = "level"
let revword=""
for(let i=word.length-1;i>=0;i--){
    revword=revword+word[i]
}
if(word == revword){
    console.log("true");
}else{
    console.log("false");
}

//defi8
function frequenceCaracteres(chaine) {
  const frequence = [];
  for (let i = 0; i < chaine.length; i++) {
    const caractere = chaine[i];
    if (frequence[caractere]) {
      frequence[caractere]++;
    } else {
      frequence[caractere] = 1;
    }
  }
  return frequence;
}
// Exemple
console.log(frequenceCaracteres("helllo"));


//defi10
let table = [1,1,1,0,1,0,1,0,1,0];

for(let i=0;i<table.length;i++){
    if(table[i]==0){
        console.log(table.indexOf(table[i]));
        break;
    }
}

//defi9
function totalBouteilles(initialPleines) {
  let b = 0;
  let pleines = initialPleines;
  let vides = 0;

  while (pleines > 0) {
    b += pleines;          
    vides += pleines;       
    pleines = Math.floor(vides / 3);  
    vides = vides % 3;     
  }

  return b;
}

console.log(totalBouteilles(9)); 

//defi11
function nombreManquant(tableau) {
  const n = tableau.length + 1; 
  const sommeTotale = (n * (n + 1)) / 2;
  let sommeActuelle = 0;
  for (let i = 0; i < tableau.length; i++) {
    sommeActuelle += tableau[i];
  }
  nbr=sommeTotale - sommeActuelle;
  return nbr;
}
// Exemple
console.log("le nombre qui manque dans le tableau est ",nombreManquant([1, 2, 3, 4,6]));
