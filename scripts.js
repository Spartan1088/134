document.addEventListener("DOMContentLoaded", () => {
  // Función para manejar el despliegue de los cuadros de carreras
  const carreraTitulos = document.querySelectorAll(".carrera-titulo");

  carreraTitulos.forEach((titulo) => {
    titulo.addEventListener("click", () => {
      const contenido = titulo.nextElementSibling;
      
      document.querySelectorAll(".carrera-contenido").forEach((item) => {
        if (item !== contenido) {
          item.style.maxHeight = null;
          item.classList.remove("activo");
        }
      });

      contenido.classList.toggle("activo");
      contenido.style.maxHeight = contenido.classList.contains("activo") ? contenido.scrollHeight + "px" : null;
    });
  });

  // Función para el carrusel de noticias
  const carrusel = document.querySelector(".carrusel");
  const items = document.querySelectorAll(".carrusel-item");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  
  if (carrusel && items.length && prevButton && nextButton) {
    let currentIndex = 0;
    const itemsPerPage = 2;

    const updateCarrusel = () => {
      const offset = -currentIndex * (100 / itemsPerPage);
      carrusel.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - itemsPerPage + items.length) % items.length;
      updateCarrusel();
    });

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + itemsPerPage) % items.length;
      updateCarrusel();
    });

    updateCarrusel();
  }


  // Función para desplegar información adicional en Clubes y Monumentos
  document.querySelectorAll(".btn-leer-mas").forEach((button) => {
    button.addEventListener("click", () => {
      const infoAdicional = button.nextElementSibling;
      infoAdicional.style.maxHeight = infoAdicional.style.maxHeight ? null : infoAdicional.scrollHeight + "px";
    });
  });

  // Función para animaciones en scroll
  const animatedElements = document.querySelectorAll(".animated");

  const handleScroll = () => {
    animatedElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Función para enviar formulario de contacto
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Gracias por contactarnos. Pronto te responderemos.");
      contactForm.reset();
    });
  }

  // Desplazamiento suave en enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetElement = document.querySelector(link.getAttribute("href"));
      targetElement?.scrollIntoView({ behavior: "smooth" });
    });
  });
});
