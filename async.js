console.log(1)
console.log(2)
setTimeout(function (){
    console.log( ["abihith"])
},1000)

console.log(3)
console.log(4)

let count = 0;
setInterval(function (){
    if (count<5){
    count = count + 1;
    console.log(count)
    }
},1000)