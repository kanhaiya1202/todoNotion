const jwt = require('jsonwebtoken');
const JWT_USER_PASS = "user123";

function userAuth(req, res, next){
    const token = req.headers.token;
    const decodedToken = jwt.verify(token, JWT_USER_PASS);

    if(decodedToken){
        req.userId = decodedToken.id;// becoz we need to pass userId further to routes after auth done
        next()
    }
    else{
        res.status(403).json({
            message:"user not signed in"
        })
    }
}

module.exports={
    userAuth:userAuth
}