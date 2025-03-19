document.addEventListener('DOMContentLoaded', function() {
  // Add hamburger menu button to the header (next to contact info)
  const contactInfo = document.querySelector('.contact-info');
  const hamburgerBtn = document.createElement('button');
  hamburgerBtn.className = 'hamburger-menu';
  hamburgerBtn.innerHTML = '☰';
  contactInfo.appendChild(hamburgerBtn);
  
  // Add functionality to toggle the menu
  hamburgerBtn.addEventListener('click', function() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('show');
  });
});