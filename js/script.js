$(document).ready(function () {
  console.log('jquery dziala');

  const buttonUp = $('#button-up');
  const buttonDown = $('#button-down');
  console.log(buttonDown);


  buttonUp.click(function () {
    $('.paragraph-wrapper').prepend($('.paragraph').last());
  });

  buttonDown.click(function () {
    $('.paragraph-wrapper').append($('.paragraph').first());
  });
});