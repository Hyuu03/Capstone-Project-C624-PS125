document.addEventListener('DOMContentLoaded', () => {
  const sections = {
    MainContent: document.getElementById('mainContent')
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
  hideAllSectionsExcept('MainContent'); // Only show MainContent section initially
});


// Pagination logic
document.addEventListener('DOMContentLoaded', () => {
  const videosPerPage = 3;
  let currentPage = 1;

  const videoItems = document.querySelectorAll('.video-item');
  const totalPages = Math.ceil(videoItems.length / videosPerPage);

  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const currentPageIndicator = document.getElementById('current');

  const updatePagination = () => {
    // Hide all videos
    videoItems.forEach(item => item.classList.add('hidden'));

    // Show videos for the current page
    const start = (currentPage - 1) * videosPerPage;
    const end = start + videosPerPage;
    for (let i = start; i < end && i < videoItems.length; i++) {
      videoItems[i].classList.remove('hidden');
    }

    // Update pagination buttons state
    currentPageIndicator.textContent = currentPage;
    prevButton.style.display = currentPage === 1 ? 'none' : 'inline';
    nextButton.style.display = currentPage === totalPages ? 'none' : 'inline';
  };

  if (prevButton && nextButton && currentPageIndicator) {
    prevButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
      }
    });

    nextButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
      }
    });

    // Initial call to setup the pagination
    updatePagination();
  }
});
