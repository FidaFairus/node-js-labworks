let array=[5,2,8,4,1];
for (i=0;i<array.length;i++)
{
    for(j=i+1;j<array.length;j++)
    {
        if(array[i]>array[j]){
            dup=array[i];
            array[i]=array[j];
            array[j]=dup;
        }
    }
}
console.log(array);