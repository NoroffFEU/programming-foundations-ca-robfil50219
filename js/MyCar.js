const MyCar = {
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

    // Function to start the car 
    start: function () {
        if (!this.isRunning) {
            this.isRunning = true;
            console.log("The car is running. Vroom, Vroom!");
        } else {
            console.log("The car is already running.");
        }
    },

    // Function to stop car 
    stop: function() {
        if(this.isRunning) {
            this.isRunning = false; 
            console.log("The car has stopped.");
        } else {
            console.log ("The car is not running.");
        }
    }
};

// References to the audio and buttons
const engineSound = document.getElementById("engineSound");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

// Event listener to start the car and play audio when "Start Car" is clicked
startButton.addEventListener("click", function(){
    if (engineSound.paused) {
        engineSound.play();
    }
    MyCar.start();
    carIsRunning = true;
});

// Event listener to stop the car and audio when "Stop Car" is clicked
stopButton.addEventListener("click", function(){
    engineSound.pause();
    engineSound.currentTime = 0;
    MyCar.stop();
    carIsRunning = false;
});
