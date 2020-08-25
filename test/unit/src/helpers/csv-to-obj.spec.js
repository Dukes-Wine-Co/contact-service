const fs = require('fs');
const { expect } = require('chai');
const { csvToObj } = require('../../../../src/helpers/csv-to-obj');
const csvLocation = `${__dirname}/../test-data/test-csv.csv`;

const testCsv = fs.readFileSync(csvLocation, { encoding: 'UTF-8' });

describe('csv-to-obj', () => {
    describe('csvToObj', () => {
        const csvArr = csvToObj(testCsv);

        it('returns an array of objects', () => {
            expect(csvArr).to.be.an('array');
        });

        it('each element in the array has the expected header keys', () => {
            const expectedKeys = ['alpha', 'age', 'city'];

            csvArr.forEach(entry => {
                expect(entry).to.be.an('object').with.all.keys(expectedKeys);
            });
        });
    });
});
