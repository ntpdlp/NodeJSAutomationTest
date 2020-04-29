let emergencyContacts = [113, 114, 115];

for(let i = 0; i<emergencyContacts.length; i++){
    if(emergencyContacts[i] == 113){
        console.log("Police " + emergencyContacts[i])
    }else if(emergencyContacts[i] == 114){
        console.log("Fire " + emergencyContacts[i])
    }else{
        console.log("Ambulance " + emergencyContacts[i])
    }
}
