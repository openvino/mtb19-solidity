var MTB19 = artifacts.require("MTB19");
var MTB19Crowdsale = artifacts.require("MTB19Crowdsale");

module.exports = function(deployer) {
  deployer.deploy(MTB19).then(() => {
     return deployer.deploy(MTB19Crowdsale, 1, "0x4bA0E10CE954B53Efea9B53183f801D535975917", MTB19.address, 300, 500, 1000);
  })
};
