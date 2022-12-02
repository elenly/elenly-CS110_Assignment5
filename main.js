const input = require("readline-sync");
 
const utils = require("./utils");
 
let mat1 =[
    [5, 6, 9],
    [4, 2, 5],
    [6, 3, 8]
];
 
let mat2 =[
    [3, 7, 4],
    [1, 8, 6],
    [6, 2, 7]
];
 
console.log(utils.matrixProduct(mat1, mat2));
console.log(utils.sumOfMatrices(mat1, mat2));
console.log(utils.sumOfEachRow(mat1));
 
const str = input.prompt();
const string = "      Hello world     "
console.log(utils.WordCount(str));
console.log(utils.trim(string));
