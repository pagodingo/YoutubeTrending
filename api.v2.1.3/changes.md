--9/20/23-- New version to reintroduce videoThumbnail as datapoint (leveraging videoIDs)

fix:
```js
// videoID + base url:
Thumbnail: `https://i.ytimg.com/vi/${parseId(body, i)}/hq720.jpg`
```