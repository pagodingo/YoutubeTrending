module.exports = {
    videoViewCount: function(body, i){
        let videoIds = body.split(`"watchEndpoint":{"videoId":"`)
            videoIds.shift()
        let videoId = videoIds[i].split(`"}],"accessibility":{"accessibilityData":{"label":"`)[1].slice(0,200)
            id = videoId
        let ago = id.lastIndexOf("ago")
        let views = id.split(`"}}},"descriptionSnippet":{"runs":[{"text":"`)[0].slice(ago, id.split(`"}}},"descriptionSnippet":{"runs":[{"text":"`)[0].length - 1)
        let s = views.split(" ")
        return s[s.length - 2]
    }
}

