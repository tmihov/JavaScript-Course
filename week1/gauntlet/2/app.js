'use strict';
$(document).ready(function() {
  var allParagraphs = [];
      $('p').each(function(index, elem){
      allParagraphs.push($(elem).attr('id'));
    });
      console.log(allParagraphs);
  $('#buttonHighlight').on('click', function(){
    /*if($('#first').hasClass('highlight')){
      $('#first').removeClass('highlight');
      $('#second').addClass('highlight');
    } else if ($('#second').hasClass('highlight')) {
      $('#second').removeClass('highlight');
      $('#third').addClass('highlight');
    } else {
      $('#third').removeClass('highlight');
      $('#first').addClass('highlight');
    }*/

    var queue = allParagraphs;
    $('.highlight').removeClass('highlight');
    var toHighlight = queue.shift();
    $('#' + toHighlight).addClass('highlight');
    queue.push(toHighlight);
  });
});
