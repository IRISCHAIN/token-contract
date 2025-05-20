const IRISCHAIN = artifacts.require("IRISCHAIN");

contract("IRISCHAIN", (accounts) => {
  it("should put 2,000,000,000 IRIS in the first account", async () => {
    const instance = await IRISCHAIN.deployed();
    const balance = await instance.balanceOf(accounts[0]);
    const expected = web3.utils.toWei("2000000000", "ether");
    assert.equal(balance.toString(), expected, "Initial supply is incorrect");
  });
});