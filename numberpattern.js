
for(i=1;i<10;i++)
    {
        for(j=1;j<10-i;j++)
        {
            process.stdout.write(" ")
        }
        for(k=1;k<=i;k++){
            process.stdout.write(" "+i)
        }console.log()
    }