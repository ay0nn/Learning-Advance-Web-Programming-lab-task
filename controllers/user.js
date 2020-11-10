const express   = require('express');
const router    = express.Router();

router.get('*',  (req, res, next)=>{
    if(req.cookies['uname'] == null){
        res.redirect('/login');
    }else{
        next();
    }
});

router.get('/create', (req, res)=>{
    res.render('home/adduser');
});

router.post('/create', (req, res)=>{
    res.send('New user info:'+
                "<br> Employee name: "+req.body.ename+
                "<br> Contact number: "+req.body.conum+
                "<br> User type: "+req.body.uname+
                "<br> Password: "+req.body.password
            );
});

router.get('/edit/:id', function(req, res){
    userModel.getById(req.params.id, function(result){
        res.render('home/updateuser', {user: result});
    });
});

router.post('/edit/:id', function(req, res){
    
        var user = {
            id: req.params.Id,
            eame: req.body.e_Name,
            conum: req.body.conum,
            uname: req.body.uname,
            password: req.body.password,
        };
        userModel.update(user, function(status){
            if(status){
                res.redirect('/home/userList');
            }else{
                res.redirect('/home/update/'+req.params.id);
            }
        });
});

module.exports = router;