const SongsManager = function(){
    
    const songs = {}
    // object contains songs: [name]:[url]

    const addSong = function (songName, fullUrl) {
        //adding songs to the songs object
        index = fullUrl.indexOf('=')
        const _id = fullUrl.slice(index+1)
        songs[songName] = _id
    }

    const getSong = function(songName) {
        //logs the full url
        const _id = songs[songName]
        const fullUrl = 'https://www.youtube.com/watch?v=' + _id
        console.log(fullUrl)
    }
        
    return {
        addSong,
        getSong
    }
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("how long") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
