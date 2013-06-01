updateCountdown = ->
  text = jQuery('#micropost_content').val()
  remaining = 140 - text.length
  jQuery('.countdown').text remaining + ' characters remaining'
  jQuery('.countdown').addClass 'alert alert-error' if remaining < 0
  jQuery('.countdown').removeClass 'alert alert-error' if remaining > 0

jQuery(document).ready ->
  jQuery('#micropost_content').change updateCountdown
  jQuery('#micropost_content').keyup updateCountdown
  return
  
