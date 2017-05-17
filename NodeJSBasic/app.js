/**
 * Created by Sampath Rajapakse on 4/8/2017.
 */


console.log('Hello World');

const os = require('os');
const fs= require ('fs');

console.log('Architecture '+os.arch());
console.log('CPUs '+os.cpus().length);
console.log('OS '+os.platform());

const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';


fs.readFile(fileName, (err,data) =>{
   if(err){
       console.error(err);
   }
   console.log(data.toString());
});

const  data =fs.readFileSync(fileName);
console.log(data.toString());

const readStream =fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data' , data => {
   console.log(data.toString());
});