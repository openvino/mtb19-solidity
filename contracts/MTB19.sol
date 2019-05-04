pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract MTB19 is ERC20Pausable, ERC20Burnable, ERC20Capped, ERC20Detailed {

	constructor(uint256 cap, address prefund, uint256 amount) public ERC20Capped(cap) ERC20Detailed("MikeTangoBravo19", "MTB19", 18) {
      mint(prefund, amount);
   }

}
