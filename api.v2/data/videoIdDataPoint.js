module.exports = {
    videoId: function(body, i){
        let videoIds = body.split(`"watchEndpoint":{"videoId":"`)
            videoIds.shift()
        let videoId = videoIds[i].slice(0,11)
            id = videoId
        return id
    }
}

