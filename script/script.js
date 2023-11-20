const response = document.querySelector('.wrapper-dropdown-menu');



$(function(){
    $('.toggle-botton').on('click',function(){
      $('.nav-toggle').toggleClass('is-active')
    })
    
    $('.main-nav li a').on('click',function(){
      $('.nav-toggle').toggleClass('is-active');
    })
  })

  const btn = document.querySelectorAll('.onclick');
  let prevClickedBtn = null;
  
  for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
      if (prevClickedBtn !== null) {
        prevClickedBtn.style.background = ''; 
      }
  
      this.style.background = 'linear-gradient(180deg, #FFB763 10.52%, #FF7233 78.75%)';
      prevClickedBtn = this; 
    };
  }



 
