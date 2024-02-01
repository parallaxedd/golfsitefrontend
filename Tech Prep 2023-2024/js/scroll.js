var lastScrollTop;

navbar = document.getElementById('nav-container');

window.addEventListener('scroll', function() {
  
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  if(scrollTop > lastScrollTop) { 
    navbar.style.top = '-20vh';
  } else {
    navbar.style.top = '0';
  }
  
  lastScrollTop = scrollTop;
});