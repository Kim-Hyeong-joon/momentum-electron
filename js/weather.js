function onGeoOk(position) {
  console.log(position);
}

function onGeoError() {
  alert("can't find you. No weather for you.");
}

console.log(navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError));
