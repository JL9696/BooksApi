const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

    it('should return an error if "fullName" arg length is 0', () => {
        expect(formatFullname('', 20)).to.equal('Error');
    });

    it('should return an error if "fullName" arg is not a string', () => {
        if (typeof fullName !== 'string') return 'Error';
        expect(formatFullname(undefined, 20)).to.equal('Error');
        expect(formatFullname(12, 20)).to.equal('Error');
        expect(formatFullname({}, 20)).to.equal('Error');
        expect(formatFullname([], 20)).to.equal('Error');
        expect(formatFullname(function () { }, 20)).to.equal('Error');
    });

    it('should return an error if one of "fullName" blocks length is 0', () => {
        expect(formatFullname('John')).to.equal('Error');
        expect(formatFullname('Doe')).to.equal('Error');
        expect(formatFullname('John Doe John')).to.equal('Error');
    });

    it('should return proper formatting "fullName" for arg', () => {
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('john doe')).to.equal('John Doe');
        expect(formatFullname('john dOE')).to.equal('John Doe');
    });
});