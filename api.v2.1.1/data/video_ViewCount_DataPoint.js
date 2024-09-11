/* v2.1.1
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

*/

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
        let v = videoId.split(`"}],"accessibility":{"accessibilityData":{"label":"`)[0]
            v = v.split(" views")
            v = v[v.length - 1]
        return    v
    }
}