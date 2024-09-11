module.exports = {
    videoId: function(body, i){
        let videoIds = body.split(`"watchEndpoint":{"videoId":"`) // "}],"accessibility":{"accessibilityData":{"label":"
            videoIds.shift()
        let videoId = videoIds[i].slice(0,11)
            id = videoId
        return id
    }
}

