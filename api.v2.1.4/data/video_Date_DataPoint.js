module.exports = {
    videoDate: function(body, i){
        let videoIds = body.split(`"watchEndpoint":{"videoId":"`) // "}],"accessibility":{"accessibilityData":{"label":"
            videoIds.shift()
        let videoId = videoIds[i].split(`"}],"accessibility":{"accessibilityData":{"label":"`)[1].slice(0,200)
            id = videoId
        let ago = id.lastIndexOf("ago")
        let str = id.split(`"}}},"descriptionSnippet":{"runs":[{"text":"`)[0].slice(0, ago).split(" ")

        if (str[str.length -3].startsWith('views"')){
            console.log('block 1')
            return str[str.length -3].split('"')[str[str.length -3].split('"').length -1] + " " + str[str.length -2] + " ago"
        } else {
            console.log('block 2')
            if ((str[str.length -3] + " " +  str[str.length -2] + " ago").includes("{")){
                let c = str[str.length -3] + " " +  str[str.length -2] + " ago"
                    c = c.split(':"')
                    return c[c.length -1]
            } else {
                return str[str.length -3] + " " +  str[str.length -2] + " ago"
            }

        }
        
    }
}