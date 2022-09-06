// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    address[] wavers;

    constructor(){
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves+=1;
        wavers.push(msg.sender);
        console.log("%s has waved!",msg.sender);
    }

    function getTotalWaves() public view returns (uint256){
        console.log("We have %d total waves!",totalWaves);
        console.log("All Wavers");
        for (uint i = 0; i < wavers.length; i++) {
            console.log(wavers[i]);
        }
        return totalWaves;
    }
}