const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(""));
    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(word.split("").reverse().join(""))) {
            return true;
        }
        let verticalWord = transpose(letters);
        let verticalJoin = verticalWord.map((ls) => ls.join(""));
        for (let l of verticalJoin) {
            if (l.includes(word) || l.includes(word.split("").reverse().join("")))  {
                return true;
            }
        }
    }
    return false;
};

// matrix code

const transpose = function(matrix) {
    let newArray = [];
  
    for (let i = 0; i < matrix[0].length; i++) {
      newArray.push([]);
    }
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        newArray[j][i] = matrix[i][j];
      }
    }
  
    return newArray;
  };

module.exports = wordSearch