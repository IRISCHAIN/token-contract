
# IRIS Chain Smart Contract

**IRIS Chain** is the native utility token of the IRIS project, implemented on the Polygon blockchain adhering to the ERC-20 standard. This repository contains the smart contract code and related documentation, providing a transparent and secure foundation for token operations and ecosystem expansion.

## 🔧 Key Features

- **ERC-20 Compliance**: Built using OpenZeppelin's library to ensure reliability and compatibility.
- **Initial Supply Configuration**: Total supply is set during deployment and allocated to the deployer's address.
- **Burnable Functionality**: Allows token holders to voluntarily burn tokens, reducing total supply.
- **Ownership Transferability**: Enables the transfer of contract ownership to another address.
- **Event Logging**: Logs critical events like `Transfer` and `Approval` for transparency.

## 📄 Contract Information

- **Contract Name**: `IRISChain`
- **Token Symbol**: `IRC`
- **Decimals**: `18`
- **Total Supply**: `2,000,000,000 IRC`
- **Deployment Network**: Polygon Mainnet, BEP-20 Mainnet
- **Contract Address**: POL : `0xf9a3e803ed270cf0cA6CD76eA40b8CC8562CF93F`, BEP20 : `0xc097bf351c102ece994dd7d60807b551c7d23d8a`

## 📁 Directory Structure

```bash
iris-token/
├── contracts-pol/             # ERC-20 Smart contract source code
│   └── IRISToken-POL.sol
├── contracts-bsc/             # BEP-20 Smart contract source code
│   └── IRISToken-BSC.sol
├── migrations/            # Deployment scripts
│   └── 2_deploy_contracts.js
├── test/                  # Test cases
│   └── IRISToken.test.js
├── .env.example           # Example environment variables
├── truffle-config.js      # Truffle configuration
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

## 🚀 Deployment & Testing

### Environment Setup

1. Install Node.js and npm.
2. Install Truffle globally:
   ```bash
   npm install -g truffle
   ```
3. Install project dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file based on `.env.example` and configure your environment variables.

### Compile Smart Contract

```bash
truffle compile
```

### Deploy Smart Contract(Polygon)

```bash
truffle migrate --network polygon
```

### Deploy Smart Contract(BEP-20)

```bash
truffle migrate --network binance
```

### Run Tests

```bash
truffle test
```

## 🔒 Security & Audit

- **Security Audit**: The IRIS Token smart contract has undergone a formal security audit. The audit report is available [here](https://github.com/your-org/iris-token/audit-report.pdf).
- **Vulnerability Management**: Identified vulnerabilities have been promptly addressed, with details documented in the [CHANGELOG.md](https://github.com/your-org/iris-token/CHANGELOG.md).

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## 📬 Contact & Contributions

- **Email**: manager@irischain.io
- **Official Website**: [https://www.irischain.io](https://www.irischain.io)
- **Contribution Guidelines**: Please refer to [CONTRIBUTING.md](https://github.com/IRISCHAIN/token-contract/CONTRIBUTING.md) for contribution details.
