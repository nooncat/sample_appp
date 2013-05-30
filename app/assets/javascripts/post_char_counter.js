function updateCountdown() {
  // 140 character max
  var left = 140 - jQuery('.micropost_text_area').val().length;
  if(left == 1) {
    var charactersLeft = ' character left.'
  }
  else if(left < 0){
    var charactersLeft = ' characters too meny.'
  }
  else{
    var charactersLeft = ' characters left.'
  }
  jQuery('.countdown').text(Math.abs(left) + charactersLeft);
}

jQuery(document).ready(function($) {
  updateCountdown();
  $('.micropost_text_area').change(updateCountdown);
  $('.micropost_text_area').keyup(updateCountdown);
}

