


// EX1 + EX2

/* 
$('body').append("<button class='bla'>Add Human</button>")
$('body').append("<input class='bla' type='text'></input>")

$('body').on('click', 'button', function(){
    $('body').append(`<li class='human'>${$('input').val()}</li>`)
})

$('body').on('click', 'li', function(){
    $(this).remove()
})
*/


// EX3

/*
const box1 = "<div class='box' id='box1'></div>"
const box2 = "<div class='box' id='box2' style='background-color:red'></div>"

$('body').append(box1,box2)

let colorChange = false

$('body').on('mouseover', 'div', function(){
    if (colorChange == false) {
        $('#box2').css('background-color','red')
        $('#box1').css('background-color','purple')
        colorChange = true
    }
    else {
        $('#box1').css('background-color','red')
        $('#box2').css('background-color','purple')
        colorChange = false
    }
}) */




//EX4 + Extension Cart


$('.item').click(function(){
    if ($(this).data('instock') == true) {
        let text = $(this).text()
        $('#cart').append(`<div class=cart-item>${text}</div>`)
    }
})

$('div > div').each( function(){
    // let removeMeBtn = $(this)
    // removeMeBtn.text('Remove Me!')
    $('#items').append("<button class='remove'>Remove Me!</button>")
    $('.remove').addClass("item")

})
    $('.remove').click(function(){
        $('#cart').remove('.cart-item')
    })




//EX5


/* 
const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]
  

  for (let i=0; i<fruits.length; i++){
      $('#basket').append(`<div class=${fruits[i]['color']}>${fruits[i]['name']}</div>`)} */






// Extension Color Picker


/* $('span').each(function(){
    $(this).addClass('picker')
    let color = $(this).data('color')
    $(this).css('background-color', color)
    $(this).click(function(){
        $('.box').css('background-color', color)
    })
}) */




// Extension - Cart






