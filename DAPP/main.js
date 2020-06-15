var web3 = new Web3(Web3.givenProvider);
var contractInstance;

$(document).ready(function () {
    window.ethereum.enable().then(function (accounts) {
        contractInstance = new web3.eth.Contract(window.abi, "0x9203e378E42052aBc767fD369CD98696630CF95F", {
            from: "0xd320f8A3EBa2C920185a26205b1ED5691cc537dE"
        });
    });
    $("#contract_jackpot").click(WinOrLose);
    $("#spin_it_button").click(toss);

});

function toss() {
    var bet = $("#bet_input").val();
    var toss = $("#play_input").val();

    contractInstance.methods.gamble(toss)
        .send({
            value: web3.utils.toWei(bet, "ether")
        })
        .on('transactionHash', function (hash) {
            console.log("tx hash");
        })
        .on('confirmation', function (confirmationNumber, receipt) {
            console.log("conf");
            console.log(conf);
        })
        .on('receipt', function (receipt) {
            console.log("receipt");
            console.log(receipt);
            if(receipt.events. placeBet.returnValues.won){
                $("#youAre_index").text("Winaaar!!");
            }
            else {
                $("#youAre_index").text("loser!");
            }
        })
}

function WinOrLose() {
    contractInstance.methods.getMyBalance().call().then(function (res) {
        console.log(res)
        displayInfo(res);
    });
}

function displayInfo(res) {
    $("#myBalance_output").text(res);
}
