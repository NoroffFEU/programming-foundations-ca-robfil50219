const myCar = {
    year: 2018,
    make: "Citroen",
    engine: "PureTech 110 hp",
    transmition: "Automatic",
    isRunning: false, 
    features: [
        "Air Conditioning",
        "Bluetooth Connectivety", 
        "Apple Carplay",
        "GPS Navigation",
        "Leather Seats",
        "Electric Memory Seats",
        "Sunroof",
    ],

    //function to start the car 
    start: function () {
        if (!this.isRunning) {
            this.isRunning = true;
            console.log("The car is running. Vrom,Vrooom!");
        } else {
            console.log("The car is already running.")
        }
    },

//Function to stop car 
stop: function() {
    if(this.isRunning) {
        this.isRunning = false; 
    
    }
}

}