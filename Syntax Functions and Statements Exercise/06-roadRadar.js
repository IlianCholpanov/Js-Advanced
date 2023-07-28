function roadRadar(speed, area) {
    const limitDictionary = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }

    const limit = limitDictionary[area];

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return;
    }

    let status = '';
    let speeding = speed - limit;

    if (speeding <= 20) {
        status = 'speeding';
    } else if (speeding > 20 && speeding <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    const output = `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`;
    console.log(output);
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');