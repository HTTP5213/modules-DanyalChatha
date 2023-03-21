import { HobbitSettlement } from '../public/another-module.js';

import { theShire, statement } from '../public/my-module.js';

import { expect } from 'chai';

describe('The Shire', function() {
    it('should be Hobbit Settlement', function() {
        expect(theShire).to.be.an.instanceof(HobbitSettlement);
    });
});

describe('statement', function() {
	it('Should return the correct string', () => {
		expect(statement()).to.equal('The Shire was founded 739 years before Buckland.');
	});
});