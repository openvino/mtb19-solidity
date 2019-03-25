import web3
import time
import json

from web3 import Web3, HTTPProvider

print("2) Connecting to ganache...")

w3 = Web3(HTTPProvider("http://127.0.0.1:7545"))

print("2) Preparing contracts...")

with open('build/contracts/MTB19Crowdsale.json') as json_file:
    compiled_sol = json.load(json_file)


contract = w3.eth.contract(abi = compiled_sol['abi'], bytecode= compiled_sol['bin'])
address = w3.toChecksumAddress("0x2FE06E814ae7C84CF41E73ddB640c0A07B3ab967")

tx_hash = contract.constructor(1, w3.eth.accounts[1], w3.toChecksumAddress("0x2FE06E814ae7C84CF41E73ddB640c0A07B3ab967"),
                               0, 200, 1000).transact({'from': w3.eth.accounts[0], 'gas': 672197})


#print(contract.functions.name().call())
#print(contract.functions.symbol().call())
#print(contract.functions.decimals().call())

#print(contract.functions.isMinter(w3.eth.accounts[0]).call())
#print(contract.functions.isMinter(w3.eth.accounts[1]).call())
#contract.functions.addMinter(w3.eth.accounts[1]).transact({'from': w3.eth.accounts[0], 'gas': 672197})
#print(contract.functions.isMinter(w3.eth.accounts[1]).call())
