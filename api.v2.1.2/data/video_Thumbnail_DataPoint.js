module.exports = {
    videoThumbnail: function(body, i, title){
        // thumbnail pivot {"thumbnail":{"thumbnails":[{"url":"
        let videoIds = body.split(`"watchEndpoint":{"videoId":"`) // "}],"accessibility":{"accessibilityData":{"label":"
            videoIds.shift()
        let videoId = videoIds[i].split(`":{"items":[{"videoRenderer":{"videoId":`)[1].slice(0,205)
            id = videoId
        let ago = id.lastIndexOf("ago")
        let str = id.split(`"}}},"descriptionSnippet":{"runs":[{"text":"`)[0].slice(0, ago).split(" ")
        str.pop();str.pop();str.pop();
        let d = str.join(" ").replace(title, '')
        return videoId
    }
}