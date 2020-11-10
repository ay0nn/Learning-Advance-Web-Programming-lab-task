const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from user where uname = '"+user.uname+"' and password = '"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(true);
			}else{
				callback(false)
			}
		});
	},
	getById: function(id, callback){
		var sql = "select * from user where id = id";
		db.getResults(sql, [id], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});

	},
	getAll: function(callback){
		var sql = "select * from user";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "insert into user (ename, conum, uname, password) values ('"+user.ename+"', '"+user.conum+"', '"+user.uname+"' , '"+user.password+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});

	},
	update:function(user, callback){
		console.log(user);
		var sql = "update user set ename = '"+user.ename+"', conum = '"+user.conum+"', uname = '"+user.uname+"' , password = '"+user.password+"' where id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(user, callback){
		var sql = "delete from user where id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});

	}
}