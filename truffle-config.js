const HDWalletProvider = require('@truffle/hdwallet-provider');
const PrivateKeyProvider = require('truffle-privatekey-provider');

const fs = require('fs');
const pk = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    development: {
      host: "127.0.0.1",
      port: 4949,
      network_id: "*",
      gas: 4712388,
    },
    testnet: {
      provider: () => new PrivateKeyProvider(pk, `http://localhost:4949`),
      network_id: 3,
      gas: 4712388,
      gasPrice: 20000000000,  // 20 gwei
      production: true    // Treats this network as if it was a public net. (default: false)
    },
    mainnet: {
      provider: () => new PrivateKeyProvider(pk, `https://rpc.tsfexplorer.xyz/`),
      network_id: 1,
      gas: 4712388,
      gasPrice: 2000000000,  // 2 gwei
      skipDryRun: false     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
    solc: {
      version: '0.6.7',
      settings: {
       optimizer: {
         enabled: true,
         runs: 500
       },
       evmVersion: "byzantium"
      }
    }
  }
};
