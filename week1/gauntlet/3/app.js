'use strict';

$(document).ready(function() {
  function validUrl(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  if(!pattern.test(str)) {
    return false;
  } else {
    return true;
  }
  }

  var queue = ['#gallery', '#gallery2'];
  $('#search-button').on('click', function(){
    var imageURL = $('#search-input').val();
    if(validUrl(imageURL)){
    var $img = $('<img>').attr('src', imageURL);
    $img.on('error', function()
    {
      alert('nimoa');
    });
    $img.load(function(){
      var currentGallery= queue.shift();
      $(currentGallery).append($img);
      //$(currentGallery).append('<br />');
      queue.push(currentGallery);
      $img.on('click', function(){
        $img.remove();
      });
    });
    } else {
      alert('Invalid URL.');
    }
  });
});
