var CrowdFundingWithDeadline = artifacts.require("CrowdFundingWithDeadline");

module.exports = function(deployer) {
    deployer.deploy(
        CrowdFundingWithDeadline, 
        "Test Campaign", 
        1, 
        200, 
        "0x2F1081aa96D2c2399383AB1FAD4dE1229e109889");
}