const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}));

app.listen(3000, ()=>{
    console.log('server is running at port 3000');
});

function getUserInfo(header){
    const whoami = {
        'ipaddress': header.host,
        'language': header['accept-language'],
        'software': header['user-agent'] 
    }
    return whoami
}

app.get('/', function(req, res){
    console.log(typeof(req.headers))
    const whoami = getUserInfo(req.headers);
    res.send(whoami);
});