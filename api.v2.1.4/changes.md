--9/25/23-- Date parser intermittently breaks

issue:
```json
{
"Title": "Ease on down the Road | Packing up the RV and moving",
"Author": "All About The Banks",
"ID": "OI9lPQvF5L8",
// bad "Posted"
// "Posted": `"minutes"}}},"publishedTimeText":{"simpleText":"2 weeks ago"`,
"Views": "14,709",
"CurrentDate": "9/25/2023",
"URL": "https://www.youtube.com/watch?v=OI9lPQvF5L8"
}
```

fix:
```js
// detect brackets, split by `:"`, then, return last index

// oldDateParser
module.exports = {
    videoDate: function(body, i){
        let videoIds = body.split(`"watchEndpoint":{"videoId":"`) // "}],"accessibility":{"accessibilityData":{"label":"
            videoIds.shift()
        let videoId = videoIds[i].split(`"}],"accessibility":{"accessibilityData":{"label":"`)[1].slice(0,200)
            id = videoId
        let ago = id.lastIndexOf("ago")
        let str = id.split(`"}}},"descriptionSnippet":{"runs":[{"text":"`)[0].slice(0, ago).split(" ")

        if (str[str.length -3].startsWith('views"')){
            return str[str.length -3].split('"')[str[str.length -3].split('"').length -1] + " " + str[str.length -2] + " ago"
        } else {
            return str[str.length -3] + " " +  str[str.length -2] + " ago"
        }
        
    }
}
// newDate Parser
module.exports = {
    videoDate: function(body, i){
        let videoIds = body.split(`"watchEndpoint":{"videoId":"`) // "}],"accessibility":{"accessibilityData":{"label":"
            videoIds.shift()
        let videoId = videoIds[i].split(`"}],"accessibility":{"accessibilityData":{"label":"`)[1].slice(0,200)
            id = videoId
        let ago = id.lastIndexOf("ago")
        let str = id.split(`"}}},"descriptionSnippet":{"runs":[{"text":"`)[0].slice(0, ago).split(" ")

        if (str[str.length -3].startsWith('views"')){
            return str[str.length -3].split('"')[str[str.length -3].split('"').length -1] + " " + str[str.length -2] + " ago"
        } else {
   
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
```
