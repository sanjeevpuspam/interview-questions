

deg2rad = (deg) =>{
    return deg * (Math.PI/180)
}

exports.getDistanceFromLatLonInKm = function(lat,lon){
    const centralLondon = [51.515419,-0.141099];
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(centralLondon[0]-lat);  // deg2rad below
    var dLon = deg2rad(centralLondon[1]-lon); 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat)) * Math.cos(deg2rad(centralLondon[0])) * Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
}

exports.deepClone = function(object){
    var newObject = {};
    for(var key in object){
        if(typeof object[key] === 'object'){
            newObject[key] = this.deepClone(object[key]);
        }else{
            newObject[key] = object[key];
        }
    }
    return newObject;
}