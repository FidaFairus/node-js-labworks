let array=[1,2,2,4,2,1,4];
let length=array.length;
let count=1;
let dup=[];
for(let i=0;i<=length;i++)
    {
        for(let j=i+1;j<=length;j++)
        {
            if (array[i]==array[j])
            {
               count++;
            }
            
        }
        if(count>1){
            console.log(array[i])
        }
    }