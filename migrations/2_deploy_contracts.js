var MTB19 = artifacts.require("MTB19");
var MTB19Crowdsale = artifacts.require("MTB19Crowdsale");
var BigNumber = require('bignumber.js');

module.exports = function(deployer) {
   deployer.deploy(MTB19, process.env.CAP
                        , process.env.WALLET
                        , process.env.PREFUND).then(() => {
      return deployer.deploy(MTB19Crowdsale, process.env.RATE, process.env.WALLET, MTB19.address,
                                             Math.floor(new Date().getTime()/1000.0) + 120, Math.floor(new Date().getTime()/1000.0) + 1800, /* process.env.INI, process.env.END, */
                                             process.env.WEI_CAP).then( () =>
         MTB19.deployed().then(instance => { return instance.addMinter(MTB19Crowdsale.address)})
      );
   })
};
