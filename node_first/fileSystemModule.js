const fs = require('fs');
fs.writeFileSync('fileone.txt','Hey ! I am Pankaj ');
fs.copyFileSync('fileone.txt',"newfile.txt");
