// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

library Utils{
    function etherToWei(uint amount) public pure returns(uint) {
        return amount * 1 ether;
    }

    function minutesToSeconds(uint durationInMin) public pure returns(uint) {
        return durationInMin * 1 minutes;
    }
}