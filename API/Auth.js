var express = require('express');
var router = express.Router();

const {ResponseHandler} = require("../Controller/ResponseController");
const Method = require("../Controller/method");

const {login,register} = require("../Model/Authentication");




//Request No: 07
router.post('/login',async function(req, res){
    console.log("login");
    var method = new Method(req,res);
    
    var status = await login(method);

    res.render('book');

});


// Request No: 08
router.post('/register',async function(req, res){
    console.log("register");
    var method = new Method(req,res);
    
    const status = await register(method);
    
    res.status(ResponseHandler(status)).send(status);

});


module.exports = router;