'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const sample_user = require('./data');
const port = 2022;
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');

const router = express.Router();
app.use(cors());

router.use( function(req, res, next)  {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, X-Requested-With, Range, Content-Type');
    if(req.method === 'OPTIONS'){
        return res.sendStatus(200);
    }else{
        return next();
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

router.get('/', (req, res) =>{
    res.send('Server is up...Catch ya!');
});

app.post('/api/users/login', (req, res) => {
    const {email, password} = req.body;
    const user = sample_user.find(user => user.email === email &&
        user.password === password);

        if(user){
            res.send(generateTokenResponse(user));
        }else{
            res.status(400)
            .send("User name or password is invalid");
        }
});

const generateTokenResponse = (user) => {
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    }, "someRandomText", {
        expiresIn:"30d"
    });

    user.token = token;
    return user;
}

app.use(router);
app.listen(port, () =>{
    console.log(`My server is listening on port ${port}`);
});