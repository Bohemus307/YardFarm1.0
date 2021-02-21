module.exports = {
  // random number generator for data
  createDataForEnviromentals: (dataType) => {
    const randomNumber = (lowest, highest) => {
      const adjustedHigh = (highest - lowest) + 1;
      return Math.floor(Math.random() * adjustedHigh) + parseFloat(lowest);
    };
    return new Promise((resolve, reject) => {
      switch (dataType) {
        case 'Ph': {
          const dataValue = randomNumber(3, 8);
          const dataObj = {
            data: dataValue,
          };
          resolve(dataObj);
        }
          break;
        case 'EC': {
          const dataValue = randomNumber(0.5, 4);
          const dataObj = {
            data: dataValue,
          };
          resolve(dataObj);
        }
          break;
        case 'temperature': {
          const dataValue = randomNumber(55, 100);
          const dataObj = {
            data: dataValue,
          };
          resolve(dataObj);
        }
          break;
        case 'humidity': {
          const dataValue = randomNumber(22, 98);
          const dataObj = {
            data: dataValue,
          };
          resolve(dataObj);
        }
          break;
        case 'pressure': {
          const dataValue = randomNumber(300, 700);
          const dataObj = {
            data: dataValue,
          };
          resolve(dataObj);
        }
          break;
        case 'tvoc': {
          const dataValue = randomNumber(0, 1000);
          const dataObj = {
            data: dataValue,
          };
          resolve(dataObj);
        }
          break;
        case 'co2': {
          const dataValue = randomNumber(0, 10000);
          const dataObj = {
            data: dataValue,
          };
          resolve(dataObj);
        }
          break;
        case 'uv': {
          const dataValue = randomNumber(0, 4);
          const dataObj = {
            data: dataValue,
          };
          resolve(dataObj);
        }
          break;
        case 'altitude': {
          const dataValue = randomNumber(0, 10000);
          const dataObj = {
            data: dataValue,
          };
          resolve(dataObj);
        }
          break;
        case 'TDS': {
          const dataValue = randomNumber(300, 2200);
          const dataObj = {
            data: dataValue,
          };
          resolve(dataObj);
        }
          break;
        case 'waterTemp': {
          const dataValue = randomNumber(30, 88);
          const dataObj = {
            data: dataValue,
          };
          resolve(dataObj);
        }
          break;
        default:
          console.log(`Sorry, your data type was incorrect ${dataType}.`);
          reject();
          return dataType;
      }
      return dataType;
    });
  },
};
