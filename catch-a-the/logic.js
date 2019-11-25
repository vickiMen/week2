const CatchAFrog = function(){

    let data = [
        {
            level: 1,
            frogsAmount: 1,
            caughtFrogsCounter: 0,
            timer: 2000
        }
    ]

    let currentLevel = 1

    const getCurrentLevel = function(){
        return currentLevel
    }

    const updateLevel = function(){
        currentLevel++
    }

    const getCurrentTimer = function(level){
        let currentTimer = data[level-1].timer
        return currentTimer
    }

    const getFrogsAmount = function(level){
        let currentAmount = data[level-1].frogsAmount
        return currentAmount
    }

    const addLevel = function(currentLevel){
        data.push({
            level: currentLevel+1,
            frogsAmount: getFrogsAmount(currentLevel) + 1,
            caughtFrogsCounter: 0,
            timer: getCurrentTimer(currentLevel) + 1000
        })
    }


    const getCaughtFrogsCounter = function(level){
        let currentCaught = data[level-1].caughtFrogsCounter
        return currentCaught
    }

    const updateCaughtFrogsCounter = function(level){
        data[level-1].caughtFrogsCounter++
    }

    return {
        getCurrentLevel,
        updateLevel,
        addLevel,
        getCurrentTimer,
        getFrogsAmount,
        getCaughtFrogsCounter,
        updateCaughtFrogsCounter,
    }

}