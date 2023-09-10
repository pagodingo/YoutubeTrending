



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
  parseThumbnail = require('./data/video_Thumbnail_DataPoint').videoThumbnail,
  parseDuration = require('./data/video_Duration_DataPoint.js').videoDuration,
  parseAuthor = require('./data/video_Author_DataPoint').videoAuthor,
  parseTitle = require('./data/video_Title_DataPoint.js').videoTitle,
  parseViews = require('./data/video_ViewCount_DataPoint.js').videoViewCount,
  parseDate = require('./data/video_Date_DataPoint').videoDate,
  parseId = require('./data/video_Id_DataPoint').videoId,
  _      = require('./landing').landing
  axios = require('axios')

async function main(event, context) {
  let T,L,D,R; // too long || didn't read ? true : 🐢 

      T  = []
      R  = await axios.get("https://www.youtube.com/trending")
      D  = R.data
      L  = D.split(`"watchEndpoint":{"videoId":"`).length > 100 ?
           D.split(`"watchEndpoint":{"videoId":"`).length = 100 :
           D.split(`"watchEndpoint":{"videoId":"`).length - 1

  for (var i = 0; i < L - 1; ++i) {

    let 
      Video = {
        _: i+1,
        Title: parseTitle(D, i),
        Author: parseAuthor(D, i, parseTitle(D, i)),
        CurrentDate: new Date().toLocaleString('en-US', { timeZone: 'America/New_York', }).split(',')[0],
        Posted: parseDate(D, i),
        Views: parseViews(D, i),
        ID: parseId(D, i + 1),
        URL: `https://www.youtube.com/watch?v=${parseId(D, i + 1)}`,
    };  T.push(JSON.stringify(Video))

}
if (event.rawQuery === 'page=landing'){
  return { statusCode: 200, body: _(T) }
}

if (T)
{
  return { 
    statusCode: 200, body: `[${T}]`
  }
} else {
  return { 
    statusCode: 500, body: `whoops`
  }
}
};
exports.handler = main;
