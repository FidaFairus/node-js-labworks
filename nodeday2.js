// import {person} from './nodesecond.mjs';
// person();


// import person from './nodesecond.mjs';
// console.log(person.Name);

const fs=require('fs');
// fs.writeFileSync('myfile2.txt','hey its fida');
// fs.appendFileSync('myfile2.txt', '\n how are you');
// var a=fs.readFileSync('myfile2.txt','utf-8')
// console.log(a);
fs.readFile('myfile2.txt','utf-8',(err,data)=>{
 if(err){
    console.error(err)
 }
 console.log(data)
});
