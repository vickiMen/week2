const coffeeShop = {
    beans: 40,

    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
        drinks = Object.keys(this.drinkRequirements)
        for (i=0; i<drinks.length; i++){
            if (drinkType == drinks[i]) {
                if (this.beans >= this.drinkRequirements[drinkType]) {
                    this.beans = this.beans - this.drinkRequirements[drinkType]
                    console.log('There you go, here\'s your ', drinkType)
                    return
                }
                else {
                    console.log('Sorry, we\'re all out of beans!')
                    return
                }
            }
        }
        console.log('Sorry, we don\'t make ', drinkType)
    }
}

let drinks = []
  
coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  