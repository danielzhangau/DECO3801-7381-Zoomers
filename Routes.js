const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
    host : '34.123.158.0',
    user : 'root',
    password : '123456',
    port: '3306',
    database : 'users'
});

const app = express();


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
    conn.query('INSERT INTO user SET ?',req.body,function(error,results,fields){
        if(!!error) console.log('error');
        else {
            console.log(req.body)
            console.log(results);
            res.send(JSON.stringify(results));
        }
    })
});

app.get('/users/:id',function(req,res){
    conn.query('SELECT * FROM users WHERE id=?',req.params.id,function(error,results,fields){
        if(!!error) console.log('error');
        else {
            console.log(results);
            res.send(JSON.stringify(results));
        }
    })
});

app.delete('/users/:id',function(req,res){
    conn.query('DELETE FROM users WHERE id=?',req.params.id,function(error,results,fields){
        if(!!error) console.log('error');
        else {
            console.log(results);
            res.end('deleted successfully');
        }
    })
});

app.put('/users',function(req,res){
    conn.query('UPDATE users SET name=?,email=?,mobile=? WHERE id=?',
    [req.body.name,req.body.email,req.body.mobile,req.body.id],function(error,results,fields){
        if(!!error) console.log('error');
        else {
            console.log(req.body)
            console.log(results);
            res.send(JSON.stringify(results));
        }
    })
});

app.listen(8888, ()=>{
    console.log('Go to http://localhost:3006/users so you can see the data.');
});