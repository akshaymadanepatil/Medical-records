const path = require('path');
const fs = require('fs');
const solc = require('solc');

// acquiring the path of smart contract
const medicalRecordPath = path.resolve(__dirname, 'contracts', 'MedicalRecord.sol');
// reading the content of smart contract
const source = fs.readFileSync(medicalRecordPath, 'utf8');

// compiling the smart contract
var input = {
	language: 'Solidity',
	sources: {
		'MedicalRecord.sol': {
			content: source
		}
	},
	settings: {
		outputSelection: {
			'*': {
				'*': ['*']
			}
		}
	}
};

var output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['MedicalRecord.sol'].Medical;


try {
	fs.writeFileSync('./abi.txt', String(JSON.stringify(output.abi)))
} catch (error) {
	console.error(error)
}

// console.log(output.abi)
module.exports = {
	abi: output.abi,
	bytecode: output.evm.bytecode.object
}