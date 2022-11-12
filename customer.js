console.log("1.Add customer ");1
console.log("2.Update customer ");
console.log("3.Serach Customer");
console.log("4.Delete customer ");
console.log("5.Search by email")
console.log("6.Exit")
const fs= require('fs');
var customer={
    username:null,
    id:null,
    name:null,
    age:null,
    phone:[]

}

while(true){    
var read = require('readline-sync');
var option = read.question("Enter the option: ");
console.log(option);    
if (option==1){
   add()
}
else if(option==2){
   update()
}
else if(option==3){
    search()
}
else if(option==4){
    Delete()
}
else if(option==5){
    searchemail()
}
else{
process.exit((0));
}
}

//add data
function add(){
    customer.id=read.question("Enter the Id: ");
    customer.username=read.question("Enter the username: ");
    customer.name=read.question("Enter the name: ");
    customer.age=read.question("Enter the age: ");
    customer.email=read.question("Enter the email: ");
    customer.phone[0] = read.question("Phone: ");
    let a=1;
    while (a==1) {
        let phn = read.question('Do you want to add more numbers?y/n: ');
        switch (phn) {
            case "y":
                number=read.question("How many numbers want to add? ");
                for (let i = 1; i <= number; i++) {
                   
                    user.phone[i] = read.question("Phone: ");
                }
                    break;
            case "n":
                a=0;
        }
        
    }
    
    var res = JSON.stringify(customer);
    var file = getFilename(customer.username)
    fs.writeFileSync(file,res)
}

//update
function update(){
    var username=read.question("Enter the username");
    var filename=getFilename(username);
    var usertext= fs.readFileSync(filename,'utf8');
    var customer= JSON.parse(usertext)

    console.log("Enter the details or leave it blank")
    let id = read.question("Id: ")
    username = read.question("Username: ")
    let name = read.question("Name: ")
    let age = read.question("Age: ")
    let email = read.question("email: ")
    

    customer.id = id ==""?customer.id : id
    customer.username = username ==""?customer.username : username
    customer.name= name ==""?customer.name : name
    customer.age = age ==""?customer.age : age
    customer.email = email ==""?customer.email : email
    
    fs.writeFileSync(filename, JSON.stringify(customer));
    console.log("User updated successfully😁")
}


//search
function search(){
    console.log("enter the username to be searched")
    var username=read.question("Enter the username");
    var filename=getFilename(username);
    var usertext= fs.readFileSync(filename,'utf8');
    var customer= JSON.parse(usertext)
    console.log(customer.name)
    console.log(customer.age)
}

//delete
function Delete(){
    var username=read.question("Enter the username");
    var filename=getFilename(username);
    fs.unlinkSync(filename);
    console.log("user has been deleted")
}

//search by mail
function searchemail(){
    var email=read.question("Enter the email");    
    var files = fs.readdirSync("data");
    files.forEach(e=>{
    var filedata=JSON.parse(fs.readFileSync("data/"+e,'utf8'));
    if (filedata.email==email){
    console.log(filedata);
    }
    })
}

function getFilename(username)
{
    return `data/${username}.json`;
}

