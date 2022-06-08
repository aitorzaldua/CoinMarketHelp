//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "hardhat/console.sol";

contract MarketSentiment {

    address public owner;
    string[] public ticketsArray;

    constructor() {
        owner = msg.sender;
    }

    struct ticker {
        bool exists;
        uint256 up;
        uint256 down;
        mapping(address => bool) Voters;
    }

    event tickerupdated (
        uint256 up,
        uint256 down,
        address voter,
        string ticker

    );

    mapping(string => ticker) private Tickers;

    function addTicker(string memory _ticker) public {
        require(msg.sender == owner, "Only the owner can create tickers");

        ticker storage newTicker = Tickers[_ticker];
        newTicker.exists = true;
        ticketsArray.push(_ticker);
    }

    function vore(string memory _ticker, bool _vote) public {
        require(Tickers[_ticker].exists, "Can not vote here");
        require(Tickers[_ticker].Voters[msg.sender], "You have already voted here");

        ticker storage t = Tickers[_ticker];
        t.Voters[msg.sender] = true;
        

    }


}
