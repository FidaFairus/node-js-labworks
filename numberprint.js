
// for(let i=1;i<=20;i+2)
// {
//     for(let j=0;j<i;j++)
//         {  
            
//             console.log(i);
            
//         }
//  } 
// let count = 0
// for(let i = 1; i < 20; i+=2){
//     for(let j = 0; j < i; ++j){
//         console.log(i)
      
//     }
//     console.log('-----------')
// }


let k=1;
let string="";
for(i=1;i<10;i++)
    {
     for (j=0;j<i;j++){
        string += k;
        string += " ";
        

     }
     
     k=k+2;
     string += "\n";

    }
    console.log(string);

