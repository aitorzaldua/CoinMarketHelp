//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "hardhat/console.sol";

contract MarketSentiment {

    address public owner;
    string[] public ticketsArray;

    constructor() {
        owner = msg.sender;
    }

    struct ticket {
        bool exists;
        uint256 up;
        uint256 down;
        mapping(address => bool) Voters;
    }

    event ticketupdated (
        uint256 up,
        uint256 down,
        address voter,
        string ticket

    );


}
