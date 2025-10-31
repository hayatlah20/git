const prompt = require("prompt-sync")()

let array = [2, 3, 5, 3, 2, 5, 3]
let compte=0

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if(array[i] == array[j]){
            compte++
        }
    }
    if (compte % 2 != 0) {
        console.log("Le nombre impair est :", array[i])
        break 
    }
}

/*let taxis=[];
let requests=[];
let compt1=1;
let compt2=1;
function AjouterTaxi(){
    let position=prompt("entrer la posision du taxi:");
    taxis.push({id_taxi:compt1++,position,available:true,timeremaing:0});
    AfficherTaxis();
}
function AfficherTaxis(){
    if(taxis.length===0){
        console.log("aucun taxi trouvee")
        return;
      }
    console.log(" Liste des taxis :");
    for(let i=0;i<taxis.length;i++){
      console.log(taxis[i])
    }}
function AjouterCommandes(){
    let position=prompt("entre la position du commandes")
    let duration=+prompt("entrer la duree de trajet de la commande en minute:");
    requests.push({id_request:compt2++,position,duration})
    AfficherCommandes()
}
function AfficherCommandes(){
    console.log("listes des commandes:");
    for (let i=0;i<requests.length;i++){
        console.log(requests[i]);
    }
}    
function distanceplusproche() {
    if (taxis.length === 0 || requests.length === 0) {
        console.log("Aucun taxi ou commande disponible.");
        return;
    }

    let minDistance = Infinity;
    let bestTaxi = 0;
    let bestRequest = 0;

    for (let i = 0; i < taxis.length; i++) {
        for (let j = 0; j < requests.length; j++) {
            let distance = Math.abs(Number(taxis[i].position) - Number(requests[j].position));
            if (distance < minDistance) {
                minDistance = distance;
                bestTaxi = taxis[i];
                bestRequest = requests[j];
            }
        }
    }

    if (bestTaxi && bestRequest) {
        console.log("Le taxi le plus proche est le taxi:" ,bestTaxi.id_taxi,"pour la commande" ,bestRequest.id_request,"à une distance de",minDistance);
    } else {
        console.log("Aucune correspondance trouvée.");
    }
}
 function menu() {
  let choix;
  do {


console.log("1. Ajouter un taxi a lapp");
console.log("2. Afficher tous les taxis");
console.log("3. Ajouter une commande a lapp");
console.log("4. Afficher tous les commandes");
console.log("5.dist plus proche:")
    choix = prompt("Choisissez une option :");




    switch (choix) {
      case "1": AjouterTaxi();
       break;
      case "2": AfficherTaxis();
       break;
      case "3": AjouterCommandes();
       break;
      case "4": AfficherCommandes();
      break;
      case "5": distanceplusproche();
       break;
      case "0": console.log(" Fin du programme");
       break;
      default: console.log(" Choix invalide");
    }
  }while (choix !== "0");
  }
  menu()*/


  /*const taxis = [
  { id: 1, position: 5, available: true, timeRemaining: 0, totalRides: 0 },
  { id: 2, position: 12, available: true, timeRemaining: 0, totalRides: 0 },
  { id: 3, position: 20, available: true, timeRemaining: 0, totalRides: 0 }
];

const requests = [
  { reqId: 1, position: 10, duration: 3, time: 0 },
  { reqId: 2, position: 3, duration: 4, time: 2 },
  { reqId: 3, position: 18, duration: 2, time: 4 },
  { reqId: 4, position: 7, duration: 5, time: 5 }
];

let currentTime = 0;
let waitingQueue = [];
let totalRides = 0;

function findClosestTaxi(request) {
  let closestTaxi = null;
  let minDistance = Infinity;

  for (const taxi of taxis) {
    if (taxi.available) {
      const distance = Math.abs(taxi.position - request.position);
      if (distance < minDistance) {
        minDistance = distance;
        closestTaxi = taxi;
      }
    }
  }

  return closestTaxi;
}

function assignTaxi(request) {
  const taxi = findClosestTaxi(request);
  if (taxi) {
    taxi.available = false;
    taxi.timeRemaining = request.duration;
    taxi.destination = request.position;
    taxi.totalRides += 1;
    totalRides += 1;
    console.log(`Minute ${currentTime}:`);
    console.log(`Taxi ${taxi.id} assigned to request ${request.reqId}`);
  } else {
    waitingQueue.push(request);
    console.log(`Minute ${currentTime}:`);
    console.log(`No taxi available for request ${request.reqId}, added to queue`);
  }
}

function updateTaxis() {
  for (const taxi of taxis) {
    if (!taxi.available) {
      taxi.timeRemaining -= 1;
      if (taxi.timeRemaining <= 0) {
        taxi.available = true;
        taxi.position = taxi.destination;
        taxi.destination = null;
        console.log(`Minute ${currentTime}:`);
        console.log(`Taxi ${taxi.id} is now available`);
      }
    }
  }
}

function processWaitingQueue() {
  const stillWaiting = [];
  for (const request of waitingQueue) {
    const taxi = findClosestTaxi(request);
    if (taxi) {
      assignTaxi(request);
    } else {
      stillWaiting.push(request);
    }
  }
  waitingQueue = stillWaiting;
}

function simulate() {
  const maxTime = Math.max(...requests.map(r => r.time)) + 20;

  while (currentTime <= maxTime) {
    const newRequests = requests.filter(r => r.time === currentTime);
    for (const request of newRequests) {
      assignTaxi(request);
    }

    updateTaxis();
    processWaitingQueue();
    currentTime++;
  }

  console.log("\n--- Rapport final ---");
  console.log("tous les trajets ont terminé");
  console.log(`Temps total simulé : ${currentTime} minutes`);
  for (const taxi of taxis) {
    console.log(`Taxi ${taxi.id} : ${taxi.totalRides} trajets, position finale ${taxi.position}`);
  }
  console.log(`Nombre total de trajets effectués : ${totalRides}`);
}

simulate();*/