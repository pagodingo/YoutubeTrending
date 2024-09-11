module.exports = {
    videoAuthor: function(body, i, title){
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
        c.pop()
        c = c.join(" ")
        return c
    }
}