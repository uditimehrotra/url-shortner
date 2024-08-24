//every time you refresh the server the map will be empty and you will again have to login
//this is the issue with STATEFULL
const sessionIdToUserMap = new Map();

function setUser(id, user){
    sessionIdToUserMap.set(id,user);
}

function getUser(id){
    return sessionIdToUserMap.get(id);
}

module.exports = {
    setUser,
    getUser,
}