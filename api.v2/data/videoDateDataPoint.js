module.exports = { 
    videoDate: function(body, i) {
        let dates = '', list = body.split(`"watchEndpoint":{"videoId":"`)
            var metaChunk = list[i].slice(list[i].length - 1500, list[i].length)
            var videoMeta = "{" + metaChunk.slice(metaChunk.indexOf(`"title"`), metaChunk.indexOf(`,"descriptionSnippet"`)) + "}"

            if (videoMeta.includes(`{"runs":[{"text"`)) {
                
                if (videoMeta.slice(videoMeta.length - 4, videoMeta.length) != "}}}}") {
                    let blob = JSON.parse(videoMeta + "}").title.accessibility.accessibilityData.label.split(" views")                  
                    let str = blob[blob.length - 2]
                    let lastIndex = str.lastIndexOf("ago")
                    let array = str.slice(0, lastIndex).split(" ")
                    array.pop()
                    let date = []
                    date.push(array[array.length -2])
                    date.push(array[array.length -1])
                    date.push("ago")
                    
                    dates = date.join(" ")

                } else {
                    let blob = JSON.parse(videoMeta).title.accessibility.accessibilityData.label.split(" views")
                    let str = blob[blob.length - 2]
                    let lastIndex = str.lastIndexOf("ago")
                    let array = str.slice(0, lastIndex).split(" ")
                    array.pop()
                    let date = []
                    date.push(array[array.length -2])
                    date.push(array[array.length -1])
                    date.push("ago")
                    
                    dates = date.join(" ")
                }
            }
        return dates
}
}