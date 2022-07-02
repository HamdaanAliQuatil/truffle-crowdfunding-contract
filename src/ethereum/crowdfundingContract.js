import { web3 } from "./web3"
import crowdfundingAbi from "./crowdfundingAbi"

export function createContract(contractAddress) {
    return new web3.eth.Contract(crowdfundingAbi, contractAddress)
}