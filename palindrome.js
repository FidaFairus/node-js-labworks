let string="aneena";
let l=string.length;
let array1=string.split("");
let k=0;
let x=0;
console.log(array1);
let array2=[];
for(let i=l-1;i>=0;i--)
{
    
    
    array2[k] = array1[i];
    k+=1;
}
console.log(array2);
for(let i=0;i<l;i++)
{
if (array1[i]==array2[i]){
    x+=1;
}
}
if(x==0){
    console.log("not palindrome");
}
else {
    console.log("palindrome");
}
