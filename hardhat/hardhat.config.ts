import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const { PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200,
      },
    },
  },

  networks: {
    arc: {
      url: "https://rpc.testnet.arc.network",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
    liskSepolia: {
      url: "https://rpc.sepolia-api.lisk.com",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },

  etherscan: {
    apiKey: "empty", // MUST be a string

    customChains: [
      {
        network: "arc",
        chainId: 5042002,
        urls: {
          apiUrl: "https://explorer.testnet.arc.xyz/api",
          browserUrl: "https://explorer.testnet.arc.xyz",
        },
      },
      {
        network: "liskSepolia",
        chainId: 4202,
        urls: {
          apiUrl: "https://sepolia-blockscout.lisk.com/api",
          browserUrl: "https://sepolia-blockscout.lisk.com",
        },
      },
    ],
  },
};

export default config;
