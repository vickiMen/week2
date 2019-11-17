const coffeeShop = {
    beans: 40,

    drinkRequirements: {
        latte: { 
            beanRequirement: 10, 
            price: 12
        },
        americano: {
            beanRequirement: 5,
            price: 8
        },
        doubleShot: {
            beanRequirement: 15,
            price: 18
        },
        frenchPress: {
            beanRequirement: 12,
            price: 15
        }
    },

    money: 100,

    priceOfBean: 10,

    buyBeans: function(numBeans){
        this.money = this.money - (numBeans * this.priceOfBean)
    },
  
    makeDrink: function (drinkType) {
            if (!this.drinkRequirements[drinkType] || this.beans >= this.drinkRequirements[drinkType].beanRequirement) {
                switch(drinkType) {
                    case "latte":
                        this.beans = this.beans - this.drinkRequirements.latte.beanRequirement
                        console.log('There you go, here\'s your Latte!')
                        break;
                    case "americano":
                        this.beans = this.beans - this.drinkRequirements.americano.beanRequirement
                        console.log('There you go, here\'s your Americano!')
                        break;
                    case "doubleShot":
                        this.beans = this.beans - this.drinkRequirements.doubleShot.beanRequirement
                        console.log('There you go, here\'s your Double Shot!')
                        break;
                    case "frenchPress":
                        this.beans = this.beans - this.drinkRequirements.frenchPress.beanRequirement
                        console.log('There you go, here\'s your French Press!')
                        break;
                    default:
                        console.log('Sorry, we don\'t make', drinkType)
                    }
                }
                else {
                    console.log('Sorry, we\'re all out of beans')
                }
    },

    buyDrink: function(drinkType){
        let drinks = Object.keys(this.drinkRequirements)
        let isAvailable = drinks.includes(drinkType)
        if (isAvailable) {
            this.money = this.money + this.drinkRequirements[drinkType].price
            this.makeDrink(drinkType)
        }
        else {
            this.makeDrink(drinkType)
        }
    }
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

coffeeShop.buyDrink('latte')
console.log(coffeeShop.money)
coffeeShop.buyDrink('blabla')
console.log(coffeeShop.money)
coffeeShop.buyDrink('frenchPress')
console.log(coffeeShop.money)
