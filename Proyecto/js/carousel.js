let slideActual = 0

function mostrarSlide(n) {
  const slides = document.querySelectorAll(".carousel-slide")
  const dots = document.querySelectorAll(".dot")

  if (n >= slides.length) {
    slideActual = 0
  }
  if (n < 0) {
    slideActual = slides.length - 1
  }

  slides.forEach((slide) => {
    slide.classList.remove("activo")
  })

  dots.forEach((dot) => {
    dot.classList.remove("activo")
  })

  slides[slideActual].classList.add("activo")
  dots[slideActual].classList.add("activo")
}

function cambiarSlide(direccion) {
  slideActual += direccion
  mostrarSlide(slideActual)
}

function irASlide(n) {
  slideActual = n
  mostrarSlide(slideActual)
}

mostrarSlide(slideActual)
