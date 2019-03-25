const MTB19 = artifacts.require("MTB19")

contract("MTB19", accounts => {

   it("The contract was prefunded correctly", () =>
      MTB19.deployed()
      .then(instance => instance.getBalance.call(accounts[0]))
      .then(balance => { assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account"); })
   );

})
