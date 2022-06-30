let CrowdFundingWithDeadLine = artifacts.require("./TestCrowdFundingWithDeadLine.sol");

contract('CrowdFundingWithDeadLine', function(accounts) {
    let contract;
    let contractCreator = accounts[0];
    let beneficiary = accounts[1];

    const ONE_ETH = '1000000000000000000';

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
        expect(targetAmount.toString()).to.equal(ONE_ETH);

        // let fundingDeadline = await contract.fundingDeadline.call();
        // expect(fundingDeadline.toNumber()).to.equal(600);

        let actualBeneficiary = await contract.beneficiary.call();
        expect(actualBeneficiary).to.equal(beneficiary);

        // let state = await contract.state.call();
        // expect((state.valueOf()).to.equal(ONGOING_STATE));
    });

    it('funds are contributed', async function() {
        await contract.contribute({
            value: ONE_ETH,
            from: contractCreator,
        });

        let contributed = await contract.amounts.call(contractCreator);
        expect(contributed.toString()).to.equal(ONE_ETH);

        let totalCollected = await contract.totalCollected.call();
        expect(totalCollected.toString()).to.equal(ONE_ETH);
    });

    it('cannot cantribute after deadline', async function() {
        try{
            await contract.setCurrentTime(500);
            await contract.sendTransaction({
                value: ONE_ETH,
                from: contractCreator,
            });
            expect.fail();
        }
        catch (error){
            expect(error.message).to.equal('DEADLINE_PASSED');
        }
    });

    it('crowdfunding success', async function() {
        await contract.contribute({value: ONE_ETH, from: contractCreator});
        await contract.setCurrentTime(601);
        await contract.finishCrowdFunding();
        let state = await contract.state.call();

        expect(state.valueOf()).to.equal(SUCCESS_STATE);
    });

    it('crowdfunding failed', async function() {
        await contract.setCurrentTime(601);
        await contract.finishCrowdFunding();
        let state = await contract.state.call();

        expect(state.valueOf()).to.equal(FAILED_STATE);
    });
});