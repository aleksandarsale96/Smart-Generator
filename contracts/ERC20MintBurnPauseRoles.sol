pragma solidity 0.6.7;

import "@openzeppelin/contracts/presets/ERC20PresetMinterPauser.sol";

contract ERC20MintBurnPauseRoles is ERC20PresetMinterPauser {
    constructor(string memory name, string memory symbol) public ERC20PresetMinterPauser (name, symbol) {
    }
}
