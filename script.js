/**
 * Simple Portfolio JavaScript
 * Basic functionality for the portfolio website
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile menu toggle with touch optimization
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (hamburger) {
      hamburger.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        
        // Toggle hamburger icon
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (mobileNav && mobileNav.classList.contains('active') && 
          !mobileNav.contains(event.target) && 
          !hamburger.contains(event.target)) {
        mobileNav.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
    
    // Handle touch events for mobile devices
    document.addEventListener('touchstart', function() {}, {passive: true});
    
    // Fix for 100vh issue on mobile browsers (viewport height problem)
    const appHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    // Set initial height and update on resize
    appHeight();
    window.addEventListener('resize', appHeight);
    
    // Fix for horizontal scroll issue on mobile
    const checkForHorizontalOverflow = () => {
      const bodyWidth = document.body.clientWidth;
      const windowWidth = window.innerWidth;
      
      if (bodyWidth > windowWidth) {
        console.log('Horizontal overflow detected');
        // Find elements that may be causing overflow
        const allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
          if (element.offsetWidth > windowWidth) {
            element.style.maxWidth = '100%';
            element.style.overflowX = 'hidden';
            console.log('Fixed element:', element);
          }
        });
      }
    };
    
    // Run on load and resize
    window.addEventListener('load', checkForHorizontalOverflow);
    window.addEventListener('resize', checkForHorizontalOverflow);
    
    // Initialize smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Calculate offset for fixed header
          const headerHeight = document.querySelector('nav').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          
          window.scrollTo({
            top: targetPosition - headerHeight,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (mobileNav && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      });
    });
    
    // Handle image loading errors
    const projectImages = document.querySelectorAll('.project-img img');
    
    projectImages.forEach(img => {
      img.addEventListener('error', function() {
        // Replace with placeholder if image fails to load
        this.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(this.alt || 'Project Image');
      });
      
      // Add loading="lazy" for better performance
      img.setAttribute('loading', 'lazy');
    });
    
    // Resume link tracking
    const resumeLinks = document.querySelectorAll('.resume-link');
    
    resumeLinks.forEach(link => {
      link.addEventListener('click', function() {
        console.log('Resume downloaded');
        // You could add analytics tracking here if needed
      });
    });
  });
  
  /**
   * Show error message for form input
   */
  function showError(input, message) {
    const parentElement = input.parentElement;
    const errorElement = document.createElement('p');
    
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#EF4444';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    
    input.style.borderColor = '#EF4444';
    parentElement.appendChild(errorElement);
  }
  
  /**
   * Validate email format
   */
  function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }