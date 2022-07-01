// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract CrowdFundingWithDeadLine {
    enum State{ Ongoing, Failed, Succeeded, PaidOut }

    event CampaignFinished(
        address addr,
        uint totalCollected,
        bool succeeded
    );

    string public name;
    uint public targetAmount;
    uint public fundingDeadLine;
    address payable public beneficiary;
    State public state;
    mapping(address => uint) public amounts;
    bool public collected;
    uint public totalCollected;

    modifier inState(State expectedState){
        require(state == expectedState, "Invalid State");
        _;
    }

    constructor(
        string memory contractName,
        uint targetAmountEth,
        uint durationInMin,
        address beneficiaryAddress
    )
    {
        name = contractName;
        targetAmount = targetAmountEth * 1 ether;
        fundingDeadLine = currentTime() + durationInMin * 1 minutes;
        beneficiary = payable(beneficiaryAddress);
        state = State.Ongoing;
    }

    function contribute() public payable inState(State.Ongoing){
        require(beforeDeadLine(), "Funding is not yet open");

        amounts[msg.sender] += msg.value;
        totalCollected += msg.value;

        if(totalCollected >= targetAmount){
            collected = true;
        }
    }

    function fininshCrowdFunding() public inState(State.Ongoing){
        require(!beforeDeadLine(), "Cannot finish campaign before deadline");

        if(!collected){
            state = State.Failed;
        } else {
            state = State.Succeeded;
        }

        emit CampaignFinished(address(this), totalCollected, collected);
    }

    function collect() public inState(State.Succeeded){
        if(beneficiary.send(totalCollected)){
            state = State.PaidOut;
        }
        else{
            state = State.Failed;
        }
    }

    function withdraw() public inState(State.Failed){
        require(amounts[msg.sender] > 0, "You have not contributed");
        uint contributed = amounts[msg.sender];
        amounts[msg.sender] = 0;

        if(beneficiary.send(contributed)){
            amounts[msg.sender] = contributed;
        }
    }

    function beforeDeadLine() public view returns(bool){
        return currentTime() < fundingDeadLine;
    }

    function currentTime() internal view virtual returns(uint){
        return block.timestamp;
    }

}