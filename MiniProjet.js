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