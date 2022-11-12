const axios = require('axios')
// const http = require('https');

axios.get('https://reqres.in/api/users')
.then(function(response){
    console.log(response.data);
})



// http.get('https://reqres.in/api/users', (res)=>{
//     var content = '';
//     res.on('data',(data)=>{
//         content += data;
//     });

//     res.on('end', ()=>{
//         console.log(content);
//     });
// });