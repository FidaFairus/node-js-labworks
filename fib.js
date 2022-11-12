let n1=0;
let n2=1;
process.stdout.write(''+n1);
process.stdout.write(' '+n2);
for(i=0;i<19;i++){
    n3=n1+n2;
    process.stdout.write(' '+n3);
    n1=n2;
    n2=n3;
}