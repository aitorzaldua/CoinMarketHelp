require("@nomiclabs/hardhat-waffle");
require ("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  networks: {
    mumbai: {
      url: 'https://speedy-nodes-nyc.moralis.io/f4c2f5f4feb5c8952964e418/polygon/mumbai',
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.POLYGON_API_KEY
  }
};
