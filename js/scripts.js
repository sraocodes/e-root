const sidebarLinks = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('section');

sidebarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSectionId = link.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);

        sections.forEach(section => section.classList.remove('active'));
        targetSection.classList.add('active');
    });
});

const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSectionId = link.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);

    sections.forEach(section => section.classList.remove('active'));
    targetSection.classList.add('active');
  });
});