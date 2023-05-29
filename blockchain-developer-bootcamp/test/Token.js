const{ ethers } = require('hardhat');
const { expect } = require('chai');
describe("Token", ()=> {
	let token
	beforeEach( async ()=>{
		//Fetch token from blockchain
		const Token = await ethers.getContractFactory("Token")
		token = await Token.deploy()
	})
	it("has correct name", async ()=>{

		//Read token name
		const name = await token.name()
		//Check that name is correct
		expect(await token.name()).to.equal("Dapp University")

	})

	it("has correct symbol", async ()=>{
		
		//Read token name
		const symbol = await token.symbol()
		//Check that name is correct
		expect(await token.symbol()).to.equal("DAPP")

	})

	it("has correct decimals", async ()=>{
		
		//Read token name
		const decimals = await token.decimals()
		//Check that name is correct
		expect(await token.decimals()).to.equal('18')

	})

	it("has correct total supply", async ()=>{
		
		//Read token name
		const decimals = await token.totalSupply()
		//Check that name is correct
		expect(await token.totalSupply()).to.equal('1000000000000000000000000')

	})
})