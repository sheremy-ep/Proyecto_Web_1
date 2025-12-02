const opcionesPorCategoria = {
  medicamentos: [
    { value: "analgesicos", text: "Analgésicos" },
    { value: "antibioticos", text: "Antibióticos" },
    { value: "antiinflamatorios", text: "Antiinflamatorios" },
  ],
  naturales: [
    { value: "hierbas", text: "Hierbas Medicinales" },
    { value: "aceites", text: "Aceites Esenciales" },
    { value: "tinturas", text: "Tinturas Naturales" },
  ],
  higiene: [
    { value: "jabon", text: "Jabones" },
    { value: "shampoo", text: "Shampoos" },
    { value: "dental", text: "Higiene Dental" },
  ],
}

const infoHorarios = {
  lunes: {
    titulo: "Lunes a Viernes",
    horario: "8:00 AM - 8:00 PM",
    detalles: "Atención continua con servicio de farmacéutico",
  },
  sabado: {
    titulo: "Sábado",
    horario: "9:00 AM - 6:00 PM",
    detalles: "Servicio completo de farmacia",
  },
  domingo: {
    titulo: "Domingo",
    horario: "10:00 AM - 2:00 PM",
    detalles: "Servicio de urgencias farmacéuticas",
  },
  feriado: {
    titulo: "Días Feriados",
    horario: "10:00 AM - 2:00 PM",
    detalles: "Atención limitada a medicamentos esenciales",
  },
}

document.addEventListener("DOMContentLoaded", () => {
  const comboCategoria = document.getElementById("combo-categoria")
  const comboTipo = document.getElementById("combo-tipo")
  const comboInteractivo = document.getElementById("combo-interactivo")
  const infoHorario = document.getElementById("info-horario")

  comboCategoria.addEventListener("change", function () {
    const categoriaSeleccionada = this.value

    comboTipo.innerHTML = '<option value="">Selecciona un tipo</option>'

    if (categoriaSeleccionada && opcionesPorCategoria[categoriaSeleccionada]) {
      comboTipo.disabled = false

      opcionesPorCategoria[categoriaSeleccionada].forEach((opcion) => {
        const option = document.createElement("option")
        option.value = opcion.value
        option.textContent = opcion.text
        comboTipo.appendChild(option)
      })
    } else {
      comboTipo.disabled = true
      comboTipo.innerHTML = '<option value="">Primero selecciona una categoría</option>'
    }
  })

  comboInteractivo.addEventListener("change", function () {
    const diaSeleccionado = this.value

    if (diaSeleccionado && infoHorarios[diaSeleccionado]) {
      const info = infoHorarios[diaSeleccionado]
      infoHorario.innerHTML =
        "<strong>" + info.titulo + "</strong><br>" + "Horario: " + info.horario + "<br>" + info.detalles
      infoHorario.classList.add("activo")
    } else {
      infoHorario.classList.remove("activo")
    }
  })
})
