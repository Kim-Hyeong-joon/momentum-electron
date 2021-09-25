const clcok = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  clcok.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);
