const userName = prompt("Name:");
document.querySelector("#name").innerHTML = userName;

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const clock = `${hours}:${minutes}:${seconds}`;
  document.querySelector("#clock").innerHTML = clock;
}

// Saati her saniye güncellemek için setInterval kullanıyoruz
setInterval(updateClock, 1000);

// Sayfa yüklendiğinde saat bilgisini hemen göstermek için
updateClock();
