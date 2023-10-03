[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12059716&assignment_repo_type=AssignmentRepo)

# Programming Foundations CA

MyCar Object

This Javascript object describes a car, providing information about its specifications and functionality.

Description

The 'MyCar' object represents my Citoen car model from the year 2018 with specific features and options.

Properties

1. Year (Number): The manufacturing year of the car (e.g., 2018).
2. Make(String): The car maufacturer (e.g.,"Citroen").
3. Transmission (String): The transmition type (e.g., "Automatic")
4. Engine (String): The type ogf engine installed (e.g., "PureTech 100hp")
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

1. Start(function): Start the car's engine. If the car is not running, it sets 'isRunning' to true and logs a message indicating that the car is running. If the car is already running, it logs a message indicating that the car is already running.
2. Stop(function): Stops the car's engine. If the car is running, it sets 'isRunning' to false and logs a message indicating that the car has stopped. If the car is not running, it logs a message indicating that the car is not running.
