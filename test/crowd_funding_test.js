let CrowdFundingWithDeadLine = artifacts.require("./CrowdFundingWithDeadLine.sol");

contract('CrowdFundingWithDeadLine', function(accounts) {
    let contract;
    let contractCreator = accounts[0];
    let beneficiary = accounts[1];

    const ONE_ETH = '100000000000000000';

    const ONGOING_STATE = '0';
    const FAILED_STATE = '1';
    const SUCCESS_STATE = '2';
    const PAID_OUT_STATE = '3';

    beforeEach(async function() {
        contract = await CrowdFundingWithDeadLine.new(
            'funding',
             1,
             10,
             beneficiary,
             {
                from: contractCreator,
                gas: 3000000,
             }
        );
    });

    it('contract is initialized', async function() {
        let campaignName = await contract.name.call();
        expect(campaignName).to.equal('funding');

        let targetAmount = await contract.targetAmount.call();
        expect(targetAmount.toString()).to.equal('1000000000000000000');

        let actualBeneficiary = await contract.beneficiary.call();
        expect(actualBeneficiary).to.equal(beneficiary);

        let state = await contract.state.call();
        expect(state.valueOf().to.equal(ONGOING_STATE));
    });
});