const response = document.querySelector('.wrapper-dropdown-menu');



$(function(){
    $('.toggle-botton').on('click',function(){
      $('.nav-toggle').toggleClass('is-active')
    })
    
    $('.main-nav li a').on('click',function(){
      $('.nav-toggle').toggleClass('is-active');
    })
  })