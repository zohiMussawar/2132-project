    // dice button 
    const rollButton = document.getElementById(`RollDice`);
    const winner = document.getElementById(`h1`);
    // Player One  
    let PlayerValue1 = document.getElementById('player1');
    let playerCurrentValue1 = document.getElementById('playerCurrentValue1');
    let playerCurrentValue2 = document.getElementById('playerCurrentValue2');
    const firstRandomNum = Math.floor(Math.random()*6)+1
    const firstDiceImage = `images/Dice-images/dice-${firstRandomNum}.png`;
  const img= document.getElementById(`1`);
  img.src=firstDiceImage;
    // document.querySelectorAll(`img`)[0].setAttribute('src',firstDiceImage);
    const SecondRandomNum = Math.floor(Math.random()*6)+1
    const SecondDiceImage = `images/Dice-images/dice-${SecondRandomNum}.png`;
    const img2= document.getElementById(`2`);
  img2.src=SecondDiceImage;
    // document.querySelectorAll(`img`)[1].setAttribute('src',SecondDiceImage);
    // It saved the total value of both players 
    let playerStoredValue1=0;
    let playerStoredValue2=0;
    let counter=0;
    // Player Two
    let PlayerValue2 = document.getElementById('player2');
    const ThirdRandomNum = Math.floor(Math.random()*6)+1
    const ThirdDiceImage = `images/Dice-images/dice-${ThirdRandomNum}.png`;
    const img3= document.getElementById(`3`);
    img3.src=ThirdDiceImage;
    // document.querySelectorAll(`img`)[2].setAttribute('src',ThirdDiceImage);
    const ForthRandomNum = Math.floor(Math.random()*6)+1
    const ForthDiceImage = `images/Dice-images/dice-${ForthRandomNum}.png`;
    const img4= document.getElementById(`4`);
    img4.src=ForthDiceImage;
    // document.querySelectorAll(`img`)[3].setAttribute('src',ForthDiceImage);
    const img5=document.getElementById('cong');
    
    // fivimage= setAttribute('src',fivimage);
// Roll Button 
rollButton.addEventListener('click',function(){
    counter++;
    // Select radium Dice 
    // It Start working on player 1
    const firstRandomNum = Math.floor(Math.random()*6)+1;
    const firstDiceImage = `images/Dice-images/dice-${firstRandomNum}.png`;
    const img= document.getElementById(`1`);
    img.src=firstDiceImage;
    // const firstDiceImage = `images/Dice-images/dice-${firstRandomNum}.png`;
    // document.querySelectorAll(`img`)[0].setAttribute('src',firstDiceImage);
    const SecondRandomNum = Math.floor(Math.random()*6)+1
    const SecondDiceImage = `images/Dice-images/dice-${SecondRandomNum}.png`;
    const img2= document.getElementById(`2`);
  img2.src=SecondDiceImage;
    // condition to give score to player 1
if(firstRandomNum==1 || SecondRandomNum==1){
         playerStoredValue1 +=0; 
         playerCurrentValue1.innerHTML=0;    
}
else if(firstRandomNum==SecondRandomNum){
  playerCurrentValue1.innerHTML=(firstRandomNum+SecondRandomNum)*2;  
    playerStoredValue1 += (firstRandomNum+SecondRandomNum)*2; 
    
}
else if(firstRandomNum!=SecondRandomNum){
    playerStoredValue1+= (firstRandomNum+SecondRandomNum); 
    playerCurrentValue1.innerHTML = (firstRandomNum+SecondRandomNum); 
}
// Total value of player1
PlayerValue1.innerHTML=playerStoredValue1;
    // Select radium Dice 
    // It Start working on player 2
      // Player Two
      const ThirdRandomNum = Math.floor(Math.random()*6)+1
      const ThirdDiceImage = `images/Dice-images/dice-${ThirdRandomNum}.png`;
      const img3= document.getElementById(`3`);
      img3.src=ThirdDiceImage;
      const ForthDiceImage = `images/Dice-images/dice-${ForthRandomNum}.png`;
      const img4= document.getElementById(`4`);
      img4.src=ForthDiceImage;
    // condition to give score to player 1
if(ThirdRandomNum==1 || ForthRandomNum==1){
         playerStoredValue2 +=0; 
         playerCurrentValue2.innerHTML=0;   
}
else if(ThirdRandomNum==ForthRandomNum){
    playerStoredValue2 += (ThirdRandomNum+ForthRandomNum)*2; 
    playerCurrentValue2.innerHTML = (ThirdRandomNum+ForthRandomNum)*2; 
}
else if(ThirdRandomNum!=ForthRandomNum){
    playerStoredValue2 += (ThirdRandomNum+ForthRandomNum); 
    playerCurrentValue2.innerHTML =  (ThirdRandomNum+ForthRandomNum); 
}
// Total value of player1
PlayerValue2.innerHTML=playerStoredValue2;
if(counter==3){

  setTimeout( function(){
    //but dont show pop up if user has already started the animation
    
        //request a frame of animation
        popupAnimationHandler = requestAnimationFrame( fadeIn );
   
} , delay);

    // alert("Game Over");
    // needToShowPopup = true;
    rollButton.disabled = true;
}
if(playerStoredValue1>playerStoredValue2){
 
  img5.src= 'images/happy.gif';
 winner.innerHTML='Game Over';
 $('#ShowPlayerMess').text('Congratulation You Won the Game!!!');
}
else{
  
  img5.src= 'images/sad.gif';
    winner.innerHTML=`Game Over`;
    $('#ShowPlayerMess').text(`Oh NO You loss the Game!!!`);
}
});
// Start a new game 
document.querySelector('#NewGame').addEventListener('click', function(){
    window.location.reload();
    // return false;
  });


  //get the pop-up element
const popUp = document.getElementById("pop-up");

//three second delay before popup
const delay = 1000; 

let popupAnimationHandler;
/*
track the opacity from 0-1
transparent - opaque
*/
let opacityValue = 0;

// Click "Congratulations!" to play animation

function fadeIn(){
    opacityValue = opacityValue + .05;
    if(opacityValue <= 1){
        popUp.style.opacity = opacityValue;
        requestAnimationFrame( fadeIn );
    }
    else{
        popUp.style.opacity = 1;
    }    
}

/*
allow user to close and hide the popup after they have seen it
*/
const closePopup = document.getElementById("btn-close");
closePopup.addEventListener("click", function(){
    popUp.style.opacity = "0";
});
// jQuery Accordion - Version 01
// Navigation Bar to show the Rules of the game stuff
const $tabs = $('.tab');
const $content = $('.content1');

// Hide the content elements on page load
$content.hide();

// Accordion
$tabs.hover(function(){
    //if they click on a tab,
    //determine which one with $(this)
    //and slideToggle() the element that comes after this tab
    if($(this).next().is(":visible")){
       $(this).next().slideUp(500);
    }else{
        $content.slideUp();
        $(this).next().slideDown(350);
    }
   
                   
}
);


const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
// const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("mousemove", (e) => e.stopPropagation());
  });
}

// function toggleHamburger() {
//   navMenu.classList.toggle("show");
// }
