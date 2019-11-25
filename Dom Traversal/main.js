//SC 1

/* 
$('div').on('click', 'button', function(){
    let parent = $(this).closest('div')
    let text = $(parent).children('span').html()
    alert(text)
}) */


//SC 2

/* $('body').on('click', 'button', function(){
    console.log($(this).siblings('div').children('p').html())
}) */

//SC 3

let processor = $('.processor')

processor.on('click', '.generator', function(){
        let ids = []
        let prc_id = `prc_id: ${$(this).parent().attr('id')}`
        let cmp_id = `cmp_id: ${$(this).parent().parent().data('id')}`
        let bus_num = `bus_num: ${$(this).parent().parent().find('.BUS').html()}`
        ids.push(prc_id, cmp_id, bus_num)
        console.log(ids)
})

$('.computer').on('click', '.validator', function(){
    let validatorComp = []
    let gen_text = `gen_text: ${$(this).parent().parent().find('.generator').html()}`
    let mb = `nb: ${$(this).parent().parent().parent().find('.MB')}`
    let qr1 = []
    qr1.push(`${$(this).parent().parent().find('.QR')}`)
    validatorComp.push(gen_text, mb, qr1)
    console.log(validatorComp)
})
