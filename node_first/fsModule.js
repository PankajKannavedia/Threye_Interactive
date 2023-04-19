const fs = require('fs');
fs.writeFileSync('fileone.txt','Hey ! I am Pankaj ');
fs.copyFileSync('fileone.txt',"newfile.txt");
fs.appendFile('append.txt','Hello  Brother !', function(err){
       if(err) throw err;
       console.log('Saved!');
});
