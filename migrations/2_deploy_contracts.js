var MTB19 = artifacts.require("MTB19");
var MTB19Crowdsale = artifacts.require("MTB19Crowdsale");
var BigNumber = require('bignumber.js');

module.exports = function(deployer) {
   deployer.deploy(MTB19).then(() => {
      return deployer.deploy(MTB19Crowdsale, 1, "0x2d137f5b053bBA31E669ef713013176EebdbD5ED", MTB19.address,
                                             Math.floor(new Date().getTime()/1000.0) + 120, Math.floor(new Date().getTime()/1000.0) + 1800,
                                             new BigNumber(5000000000000000000)).then( () =>
         MTB19.deployed().then(instance => { return instance.addMinter(MTB19Crowdsale.address)})
      );
   })
};
