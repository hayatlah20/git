const prompt = require("prompt-sync")();

const livres = [];
const abonnes = [];
const emprunts = [];

function menuPrincipal() {
    let choix;
    do {
        console.log("\n--- MENU PRINCIPAL ---");
        console.log("1. Introduire un livre");
        console.log("2. Ajouter plusieurs livres");
        console.log("3. Opérations sur les livres");
        console.log("4. Gestion des abonnés");
        console.log("5. Gestion des emprunts");
        console.log("6. Quitter");

        choix = prompt("Votre choix : ");

        switch (choix) {
            case "1":
                introduireLivre();
                break;
            case "2":
                ajouterLivre();
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
        }
    } while (choix !== "6");
}

//Opérations sur les livres 

function introduireLivre() {
    const id = livres.length + 1;
    const titre = prompt("Titre du livre : ");
    const auteur = prompt("Auteur : ");
    const annee = prompt("Année de publication : ");
    const disponible = prompt("Le livre est disponible ? (oui/non) : ").toLowerCase() === "oui";

    const livre = { id, titre, auteur, annee, disponible };
    livres.push(livre);
    console.log(`Le livre "${titre}" a été ajouté.`);
}

function ajouterLivre() {
    const nb = parseInt(prompt("Combien de livres voulez-vous ajouter ? "));
    for (let i = 0; i < nb; i++) {
        introduireLivre();
    }
}

function afficherLivres() {
    if (livres.length === 0) {
        console.log("Aucun livre enregistré.");
        return;
    }
    console.log("\n--- LISTE DES LIVRES ---");
    livres.forEach(l => {
        console.log(`ID: ${l.id} | ${l.titre} par ${l.auteur} (${l.annee}) - ${l.disponible ? "Disponible" : "Indisponible"}`);
    });
}

function afficherLivresDisponibles() {
    const disponibles = livres.filter(l => l.disponible);
    if (disponibles.length === 0) {
        console.log("Aucun livre disponible.");
        return;
    }
    console.log("\n--- LIVRES DISPONIBLES ---");
    disponibles.forEach(l => console.log(`${l.id}. ${l.titre} par ${l.auteur}`));
}

function rechercherLivreParID() {
    const idRecherche = parseInt(prompt("Entrez l'ID du livre à rechercher : "));
    const livre = livres.find(l => l.id === idRecherche);
    if (livre) {
        console.log(`Livre trouvé : ${livre.titre} par ${livre.auteur} (${livre.disponible ? "Disponible" : "Indisponible"})`);
    } else {
        console.log("Aucun livre trouvé avec cet ID.");
    }
}

// Gestion des abonnés 

function ajouterAbonne() {
    const id = abonnes.length + 1;
    const nom = prompt("Nom de l'abonné : ");
    const prenom = prompt("Prénom : ");
    const email = prompt("Email : ");
    abonnes.push({ id, nom, prenom, email });
    console.log(`Abonné ${nom} ajouté avec succès.`);
}

function afficherAbonnes() {
    if (abonnes.length === 0) {
        console.log("Aucun abonné enregistré.");
        return;
    }
    console.log("\n--- LISTE DES ABONNÉS ---");
    abonnes.forEach(a => console.log(`ID: ${a.id} | ${a.nom} ${a.prenom} - ${a.email}`));
}

// Gestion des emprunts 

function enregistrerEmprunt() {
    const idLivre = parseInt(prompt("ID du livre : "));
    const idAbonne = parseInt(prompt("ID de l'abonné : "));

    const livre = livres.find(l => l.id === idLivre);
    const abonne = abonnes.find(a => a.id === idAbonne);

    if (!livre || !abonne) {
        console.log("Livre ou abonné introuvable.");
        return;
    }

    if (!livre.disponible) {
        console.log("Ce livre est déjà emprunté.");
        return;
    }

    livre.disponible = false;
    emprunts.push({ idLivre, idAbonne, dateEmprunt: new Date() });
    console.log(`Emprunt enregistré : "${livre.titre}" par ${abonne.nom}.`);
}

// ---------------------- MENUS SECONDAIRES ----------------------

function menuLivres() {
    let choix;
    do {
        console.log("\n--- MENU LIVRES ---");
        console.log("1. Afficher tous les livres");
        console.log("2. Afficher les livres disponibles");
        console.log("3. Rechercher un livre par ID");
        console.log("4. Retour au menu principal");
        choix = prompt("Votre choix : ");

        switch (choix) {
            case "1": afficherLivres(); break;
            case "2": afficherLivresDisponibles(); break;
            case "3": rechercherLivreParID(); break;
        }
    } while (choix !== "4");
}

function menuAbonnes() {
    let choix;
    do {
        console.log("\n--- MENU ABONNÉS ---");
        console.log("1. Ajouter un abonné");
        console.log("2. Afficher les abonnés");
        console.log("3. Retour");
        choix = prompt("Votre choix : ");

        switch (choix) {
            case "1": ajouterAbonne(); break;
            case "2": afficherAbonnes(); break;
        }
    } while (choix !== "3");
}

function menuEmprunts() {
    let choix;
    do {
        console.log("\n--- MENU EMPRUNTS ---");
        console.log("1. Enregistrer un emprunt");
        console.log("2. Retour");
        choix = prompt("Votre choix : ");

        switch (choix) {
            case "1": enregistrerEmprunt(); break;
        }
    } while (choix !== "2");
}

// ---------------------- LANCEMENT ----------------------

menuPrincipal();






