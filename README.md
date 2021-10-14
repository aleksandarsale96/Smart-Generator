# Token Smart Contract

A basic ERC20 Token implementation using OpenZeppelin audited and tested contract library. The token accepts name and symbol arguments and has mint and burn functionality.

Deployer of the contract will automatically receive DEFAULT_ADMIN_ROLE, MINTER_ROLE and PAUSER_ROLE and can grant or transfer these roles to other addresses.

## Installation

```
npm i -g truffle
npm i
```

to compile
```
truffle compile
```

To run tests and deploy locally ganache must be installed.

Download [ganache](https://www.trufflesuite.com/ganache).

Run ganache and set up network on __port 4949__, max __gas 4712388__ and fork __byzantium__.

Once ganache is running

to deploy:
```
truffle migrate
```

to deploy on testnet (requeries local gtsf at port 4949):
```
truffle migrate --network testnet
```

to deploy on mainnet
```
truffle migrate --network mainnet
```

Additional configuration for networks and compiler is possible in `truffle-config.js`
