const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn img');
const dropDownOpen = document.querySelector('.wrapper-dropdown-menu');


toggleBtn.onclick = function(){
    dropDownOpen.classList.toggle('open');
    const isOpen = dropDownOpen.classList.contains('open');
    toggleBtnIcon.classList = isOpen
    ? 'openIcon'
    :'closeIcon'
    document.querySelector('.openIcon').style.display = 'none'
    document.querySelector('.closeIcon').style.display = 'block'
}
document.querySelector('.closeIcon').onclick = function(){
    
    document.querySelector('.closeIcon').style.display = 'none'
    document.querySelector('.openIcon').style.display = 'block'
}