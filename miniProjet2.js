const prompt = require("prompt-sync")()

const taxis = [
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
    console.log(`-->request ${request.reqId} at position ${request.position} -->taxis ${taxis.id} assinged (distance${minDistance})`);
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

simulate();
