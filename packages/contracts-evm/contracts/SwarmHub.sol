// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract SwarmHub {
    event TaskCreated(uint256 indexed taskId, address indexed creator, string metadataURI);
    
    event AgentRegistered(address indexed agent, string role, uint256 bond);
    
    event ProposalCreated(
        uint256 indexed taskId,
        address indexed agent,
        string uri,
        bytes32 contentHash
    );
    
    event ProposalVoted(
        uint256 indexed taskId,
        address indexed agent,
        bool support,
        uint256 weight
    );
    
    event ActionApproved(uint256 indexed taskId, uint256 actionId);
    
    event ActionExecuted(uint256 indexed taskId, bytes32 txHash, string result);
}
