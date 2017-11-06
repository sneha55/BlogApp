  
// defining a mongoose schema 
// including the module
var mongoose = require('mongoose');
// declare schema object.
var Schema = mongoose.Schema;

var blogSchema = new Schema({

	blogTitle			: {type:String,default:'',required:true},
	blogSubTitle		: {type:String,default:''},
	author  			: {type:String,default:''},
	blogBody	  		: {type:String,default:''},
	isSignInReq			: {type:String,default:'N'},
	isAddReq			: {type:String,default:'N'},
	userName			: {type:String,default:''},
	pwd					: {type:String,default:''},
	created				: {type:Date,default : ''}

});



mongoose.model('Blog',blogSchema);