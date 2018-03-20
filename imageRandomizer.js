let imgOne = document.querySelector('.imgOne');
let imgTwo = document.querySelector('.imgTwo');
let imgThree = document.querySelector('.imgThree');
let imgFour = document.querySelector('.imgFour');

const imgOneBtn = document.querySelector('.imgOneBtn');
const imgTwoBtn = document.querySelector('.imgTwoBtn');
const imgThreeBtn = document.querySelector('.imgThreeBtn');
const imgFourBtn = document.querySelector('.imgFourBtn');

function getRandomImage(slot) {
  slot.src = '';
  fetch(`https://source.unsplash.com/random?sig=${Math.random()*1000}`)
  .then(function(image) {
    if (!image.ok){
      return new Error(image); 
    } 
    return image.blob(); 
  })
  .then(function(photoBlob) {
    let imgURL = URL.createObjectURL(photoBlob);
    slot.src = imgURL;
  })
  .catch(function(err) {
    console.log(err);
  })
}

getRandomImage(imgOne);
getRandomImage(imgTwo);
getRandomImage(imgThree);
getRandomImage(imgFour);

imgOneBtn.addEventListener('click', buttonClickOne);
imgTwoBtn.addEventListener('click', buttonClickTwo);
imgThreeBtn.addEventListener('click', buttonClickThree);
imgFourBtn.addEventListener('click', buttonClickFour);

function buttonClickOne(e) { getRandomImage(imgOne) };
function buttonClickTwo(e) { getRandomImage(imgTwo) };
function buttonClickThree(e) { getRandomImage(imgThree) };
function buttonClickFour(e) { getRandomImage(imgFour) };