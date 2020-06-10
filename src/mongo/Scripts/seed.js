const fs = require('fs');
const faker = require('faker');
// const { Aritst, artistSchema } = require('../models/artists.js');

const writeMoments = fs.createWriteStream('moments.csv');
writeMoments.write('id,time,date,intemp,outemp,inhumid,outhumid,ph,ec,ppm,wtemp\n', 'utf8');

function writeUsers(writer, encoding, callback) {
  let i = 525600;
  let id = 0;
  let time = 1;
  let date = 1;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      if (time === 1440) {
        time = 0;
        date += 1;
      }
      if (date === 365) {
        date = 0;
      }
      time += 1;
      // const date = faker.date.between('2019-01-01', '2020-06-15');
      const intemp = faker.random.number({
        min: 65,
        max: 85,
      });
      const outtemp = faker.random.number({
        min: 45,
        max: 90,
      });
      const inhumid = faker.random.number({
        min: 40,
        max: 60,
      });
      const outhumid = faker.random.number({
        min: 30,
        max: 70,
      });
      const ph = faker.random.number({
        min: 5,
        max: 7,
      });
      const ec = faker.random.number({
        min: 1.0,
        max: 2.0,
      });
      const ppm = faker.random.number({
        min: 800,
        max: 1200,
      });
      const wtemp = faker.random.number({
        min: 40,
        max: 50,
      });
      const data = `${id},${time},${date},${intemp},${outtemp},${inhumid},${outhumid},${ph},${ec},${ppm},${wtemp}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeUsers(writeMoments, 'utf-8', () => {
  writeMoments.end();
});
