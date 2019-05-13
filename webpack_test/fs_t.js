const path = require('path');
const fs = require('fs');

var url = path.resolve(__dirname, 'src');

fs.readdir(url, function (err, files) {
	console.log('this is url payload:', files);
});
