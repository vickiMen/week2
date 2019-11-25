
const renderer = Render()
const dataManager = CatchAFrog()

const catchListener = function(level) {
    clearTimeout()
    renderer.addFrogs(dataManager.getFrogsAmount(level))
    let timer = dataManager.getCurrentTimer(level)
        $('#container').on('click', '.frog', function(){
            $(this).empty()
            dataManager.updateCaughtFrogsCounter(level);
            setTimeout(function(){
                if (dataManager.getFrogsAmount(level) > dataManager.getCaughtFrogsCounter(level)) {
                    alert("Time is Up! You've lost.")
                }
            }, timer)
            if (dataManager.getFrogsAmount(level) == dataManager.getCaughtFrogsCounter(level)){
                dataManager.addLevel(level)
                catchListener(level+1)
            }
        })
    }
    
catchListener(1)