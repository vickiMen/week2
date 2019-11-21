$(document).ready(function () {
let posts = [
    {
        name: 'vicki',
        text: 'I am awesome'
    },
    { 
        name: 'ortal',
        text: 'I love Vicki'
    },
    {
        name: 'Reut',
        text: 'Happy Birthdayyyy!'
    }
]

render = function(posts){
    for(let post in posts){
        let newDiv = `<div class='post' id='post${post}'>${posts[post]['name']}: ${posts[post]['text']}</div>`
        $('.posts').append(newDiv)
    }
}

$('.inputContainer').on('click', '.btn', function(){
    let bla = $('#name').val()
    posts.push({
        name: bla,
        text: $('#text').val()
    })
    $('.input').val('')
    $('.posts').empty()
    render(posts)
})


$('.postsContainer').on('click', '.post', function(){
    let clickedPost = $(this).attr('id')
    let findIndex = clickedPost.slice(4)
    posts.splice(findIndex,1)
    $('.posts').empty()
    render(posts)
})
    // Your code
    

    render(posts)

});