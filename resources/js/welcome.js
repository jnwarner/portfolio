$('#container').animate({'opacity': 0}, 1000, () => {
  $(this).text('new text')
}).animate({'opacity': 1}, 1000)
