var fs = require('fs');

var fileName = 'test.html';
var stream = fs.createWriteStream(fileName);

stream.once('open', function(fd) {
  var html = getHtml();

  stream.end(html);
});

function getHtml(request) {

  return '<!DOCTYPE html>'
       + '<html><head>' + "Test Page" + '</head><body>' + "Test text" + '</body></html>';
};
