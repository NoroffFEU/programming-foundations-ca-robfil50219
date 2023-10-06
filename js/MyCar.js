const MyCar = {
    year: 2018,
    make: "Citroen",
    engine: "PureTech 110 hp",
    transmition: "Automatic",
    isRunning: false, 
    features: [
        "Air Conditioning",
        "Bluetooth Connectivity", 
        "Apple Carplay",
        "GPS Navigation",
        "Leather Seats",
        "Electric Memory Seats",
        "Sunroof",
    ],

    // Function to start the car 
    start: function () {
        if (!this.isRunning) {
            this.isRunning = true;
            console.log("The car is running. Vroom, Vroom!");
            if (engineSound.paused) {
                engineSound.play();
            }
            carIsRunning = true;
        } else {
            console.log("The car is already running.");
        }
    },

    // Function to stop car 
    stop: function() {
        if(this.isRunning) {
            this.isRunning = false; 
            console.log("The car has stopped.");
            engineSound.pause();
            engineSound.currentTime = 0;
            carIsRunning = false;
        } else {
            console.log ("The car is not running.");
        }
    }
};



