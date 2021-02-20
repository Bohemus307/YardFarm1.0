# YardFarm1.0

HMI for sensor and controls system located for greenhouses and smaller CEA enviroments.

## Description

Yard Farm is a hyrdoponic greenhouse sensor system and HMI platform that utilizes React for the front-end and multiple dependencies for the Node.js back end. This Application was designed as a dashboard to collect and review data and operate some controls inside the farm. The data is collected using a Feather huzzah and a raspberry pi based sensor system that sends data back to my computer via wifi and then data is stored in a mongoDB database with an Express.js server to communicate with the client. 

## Getting Started
(Dev)
* Fork Repo to working directory and cd into yardfarm1.0
* Must have MongoDB installed and running (credentials required in config.js file)
* Npm install
* Npm start-server to start Adafruit server for sensors (unecessary if not using external sensors)
* Npm react-dev for compiler
* Npm server-dev to start express server
* .ENV file requires dev

(Prod)
* Fork Repo to working directory and cd into yardfarm1.0
* Npm install
* Npm start-server to start Adafruit server for sensors (unecessary if not using external sensors)
* .ENV file requires NODE_ENV=dev


### Dependencies

* Node.js
* React
* React-dom
* MongoDB
* C3
* D3
* Express.js
* AdafruitIo

### Executing program

In development -
* create .env file with NODE_ENV variable 
* check that mongoDB is turned on and running
* npm run seed-db
* npm run react-dev
* npm run server-dev
* Open browser to localhost:3030

In Production -

## Help

## Authors

Joshua Scott Oxner  
[Email](bohemus@hotmail.com)

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

* [C3 charts](https://github.com/matiassingers/awesome-readme)
* [D3](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [Adafruit Api](https://io.adafruit.com/)
