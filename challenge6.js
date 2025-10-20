//exercice1

const voiture ={
     marque : "audi", 
     modele : "sport", 
     annee : 2022,
}
console.log(voiture);
console.log(voiture.marque);
console.log(voiture.annee);
voiture.annee = 2024 ;
console.log(voiture);
voiture.couleur = "noir";
delete voiture.modele;
console.log(voiture);

//exercice2

const etudiant ={
    nom :"alami",
    age: 20,
    sePresenter:function(){
        console.log("Bonjour, je m’appelle "  + [this.nom] + "et j’ai"  +  [this.age] + " ans.");
    }
}

etudiant.sePresenter();

const personne={
    nom:"alami",
    prenom:"ali",
    age:"20",
};
for(key in personne){
    console.log(key + ":" + personne[key]);
}

const Classe ={
    etudiant:["ali","karim","ahemad"],
    afficherEtudiant:function(){
        console.log(this.etudiant);
    }
}
Classe.afficherEtudiant();


const livers=[
   {titre:"la boite a mairvielle",auteur:"ahemad safrioui",annee:2004,},
   {titre:"antigon",auteur:"jean",annee:1998},
   {titre:"dernier jour",auteur:"victor",annee:1940},
];
for (let i = 0; i < livers.length; i++) {
  console.log(livers[i].titre);
}

//exrrcice3

const entreprise = {
    adresse:{
        rue :"14 rue alwahda ",ville:"oued zem",codepostal:"23561",
    }
};
console.log(entreprise.adresse.rue);


class Animal{
  constructor(nom,type){
    this.nom = nom;
    this.type = type;
  }
  parler(){
    console.log(`nom:${this.nom}`);
    console.log(`type:${this.type}`);
  }
}
const monAnimal = new Animal("chien","compagnie");
monAnimal.parler();


