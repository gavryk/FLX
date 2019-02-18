let max_cards = 3,
    num1 = 1,
    num2 = 2,
    num3 = 3,
    taxNum = 100.5,
    fullTax = 100;

function userCard(index) {
    let credit = 100;
    let transLimit = 100;
    let history = [];
    return {
        getCardOptions: function() {
            return {
                balance: credit,
                transactionLimit: transLimit,
                historyLogs: history,
                key: index
            }
        },
        putCredits: function(value) {
            credit += value;
            return history.push({
                'Operation Type': 'Received Credits',
                'credits': value,
                'Operation Time': new Date().toLocaleString()
            })
        },
        takeCredits: function(value) {
            if(credit < value) {
                console.error('There are not enough money on your card')
            } else if (transLimit < value) {
                console.error('Transaction limit on your card to small');
            } else {
                credit -= value;
            }
            history.push({
                'Operation Type': 'Withdrawal of credits',
                'credits': value,
                'Operation Time': new Date().toLocaleString()
            })
        },
        setTransactionLimit: function(value) {
            transLimit = value;
            return history.push({
                'Operation Type': 'Transaction of limit',
                'credits': value,
                'Operation Time': new Date().toLocaleString()
            })
        },
        transferCredits: function(value, card) {
            let tax = value * taxNum / fullTax;
            if(credit < tax) {
                console.error('There are not enough money on your card')
            } else if (transLimit < tax) {
                console.error('Transaction limit on your card to small');
            } else {
                this.takeCredits(tax);
                card.putCredits(value);
            }
        }
    };
}
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard(card) {
        if(this.cards.length < max_cards) {
            if(typeof card !== 'undefined') {
                this.cards.push(card);
            } else {
                this.cards.push(userCard(this.cards.length + 1));
            }
        } else {
            console.error('You reached maximum amount of cards')
        }
    }
    getCardByKey(key) {
        return this.cards[key - 1];
    }
}

/*Example*/
// let user = new UserAccount('Bob');
// user.addCard();
// user.addCard();
// user.addCard();
// user.addCard();
//
// let card1 = user.getCardByKey(num1);
// let card2 = user.getCardByKey(num2);
// let card3 = user.getCardByKey(num3);
//
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);
//
// card2.takeCredits(50);
//
// console.log(card1.getCardOptions());
// console.log(card2.getCardOptions());
// console.log(card3.getCardOptions());
// console.log(user);