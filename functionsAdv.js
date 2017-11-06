var exports = module.exports ={};


//CALLBACK FUNCTION TO PLAY ADDS :
exports.addRequired = function(blogName,blogBody,callBackFunction){
	
	console.log('view add for 10 sec for  ' + blogName+' blog');
	callBackFunction(blogName,blogBody);	
}

exports.addPlaying = function(blogName,blogBody){
console.log('Add is playing wait for a while for '+blogName +' blog');
	setTimeout(function(){
	console.log('Add is completed.you can view the '+blogName +' blog.' +'\n'  + 'Body :'+blogBody+ '\n');
	},10000);
}


//FILTER TO CHECK WHETHER SIGN IN IS REQ OR NO NOT:
exports.adminFilter = function(req,res,next)
{
	if(req.body.isSignInReq.toUpperCase() === 'Y'){
				
		if(req.body.userName != '' && req.body.pwd !=''){
			next();
		}
		else{
			res.send('Please Enter sign in username and pwd');
		}
	}else if(req.body.isSignInReq.toUpperCase() === 'N'){
		next();
	}
	else{
		res.send('Please Enter isSignInReq fld as Y or N');
	}

}
