const coffeeShop = {
    beans: 40,

    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
        let drinks = Object.keys(this.drinkRequirements)
        for (i=0; i<this.drinkRequirements.length; i++){
            if (drinkType == drinks[i]) {
                if (this.beans > this.drinkRequirements.drinkType) {
                    this.drinkRequirements.drinkType -= 1
                    this.beans = this.beans - this.drinkRequirements.drinkType
                    console.log('There you go, here\'s your ', drinkType)
                    break
                }
                else {
                    alert('Sorry, we\'re all out of beans!')
                }
            }
        }
        console.log('Sorry, we don\'t make ', drinkType)
    }
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  