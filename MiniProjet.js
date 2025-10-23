const prompt = require("prompt-sync")();
let taches = [];
let compteurId = 1; // Pour générer des ids uniques et simples

// Ajouter une tâche
function ajouterTache() {
  const description = prompt("Entrez la description de la tâche :");
  if (description) {
    const tache = {
      id: compteurId++,
      description: description,
      isDone: false
    };
    taches.push(tache);
    console.log(`Tâche ajoutée : [${tache.id}] ${tache.description}`);
  } else {
    console.log("Description vide, tâche non ajoutée.");
  }
}
ajouterTache();

function rechercherTache() {
const description = prompt("Entrez la description de la tâche :");
  return taches.find(tache => tache. description === description);
}
rechercherTache();

function ModifierTâche (id, nouvelleDescription) {
  const tache = taches.find(t => t.id === id);
  if (tache) {
    tache.description = nouvelleDescription;
    console.log("Tâche modifiée :"+ tache);
  } else {
    console.log("Tâche non trouvée.");
  }
}
ModifierTâche();

function supprimerTache() {
  const id = parseInt(prompt("entrer un id de la tache:"));  
  for(let i=0;i<taches.length;i++){
    if(taches[i].id===id){
        console.log(`tache avec id ${id} supprimer`);
    }else{
        console.log("tache n'est pas avec id");
    }
  }
}
supprimerTache();

function AfficherTâchesTerminéesEnAttente (){
    for(let i=0;i<taches.length;i++){
        if(taches[i].isDone===true){
            console.log("tache terminée");
        }else{
            console.log("tache en attende");
        }
    }
}
AfficherTâchesTerminéesEnAttente ();


function menu() {
  let choix;
  do {
    console.log("=== To-Do List === ");
    console.log("1. Ajouter une tâche");
    console.log("2. Afficher toutes les tâches");
    console.log("3. Rechercher une tâche");
    console.log("4. Modifier une tâche");
    console.log("5. Marquer une tâche comme terminée");
    console.log("6. Supprimer une tâche");
    console.log("7.Afficher tâches terminées / en attente ")
    console.log("8. Quitter");
    choix = prompt("Choisissez une option : ");
    
    switch(choix) {
      case "1":
       ajouterTache();
        break;
      case "2":
        afficherTaches();
        break;
      case "3":
        rechercherTache();
        break;
      case "4":
        ModifierTâche();
        break;
      case "5":
        marquerTerminee();
        break;
      case "6":
        supprimerTache();
        break;
      case "7":
        AfficherTâchesTerminéesEnAttente ();
        break;
      case "8":
        console.log("Quitter ");
        break;
      default:
        console.log("Option invalide, veuillez réessayer.");
    }
  } while (choix !== "7");
}

menu();




/*const prompt = require("prompt-sync")();
const livers=[];
const abonnes=[];
const emprunts=[];


function menuPrincipal() {
    let choix;
    do{
  console.log("\n--- MENU PRINCIPAL ---");
  console.log("1. Introduire un livre");
  console.log("2. Ajouter plusieurs livres");
  console.log("3. Opérations sur les livres");
  console.log("4. Gestion des abonnés");
  console.log("5. Gestion des emprunts");
  console.log("6. Quitter");

    switch (choix) {
      case "1":
        Introduirelivre();
        break;
      case "2":
        ajouterLivre()
        break;
      case "3":
        menuLivres();
        break;
      case "4":
        menuAbonnes();
        break;
      case "5":
        menuEmprunts();
        break;
      case "6":
        console.log("Au revoir !");
        break;
      default:
        console.log("Choix invalide.");
        menuPrincipal();
    }
 } while (choix !== "5");
};


function Introduirelivre(){
    const Id_livre=prompt("entrer un id d'un livre:");
    const Titre=prompt("entrer un titre:");
    const Auteur=prompt("entrer un auteur:");
    const Annéepublication=prompt("entrer l'année de publication:");
    const Disponible=prompt("le livre est disponible ?(oui/non):").toLowerCase==="oui";

    const liver={
        Id_livre, 
        Titre, 
        Auteur, 
        Annéepublication, 
        Disponible ,

    };
    livers.push(liver);
    console.log(`le livre ${Id_livre} est introduire`);
    menuPrincipal();
    
}
Introduirelivre();



function ajouterLivre() {
  const titre = prompt("Titre du livre : ");
  const auteur = prompt("Auteur : ");
  const Annéepublication = prompt("Annéepublication: ");
  const id = livers.length + 1;
  livers.push({ id, titre, auteur,Annéepublication });
  console.log("Livre ajouté !");
  menuPrincipal();
}
ajouterLivre();

//Opérations sur les livres 

function afficherliver(){
    if(livers.length===0){
        console.log("liver nom disponible");
        return;
    }
   console.log("les liver disponible est:");
   for(let i=0;i<livers.length;i++){
    const livre=livers[i];
    console.log(`liver${ i+1 }: ${livre.Id_livre} "${livre.titre}" ${livre.auteur} ${livre.Annéepublication}`);

   }
   menuPrincipal();
}
afficherliver();

function afficherLivresDisponibles() {
    const disponibles = livers.filter(livre => livre.disponible);
    console.log("Livres disponibles :");
    disponibles.forEach((livre, index) => {
        console.log(`${index + 1}. ${livre.Titre} par ${livre.Auteur}`);
    });
    menuPrincipal();
}
afficherLivresDisponibles();

function rechercherLivreParID(idRecherche) {
    const livre = livers.find(l => l.id === idRecherche);
    if (livre) {
        console.log(`Livre trouvé : ${livre.titre} par ${livre.auteur} (${livre.disponible ? "Disponible" : "Indisponible"})`);
    } else {
        console.log("Aucun livre trouvé avec cet ID.");
    }
    menuPrincipal();
}
rechercherLivreParID(2);

//GESTION DES ABONNES

function ajouterAbonne() {
  const nom = prompt("Nom de l'abonné : ");
  const prenom = prompt("prenom de l'abonné : ");
  const email= prompt("email de l'abonné : ");
  const id = abonnes.length + 1;
  abonnes.push({ id, nom, prenom, email });
  console.log("Abonné ajouté !");
  menuPrincipal();

}
ajouterAbonne();


function afficherAbonnes() {
    if (abonnes.length === 0) {
        console.log("Aucun abonné enregistré.");
    } else {
        console.log("Liste des abonnés :");
        abonnes.forEach(abonne => {
            console.log(` ID: ${abonne.id}, Nom: ${abonne.nom}, Prénom: ${abonne.prenom}, Email: ${abonne.email}`);
          
        });
      menuPrincipal();
    }
}
afficherAbonnes();

//Gestion des emprunts 

function enregistrerEmprunt() {
  const Id_livre = parseInt(prompt("ID du livre : "));
  const abonneId = parseInt(prompt("ID de l'abonné : "));
  const livre = livers.find(l => l.id === Id_livre);
  const abonne = abonnes.find(a => a.id === abonneId);

  if (!livre || !abonne) {
    console.log("Livre non disponible.");
    return;
  }
  if (!livre.disponible) {
    console.log("Ce livre est déjà emprunté.");
    return;
  }
livre.disponible = false;
  emprunts.push({ abonneId, Id_livre, dateEmprunt: new Date() });
  console.log(`Emprunt enregistré pour "${livre.titre}" par ${abonne.nom}.`);
  menuPrincipal();
}
enregistrerEmprunt();



function menuLivres() {
    let choix;
  console.log("\n--- Opérations sur les livres ---");
  console.log("1. Afficher tous les livres");
  console.log("2. Trier par titre (ascendant)");
  console.log("3. Trier par titre (descendant)");
  console.log("4. Trier par année");
  console.log("5. Afficher les livres disponibles");
  console.log("6. Rechercher par ID");

    switch (choix) {
      case "1": afficherliver(); 
      break;
      case "2": trierLivresTitre(true); 
      break;
      case "3": trierLivresTitre(false); 
      break;
      case "4": trierLivresAnnee(); 
      break;
      case "5": afficherLivresDisponibles();
       break;
      case "6": rechercherLivreParID();
      break;
      default: 
       menuPrincipal();
    }
};

function menuAbonnes() {
    let choix;
  console.log("\n--- Gestion des abonnés ---");
  console.log("1. Ajouter un abonné");
  console.log("2. Afficher tous les abonnés");

    switch (choix) {
      case "1": ajouterAbonne(); 
      break;
      case "2": afficherAbonnes(); 
      break;
      default: menuPrincipal();
    }
};

function menuAbonnes() {
    let choix;
  console.log("\n--- Gestion des abonnés ---");
  console.log("1. Ajouter un abonné");
  console.log("2. Afficher tous les abonnés");

    switch (choix) {
      case "1": ajouterAbonne(); 
      break;
      case "2": afficherAbonnes(); 
      break;
      default: 
       menuPrincipal();
    }
};

function menuEmprunts() {
    let choix;
  console.log("\n--- Gestion des emprunts ---");
  console.log("1. Enregistrer un emprunt");
  console.log("2. Enregistrer un retour");
  console.log("3. Afficher les livres empruntés par un abonné");

    switch (choix) {
      case "1": enregistrerEmprunt(); 
      break;
      case "2": enregistrerRetour(); 
      break;
      case "3": afficherEmpruntsAbonne(); 
      break;
      default: 
       menuPrincipal();
    }
};
menuPrincipal();*/