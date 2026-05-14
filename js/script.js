
function irAContacto() {
  const seccion = document.getElementById('contacto');
  if (seccion) {
    seccion.scrollIntoView({ behavior: 'smooth' });
  }
}
const toggleBtn = document.querySelector('.menu-hamburguesa');
const navBar = document.querySelector('.navbar-collapse');

console.log("Botón encontrado:", toggleBtn);
console.log("Contenedor encontrado:", navBar);

 if (toggleBtn && navBar) {

    toggleBtn.addEventListener('click', (evento) => {
      evento.preventDefault(); // Evitamos el comportamiento por defecto del botón
      console.log("3. ¡Hiciste clic en el botón!");

      navBar.classList.toggle('show');

      console.log("4. Clase 'show' toggled en el navbar:", navBar.classList.contains('show') ? "Sí" : "No");
    });
  } else {
    console.error("No se encontraron el botón o el contenedor del navbar. Verifica los selectores.");
  }




flatpickr("#turno-fecha",{
    dateFormat: "Y-m-d",
      disable: [
        function(date) {
            return (date.getDay() === 0 || date.getDay() === 6);
            }
        ],
        minDate: "today", 

    });
flatpickr("#turno-hora", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    minTime: "09:00",
    maxTime: "18:00"
});
