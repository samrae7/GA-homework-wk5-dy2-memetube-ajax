$(document).ready(function() {
  console.log('ready')

  getVideos();

  // hide videos and show form when 'add video'is clicked
  $('#add-video').on('click', showNewVideoForm)

  // add new video once form is filled
  $('#new-video-form').on('submit', addVideo);


})

function addVideo(e) {
  e.preventDefault();
  console.log('boo');
  data = {
    title: $('#title').val(),
    description: $('#description').val(),
    url: $('#url').val(),
    genre: $('#genre').val()
  };
  $.post('/videos', data, function(response) {
    console.log(response);
    appendNewVideo(response);
    showVideo(response);
  })

}

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

function showVideo(video) {

  console.log('banana')
  console.log(video)

}


