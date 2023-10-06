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
        console.log("The car has stopped.")
    } else {
        console.log ("The car is not running.");
    }
}

};

//Refereces to the audi and buttons
const engineSound = document.getElementById ("engineSound"); 
const startButton = document.getElementById ("startButton"); 
const stopButton = document.getElementById ("stopButton") 

//Functions to start the car and play audio 
startButton.addEventListener("click", function(){
if(engineSound.paused) {
    engineSound.play();
}
MyCar.start();
}); 

//Function to stop the car an audio 
stopButton.addEventListener("click", function(){
    engineSound.pause(); 
    engineSound.currentTime = 0; 
    MyCar.stop();
}
)