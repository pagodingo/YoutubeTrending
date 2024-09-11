module.exports = {
  landing: function (data) {
    let csv = ''
    csv += 'Title,'
    csv += 'Author,'
    csv+= 'ID,'
    csv+= 'Posted,'
    csv+= 'Views,'
    csv+= 'CurrentDate,'
    csv+= 'ID,'
    csv+= 'URL,'
    for (var i = 0; i < data.length; ++i){
      csv += JSON.parse(data[i]).Title + ','
      csv += JSON.parse(data[i]).Author + ','
      csv += JSON.parse(data[i]).Posted + ','
     // csv += JSON.parse(data[i]).Views + ','
      csv += JSON.parse(data[i]).CurrentDate + ','
      csv += JSON.parse(data[i]).ID + ','
      csv += JSON.parse(data[i]).URL + ','
    }
    let page = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Get YouTube Trending</title>
</head>
<style>
  body {
    color: white;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background: #05041e;
  }

  #container {
    display: flex;
  }


  /* Firefox */
  html {
    scrollbar-color: transparent lightblue;
    scrollbar-width: thin;
  }
  
  /* WebKit and Chromiums */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: lightblue;
    border-radius: 5px;
  }


  #content {
    animation: mymove 2s ease-in;
    padding-top: 14px;
    border-left: 1px solid white;
    width: 70%;
    height: 95vh;
    margin-top: 10px;
    overflow-y: scroll;
    padding-left: 35px;
  }

  #content h5 {
    padding-left: 30px;
    margin:10px;
  }

  #landing h1 {
    transition: 2s;
    font-size: 80px;
    margin-top: 50px;
  }

  #landing h1 {
    font-size: 80px;
    margin-top: 50px;
    animation: mymove 1.3s linear;
  }

@keyframes mymove {
  from {opacity: 0%;}
  to {opacity: 100%;}
}

  .bracket {
    color: rgb(145, 103, 190);
  }

  #landing {
    animation: mymove 1s ease-in;
    padding-left: 50px;
  }

  #subscribe {
    cursor: pointer;
    color: white;
    outline: none;
    border: 1px solid lightblue;
    border-radius: 50px;
    background: transparent;
    width:200px;
    height: 50px;
    transition: .3s;
  }

  #content h5 > span {
    color: lightblue;
    font-size: 13.5px;
  }

  #subscribe:hover {
    transition: .3s;
    background: lightblue;
    color: #05041e;
  }

  #download {
    cursor: pointer;
    position:absolute;
    margin-left: 35px;
    color: white;
    outline: none;
    border: 1px solid lightblue;
    border-radius: 50px;
    background: transparent;
    width:200px;
    height: 50px;
    transition: .3s;
  }


  #download:hover {
    transition: .3s;
    background: lightblue;
    color: #05041e;
  }

  @media only screen and (max-width: 900px){ 
    #landing {
      display: none;
    }

    #content {
      width: 100%;
    }

  }

</style>
<body>
<a id="downloadAnchor" style="display:none"></a>
  <div id="container">
    <div id="landing">

    <h1>
    <span style="
    border: 8px solid white;
    padding-left: 35px;
    padding-right: 25px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 50px;
    color: lightblue;
    border-radius: 25px;"><a style="all: unset; cursor: pointer; color: lightblue;"href="https://youtube.com/trending" target="_blank">▶️</a></span><br>
    <br>
    <a  target="_blank" href="https://youtube.com/trending" style="text-decoration: none; color: #fff">YouTube Trending <span style="color: lightblue;">API</span>.
  </h1>
  <p style="color: lightgrey; margin-bottom: 40px;"><u>https://</u> &nbsp;&nbsp; + &nbsp;&nbsp; <a  style="color: lightgrey" href="https://getyoutubetrending.netlify.app" target="_blank">getyoutubetrending.netlify.app/</a> &nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#fff">| &nbsp;  &nbsp; It's that </span> <span style="color:lightblue;" >free</span><span style="color: white">.</span></p>
      <button id="subscribe" onclick="warpToTrending()">Open</button>
      <button id="download" onclick="download()">Download</button>
    </div>
    <div id="content">
    `
  for (var i = 0; i < data.length; ++i){
    page += (
      '<p  class="bracket" style="text-align:left">{</p>' +
      `<div class="list">
      <h5><span>"Title"</span>: "${JSON.parse(data[i]).Title}"</h5>
      <h5><span>"Author"</span>: "${JSON.parse(data[i]).Author}"</h5>
      <h5><span>"ID"</span>: "${JSON.parse(data[i]).ID}"</h5>
      <h5><span>"Posted"</span>: "${JSON.parse(data[i]).Posted}"</h5>
    <!--  <h5><span>"Views"</span>: "${JSON.parse(data[i]).Views}"</h5> -->
      <h5><span>"CurrentDate"</span>: "${JSON.parse(data[i]).CurrentDate}"</h5>
      <h5><span>"URL"</span>: "${JSON.parse(data[i]).URL}"</h5>
      </div>`
      + '<p class="bracket" style="text-align:left">}</p>'
    )
  }

  page += ` 
  </div>
  </div>
  </body>
  </html>`

  page += `
  <script>
  async function download(){
    if (!window.confirm('Download as .CSV: youtube_trending ?')) return;
    let csv = ${JSON.stringify(`${csv}`)}
  var dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
  var anchor = document.getElementById('downloadAnchor');
  anchor.setAttribute("href",     dataStr);
  anchor.setAttribute("download", "youtube_trending.csv");
  anchor.click();
    }

function warpToTrending(){
  window.open("https://getyoutubetrending.netlify.app", "_blank");
}
  </script>
  `
  return page;
}
}