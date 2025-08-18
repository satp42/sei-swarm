import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-verify'

const config: HardhatUserConfig = {
  solidity: '0.8.18',
  networks: {
    hardhat: {
      chainId: 31337,
    },
    seiTestnet: {
      url: process.env.SEI_RPC_URL || 'https://evm-rpc.sei-apis.com',
      accounts: process.env.SEI_PRIVATE_KEY
        ? [process.env.SEI_PRIVATE_KEY]
        : [],
      chainId: 1329,
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  typechain: {
    outDir: 'typechain-types',
    target: 'ethers-v6',
  },
}

export default config
