const taxis = [
  { id: 1, position: 5, disponible: true },
  { id: 2, position: 12, disponible: true },
  { id: 3, position: 20, disponible: true }
];

// Liste de demandes de clients
const demandes = [
  { id: 1, position: 10 },
  { id: 2, position: 3 },
  { id: 3, position: 18 },
  { id: 4, position: 7 }
];

// Fonction pour trouver le taxi le plus proche d'une demande
function trouverTaxiLePlusProche(demande) {
  let taxiLePlusProche = null;
  let distanceMin = Infinity;

  for (const taxi of taxis) {
    if (taxi.disponible) {
      const distance = Math.abs(taxi.position - demande.position);
      if (distance < distanceMin) {
        distanceMin = distance;
        taxiLePlusProche = taxi;
      }
    }
  }

  return { taxi: taxiLePlusProche, distance: distanceMin };
}

// Fonction pour attribuer un taxi à une demande
function attribuerTaxi(demande) {
  const { taxi, distance } = trouverTaxiLePlusProche(demande);

  if (taxi) {
    taxi.disponible = false; // Le taxi devient occupé
    taxi.position = demande.position; // Il se déplace à la position du client
    console.log(`Le taxi ${taxi.id} a pris la demande ${demande.id} (distance = ${distance})`);
  } else {
    console.log(`Aucun taxi disponible pour la demande ${demande.id}`);
  }
}

// Programme principal
function simulation() {
  console.log("=== Début de la simulation ===");

  for (const demande of demandes) {
    attribuerTaxi(demande);
  }

  console.log("\n=== Fin de la simulation ===");
  console.log("Positions finales des taxis :");
  for (const taxi of taxis) {
    console.log(`Taxi ${taxi.id} → position ${taxi.position}`);
  }
}

simulation();