document.addEventListener('DOMContentLoaded', () => {
    const sections = {
      Beranda: document.getElementById('Beranda')
    };
  
    const showSection = (sectionId) => {
      const section = sections[sectionId];
      if (section) {
        section.style.display = 'block';
      }
    };
  
    const hideAllSectionsExcept = (exceptSection) => {
      Object.entries(sections).forEach(([key, section]) => {
        if (key !== exceptSection && section) {
          section.style.display = 'none';
        }
      });
    };
  
    // Initialize the default view
    hideAllSectionsExcept('Beranda'); // Only show Beranda section initially
  });
  