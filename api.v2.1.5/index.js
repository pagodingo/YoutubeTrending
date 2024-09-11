



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


let
  parseDuration = require('./data/video_Duration_DataPoint.js').videoDuration,
  parseAuthor = require('./data/video_Author_DataPoint.js').videoAuthor,
  parseTitle = require('./data/video_Title_DataPoint.js').videoTitle,
  parseViews = require('./data/video_ViewCount_DataPoint.js').videoViewCount,
  parseDate = require('./data/video_Date_DataPoint.js').videoDate,
  parseId = require('./data/video_Id_DataPoint.js').videoId,
  _      = require('./landing.js').landing
  axios = require('axios')

async function main(event) {
  let 
      Trending  = [],
      Request   = await axios.get("https://www.youtube.com/trending"),
      Data      = Request.data,
      Length    = Data.split(`"watchEndpoint":{"videoId":"`).length > 100 ?
                  Data.split(`"watchEndpoint":{"videoId":"`).length = 100 :
                  Data.split(`"watchEndpoint":{"videoId":"`).length - 1;


  for (var i = 0; i < Length - 1; ++i) {

    let 
      Video = {
        _: i+1,
        Title: parseTitle(Data, i),
        Author: parseAuthor(Data, i, parseTitle(Data, i)),
        CurrentDate: new Date().toLocaleString('en-US', { timeZone: 'America/New_York', }).split(',')[0],
        Posted: parseDate(Data, i),
        Views: parseViews(Data, i),
        ID: parseId(Data, i + 1),
        URL: `https://www.youtube.com/watch?v=${parseId(Data, i + 1)}`,
        Thumbnail: `https://i.ytimg.com/vi/${parseId(Data, i + 1)}/hq720.jpg`
    };    
        Trending.push(JSON.stringify(Video))
}

if (event.rawQuery === 'page=landing')
{
  return { 
    statusCode: 200, body: _(Trending) 
  }
}

if (Trending)
{
  return { 
    statusCode: 200, body: `[${Trending}]`
  }
} 

return { 
    statusCode: 500, body: `whoops`
}}; 

exports.handler = main;