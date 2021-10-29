const images = [
  "0.JPG",
  "1.JPG",
  "2.JPG",
  "3.JPG",
  "4.JPG",
  "5.JPG",
  "6.JPG",
  "7.JPG",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

// const div = document.createElement("div");

bgImage.src = `img/${chosenImage}`;

//div.classList.add("background-img-box");

bgImage.classList.add("background-img");

//div.appendChild(bgImage);

document.body.appendChild(bgImage);
