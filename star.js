let star_pattern = ""
for (let i=1;i<=7;i++){
    for (let j=7;j>=1;j--)
    {
        if ((i>=j)&(i%2!=0)){
        star_pattern+="*"
        
            }
        
        else 
        {
            star_pattern+=" "
        }
    }
    star_pattern+="\n"
}
console.log(star_pattern)