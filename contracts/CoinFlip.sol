pragma solidity 0.5.12;
import "./Ownable.sol";

contract CoinFlip {
    uint256 public balance;
mapping(address => uint) public gamblerAccount;

event placeBet(address player, bool won);

 modifier minimumTreshold(uint256 betValue) {
        require(betValue >= 1 ether, "1 ETH is requires");
        _;
    }
function summery() public returns (uint collected){
            uint256 toTransfer = gamblerAccount[msg.sender];
            gamblerAccount[msg.sender]= 0;
            msg.sender.transfer(toTransfer);
            return toTransfer;
    }
 function getMyBalance() public returns (uint userBalance){
            return gamblerAccount[msg.sender];
    }
    function gamble(uint256 bet) public payable minimumTreshold(msg.value) returns (bool won){
        bool winner = false;

           require(bet == 0 || bet == 1, "INVALIDE, please choise  0 or 1");

            if((now % 2 == 0 && bet == 0) || (now % 2 == 1 && bet == 1)) {
                 gamblerAccount[msg.sender] += balance + msg.value;
                balance = 0;
                winner = true;

            }
            else{
                balance += msg.value;

              
            }
            emit placeBet(msg.sender, winner);
            return winner;
        }
    }
