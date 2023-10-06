# Programming Foundations CA

MyCar Object

This Javascript object describes a car, providing information about its specifications and functionality.

Description

The 'MyCar' object represents my Citroen car model from the year 2018 with specific features and options.

Properties

1. Year (Number): The manufacturing year of the car (e.g., 2018).
2. Make(String): The car maufacturer (e.g.,"Citroen").
3. Transmission (String): The transmition type (e.g., "Automatic")
4. Engine (String): The type ogf engine installed (e.g., "PureTech 110hp")
5. IsRunning (Boolean) : Indicates whether the car is currentley running (true) or not (false).
6. Features (Arrey): An arrey of features and options avalible for the car, including:

Air Conditioning
Bluetooth Connectivity
Apple Carplay
GPS Navigation
Leather Seats
Electric Memory Seats
Sunroof

Methods

1. Start(function): Start the car's engine. If the car is not running, it sets 'isRunning' to true and logs a message indicating that the car is running. If the car is already running, it logs a message indicating that the car is already running. And start engine audio is played and looped.
2. Stop(function): Stops the car's engine. If the car is running, it sets 'isRunning' to false and logs a message indicating that the car has stopped. If the car is not running, it logs a message indicating that the car is not running.Engine audio stoppes.

HTML Structure

The web page's HTML structure ('index.html') includes:

1. Two buttons for start and stopping the car within the '<div id="buttonContainer">' element.
2. A '<div id="messagedisplay"> element for displaying messages about the ca's status.

The CSS Styles applied to the buttons and container ('css/styles.css') include:

1. font-size: Set to 32px for large text.
2. text-shadow: Adds a subtle shadow to create a 3D effect.
3. background-color: Red background color for the buttons.
4. color: White text color for high visibility.
5. border: A 1px solid white border around the buttons.
6. border-radius: Set to 50% to create circular buttons.
7. padding: Large padding adds space around the button text.
8. cursor: Changes to a pointer when hovering to indicate clickability.
9. box-shadow: Provides a subtle button depth effect.
10. transition: Smooth transition for the box shadow on hover.
11. shrinking effect on buttons when clicked

Usage

1. Clone this repository to your local machine: https://github.com/NoroffFEU/programming-foundations-ca-robfil50219.git
   or open this netlify link to view the website https://robfil-programming-foundations-ca.netlify.app.
2. Open the 'index.html' file in a web browser (Chrome)
3. Click the "Start Car" button to start the car.
4. Click the "Stop Car" Button to stop the car.
5. View console.log messages to see the car's status.
