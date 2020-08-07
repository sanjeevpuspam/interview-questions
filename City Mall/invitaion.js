let jsonData = require('./obj.json');
const method = require("./functions");
const structData = [];

jsonData.map((obj) => {
    let cordinate = obj.offices[0].coordinates.split(',');
    let distance = parseInt(method.getDistanceFromLatLonInKm(cordinate[0],cordinate[1]).toFixed(1));
    if(distance <= 100) { // offices within 100km 
        structData.push({
            "offices Name" : obj.organization,
            "Distance from central London " : `${distance} KM`,
            "Address" : obj.offices[0].address
        });
    }    
});

console.table(structData);