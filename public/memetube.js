$(document).ready(function() {
  console.log('ready')

  getVideos();

  // hide videos and show form when 'add video'is clicked
  $('#add-video').on('click', showNewVideoForm)


})

function getVideos() {
  request('GET','/videos', null).done(function(response){
    console.log(response);

    $.each(response, function(index,video){
      // debugger;
      appendNewVideo(video);
    })
  })
}


function request(method, url, data){
  return $.ajax({
    method: method,
    url: url,
    dataType: 'json',
    data: data
  })
}

function appendNewVideo(video) {
  $('<div class ="thumbnail-holder"><a href="/videos/' + video.id + '"><img src="http://img.youtube.com/vi/' + video.url + '/mqdefault.jpg" alt="' + video.title + '"></a><p><a href="/videos/' + video.id + '">' + video.title + '</a></p></div>').prependTo("#video-pane");

  console.log('blah')

}

function showNewVideoForm() {
  $('#video-pane').hide();
  $('#new-video-form').show();
}  
