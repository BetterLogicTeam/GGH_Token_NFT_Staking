//token+nft staking
export const Staking = "0x525995FB289AAD74449Fde5f6B908922FCdC14b4";
export const Staking_Abi = [{
    "inputs": [{
        "internalType": "contract IARC20",
        "name": "_tokenaddr",
        "type": "address"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "From",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "day",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
    }],
    "name": "Deposite",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "Paused",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "Unpaused",
    "type": "event"
}, {
    "inputs": [],
    "name": "ADMIRALS180reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "ADMIRALS30reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "ADMIRALS360reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "ADMIRALS90reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "ADMIRALS_CLUB_NFTs_count",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "ARCHIE_EXECUTIVE_180reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "ARCHIE_EXECUTIVE_30reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "ARCHIE_EXECUTIVE_360reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "ARCHIE_EXECUTIVE_90reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "ARCHIE_EXECUTIVE_NFTs_count",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "CLUB777_180reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "CLUB777_30reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "CLUB777_360reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "CLUB777_90reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "CLUB777_NFTs_count",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "ELITE_CLUB_NFTs_count",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "HIGH_ROLLERS_180reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "HIGH_ROLLERS_30reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "HIGH_ROLLERS_360reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "HIGH_ROLLERS_90reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "HIGH_ROLLERS_NFTs_count",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "META_MASTER_180reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "META_MASTER_30reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "META_MASTER_360reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "META_MASTER_90reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "META_MASTER_NFTs_count",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "Pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "TOP_GUN_CLUB_NFTs_count",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "Token",
    "outputs": [{
        "internalType": "contract IARC20",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "UnPause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_addr",
        "type": "address"
    }],
    "name": "UserERC20Information",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_addr",
        "type": "address"
    }],
    "name": "UserInformation",
    "outputs": [{
        "components": [{
            "internalType": "uint256",
            "name": "_tokens",
            "type": "uint256"
        }, {
            "internalType": "uint256[]",
            "name": "_NFTs",
            "type": "uint256[]"
        }, {
            "internalType": "uint256",
            "name": "_days",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "_stakeTime",
            "type": "uint256"
        }],
        "internalType": "struct NFT_Staking.Stake[]",
        "name": "_userData",
        "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_Addr",
        "type": "address"
    }, {
        "internalType": "bool",
        "name": "_state",
        "type": "bool"
    }],
    "name": "addorRemoveSpam",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "allocation",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_owner",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
    }],
    "name": "calculateReward",
    "outputs": [{
        "internalType": "uint256",
        "name": "reward",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "changeMinimmumAmount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "contract IARC20",
        "name": "addr",
        "type": "address"
    }],
    "name": "changeToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_time",
        "type": "uint256"
    }],
    "name": "changetime",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "commulativeDepositTokensOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "commulativeWithdrawTokensOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "deductionPercentage",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "elite180reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "elite30reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "elite360reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "elite90reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "contract IARC20",
        "name": "_token",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "emergencyWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "Amount",
        "type": "uint256"
    }],
    "name": "emergencyWithdrawARC",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_lockableDays",
        "type": "uint256"
    }, {
        "internalType": "uint256[]",
        "name": "_tokenIDs",
        "type": "uint256[]"
    }],
    "name": "farm",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
    }],
    "name": "harvest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "isNFTStaked",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "isSpam",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "maximumNFT",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "minimumERC20Deposit",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "minimumNFT",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "paused",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_admiralscount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_ADMIRALS30reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_ADMIRALS90reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_ADMIRALS180reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_ADMIRALS360reward",
        "type": "uint256"
    }],
    "name": "setADMIRALS_Counts_reward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_ARCHIE_EXECUTIVE_NFTs_count",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_ARCHIE_EXECUTIVE_30reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_ARCHIE_EXECUTIVE_90reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_ARCHIE_EXECUTIVE_180reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_ARCHIE_EXECUTIVE_360reward",
        "type": "uint256"
    }],
    "name": "setARCHIE_EXECUTIVE_Counts_reward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_CLUB777_NFTs_count",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_CLUB777_30reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_CLUB777_90reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_CLUB777_180reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_CLUB777_360reward",
        "type": "uint256"
    }],
    "name": "setCLUB777_Counts_reward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_HIGH_ROLLERS_NFTs_count",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_HIGH_ROLLERS_30reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_HIGH_ROLLERS_90reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_HIGH_ROLLERS_180reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_HIGH_ROLLERS_360reward",
        "type": "uint256"
    }],
    "name": "setHIGH_ROLLERS_Counts_reward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_META_MASTER_NFTs_count",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_META_MASTER_30reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_META_MASTER_90reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_META_MASTER_180reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_META_MASTER_360reward",
        "type": "uint256"
    }],
    "name": "setMETA_MASTER_Counts_reward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_min",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_max",
        "type": "uint256"
    }],
    "name": "setMinMaxNFT",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_elitecount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_elite30reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_elite90reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_elite180reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_elite360reward",
        "type": "uint256"
    }],
    "name": "setelite_Counts_reward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_topguncount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_topgun30reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_topgun90reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_topgun180reward",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_topgun360reward",
        "type": "uint256"
    }],
    "name": "settopgun_Counts_reward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "stakesOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "_tokens",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_days",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_stakeTime",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "time",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "topgun180reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "topgun30reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "topgun360reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "topgun90reward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}]

//token staking
export const tokenStaking = "0x18Bee47C4FEe3E374fb8b01066561af72F943cdf";
export const tokenStaking_Abi = [{"inputs":[{"internalType":"contract IBEP20","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"address","name":"From","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"day","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Deposite_","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"Token","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UnpausePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_add","type":"address"}],"name":"UserInformation","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Users","outputs":[{"internalType":"uint256","name":"DepositeToken","type":"uint256"},{"internalType":"uint256","name":"lastUpdated","type":"uint256"},{"internalType":"uint256","name":"lockableDays","type":"uint256"},{"internalType":"uint256","name":"WithdrawReward","type":"uint256"},{"internalType":"uint256","name":"WithdrawAbleReward","type":"uint256"},{"internalType":"uint256","name":"depositeTime","type":"uint256"},{"internalType":"uint256","name":"WithdrawDepositeAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_Addr","type":"address"},{"internalType":"bool","name":"_state","type":"bool"}],"name":"addorRemoveSpam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"changeDeductionPercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"changeMinimmumAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_30dayspercent","type":"uint256"},{"internalType":"uint256","name":"_90dayspercent","type":"uint256"},{"internalType":"uint256","name":"_180dayspercent","type":"uint256"},{"internalType":"uint256","name":"_360dayspercent","type":"uint256"}],"name":"changePercentages","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"addr","type":"address"}],"name":"changeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"changetimeCal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deductionPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"depositeToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"depositetime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"Amount","type":"uint256"}],"name":"emergencyWithdrawBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyWithdrawtokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_lockableDays","type":"uint256"}],"name":"farm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_index","type":"uint256[]"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isSpam","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lockabledays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pausePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_add","type":"address"}],"name":"pendindRewards","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

//archie token address
export const TokenAddress = "0xcE099eb133217b64DE98997F18ecd8E4fB2C0803"
export const Token_Abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"GGH__InvalidBuyFees","type":"error"},{"inputs":[],"name":"GGH__InvalidSellFees","type":"error"},{"inputs":[],"name":"GGH__UnableToTransfer","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FailTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marketingFee","type":"uint256"}],"name":"SetBuyFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"SetExclusionStatus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lpAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"SetLpStatus","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marketingFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bbbFee","type":"uint256"}],"name":"SetSellFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"UpdatedTreshhold","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bbbWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyMarketing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newThreshold","type":"uint256"}],"name":"changeThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimLeftoverBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isLP","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mainPair","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellBBB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellMarketing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"marketingFee","type":"uint256"}],"name":"setBuyFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setExcludedAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lp","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setRouterApprovalToMax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"marketingFee","type":"uint256"},{"internalType":"uint256","name":"bbbFee","type":"uint256"}],"name":"setSellFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndDistributeBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"threshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBuyFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSellFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensBBB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensMarketing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

//nft contract address
export const ArchieMetaNFT = "0x0A7dBe8c62E7Eef62f8cE89E220eB2b8d5Bf1E4D"
export const ArchieMetaNFT_Abi = [{
    "type": "constructor",
    "inputs": [{
        "type": "string",
        "name": "_name",
        "internalType": "string"
    }, {
        "type": "string",
        "name": "_symbol",
        "internalType": "string"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "AddorRemoveWhitelistaddress",
    "inputs": [{
        "type": "address",
        "name": "_addr",
        "internalType": "address"
    }, {
        "type": "bool",
        "name": "_status",
        "internalType": "bool"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "Max_Collection",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "SetMax_Collection",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "SetMaximumMintPerTran",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "approve",
    "inputs": [{
        "type": "address",
        "name": "to",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "balanceOf",
    "inputs": [{
        "type": "address",
        "name": "owner",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "string",
        "name": "",
        "internalType": "string"
    }],
    "name": "baseUri",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "burn",
    "inputs": [{
        "type": "uint256",
        "name": "_id",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "fee",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }],
    "name": "getApproved",
    "inputs": [{
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "isApprovedForAll",
    "inputs": [{
        "type": "address",
        "name": "owner",
        "internalType": "address"
    }, {
        "type": "address",
        "name": "operator",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "maximumMintPerTrans",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [],
    "name": "mint",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "minting_price",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "string",
        "name": "",
        "internalType": "string"
    }],
    "name": "name",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }],
    "name": "owner",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }],
    "name": "ownerOf",
    "inputs": [{
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "paused",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "renounceOwnership",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "rescueERC20",
    "inputs": [{
        "type": "address",
        "name": "_add",
        "internalType": "contract IERC20"
    }, {
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "reservedMint",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "safeTransferFrom",
    "inputs": [{
        "type": "address",
        "name": "from",
        "internalType": "address"
    }, {
        "type": "address",
        "name": "to",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "safeTransferFrom",
    "inputs": [{
        "type": "address",
        "name": "from",
        "internalType": "address"
    }, {
        "type": "address",
        "name": "to",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
    }, {
        "type": "bytes",
        "name": "_data",
        "internalType": "bytes"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setApprovalForAll",
    "inputs": [{
        "type": "address",
        "name": "operator",
        "internalType": "address"
    }, {
        "type": "bool",
        "name": "approved",
        "internalType": "bool"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setBaseURi",
    "inputs": [{
        "type": "string",
        "name": "_baseuri",
        "internalType": "string"
    }, {
        "type": "string",
        "name": "_suffix",
        "internalType": "string"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setPause",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "set_mintingPrice",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setunPause",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "string",
        "name": "",
        "internalType": "string"
    }],
    "name": "suffix",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "supportsInterface",
    "inputs": [{
        "type": "bytes4",
        "name": "interfaceId",
        "internalType": "bytes4"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "string",
        "name": "",
        "internalType": "string"
    }],
    "name": "symbol",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "string",
        "name": "",
        "internalType": "string"
    }],
    "name": "tokenURI",
    "inputs": [{
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "toogleFee",
    "inputs": [{
        "type": "bool",
        "name": "_status",
        "internalType": "bool"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "totalSupply",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "transferFrom",
    "inputs": [{
        "type": "address",
        "name": "from",
        "internalType": "address"
    }, {
        "type": "address",
        "name": "to",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "transferOwnership",
    "inputs": [{
        "type": "address",
        "name": "newOwner",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256[]",
        "name": "",
        "internalType": "uint256[]"
    }],
    "name": "walletOfOwner",
    "inputs": [{
        "type": "address",
        "name": "_owner",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "whitelistedaddress",
    "inputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "withdrawFunds",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "event",
    "name": "Approval",
    "inputs": [{
        "type": "address",
        "name": "owner",
        "indexed": true
    }, {
        "type": "address",
        "name": "approved",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "ApprovalForAll",
    "inputs": [{
        "type": "address",
        "name": "owner",
        "indexed": true
    }, {
        "type": "address",
        "name": "operator",
        "indexed": true
    }, {
        "type": "bool",
        "name": "approved",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "ConsecutiveTransfer",
    "inputs": [{
        "type": "uint256",
        "name": "fromTokenId",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "toTokenId",
        "indexed": false
    }, {
        "type": "address",
        "name": "from",
        "indexed": true
    }, {
        "type": "address",
        "name": "to",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [{
        "type": "address",
        "name": "previousOwner",
        "indexed": true
    }, {
        "type": "address",
        "name": "newOwner",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Paused",
    "inputs": [{
        "type": "address",
        "name": "account",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Transfer",
    "inputs": [{
        "type": "address",
        "name": "from",
        "indexed": true
    }, {
        "type": "address",
        "name": "to",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Unpaused",
    "inputs": [{
        "type": "address",
        "name": "account",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "error",
    "name": "ApprovalCallerNotOwnerNorApproved",
    "inputs": []
}, {
    "type": "error",
    "name": "ApprovalQueryForNonexistentToken",
    "inputs": []
}, {
    "type": "error",
    "name": "ApproveToCaller",
    "inputs": []
}, {
    "type": "error",
    "name": "BalanceQueryForZeroAddress",
    "inputs": []
}, {
    "type": "error",
    "name": "MintERC2309QuantityExceedsLimit",
    "inputs": []
}, {
    "type": "error",
    "name": "MintToZeroAddress",
    "inputs": []
}, {
    "type": "error",
    "name": "MintZeroQuantity",
    "inputs": []
}, {
    "type": "error",
    "name": "OwnerQueryForNonexistentToken",
    "inputs": []
}, {
    "type": "error",
    "name": "OwnershipNotInitializedForExtraData",
    "inputs": []
}, {
    "type": "error",
    "name": "TransferCallerNotOwnerNorApproved",
    "inputs": []
}, {
    "type": "error",
    "name": "TransferFromIncorrectOwner",
    "inputs": []
}, {
    "type": "error",
    "name": "TransferToNonERC721ReceiverImplementer",
    "inputs": []
}, {
    "type": "error",
    "name": "TransferToZeroAddress",
    "inputs": []
}, {
    "type": "error",
    "name": "URIQueryForNonexistentToken",
    "inputs": []
}]



//not used
export const nftTokenAddress = "0x9c165762e75B9e9811cc42344F1716C2E8CD6b57"
export const nftToken_Abi = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "Mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
    }],
    "name": "decreaseAllowance",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
    }],
    "name": "increaseAllowance",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "recipient",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "sender",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}]


export const Ethereum_NFT_Address = "0x69342a045E01858cbc7f8C79AB4BB3BA8d3a160c";
export const Ethereum_NFT_Abi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"bool","name":"_status","type":"bool"}],"name":"AddorRemoveWhitelistaddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"Max_Collection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PublicMintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"SetMax_Collection","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"SetMaximumMintPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"TooglePublicSaleON","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"ToogleWhitelistsale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPublicSaleON","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isWhitelistON","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maximumMintPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_add","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"rescueERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"reservedMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseuri","type":"string"},{"internalType":"string","name":"_suffix","type":"string"}],"name":"setBaseURi","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_PublicMintPrice","type":"uint256"}],"name":"setPublicMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setunPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_whitelistMintPrice","type":"uint256"}],"name":"setwhitelistMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"suffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistMintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistedaddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}]