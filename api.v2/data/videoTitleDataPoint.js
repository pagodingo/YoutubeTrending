module.exports = { 
    videoTitle: function(body, i) {
        let title = '', list = body.split(`"watchEndpoint":{"videoId":"`)
            
        var metaChunk = list[i].slice(list[i].length - 1500, list[i].length)
        var videoMeta = "{" + metaChunk.slice(metaChunk.indexOf(`"title"`), metaChunk.indexOf(`,"descriptionSnippet"`)) + "}"
        
        if (videoMeta.includes(`{"runs":[{"text"`)) {
            (videoMeta.slice(videoMeta.length - 4, videoMeta.length) != "}}}}") ?
                title = Object.assign(JSON.parse(videoMeta + `}`).title.runs[0].text) :
                title = Object.assign(JSON.parse(videoMeta).title.runs[0].text.toString())
        }

        return title
    }
}