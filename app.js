// app.js file content
//console.log("Hello World")

//// This is my function that sums two numbers
//const sum = (a,b) => {
//    return a + b
//}
//
//// Just a console log for ourselves
//console.log(sum(7,3))
//
//// Export the function to be used on other files 
//// (similar to the keyword "export" when using webpack)
//module.exports = { sum };

// Conversion rates 
const conversionRates = {
    dollarToYen: 145,      // 1 Dollar = 145 Yen
    euroToDollar: 1.1,     // 1 Euro = 1.1 Dollars
    yenToPound: 0.0067     // 1 Yen = 0.0067 Pounds
};

function fromDollarToYen(dollarAmount) {
    return dollarAmount * conversionRates.dollarToYen;
}

function fromEuroToDollar(euroAmount) {
    return euroAmount * conversionRates.euroToDollar;
}

function fromYenToPound(yenAmount) {
    return yenAmount * conversionRates.yenToPound;
}

module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};

console.log(fromDollarToYen(100)); // Converts 100 Dollars to Yen
console.log(fromEuroToDollar(100)); // Converts 100 Euros to Dollars
console.log(fromYenToPound(10000)); // Converts 10,000 Yen to Pounds