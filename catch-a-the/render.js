const Render = function(){

    //TODO: adding random divs (frogs to the screen)

    const addFrogs = function(frogsAmount){
        const randNum = () => Math.floor(Math.random() * 10) + 1
        for (let i=0; i<frogsAmount; i++){
            let frogDiv = `<div class='frog' id='frog${i+1}' style='grid-column: ${randNum()} / span ${randNum()};
            grid-row: ${randNum()} / ${randNum()};'><img src='768-512.png'/></div>`
            $('#container').append(frogDiv)
        }
    }

    return {
        addFrogs,
    }
}