var nikhil= {
    fullName : 'Nikhil G',
    age:22,
    phone: [1234,187389]
} 
 var string = JSON.stringify(nikhil);
 const fs= require('fs');
 fs.writeFileSync('data.json',string)
 console.log("filesaved successfulluy")
 fs.readFile('data.json','utf-8',(err,data)=>{
    console.log(data)
 });

// to get the things in same line
//  process.stdout.write("one");
//  process.stdout.write("two");