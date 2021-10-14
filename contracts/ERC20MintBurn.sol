pragma solidity 0.6.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";

contract ERC20MintBurn is ERC20, ERC20Burnable, Ownable {
    
    constructor(string memory name, string memory symbol, uint256 initialSupply) public ERC20 (name, symbol) {
        _mint(_msgSender(), initialSupply);
    }

    function mint(uint256 amount) public onlyOwner {
        _mint(owner(), amount);
    }
    
    function burn(uint256 amount) public override onlyOwner {
        super.burn(amount);
    }

    function burnFrom(address account, uint256 amount) public override onlyOwner {
        super.burnFrom(account, amount);
    }
}
