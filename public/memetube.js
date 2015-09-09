$(document).ready(function() {
  console.log('ready')

  getVideos();

  // hide videos and show form when 'add video'is clicked
  $('#add-video').on('click', showNewVideoForm)

  // add new video once form is filled
  $('#new-video-form').on('submit', addVideo);

  // delete video event listener with event delegation because delete button is not displayed on the page from the start
  $('.page-wrapper').on('click', '.delete-button', removeVideo)


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

  $('#new-video-form').hide()
  $('#video-box').show()
  console.log(video.url)

  $('<h2>' + video.title + '</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/' + video.url + '"frameborder="0" allowfullscreen></iframe><p>Genre:' + video.genre + '</p><p>' + video.description + '</p><p><a href="https://youtu.be/' + video.url + '">Watch on YouTube</a></p><button class="delete-button" id="' + video.id + '">Delete this video</button>').prependTo("#video-box")
}

function removeVideo() {
  console.log ('remove video')

  console.log($(this).attr('id'))
  request('DELETE', 'items')
}
