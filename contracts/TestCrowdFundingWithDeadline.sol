// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "./CrowdFundingWithDeadline.sol";

contract TestCrowdFundingWithDeadline is CrowdFundingWithDeadLine {
    uint time;

    constructor(
        string memory contractName,
        uint targetAmountEth,
        uint durationInMin,
        address payable beneficiaryAddress
    )
        CrowdFundingWithDeadLine(contractName, targetAmountEth, durationInMin, beneficiaryAddress)
    {

    }

    function currentTime() internal view virtual override returns(uint) {
        return time;
    } 

    function setCurrentTime(uint newTime) public {
        time = newTime;
    }
}