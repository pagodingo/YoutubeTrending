module.exports = { 
    videoViewCount: function(body, i) {
        let viewCount = '',
            list = body.split(`"watchEndpoint":{"videoId":"`)

            var metaChunk = list[i].slice(list[i].length - 1500, list[i].length)
            var videoMeta = "{" + metaChunk.slice(metaChunk.indexOf(`"title"`), metaChunk.indexOf(`,"descriptionSnippet"`)) + "}"

            if (videoMeta.includes(`{"runs":[{"text"`)) {
                if (videoMeta.slice(videoMeta.length - 4, videoMeta.length) != "}}}}") {
                    let blob = JSON.parse(videoMeta + "}").title.accessibility.accessibilityData.label.split(" views")                  
                    let array = blob[blob.length - 2].split(" ")
                    viewCount = array[array.length - 1]

                } else {
                    let blob = JSON.parse(videoMeta).title.accessibility.accessibilityData.label.split(" views")
                    viewCount = blob[blob.length - 2].split(" ").pop()

                }
            } 
        return viewCount
}
}