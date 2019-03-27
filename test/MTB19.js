const MTB19 = artifacts.require("MTB19")

contract("MTB19", accounts => {

   /* ERC20Detailed Test */

   it("The name of the token must be MikeTangoBravo19", () =>
      MTB19.deployed()
         .then(instance => instance.name()
            .then(name => { assert.equal(name, "MikeTangoBravo19", "MikeTangoBravo19 wasn't the name of the token"); }
   )));

   it("The symbol of the token must be MTB19", () =>
      MTB19.deployed()
         .then(instance => instance.symbol()
            .then(symbol => { assert.equal(symbol, "MTB19", "MikeTangoBravo19 wasn't the symbol of the token"); }
   )));

   it("The decimals part of the token must be 2", () =>
      MTB19.deployed()
         .then(instance => instance.decimals()
            .then(decimals => { assert.equal(decimals.valueOf(), 2, "2 wasn't the decimal part of the token"); }
   )));


})
