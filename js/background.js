const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenimage = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");

bgImg.src=`img/${chosenimage}`;
//html body에 bgimg 추가
document.body.appendChild(bgImg);