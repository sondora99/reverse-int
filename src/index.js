module.exports = function reverse (n) {
    let result = String(Math.abs(n)).split("");
    result = result.reverse().join("");
    
    return Number(result)
}
 