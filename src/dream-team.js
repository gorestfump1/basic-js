module.exports = function createDreamTeam(friends) {
   if(!Array.isArray(friends)) {
    return false;
  }
let Team = [];
friends.forEach(item =>{ if(typeof(item)=="string") {Team.push(item.trim()[0].toUpperCase());}});
   return Team.sort().join("");
};
