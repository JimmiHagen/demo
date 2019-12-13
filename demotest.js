var fs = require('fs');

var fileName = 'test.html';

var stream = fs.createReadStream(fileName);
fs.readFile(fileName, function (err, data) {
  if (err) throw err;
  if(data.includes('Test')){
   console.log('Found it')
   process.exit()
 } else {
   console.log('failed')
   process.exit(-1)
 }
});
