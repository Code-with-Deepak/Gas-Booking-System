const mysql = require("mysql");
var mail;
var stat;

const datab = mysql.createConnection({
    host:'localhost',user:'root',password:'',database:'nodejs-login'
});

exports.login = async (req,res) => {
    try{
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(400).render('login.hbs',{
                message:'Please provide all Required columns'
            })
        }
        datab.query('SELECT * FROM users WHERE email = ?',[email],function(error,results) {
            if(error){
                console.log(error);
            }
            else{
            console.log(results);
                if(results == 0 ) {
                res.render('login.hbs',{
                    message:'Email does not match with Database'
                    });
                }
                else if(password!=results[0].password){
                    res.render('login.hbs',{message:'Password does not Match with Database'})
                }
                else{
                    res.render('home.hbs',{message: ''+results[0].name,message1:''+results[0].email,
                    message2:''+results[0].total_booked,message3:''+results[0].status,message4:''+results[0].id
                })  

                }
            }
        });
    }
    catch(error){
        console.log(error);
    }
}

exports.cancel = async(req,res) => {

    try{
        const {email} = req.body;
        datab.query('SELECT * FROM users WHERE email = ?',[email],async (error,results) => {
            if(error){
                console.log(error);
            }
            stat = results[0].status;
            mail = results[0].email;
            if(results.length == 0){
                return res.render('cancel.hbs',{
                    message:'Please Enter the correct Email'
                })
            }
        })
        if(stat == 'Booked')
        {

        datab.query('UPDATE users SET total_booked = total_booked-1,status = "No Action" WHERE email = ?',[email],async(error,results) => {
            if(error){
                console.log(error);
            }
            else{
            console.log(results);
                    res.render('cancel.hbs',{message1: 'Cancellation Done'

                });
            }
        });
    }
    else{
        if(mail == email){
            res.render('cancel.hbs',{message: 'Plz Book to Cancel'});
        }
        else
            res.render('cancel.hbs',{message:'Email Error'});        
    }
    }

    catch(error){
        console.log(error);
    }
}


exports.book = async(req,res) => {
    try{
        const {email} = req.body;
        datab.query('SELECT * FROM users WHERE email = ?',[email],async (error,results) => {
            if(error){
                console.log(error);
            }
            stat = results[0].status;
            mail = results[0].email;
            if(results.length == 0){
                return res.render('book.hbs',{
                    message:'Please Enter the correct Email'
                })
            }
        })
        if(stat !== 'Booked')
        {

        datab.query('UPDATE users SET status = "Booked" WHERE email = ?',[mail],async(error,results) => {
            if(error){
                console.log(error);
            }
            else{
            console.log(results);
                    res.render('book.hbs',{message1: 'Booking done'

                });
            }
        });
    }
    else{
        if(mail == email){
            res.render('book.hbs',{message: 'Already Booked...'});
        }
        else
            res.render('book.hbs',{message:'Email Error'});        
    }
    }

    catch(error){
        console.log(error);
    }
}


exports.register = (req,res) => {
    console.log(req.body);
    const {name,email,password,confirmpassword} = req.body;
    datab.query('SELECT email FROM users WHERE email = ?',[email],async (error,results) => {
        if(error){
            console.log(error);
        }
        if(results.length > 0){
            return res.render('register.hbs',{
                message:'The Email is already exist'
            })
        }
        else if(password != confirmpassword)
        {
            return res.render('register.hbs',{
                message: 'Password Does not match !'
            });
        }

        datab.query('INSERT INTO users SET ?',{name:name,email:email,password:password},(error,results) => {
            if(error){
                console.log(error);
            }
            else{
                console.log(results)
                return res.render('register.hbs',{
                    message1: 'Registration Done Successfully'
                });
            }
        });

    });
}

