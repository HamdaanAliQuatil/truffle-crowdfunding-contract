const crowdfundingAbi = [
{
    "constant": true,
    "inputs": [],
    "name": "beneficiary",
    "outputs": [
    {
        "name": "",
        "type": "address"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [
    {
        "name": "",
        "type": "address"
    }
    ],
    "name": "amounts",
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "fundingDeadline",
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "collected",
    "outputs": [
    {
        "name": "",
        "type": "bool"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "targetAmount",
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "state",
    "outputs": [
    {
        "name": "",
        "type": "uint8"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "totalCollected",
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
    {
        "name": "campaignName",
        "type": "string"
    },
    {
        "name": "targetAmountEth",
        "type": "uint256"
    },
    {
        "name": "durationInMin",
        "type": "uint256"
    },
    {
        "name": "beneficiaryAddress",
        "type": "address"
    }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "anonymous": false,
    "inputs": [
    {
        "indexed": false,
        "name": "addr",
        "type": "address"
    },
    {
        "indexed": false,
        "name": "totalCollected",
        "type": "uint256"
    },
    {
        "indexed": false,
        "name": "succeeded",
        "type": "bool"
    }
    ],
    "name": "CampaignFinished",
    "type": "event"
},
{
    "constant": false,
    "inputs": [],
    "name": "contribute",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [],
    "name": "finishCrowdFunding",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [],
    "name": "collect",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "beforeDeadline",
    "outputs": [
    {
        "name": "",
        "type": "bool"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "getTotalCollected",
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "inProgress",
    "outputs": [
    {
        "name": "",
        "type": "bool"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "isSuccessful",
    "outputs": [
    {
        "name": "",
        "type": "bool"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
    {
        "name": "",
        "type": "string"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}
]

export default crowdfundingAbi