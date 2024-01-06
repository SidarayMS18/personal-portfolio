$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
   
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });

  
  document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('.contact form');

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        if (validateForm()) {
            alert('Form submitted successfully!');
        } else {
            alert('Form validation failed. Please check your inputs.');
        }

    });

    function validateForm() {

        let isValid = true;

        const formInputs = form.querySelectorAll('.inputBox input, .inputBox textarea');

        formInputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;

                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        
        return isValid;
    }
});