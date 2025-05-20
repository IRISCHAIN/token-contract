require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    polygon: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        ),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
  compilers: {
    solc: {
      version: "0.8.20",
    },
  },
};