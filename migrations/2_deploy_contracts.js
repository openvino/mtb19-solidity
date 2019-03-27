var MTB19 = artifacts.require("MTB19");
var MTB19Crowdsale = artifacts.require("MTB19Crowdsale");

module.exports = function(deployer) {
   deployer.deploy(MTB19).then(() => {
      return deployer.deploy(MTB19Crowdsale, 1, "0x18FB3176fc9292483fFd713128054f11396E1715", MTB19.address,
                                             Math.floor(new Date().getTime()/1000.0) + 120, Math.floor(new Date().getTime()/1000.0) + 1800).then( () =>
         MTB19.deployed().then(instance => { return instance.addMinter(MTB19Crowdsale.address)})
      );
   })
};
