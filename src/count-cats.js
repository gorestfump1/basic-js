module.exports = function countCats(matrix){
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    count += matrix[i].filter(ears => ears == "^^").length;
  }
  return count;
};
