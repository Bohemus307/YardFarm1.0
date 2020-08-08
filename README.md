# YardFarm1.0

GUI for sensor system located in a small hydroponic greenhouse in my yard.


## Description

Yard Farm is a small 4' x 4' hyrdoponic greenhouse that utilized a DWC technique called 'float raft' where a piece of foam holds plants in a large reservoir of nutrient water that is aerated with an air pump, and circulated with a drain and a reservoir then recirculated with a small water pump. This Application was designed as a dashboard to collect and review data and operate some controls inside the greenhouse. The data is collected using a raspberry pi based sensor system that sends data back to my computer via bluetooth and then stored in a mongoDB database with an Express.js server to communicate with the React front-end client.

## Getting Started

* Fork Repo to working directory and cd into yardfarm1.0
* Npm install
* Npm start-server to start Adafruit server for sensors
*
* .ENV file requires either dev or prod based on config.js

### Dependencies

* Node.js
* React
* React-dom
* MongoDB
* C3
* D3
* Express.js

### Executing program

In development -
* npm run seed-db
* npm run react-dev
* npm run server-dev
* Open localhost:3030

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
