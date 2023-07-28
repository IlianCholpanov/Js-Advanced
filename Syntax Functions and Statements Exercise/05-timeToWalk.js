function timeToWalk(steps, stepsLengthMeters, speedKmH) {
    let distance = steps * stepsLengthMeters;
    let speed = speedKmH * 1000 / 3600;
    let rest = Math.floor(distance / 500) * 60;
    let totalTime = (distance / speed) + rest;

    let hours = Math.floor(totalTime / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(totalTime / 60).toFixed(0).padStart(2, '0');
    let seconds = (totalTime % 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.60, 5);
