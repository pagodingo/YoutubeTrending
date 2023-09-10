module.exports = {
    videoDuration: function(body, i, title){
        // thumbnail pivot {"thumbnail":{"thumbnails":[{"url":"
        let a = body.split(`"watchEndpoint":{"videoId":"`) // "}],"accessibility":{"accessibilityData":{"label":"
            a . shift()
            a = a[0].slice(0,1500)
            a = a.split('"thumbnail":{"thumbnails":[{"url":"')
            a . shift()
         //   console.log(a[0])
    //    id = videoId
    //    let ago = id.lastIndexOf("ago")
    //    let str = id.split(`"}}},"descriptionSnippet":{"runs":[{"text":"`)[0].slice(0, ago).split(" ")
     //   str.pop();str.pop();str.pop();
     //   let d = str.join(" ").replace(title, '')
     //   return videoIds[i]
    }
}