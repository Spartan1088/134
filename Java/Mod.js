function redireccionar(url) {
  window.location.href = url;
}

function redes(url) {
  window.open(url, '_blank');
}
function toggleSubmenu(event) {
    event.preventDefault(); 
    const parentLi = event.currentTarget;
    parentLi.classList.toggle('active'); 
  }

// clubes
document.addEventListener('DOMContentLoaded', () => {
  // Base de datos de clubes
  const baseDeDatos =  [
      {
          id: "1",
          name: "Atletismo",
          image: "IMG/atletismo.jpg",
          description: "Desarrolla tu resistencia y velocidad mientras compites en diferentes disciplinas. ¡La pista te espera!"
      },
      {
          id: "2",
          name: "Soccer Varonil",
          image: "IMG/futbolb.jpg",
          description: "Únete a nuestro equipo de futbol varonil y demuestra tu habilidad en la cancha. ¡El trabajo en equipo es la clave!"
      },
      {
          id: "3",
          name: "Soccer Femenil",
          image: "IMG/futfemenil.jpg",
          description: "Forma parte de un equipo dinámico y apasionado. ¡Compite y diviértete al máximo!"
      },
      {
          id: "4",
          name: "Basquetbol Varonil",
          image: "IMG/basquyetbolb.jpg",
          description: "Mejora tus habilidades en el baloncesto y vive la emoción de cada partido. ¡Los aros te esperan!"
      },
      {
          id: "5",
          name: "Basquetbol Femenil",
          image: "IMG/basquetf.jpg",
          description: "Únete a nuestro equipo de baloncesto femenil y muestra tus habilidades en la cancha."
      },
      {
          id: "6",
          name: "Voleibol Varonil",
          image: "IMG/voliB.jpg",
          description: "Únete a la red y trabaja en tus habilidades para saltar, servir y jugar en equipo."
      },
      {
          id: "7",
          name: "Voleibol Femenil",
          image: "IMG/VoleibolFemenil.jpg",
          description: "Participa en un equipo lleno de energía y pasión por el volibol. ¡Haz nuevas amigas mientras compites!"
      },
      {
          id: "8",
          name: "Banda de Guerra",
          image: "IMG/banda de guerra.jpg",
          description: "Explora el mundo de la música y la disciplina con nuestra Banda de Guerra. ¡Sé parte del ritmo!"
      },
      {
          id: "9",
          name: "Ajedrez",
          image: "IMG/ajedres.jpg",
          description: "Desafía tu mente y mejora tus habilidades estratégicas mientras compites en este noble juego."
      },
      {
          id: "10",
          name: "Baile Moderno",
          image: "IMG/baile moderno.jpg",
          description: "Exprésate a través de la danza y descubre nuevas coreografías que te harán moverte al ritmo de la música."
      },
      {
          id: "11",
          name: "Caminata Recreativa",
          image: "IMG/caminata recreativa.jpg",
          description: "Disfruta de la naturaleza mientras caminas y conoces nuevos amigos en nuestra caminata recreativa."
      },
      {
          id: "12",
          name: "Francés",
          image: "IMG/frances.jpg",
          description: "Aprende un nuevo idioma y explora la cultura francesa a través de actividades interactivas."
      },
      {
          id: "13",
          name: "Pintura",
          image: "IMG/arte.jpg",
          description: "Exprésate a través de la pintura y desarrolla tu creatividad en un ambiente inspirador."
      },
      {
          id: "14",
          name: "Rondalla y Canto",
          image: "IMG/rondalla y canto.jpg",
          description: "Disfruta de la música mientras cantas y tocas instrumentos en nuestra rondalla."
      },
      {
          id: "16",
          name: "Cocina",
          image: "IMG/cocina.jpg",
          description: "Aprende técnicas culinarias y sorprende a todos con tus deliciosas creaciones en la cocina."
      },
      {
          id: "17",
          name: "Danza",
          image: "IMG/danza.jpg",
          description: "Aprende diversos estilos de danza y disfruta del arte del movimiento."
      },
      {
          id: "18",
          name: "Ejercitación Corporal",
          image: "IMG/ejercitacion corporal.jpg",
          description: "Mejora tu salud física y bienestar a través de actividades de ejercitación corporal."
      },
      {
          id: "19",
          name: "Teatro",
          image: "IMG/tetro.jpg",
          description: "Explora el mundo del teatro y mejora tus habilidades de actuación y expresión."
      },
      {
          id: "20",
          name: "Manejo de Especies",
          image: "IMG/manejop de especies.jpg",
          description: "Conoce más sobre la biodiversidad y el cuidado del medio ambiente mientras aprendes sobre diferentes especies."
      },
      {
          id: "21",
          name: "Robótica",
          image: "IMG/robotica.jpg",
          description: "Conviértete en un innovador mientras aprendes sobre tecnología y robótica en nuestro club especializado."
      },
      {
          id: "22",
          name: "Bastoneras",
          image: "IMG/bastoneras.jpg",
          description: "Desarrolla tu coordinación y habilidades rítmicas mientras participas en nuestra agrupación de bastoneras."
      }
  ];
  
  const DOMclubsContainer = document.getElementById('clubs-container');


  const renderizarClubes = (clubes) => {
      DOMclubsContainer.innerHTML = ''; 
      clubes.forEach((club) => {
          const clubDiv = document.createElement('div');
          clubDiv.classList.add('f1'); 
          clubDiv.innerHTML = `
              <img src="${club.image}" alt="${club.name}">
              <h2>${club.name}</h2>
              <p>${club.description}</p>
          `;
          DOMclubsContainer.appendChild(clubDiv);
      });
  };

  // Función para buscar clubes
  const buscarClubes = () => {
      const inputBusqueda = document.getElementById('search-input').value.toLowerCase();
      const clubesFiltrados = baseDeDatos.filter(club =>
          club.name.toLowerCase().includes(inputBusqueda) || 
          club.description.toLowerCase().includes(inputBusqueda) 
      );
      renderizarClubes(clubesFiltrados.length > 0 ? clubesFiltrados : baseDeDatos);
  };

  renderizarClubes(baseDeDatos);

  const inputBusqueda = document.getElementById('search-input');
  inputBusqueda.addEventListener('input', buscarClubes);
});
