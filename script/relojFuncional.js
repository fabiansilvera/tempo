let botonMas = document.querySelector('.mas');
let botonMenos = document.querySelector('.menos');
let contadorMas = 0;
let contadorMenos = 0;
let botones = document.querySelector('.temporizador__botones');

let ClickMas = document.querySelector('.contadorMas');
let ClickMenos = document.querySelector('.contadorMenos');

// Set the date we're counting down to
var countDownDate = new Date("Nov 1, 2022 16:00:00");

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
    botones.style.display = "none"
    document.getElementById("cuenta").style.display = "none"
    document.querySelector(".temporizador__titulo").innerHTML = `
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnKhKAIrpgZbxFmyZ3gsW-VLC8LafzJ53qovx5hTV3WfXAmQ/formrestricted" target="_blank"><h1 class="temporizador__titulo link">Proyecto Destiempo</h2></a>`;
  }
}, 1000);

botonMas.addEventListener('click', function() {
  sumarSegundos()
  contadorMas ++;
  ClickMas.innerHTML = contadorMas;
})
botonMenos.addEventListener('click', function() {
  restarSegundos()
  contadorMenos++;
  ClickMenos.innerHTML = contadorMenos;
})

// Horas
function sumarHora() {
  countDownDate.setHours(countDownDate.getHours() + 1);
}
function restarHora() {
  countDownDate.setHours(countDownDate.getHours() - 1);
}

// Minutos
function sumarMinutos() {
countDownDate.setMinutes(countDownDate.getMinutes() + 1);
}
function restarMinutos() {
countDownDate.setMinutes(countDownDate.getMinutes() - 1);
}

// Dias
function sumarDia() {
  countDownDate.setDate(countDownDate.getDate() + 1);
}
function restarDia() {
countDownDate.setDate(countDownDate.getDate() - 1);
}

// Segundos
function sumarSegundos() {
countDownDate.setSeconds(countDownDate.getSeconds() + 1);
}
function restarSegundos() {
countDownDate.setSeconds(countDownDate.getSeconds() - 1);
}
