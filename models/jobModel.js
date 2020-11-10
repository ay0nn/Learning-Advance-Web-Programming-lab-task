const db = require('./db');

module.exports= {
	getById: function(id, callback){
		var sql = "select * from job where id = id";
		db.getResults(sql, [id], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});

	},
	getAll: function(callback){
		var sql = "select * from job";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(job, callback){
		var sql = "insert into job (cname, jtitle, jlocation, salary) values ('"+job.cname+"', '"+job.jtitle+"', '"+job.jlocation+"' , '"+job.salary+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});

	},
	update:function(job, callback){
		console.log(job);
		var sql = "update job set cname = '"+job.cname+"', jtitle = '"+job.jtitle+"', jlocation = '"+job.jlocation+"' , salary = '"+job.salary+"' where id = '"+job.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(job, callback){
		var sql = "delete from job where id = '"+job.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});

	}
}