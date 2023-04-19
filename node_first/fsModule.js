const fs = require('fs');
const { exit } = require('process');
fs.writeFileSync('fileone.txt','Hey ! I am Pankaj ');
fs.copyFileSync('fileone.txt',"newfile.txt");
fs.appendFile('append.txt'," I'm From Maina.", function(err){
       if(err) throw err;
       console.log('Saved!');

fs.open('open.txt','w', function(err) {
    if(err) throw err;
    console.log('open.txt : Can be Opened for writing.');
});

fs.open('open1.txt','w', function(err) {
    if(err) throw err;
    console.log(' open1.txt : Can be Opened for writing.');
});
fs.open('open1.txt','w', function(err) {
    if(err) throw err;
    console.log(' open1.txt : Can be Opened for writing.');
});
fs.open('open2.txt','w', function(err) {
    if(err) throw err;
    console.log(' open2.txt : Can be Opened for writing.');
});

fs.unlink('open1.txt', function(err) {
    if(err) throw err;
    console.log('open1.txt : is Deleted');
});

fs.rename('open2.txt','Raees.txt', function(err) {
    if(err) throw err;
    console.log('open2.txt is renamed as Raees.txt');
});

});