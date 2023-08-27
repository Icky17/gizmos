// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get references to elements you want to modify
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');
  
    // Check user's preference from previous sessions (if available)
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedPreference = localStorage.getItem('darkMode');
  
    // Set initial mode based on user preference or stored setting
    if (userPrefersDark || storedPreference === 'dark') {
      body.classList.add('dark-mode');
    }
  
    // Toggle mode and store user preference
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('darkMode', currentMode);
    });
  });
  