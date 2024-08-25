// //every time you refresh the server the map will be empty and you will again have to login
// //this is the issue with STATEFULL
// const sessionIdToUserMap = new Map();

const jwt = require("jsonwebtoken");
const secret = "uditi$123@$"

function setUser(user){
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
        },secret);
    // sessionIdToUserMap.set(id,user);
}

function getUser(token){
     if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        console.error('JWT verification failed:', err.message);
        return null;
    }
    // return sessionIdToUserMap.get(id);
}

module.exports = {
    setUser,
    getUser,
}