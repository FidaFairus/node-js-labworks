var arr1=[1,5,3,8,9];
var arr2=[3,5,6,7,8];
var arr3=[];
for(i=0;i<5;i++)
    {
    for(j=0;j<5;j++)
            {
                if(arr1[i]!=arr2[j])  {
                  arr3[i]=arr1[i];
            }
               
        }
    
    }
    console.log(arr3)