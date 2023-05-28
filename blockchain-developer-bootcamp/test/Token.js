const{ ethers } = require('hardhat');
const { expect } = require('chai');
describe("Token", ()=> {
	it("has a name", async ()=>{
		//Fetch token from blockchain
		const Token = await ethers.getContractFactory("Token")
		let token = await Token.deploy()
		//Read token name
		const name = await token.name()
		//Check that name is correct
		expect(name).to.equal("My Token")

	})
})