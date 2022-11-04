const images = ["house.png", "sky.png", "snow.png"];

const chosenimage = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");

bgImg.src=`img/${chosenimage}`;
//html body에 bgimg 추가
document.body.appendChild(bgImg);