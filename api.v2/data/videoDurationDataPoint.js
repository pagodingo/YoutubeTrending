module.exports = { 
    videoDuration: function (body, i) {
        let duration = '', list = body.split(`"watchEndpoint":{"videoId":"`)         
            var metaChunk = list[i].slice(list[i].length - 1500, list[i].length)
            var videoMeta = "{" + metaChunk.slice(metaChunk.indexOf(`"title"`), metaChunk.indexOf(`,"descriptionSnippet"`)) + "}"

            if (videoMeta.includes(`{"runs":[{"text"`)) {
                
                if (videoMeta.slice(videoMeta.length - 4, videoMeta.length) != "}}}}") {
                    let blob = JSON.parse(videoMeta + "}").title.accessibility.accessibilityData.label.split(" views")                  
                    let str = blob[blob.length - 2]
                    let lastIndex = str.lastIndexOf("ago")
                    let time = str.slice(lastIndex + 4).split(" ")
                    time.pop()
                    duration = time.join(" ")

                } else {
                    let blob = JSON.parse(videoMeta).title.accessibility.accessibilityData.label.split(" views")
                    let str = blob[blob.length - 2]
                    let lastIndex = str.lastIndexOf("ago")
                    let time = str.slice(lastIndex + 4).split(" ")
                    time.pop()
                    duration = time.join(" ")
                }
        }      
        return duration
}
}