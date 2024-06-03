document.addEventListener('DOMContentLoaded', () => {
    const sections = {
      'Informasi-Obat': document.getElementById('Informasi-Obat')
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
    hideAllSectionsExcept('Informasi-Obat'); // Only show Informasi-Obat section initially
  });
  