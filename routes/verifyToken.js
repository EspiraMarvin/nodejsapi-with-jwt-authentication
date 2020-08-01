const jwt = require('jsonwebtoken');

//middleware function to add to routes that need to be protected
//function checks if user has token; this token is assigned when a user logs in
module.exports = function (req,res,next) {
    const token  = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied');

// if user has a token verify that token
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }catch (err) {
        res.status(400).send('Invalid Token');
    }
}
