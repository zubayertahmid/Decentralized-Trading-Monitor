const{ ethers } = require('hardhat');
const { expect } = require('chai');
const tokens = (n) => {
	return ethers.utils.parseUnits(n.toString(), 'ether')
}
describe("Token", ()=> {
	let token
	let accounts;
	let deployer;
	let receiver;
	beforeEach( async ()=>{
		//Fetch token from blockchain
		const Token = await ethers.getContractFactory("Token")
		token = await Token.deploy("Dapp University", "DAPP", '1000000')
		accounts = await ethers.getSigners()
		deployer = accounts[0]
		receiver = accounts[1]
	})

	describe('Deployment', () =>{
		const name = "Dapp University";
		const symbol = "DAPP";
		const decimals = '18';
		const totalSupply = '1000000000000000000000000';
		it("has correct name", async ()=>{

		expect(await token.name()).to.equal(name)

	})

	it("has correct symbol", async ()=>{
		
		expect(await token.symbol()).to.equal(symbol)

	})

	it("has correct decimals", async ()=>{
		
		expect(await token.decimals()).to.equal(decimals)

	})

	it("has correct total supply", async ()=>{
		
		expect(await token.totalSupply()).to.equal(totalSupply)

	})

	it("assigns total supply to deployer", async ()=>{
		
		expect(await token.balanceOf(deployer.address)).to.equal(totalSupply)

	})
	})
	describe('Sending Tokens', () => {
		let amount, transaction, result
		
		it("Transfers token balances", async ()=>{
			
		
			amount = tokens(100)
			transaction = await token.connect(deployer).transfer(receiver.addresss, amount)
			result = await transaction.wait()
		
		expect(await token.balanceOf(deployer.address)).to.equal(tokens(999900))
		expect(await token.balanceOf(receiver.address)).to.equal(amount)

		})
		// it("Emits a transfer event", async() => {
		// 	console.log(result)
		// })
	})
	
})