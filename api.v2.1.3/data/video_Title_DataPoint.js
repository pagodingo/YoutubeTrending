module.exports = {
    videoTitle: function(body, i){
        // title pivot "width":336,"height":188}]},"title":{"runs":[{"text":"
        // main pivot "}],"accessibility":{"accessibilityData":{"label":"
        let videoIds = body.split(`"watchEndpoint":{"videoId":"`)
            videoIds.shift()
        let videoId = videoIds[i].split(`"width":336,"height":188}]},"title":{"runs":[{"text":"`)[1].slice(0,300)
            id = videoId
        let ago = id.indexOf(`"}],"accessibility":{"accessibilityData":{"`)
        //let str = id.split(`"}}},"descriptionSnippet":{"runs":[{"text":"`)[0].slice(0, ago).split(" ")
        return videoId.split(`"}],"accessibility":{"accessibilityData":{"label":"`)[0].replace("\u0026", '&')
    }
}