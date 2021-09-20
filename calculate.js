

const math = require("./math");

function doSum(x, y){
    return math.add(x,y)
}
function doSubtract(x,y){
    return math.sub(x,y)
}
function doDivide(x,y){
    return math.div(x,y)
}
function doMultiply(x,y){
    return math.mul(x,y)
}

module.exports ={doSum,doSubtract,doDivide,doMultiply}