document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    const toggleIcon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', (e) => {
      e.preventDefault();
     
      mobileMenu.classList.toggle('active');

     
      if (mobileMenu.classList.contains('active')) {
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-xmark'); 
      } else {
        toggleIcon.classList.remove('fa-xmark');
        toggleIcon.classList.add('fa-bars');
      }
    });
  }
}); 