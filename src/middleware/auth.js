const auth = function(req,res,next){
    let token = req.headers["x-auth-token"];
     if (!token) return res.send({ status: false, msg: "token must be present" });
     next()
    }
    
    module.exports.auth=auth