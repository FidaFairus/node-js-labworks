//function as a parameter
function executeTask(task){
    console.log("Exucuting task")
    task();
}
executeTask(function(){          //executeTask(()=>{
    console.log("hello");
});

function executeTask(task){
    console.log("Exucuting task")
    var data ="from parent"
    task();
}
executeTask(function(params){          //executeTask(params=>{
    console.log("hello",params);
});

