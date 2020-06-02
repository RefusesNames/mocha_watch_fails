import * as sut from '../assets/ts/logic';
import * as chai from "chai";
import * as sinonChai from "sinon-chai";
chai.use(sinonChai);
const expect = chai.expect;
import "mocha";
import * as sinon from "sinon";

const sandbox = sinon.createSandbox();

describe('doThing', () => {

	beforeEach(() => {
		sandbox.stub(window, 'alert');
	});

	afterEach(() => {
		sandbox.restore();
	});

	it('queries the text of an element with the id "content"', () => {
		document.querySelector = sinon.stub().returns(null); 

		sut.doThing();

		expect(document.querySelector).to.have.been.calledWith('#content');
	});

	it('uses the content of #content as the text of an alert if it has content', () => {
		const content = "foo";

		const htmlNode = <HTMLDivElement>{};
		htmlNode.textContent = content;
		document.querySelector = sinon.stub().returns(htmlNode);

		sut.doThing();

		expect(window.alert).to.have.been.calledWith(content);
	});

});
