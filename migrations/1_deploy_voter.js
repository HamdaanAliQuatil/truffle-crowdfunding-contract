const Voter = artifacts.require("./voter.sol");

module.exports = async function(deployer) {
  await deployer.deploy(Voter, ["Alice", "Bob", "Charlie"]);
}