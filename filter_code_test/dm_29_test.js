const Monzo = {
cardPurchase: {
    AmountInAccountCurrency: "123.45"
},
potDeposit: {
    setAmount: function(amount) {
    console.log("Deposited amount:", amount);
    }
}
};

var saveAmount = 10 - parseInt(Monzo.cardPurchase.AmountInAccountCurrency.slice(-1));
Monzo.potDeposit.setAmount("0.0" + saveAmount.toString());
