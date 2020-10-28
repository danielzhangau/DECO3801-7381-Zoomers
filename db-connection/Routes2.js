const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const connection = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'user profile'
});

const app = express();
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/profile/:uid',function(req,res){
    connection.query('SELECT * FROM user WHERE uid=?',req.params.uid,function(error,rows,fields){
        if(!!error) console.log('error');
        else {
            console.log(rows);
            res.send(JSON.stringify(rows));
        }
    })
});

app.delete('/profile/:uid',function(req,res){
    connection.query('DELETE FROM profile WHERE uid=?',req.params.uid,function(error,rows,fields){
        if(!!error) console.log('error');
        else {
            console.log(rows);
            res.end('deleted successfully');
        }
    })
});

app.post('/profile',function(req,res){
    connection.getConnection(function(err,connection){
        if(err){
            console.log("[error] - " + err.message);
        }
        connection.query('INSERT INTO profile SET ?',req.body,function(error,rows,fields){
            if(!!error) console.log(error.message);
            else {
                console.log(req.body);
                console.log(rows);
                res.send(JSON.stringify(rows));
            };
        });
    })
});

app.put('/profile',function(req,res){
    connection.query('UPDATE profile SET travelled=?,travelmoney=? WHERE uid=?',
    [req.body.travelled,req.body.travelmoney,req.body.uid],function(error,rows,fields){
        if(!!error) console.log('error');
        else {
            console.log(req.body)
            console.log(rows);
            res.send(JSON.stringify(rows));
        }
    })
})
app.listen(19007, ()=>{
    console.log('server start');
});