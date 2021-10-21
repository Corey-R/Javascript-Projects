
// Creating a dictionary for patients

function Patients() {
    var Hospital = {   
        Name:"Stan Smith",
        Age:42, 
        Weight:210,
        Weight:"eighty-five pounds", // Displays latest key entry but not 210 
        Height:72 + " inches", 
        Condition:"GSW from daughter" 
    };
    
    // Will use delete operator to delete the latest "Weight" entry
    delete Hospital.Weight;

    // Note: The delete operator doesn't choose which duplicate to delete,
    // but will instead delete every key named "Weight". This means
    // When Hospital.Weight is called, an "undefined" will appear
    // which means the targeted key no longer exists.
    

    document.getElementById("Dictionary").innerHTML = Hospital.Weight;
    document.getElementById("Pictionary").innerHTML = Hospital.Condition;
}

// Note: Above there are two keys with the name "Weight".
// Because KVP can only identify one uniquely named key, 
// the earliest of any suplicate will be overwritten by the latest.

