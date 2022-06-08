//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "hardhat/console.sol";

contract MarketSentiment {

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function test() public {
        console.log("My address is: ", owner);
    }
}
