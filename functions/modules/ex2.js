const Bank = function(){
    
    let money = 500
    
    const depositCash = function(cash){
        //takes a cash parameter and uses it to increase money
        money = money + cash
    }

    const checkBalance = function(){
        console.log(money)
    }

    return {
        deposit: depositCash,
        showBalance: checkBalance    
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950