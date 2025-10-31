const taxis = [
  { id: 1, position: 5, available: true, timeRemaining: 0, totalRides: 0, destination: null },
  { id: 2, position: 12, available: true, timeRemaining: 0, totalRides: 0, destination: null },
  { id: 3, position: 20, available: true, timeRemaining: 0, totalRides: 0, destination: null }
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


function TrouverTaxiDisponibleLePlusProche(request) {
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

  return { taxi: closestTaxi, distance: minDistance };
}


function assignerTaxiauneDemande(request) {
  const { taxi, distance } = TrouverTaxiDisponibleLePlusProche(request);
  if (taxi) {
    taxi.available = false;
    taxi.timeRemaining = request.duration;
    taxi.destination = request.position;
    taxi.totalRides++;
    totalRides++;

    console.log(`Minute ${currentTime}:`);
    console.log(`→ Request ${request.reqId} at position ${request.position} → Taxi ${taxi.id} assigned (distance: ${distance})`);
  } else {
    waitingQueue.push(request);
    console.log(`Minute ${currentTime}:`);
    console.log(`→ Request ${request.reqId} at position ${request.position} → all taxis busy → added to queue.`);
  }
}


function updateTaxis() {
  for (const taxi of taxis) {
    if (!taxi.available) {
      taxi.timeRemaining--;

      if (taxi.timeRemaining <= 0) {
        taxi.available = true;
        taxi.position = taxi.destination;
        taxi.destination = null;

        console.log(`Minute ${currentTime}:`);
        console.log(`→ Taxi ${taxi.id} finished ride`);

        if (waitingQueue.length > 0) {
          const nextRequest = waitingQueue.shift();
          assignerTaxiauneDemande(nextRequest);
        }
      }
    }
  }
}


function simulate() {
  const maxTime = Math.max(...requests.map(r => r.time)) + 20;

  while (currentTime <= maxTime) {
    // Ajouter les nouvelles demandes de cette minute
    const newRequests = requests.filter(r => r.time === currentTime);
    for (const request of newRequests) {
      assignerTaxiauneDemande(request);
    }

    updateTaxis();

    const taxisBusy = taxis.some(t => !t.available);
    const requestsLeft = waitingQueue.length > 0 || requests.some(r => r.time > currentTime);
    if (!taxisBusy && !requestsLeft && currentTime > 0) {
      console.log(`Minute ${currentTime}:`);
      console.log(`tous les trajets ont terminé.\n`);
      break;
    }

    currentTime++;
  }

  console.log(`--- Rapport final ---`);
  for (const taxi of taxis) {
    console.log(`Taxi ${taxi.id}: ${taxi.totalRides} rides, position ${taxi.position}`);
  }
  console.log(`Total rides: ${totalRides}`);
}

simulate();