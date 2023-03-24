// https://eth-sepolia.g.alchemy.com/v2/-_o6tc_KAChP62j0TJHnpz3BeCAxe_U8

require(`@nomiclabs/hardhat-waffle`);

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: "https:eth-sepolia.g.alchemy.com/v2/-_o6tc_KAChP62j0TJHnpz3BeCAxe_U8",
      accounts: ['8db0e69db3065a66bef59b02c04b24a31130e34c3eaf7a50ffa8946cb17a1b58']
    }
  }
}
