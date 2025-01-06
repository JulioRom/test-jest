const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

describe('Currency Conversion Functions', () => {
    test('fromDollarToYen should correctly convert Dollars to Yen', () => {
        const dollars = 10;
        const expectedYen = dollars * 145; // Example conversion rate
        expect(fromDollarToYen(dollars)).toBe(expectedYen);
    });

    test('fromEuroToDollar should correctly convert Euros to Dollars', () => {
        const euros = 3.5;
        const expectedDollars = euros * 1.1; // Example conversion rate
        expect(fromEuroToDollar(euros)).toBeCloseTo(expectedDollars, 5);
    });

    test('fromYenToPound should correctly convert Yen to Pounds', () => {
        const yen = 10000;
        const expectedPounds = yen * 0.0067; // Example conversion rate
        expect(fromYenToPound(yen)).toBeCloseTo(expectedPounds, 5);
    });
});