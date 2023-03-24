import { theShire, buckland} from "./another-module";

export {theShire, statement};

import { expect } from 'chai';

describe('buckland', function() {
	it('should be Hobbit Settlement', () => {
		expect(buckland()).to.be.an.instanceof(HobbitSettlement);
	});
});


describe('statement', function() {
	it('Should return the correct string', () => {
		expect(statement()).to.equal('The Shire was founded 739 years before Buckland.');
	});
});

