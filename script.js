document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      alert('Lien cliqué !');
    });
  });