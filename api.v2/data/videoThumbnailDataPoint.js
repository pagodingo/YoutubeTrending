module.exports = {
    videoThumbnail: function(body, videoId) {
        let allThumbnails = body.split(`"thumbnail":{"thumbnails":[{"url":"`)

        for (var i = 0; i < allThumbnails.length; ++i) {
            var thumbnail = allThumbnails[i].slice(0,150).split(`",`)[0]
            if ((thumbnail.includes(videoId))){
                return thumbnail
            }      
        }
    }
}