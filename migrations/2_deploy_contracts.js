const IRISCHAIN = artifacts.require("IRISCHAIN");

module.exports = function (deployer) {
  const initialSupply = web3.utils.toWei("2000000000", "ether");
  deployer.deploy(IRISCHAIN, initialSupply);
};