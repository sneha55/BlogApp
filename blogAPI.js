var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

//app.use(logger('dev'));

app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));
app.use(cookieParser());

var dbPath  = "mongodb://localhost/blogApp";

// command to connect with database
db = mongoose.connect(dbPath);

mongoose.connection.once('open', function() {

	console.log("database connection open success" +db);

});
var Blog = require('./blogSchema.js');
var advFunc = require('./functionsAdv.js');
//var advFuncModel = mongoose.model('advFunc');
var blogModel = mongoose.model('Blog');

app.get('/', function (req, res) {
  res.send('In Blog Model');
});


//CREATE API
app.post('/createBlog',advFunc.adminFilter, function (req, res) {
	
	var newBlog = new blogModel({
	 blogTitle	 : req.body.blogTitle,
	 blogSubTitle : req.body.blogSubTitle,
	 author : req.body.author,
	 blogBody : req.body.blogBody,
	 isSignInReq : req.body.isSignInReq,
	 isAddReq : req.body.isAddReq,
	 userName : req.body.userName,
	 pwd : req.body.pwd,
	 created : req.body.created
	});

	newBlog.save(function(err,result){
		if(err){
			res.send(err);
		}
		else {
			res.send(result);			
			
		}
	});
  
});

//VIEW ALL API
app.get('/viewAllBlogs', function (req, res) {
	var i=0;
	
	blogModel.find(function(err,result){
		if(err){
			console.log(err);
			res.send(err);
		}
		else 
		{
			for(i=0;i<result.length;i++) {
				console.log('Title is '+result[i].blogTitle+'\n');
				if(result[i].isAddReq =='Y'){
					advFunc.addRequired(result[i].blogTitle,result[i].blogBody,advFunc.addPlaying);
				}
				else{
					console.log('Body : ' +result[i].blogBody+ '\n');
				}
			}
			res.send('SUCCESS -PLS VIEW CONSOLE LOG FOR MESSAGE');			
		}
	});
});

//VIEW BASED ON ID API:
app.get('/viewOnId/:blogId', function (req, res) {
	
	console.log('inside');
	blogModel.findOne({_id:req.params.blogId},function(err,result){
		if(err)
		{
			res.send(err);
		}
		else 
		{
			console.log('Title is '+result.blogTitle+'\n');
			if(result.isAddReq =='Y'){
				advFunc.addRequired(result.blogTitle,result.blogBody,advFunc.addPlaying);
			}
			else{
				console.log('Body : ' +result.blogBody+ '\n');
			}
			res.send('SUCCESS--pLEASE VIEW CONSOLE LOG FOR MESSAGGE');	
		}
		
	});
});

//UPDATE BASED ON ID API:
app.put('/updateBlog/:id',advFunc.adminFilter, function (req, res) {
	
	var update = req.body;	
	blogModel.findOneAndUpdate({'_id': req.params.id},update, function(err, result) {
		if (err) {
				res.send(err);
		}
		else {
				res.send(result);			
		}
	});

});

//DELETE BASE ON ID API
app.delete('/deleteBlog/:id', function (req, res) {
	
	blogModel.findOneAndRemove({ _id: req.params.id }, function(err) {
		if (err) 
		{
			res.send(err);
		}
		else 
		{
			res.send("Blog has been deleted");			
		}
	});

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});





