pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/crowdsale/validation/PausableCrowdsale.sol";
import "openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";
import "openzeppelin-solidity/contracts/crowdsale/distribution/FinalizableCrowdsale.sol";

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol";

contract MTB19Crowdsale is MintedCrowdsale, PausableCrowdsale, FinalizableCrowdsale {

   constructor(uint256 rate, address payable wallet, IERC20 token,
               uint256 openingTime, uint256 closingTime,
               uint256 cap
               ) public Crowdsale(rate, wallet, token)
                        TimedCrowdsale(openingTime, closingTime)
                        FinalizableCrowdsale() { }

   /**
     * @dev Overrides finalization of FinalizableCrowdsale. It stores the remaining tokens to the
            fundwallet and transfers token ownership to the wallet.
   */

   function finalization() internal {

      uint256 remaining = ERC20Capped(address(token())).cap() - ERC20(address(token())).totalSupply();
      if (remaining > 0) ERC20Capped(address(super.token())).mint(super.wallet(), remaining);
      super._finalization();

   }

}
