$(document).ready(function(){
  $(".box").on('click', function() {
    $(this).addClass(color);
    // $(this).next().addClass(color);
  });

  $(".box").on('dblclick', function() {
    $(this).removeClass(colors);
  });

  $('#reset').on('click', function() {
    $('.box').removeClass(colors);
  });

  var color = 'white';
  var colors = 'white green red blue yellow';

  $('#red').on('click', function() {
    color = 'red';
  });

  $('#blue').on('click', function(){
    color = 'blue';
  });

  $('#green').on('click', function(){
    color = 'green';
  });

  $('#yellow').on('click', function(){
    color = 'yellow';
  });

  $('#white').on('click', function(){
    color = 'white';
  });

  $('.box').on('mousedown', function() {
    var moving = true;
    $(".box").on('mousemove', function() {
      if (moving === true) {
        $(this).addClass(color);
      }
    });

    $(document).on('mouseup', function() {
      moving = false;
    });
  });

});
