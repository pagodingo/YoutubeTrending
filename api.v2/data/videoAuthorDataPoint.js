module.exports = { 
    videoAuthor: function(body, i, title){
        let author = ''
        let list = body.split(`"watchEndpoint":{"videoId":"`)

            var metaChunk = list[i].slice(list[i].length - 1500, list[i].length)
            var videoMeta = "{" + metaChunk.slice(metaChunk.indexOf(`"title"`), metaChunk.indexOf(`,"descriptionSnippet"`)) + "}"

            if (videoMeta.includes(`{"runs":[{"text"`)) {
                if (videoMeta.slice(videoMeta.length - 4, videoMeta.length) != "}}}}") {
                    let blob = JSON.parse(videoMeta + "}").title.accessibility.accessibilityData.label.split(" views")  
                        blob[blob.length - 1].replace(title,"")
                        let str =blob[blob.length - 2].replace(title,"")
                        let lastIndex = str.lastIndexOf("ago")
                        let arr = str.slice(0,lastIndex).replace(" by ", "").split(" ")
                        arr.pop()
                        arr.pop()
                        arr.pop()
                        // console.log(arr.join(" "))
                        author = arr.join(" ")
                } else {
                    let blob = JSON.parse(videoMeta).title.accessibility.accessibilityData.label.split(" views")
                        let str=blob[blob.length - 2].replace(title,"")
                        let lastIndex = str.lastIndexOf("ago")
                        let arr = str.slice(0,lastIndex).replace(" by ", "").split(" ")
                        arr.pop()
                        arr.pop()
                        arr.pop()
                       // console.log(arr.join(" "))
                       author = arr.join(" ")
                }
            }      
        return author
    }
}