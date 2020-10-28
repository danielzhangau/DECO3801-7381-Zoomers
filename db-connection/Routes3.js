const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const connection = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'test'
});

const app = express();
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/Reward/:itemId',function(req,res){
    connection.query('SELECT * FROM Reward WHERE itemId=?',req.params.itemId,function(error,rows,fields){
        if(!!error) console.log('error');
        else {
            console.log(rows);
            res.send(JSON.stringify(rows));
        }
    })
});

app.delete('/Reward/:itemId',function(req,res){
    connection.query('DELETE FROM Reward WHERE itemId=?',req.params.itemId,function(error,rows,fields){
        if(!!error) console.log('error');
        else {
            console.log(rows);
            res.end('deleted successfully');
        }
    })
});

app.post('/Reward',function(req,res){
    connection.getConnection(function(err,connection){
        if(err){
            console.log("[error] - " + err.message);
        }
        connection.query('INSERT INTO Reward SET ?',req.body,function(error,rows,fields){
            if(!!error) console.log(error.message);
            else {
                console.log(req.body);
                console.log(rows);
                res.send(JSON.stringify(rows));
            };
        });
    })
});

app.put('/Reward',function(req,res){
    connection.query('UPDATE Reward SET travelled=?,travelmoney=? WHERE itemId=?',
    [req.body.travelled,req.body.travelmoney,req.body.itemId],function(error,rows,fields){
        if(!!error) console.log('error');
        else {
            console.log(req.body)
            console.log(rows);
            res.send(JSON.stringify(rows));
        }
    })
})
app.listen(19006, ()=>{
    console.log('server start');
});