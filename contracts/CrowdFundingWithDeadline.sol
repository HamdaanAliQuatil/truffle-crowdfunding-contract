pragma solidity ^0.8.0;

contract CrowdFundingWithDeadLine {
    enum State{ Ongoing, Failed, Succeeded, PaidOut }

    string public name;
    uint public targetAmount;
    uint public fundingDeadLine;
    address public beneficiary;
    State public state;

    constructor(
        string memory contractName,
        uint targetAmountEth,
        uint durationInMin,
        address beneficiaryAddress
    )
    public {
        name = contractName;
        targetAmount = targetAmountEth * 1 ether;
        fundingDeadLine = currentTime() + durationInMin * 1 minutes;
        beneficiary = beneficiaryAddress;
        state = State.Ongoing;
    }

    function currentTime() internal view returns(uint){
        return block.timestamp;
    }

}