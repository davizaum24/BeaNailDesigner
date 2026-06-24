const sectionsAnimadas = document.querySelectorAll('.sectionAnimada');

const checarVisibilidadeSections = () => {
  sectionsAnimadas.forEach(section => {
    const position = section.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
      section.classList.add('visivel');
    } 
  });
};

window.addEventListener('scroll', checarVisibilidadeSections);
window.addEventListener('load', checarVisibilidadeSections);