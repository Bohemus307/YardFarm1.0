# YardFarm1.0

HMI for sensor and controls system located in a small hydroponic greenhouse in my yard.

## Description

Yard Farm is a hyrdoponic greenhouse sensor system and HMI platform that utilizes React for front-end and multiple dependencies for the Node.js back end. This Application was designed as a dashboard to collect and review data and operate some controls inside the greenhouse. The data is collected using a  Feather huzzah and a raspberry pi based sensor system that sends data back to my computer via bluetooth and then stores in a mongoDB database with an Express.js server to communicate with the client.

## Getting Started
(Dev)
* Fork Repo to working directory and cd into yardfarm1.0
* Npm install
* Npm start-server to start Adafruit server for sensors
* Npm react-dev for compiler
* Npm server-dev to start express server
* .ENV file requires dev

(Prod)
* Fork Repo to working directory and cd into yardfarm1.0
* Npm install
* Npm start-server to start Adafruit server for sensors
* .ENV file requires prod 


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
