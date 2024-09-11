                                                                                                                          
                                                                                                                          


/*$$\$$\  $$$$\       $$\     $$\                $$$$$$$$\        $$\                                                 $$\ 
$$  _\$$\ \_$$ |      \$$\   $$  |               \__$$  __|       $$ |                                               $$  |
$$ |  \$$\  $$ |       \$$\ $$  /$$$$$$\  $$\   $$\ $$ |$$\   $$\ $$$$$$$\   $$$$$$\                                $$  / 
$$ |   \$$\ $$ |        \$$$$  /$$  __$$\ $$ |  $$ |$$ |$$ |  $$ |$$  __$$\ $$  __$$\                              $$  /  
$$ |   $$  |$$ |         \$$  / $$ /  $$ |$$ |  $$ |$$ |$$ |  $$ |$$ |  $$ |$$$$$$$$ |                            $$  /   
$$ |  $$  / $$ |          $$ |  $$ |  $$ |$$ |  $$ |$$ |$$ |  $$ |$$ |  $$ |$$   ____|                           $$  /    
$$$$\$$  /$$$$ |          $$ |  \$$$$$$  |\$$$$$$  |$$ |\$$$$$$  |$$$$$$$  |\$$$$$$$\                           $$  /     
\____\__/ \____|          \__|   \______/  \______/ \__| \______/ \_______/  \_______|                          \__/      
                                                                                                                          
                                                                                                                          
                                                                                                                          
      $$$$$$$$\                                  $$\ $$\                                 $$\$$\            $$\            
      \__$$  __|                                 $$ |\__|                               $$  \$$\          $$  |           
         $$ | $$$$$$\   $$$$$$\  $$$$$$$\   $$$$$$$ |$$\ $$$$$$$\   $$$$$$\            $$  / \$$\        $$  /            
         $$ |$$  __$$\ $$  __$$\ $$  __$$\ $$  __$$ |$$ |$$  __$$\ $$  __$$\          $$  /   \$$\      $$  /             
         $$ |$$ |  \__|$$$$$$$$ |$$ |  $$ |$$ /  $$ |$$ |$$ |  $$ |$$ /  $$ |        $$  /     \$$\    $$  /              
         $$ |$$ |      $$   ____|$$ |  $$ |$$ |  $$ |$$ |$$ |  $$ |$$ |  $$ |       $$  /       \$$\  $$  /               
         $$ |$$ |      \$$$$$$$\ $$ |  $$ |\$$$$$$$ |$$ |$$ |  $$ |\$$$$$$$ |      $$  /         \$$\$$  /                
         \__|\__|       \_______|\__|  \__| \_______|\__|\__|  \__| \____$$ |      \__/           \__\__/                 
                                                                   $$\   $$ |                                             
                                                                   \$$$$$$  |                                             
                                                                    \______/                                              
                                                                             $$\                                          
                                                                            $$  |                                         
                                                                           $$  /                                          
                                                                          $$  /                                           
                                                                         $$  /                                            
                                                                        $$  /                                             
                                                                       $$  /                                              
                                                                       \_*/

                                                                    
const 
    parseThumbnail = require('./data/videoThumbnailDataPoint').videoThumbnail,
    parseDuration  = require('./data/videoDurationDataPoint.js').videoDuration,
    parseAuthor    = require('./data/videoAuthorDataPoint').videoAuthor,
    parseTitle     = require('./data/videoTitleDataPoint.js').videoTitle,
    parseViews     = require('./data/videoViewCountDataPoint.js').videoViewCount,
    parseDate      = require('./data/videoDateDataPoint').videoDate,
    parseId        = require('./data/videoIdDataPoint').videoId,
    axios          = require('axios')
    fs             = require('fs')                                                                       
                                                                 
exports.handler = async function (event, context) {
    let request = await axios.get("https://www.youtube.com/trending")
    let data = request.data

    const Trending = [], Size  =  data.split(`"watchEndpoint":{"videoId":"`).length > 100 ? 
                                  data.split(`"watchEndpoint":{"videoId":"`).length = 100 :
                                  data.split(`"watchEndpoint":{"videoId":"`).length - 1

    for (var i = 0; i < Size; ++i){

    let Video = {
      Thumbnail:  parseThumbnail(data, parseId(data, i)),
      //Duration:   parseDuration(data, i),
      Author:     parseAuthor(data, i, parseTitle(data, i)),
      Posted:     parseDate(data, i),
      Title:      parseTitle(data, i),
      Views:      parseViews(data, i),
      URL:       `https://www.youtube.com/watch?v=${parseId(data, i)}`,
      ID:         parseId(data, i),
    }
      Trending.push(JSON.stringify(Video))
    }
    
    return {statusCode: 200, body: `[${Trending}]`}
};
