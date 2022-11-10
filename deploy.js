const Web3 = require('web3');
const { abi, bytecode } = require('./compile');

// Create a provider
const provider = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545')

const web3 = new Web3(provider);

const deploy = async () => {
	// Get all accounts provided by wallet provider
	const accounts = await web3.eth.getAccounts();
	console.log(`Attempting deploy from account: ${accounts[0]}`);

	// Deploying contract
	const result = await new web3.eth.Contract(abi)
		.deploy({ data: bytecode })
		.send({ from: accounts[0], gas: '6721975', gasPrice: '20000000000' });
	console.log(JSON.stringify(abi))
	console.log(`Contract deployed to: ${result.options.address}`);
}
deploy();