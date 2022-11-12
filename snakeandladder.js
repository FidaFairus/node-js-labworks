var count=1;
var score_a=0
var score_b=0
while (score_a<=100||score_b<=100){
if (count%2==0){
     score_b=dice(score_b);
    console.log("score of player2",score_b)
} 
else{
     score_a=dice(score_a)
    console.log("score of player1",score_a)
}
count+=1;
}
//dice 
function dice(score){
let x = Math.floor((Math.random() * 6+1));
console.log("dicevalue",x)
if(x==1){
    score+=1
    return(score)
}
else if (score>1){
    score= scoreadd(score);
    return(score)
}
else {
    return(0)
}
}

function scoreadd(score){
while(score<=100){
    var rand;
    rand= Math.floor( (Math.random() * 6) + 1);
    score=score+rand
    ladder(score);
    snake(score);
    return (score)
        }
    }


//ladder
function ladder(score){
    ladder1=[[4,14],[8,30],[28,76],[71,92],[50,67]]
    for(i=0;i<5;i++){
            if(score==ladder1[i][0]){
                    score=ladder1[i][1]
                }
             }
    
    return(score)
    }


// snake 
    function snake(score){
        snake1=[[4,14],[8,30],[28,76],[71,92],[50,67]]
        for(i=0;i<5;i++){
        if(score==snake1[i][0]){
            score=snake1[i][1]
        }
    }
   
        return(score)
    }