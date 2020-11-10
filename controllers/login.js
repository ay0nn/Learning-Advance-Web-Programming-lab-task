const express 		= require('express');
const userM			= require.main.require('./models/userModel');
const router 		= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{

	var user = {
		username: req.body.uname,
		password: req.body.password
	};
userM.validate(user, function(status){
		if(status){
			res.cookie('uname', req.body.uname);
			res.redirect('/views/home');
		}else{
			res.redirect('/login');
		}
	});
}); 

module.exports = router;