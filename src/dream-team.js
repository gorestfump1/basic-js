module.exports = function createDreamTeam(friends) {
 if(typeof !== 'string'){
      return ("false")
    } else {
      return friends.map(word => word.slice(0, 1).toUpperCase()).sort().join("");
    }
  };
