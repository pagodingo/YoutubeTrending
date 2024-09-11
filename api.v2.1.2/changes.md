--9/10/23-- New version to fix broken view count + count in "author"

issue:
```json
  {
    "_": 1,
    "Title": "Postgame Interview: Deion Sanders recaps Colorado's dominant win over Nebraska in Week 2",
    // bad author:
    //"Author": "CFB ON FOX 1,561,279 views",
    "CurrentDate": "9/10/2023",
    "Posted": "1 day ago",
    // bad views:
    //"Views": "20",
    "ID": "d2_iNBoeE8U",
    "URL": "https://www.youtube.com/watch?v=d2_iNBoeE8U"
  }
```

fix: 


```js
// pivoted from api.v2.1.1 author parser, used output to reparse author + views:

//new videoAuthor parser
module.exports = {
    videoAuthor: function(body, i, title){
        let videoIds = body.split(`"watchEndpoint":{"videoId":"`) // "}],"accessibility":{"accessibilityData":{"label":"
            videoIds.shift()
        let videoId = videoIds[i].split(`"}],"accessibility":{"accessibilityData":{"label":"`)[1].slice(0,200)
            id = videoId
        let ago = id.lastIndexOf("ago")
        let str = id.split(`"}}},"descriptionSnippet":{"runs":[{"text":"`)[0].slice(0, ago).split(" ")
        str.pop();str.pop();str.pop();
        let d = str.join(" ").replace(title, '')
            d = d.slice(4,d.length)
        d =  d.split(' views')
        c = d[d.length-2].split(" ")
        c.pop()
        c = c.join(" ")
        return c
    }
}
//new videoViewcount parser
module.exports = {
    videoViewCount: function(body, i, title){
        let videoIds = body.split(`"watchEndpoint":{"videoId":"`) // "}],"accessibility":{"accessibilityData":{"label":"
            videoIds.shift()
        let videoId = videoIds[i].split(`"}],"accessibility":{"accessibilityData":{"label":"`)[1].slice(0,200)
            id = videoId
        let ago = id.lastIndexOf("ago")
        let str = id.split(`"}}},"descriptionSnippet":{"runs":[{"text":"`)[0].slice(0, ago).split(" ")
        str.pop();str.pop();str.pop();
        let d = str.join(" ").replace(title, '')
            d = d.slice(4,d.length)
        d =  d.split(' views')
        c = d[d.length-2].split(" ")
        c = c[c.length-1]
        return c
    }
}
```
