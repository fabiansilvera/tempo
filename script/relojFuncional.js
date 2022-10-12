let botonMas = document.querySelector('.mas');
let botonMenos = document.querySelector('.menos');
// Set the date we're counting down to
var countDownDate = new Date("Oct 13, 2022 15:37:25");

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var countDown = countDownDate.getTime();
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDown - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("cuenta").innerHTML = 
  `<div class="cajas"> 
    <p class="cajaNumero">${days} </p>
    <p class="tiempo">dias </p>
  </div>

  <div class="cajas">
    <p class="cajaNumero">${hours} </p>
    <p class="tiempo">horas </p>
  </div> 

  <div class="cajas">
    <p class="cajaNumero">${minutes} </p>
    <p class="tiempo">minutos </p>
  </div>

  <div class="cajas">
    <p class="cajaNumero">${seconds} </p>
    <p class="tiempo">segundos </p>
  </div>`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cuenta").innerHTML = "Tiempo terminado";
  }
}, 1000);

botonMas.onclick = sumarDia;
botonMenos.onclick = restarDia;
function sumarDia() {
        countDownDate.setDate(countDownDate.getDate() + 1);
}
function restarDia() {
  countDownDate.setDate(countDownDate.getDate() - 1);
}