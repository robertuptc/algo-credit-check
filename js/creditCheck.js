exports.creditCheck = function (str) {
    let strSplit = str.split('')
    let strToNumArr = strSplit.map(elem => parseInt(elem))

    for (let i = 0; i < strToNumArr.length; i = i + 2) {
        if (strToNumArr[i] * 2 > 9) {
            strToNumArr[i] = (strToNumArr[i] * 2).toString().split('').map(elem => parseInt(elem)).reduce((a, b) => a + b)
        } else {
            strToNumArr[i] = strToNumArr[i] * 2
        }
    }

    return strToNumArr.reduce((a, b) => a + b) % 10 === 0 ? "The number is valid!" : "The number is invalid!"
}


