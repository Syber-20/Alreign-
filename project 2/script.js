// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('.nav-links a');
//     const sections = document.querySelectorAll('.section');
  
//     navLinks.forEach(link => {
//       link.addEventListener('click', (e) => {
//         e.preventDefault();
  
//         // Remove active class from all sections and nav links
//         sections.forEach(section => section.classList.remove('active'));
//         navLinks.forEach(nav => nav.classList.remove('active'));
  
//         // Add active class to clicked nav and corresponding section
//         const targetId = e.target.id.replace('Nav', '');
//         document.getElementById(targetId).classList.add('active');
//       });
//     });
//   });