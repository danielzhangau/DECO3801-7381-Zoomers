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

app.get('/users', function(req,res){
    connection.getConnection(function(err, connection){
        if(err){
            console.log("[error] - " + err.message);
        }
        // res.send(data);
        connection.query('SELECT * FROM user', function (error, results, fields) {
            if (error){
                console.log('[SELECT ERROR] -', err.message);
                return;
            };
            console.log(results);
            console.log("connected!!");
            res.send(results)
        });
    });
});

app.post('/users',function(req,res){
    connection.getConnection(function(err,connection){
        if(err){
            console.log("[error] - " + err.message);
        }
        connection.query('INSERT INTO user SET ?',req.body,function(error,rows,fields){
            if(!!error) console.log(error.message);
            else {
                console.log(req.body);
                console.log(rows);
                res.send(JSON.stringify(rows));
            };
        });
    })
    
});

app.get('/users/:id',function(req,res){
    connection.query('SELECT * FROM user WHERE id=?',req.params.id,function(error,rows,fields){
        if(!!error) console.log('error');
        else {
            console.log(rows);
            res.send(JSON.stringify(rows));
        }
    })
});

app.delete('/users/:id',function(req,res){
    connection.query('DELETE FROM user WHERE id=?',req.params.id,function(error,rows,fields){
        if(!!error) console.log('error');
        else {
            console.log(rows);
            res.end('deleted successfully');
        }
    })
});

app.put('/users',function(req,res){
    connection.query('UPDATE user SET name=?,email=?,password=? WHERE id=?',
    [req.body.name,req.body.email,req.body.password,req.body.id],function(error,rows,fields){
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