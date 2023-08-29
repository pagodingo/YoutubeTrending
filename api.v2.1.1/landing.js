module.exports = {
  landing: function (data) {
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

  #content {
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
    font-size: 80px;
    margin-top: 50px;
  }

  .bracket {
    color: rgb(145, 103, 190);
  }

  #landing {
    padding-left: 50px;
  }

  #subscribe {
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
        border-radius: 25px;">▶️</span><br>
        <br>
        YouTube Trending <span style="color: lightblue;">API</span>.
      </h1>
      <p style="color: grey; margin-bottom: 40px;"><a style="color: grey" href="getyoutubetrending.netlify.app" target="_blank">getyoutubetrending.netlify.app</a> /  It's free.</p>
      <button id="subscribe"><a style="all: unset" href="getyoutubetrending.netlify.app">Open</a></button>
      <button id="download">Download</button>
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
      <h5><span>"Views"</span>: "${JSON.parse(data[i]).Views}"</h5>
      <h5><span>"CurrentDate"</span>: "${JSON.parse(data[i]).CurrentDate}"</h5>
      <h5><span>"ID"</span>: "${JSON.parse(data[i]).ID}"</h5>  
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
  function downloadBase64File(contentBase64, fileName) {
    const linkSource = ` + `data:application/pdf;base64,${contentBase64}` +
    `const downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);

    downloadLink.href = linkSource;
    downloadLink.target = '_self';
    downloadLink.download = fileName;
    downloadLink.click(); 
}

function warpToTrending(){
  window.location.href = "https://getyoutubetrending.netlify.app
}
  </script>
  `
  return page;
}
}