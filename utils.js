function matrixProduct(mat1, mat2){
    let product =[];
 
    for (let i = 0; i < mat1.length; i++) {
        product[i]=[];
        for ( let j = 0; j < mat2[0].length; j++) {
            let prod = 0;
            for (let k = 0; k < mat1.length; k++){
                prod += mat1[i][k] * mat2[k][j];
            }
            product[i][j] = prod;
        }
    }
   
    return product;
}
 
 
 
 
 
function  sumOfMatrices(mat1, mat2){
    let sum = [];
    for(let i = 0; i < mat1.length; i++){
        sum[i] = [];
        for(let j = 0; j < mat2[0].length; j++){
            sum[i][j] = mat1[i][j] + mat2[i][j]
        }
    }
   
    return sum;
 
}
 
 
 
 
 
 
function sumOfArray(mat1){
    let rowSum = 0;
    for(let i=0; i<mat1.length; i++){
        rowSum += mat1[i];
    }
    return rowSum;
}
 
function  sumOfEachRow(mat1){
    let sum = [];
    for(let i=0; i<mat1.length; i++){
        sum[i] = sumOfArray(mat1[i]);  
    }
   
    return sum;
}
 
 
 
 
 
function WordCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
      if (str[i] === " " && str[i + 1] !== " " ) {
        count ++;
       }
    }
 
    if(str[str.length - 1] !== " "){
        count++
    }
    if(str[0] === " "){
        count --
    }
 
    return count
  }
 
 
 
 
 
 
  function _trimstart(str){
    let i = 0
    while (str[i]=== " ") {
        i++
    }
    return str.slice(i)
  }
 
  function _trimend(str){
    return str.split("").reverse().join("");
  }
 
  function trim(str) {
    let trim = _trimstart(str);
    trim = _trimend(trim);
    trim = _trimstart(trim)
    trim = _trimend(trim)
 
 
    return trim;
  }
 
 
 
module.exports = {
    matrixProduct,
    sumOfEachRow,
    sumOfMatrices,
    WordCount,
    trim,
}
