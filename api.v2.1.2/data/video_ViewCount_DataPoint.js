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
    videoViewCount: function(body, i, title){
        let videoIds = body.split(`"watchEndpoint":{"videoId":"`) // "}],"accessibility":{"accessibilityData":{"label":"
            videoIds.shift()
        let videoId = videoIds[i].split(`"}],"accessibility":{"accessibilityData":{"label":"`)[1].slice(0,200)
            id = videoId
        let ago = id.lastIndexOf("ago")
        let str = id.split(`"}}},"descriptionSnippet":{"runs":[{"text":"`)[0].slice(0, ago).split(" ")
        str.pop();str.pop();str.pop();
        let d = str.join(" ").replace(title, '')
            d = d.slice(4,d.length)
        d =  d.split(' views')
        c = d[d.length-2].split(" ")
        c = c[c.length-1]
        return c
    }
}