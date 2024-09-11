const request = require('request');
const express = require('express');
const server = express();

function getYouTubeTrending() {
    //https://www.npmjs.com/package/request
    request('http://www.youtube.com/trending', function (error, response, body) {

        let trending = []

        //body = garbled mess of HTML
        //"watchendpoint" - a recurring pattern I noticed in the HTML that made it easier for me to split it.
        //splitting by that gave back 100 items, all big chunks of YouTube Meta Data.

        let list = body.split(`"watchEndpoint":{"videoId":"`)
        
        for (var i = 0; i < list.length - 1; ++i) {
           //videoIds -> (youtube.com/watch?v={videoID}) - the first 10 elements of each chunk (this is also due to where I split)
            var videoId = list[i].slice(0,11)
            //Trending videos' actual meta data is in the last 1500 chars or so of each chunk
            var metaChunk = list[i].slice(list[i].length - 1500, list[i].length)
            /*I noticed another pattern between some text-
            ("title" and "description blah blah"), I used that to grab each video's metaJSON as best I could.
            added brackets because they tended to not be there.*/
            var videoMeta = "{" + metaChunk.slice(metaChunk.indexOf(`"title"`), metaChunk.indexOf(`,"descriptionSnippet"`)) + "}"
            
            /*so, apparently "title" and "description" shows up everywhere on Youtube - who knew?
            sometimes what I thought was video meta, wasn't actually video meta.*/
            // if 'runs:text' whatever isn't in videoMeta, it's not videoMeta.
            if (videoMeta.includes(`{"runs":[{"text"`)) {
                //again brackets were missing.
                (videoMeta.slice(videoMeta.length - 4, videoMeta.length) != "}}}}") ?
                    //adding videoIds
                    trending.push(Object.assign(JSON.parse(videoMeta + "}"), {"videoId": videoId})) :
                    trending.push(Object.assign(JSON.parse(videoMeta), {"videoId": videoId}))
            }
        }
        server.listen(3000, () => {
            console.log("running")
            server.use("/", (req, res) => res.send(trending))
        })
    })
}
//and that's
getYouTubeTrending();