const getTime = function(func) {
    const x = func()
    return x
}

let bla = getTime()
bla()