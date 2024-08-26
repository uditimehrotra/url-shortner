const { getUser }= require("../service/auth");

function checkForAuthentication(req,res,next)
{
    // const authorizationHeaderValue = req.headers["authorization"];
    const tokenCookie = req.cookies?.uid;
    req.user=null;
    // if(!authorizationHeaderValue || !authorizationHeaderValue.startsWith("Bearer"))
    //     return next();
    if(!tokenCookie) return next();
    // const token = authorizationHeaderValue.split("Bearer ")[1];
    const token = tokenCookie;
    const user=getUser(token);

    req.user=user;
    return next();
}

function restrictTo(roles){
    return function(req,res,next){
        if(!req.user)
            return res.redirect("/login");
        if(!roles.includes(req.user.role))
            return res.end("unauthorized");
        return next();
    };
}
// async function restrictToLoggedInUserOnly(req,res,next){
//     const userUid = req.headers["authorization"];
//     if(!userUid) return res.redirect("/login");
//     const token = userUid?.split("Bearer ")[1];
//     if (!token) return res.redirect("/login");
//     const user= getUser(token);

//     if(!user) return res.redirect("/login");
//     req.user =  user;
//     next();
// }

// async function checkAuth(req,res,next) {
//      const userUid = req.cookies?.uid; 
//     const userUid = req.headers["authorization"];
//     const token = userUid?.split("Bearer ")[1];
//     const user= getUser(token);
//     req.user =  user;
//     next();
// }

module.exports ={
    checkForAuthentication,
    restrictTo
}