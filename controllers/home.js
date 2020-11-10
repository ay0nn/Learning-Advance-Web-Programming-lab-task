const express 	= require('express');
const userModel = require.main.require('./models/jobModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', (req, res)=>{
	res.render('home/index', {name: 'alamin', id:'123'});
});


router.get('/userlist', (req, res)=>{

	jobModel.getAll(function(results){
		res.render('home/joblist', {jobs: results});
	});

})

module.exports = router;