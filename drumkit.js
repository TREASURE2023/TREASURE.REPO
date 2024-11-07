

//Detect Button Press

var numberOfButtons =  document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++){ document.querySelectorAll(".drum") [i]. addEventListener("click", function() {

var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML); 

buttonAnimation(buttonInnerHTML);

});

}

//Detect Keyboard Press

document.addEventListener("keydown", function(event) 
    {
    
    makeSound(event.key);
    
    buttonAnimation(event.key);
    })
    
    function makeSound(key) {
        switch (key) {
        
          case "A":
            var sound1 = new Audio ("sounds/sound1.mp3");
            sound1.play();
            break;
          case "B":
            var sound2 = new Audio ("sounds/sound2.mp3");
            sound2.play();
            break;
          case "C":
            var sound3 = new Audio ("sounds/sound3.mp3");
            sound3.play();
            break;
          case "D":
            var sound4 = new Audio ("sounds/sound4.mp3");
            sound4.play();
            break;       
            case "E":
            var sound5 = new Audio ("sounds/sound5.mp3");
            sound5.play();
            break;
            case "F":
            var sound6 = new Audio ("sounds/sound6.mp3");
            sound6.play();
            break;
            case "G":
            var sound7 = new Audio ("sounds/sound7.mp3");
            sound7.play();
            break;
            case "H":
            var sound8 = new Audio ("sounds/sound8.mp3");
            sound8.play();
            break;
            case "I":
            var sound9 = new Audio ("sounds/sound9.mp3");
            sound9.play();
            break;
            case "J":
            var sound10 = new Audio ("sounds/sound10.mp3");
            sound10.play();
            break;
            
            case "K":
            var sound11 = new Audio ("sounds/sound11.mp3");
            sound11.play();
            break;
            
            case "L":
            var sound12 = new Audio ("sounds/sound12.mp3");
            sound12.play();
            break;
            
            case "M":
            var sound13 = new Audio ("sounds/sound13.mp3");
            sound13.play();
            break;
            
            case "N":
            var sound14 = new Audio ("sounds/sound14.mp3");
            sound14.play();
            break;
            
            case "O":
            var sound15 = new Audio ("sounds/sound15.mp3");
            sound15.play();
            break;
            
            case "P":
            var sound16 = new Audio ("sounds/sound16.mp3");
            sound16.play();
            break;
            
            case "Q":
            var sound17 = new Audio ("sounds/sound17.mp3");
            sound17.play();
            break;
            
            case "R":
            var sound18 = new Audio ("sounds/sound18.mp3");
            sound18.play();
            break;
            
            case "S":
            var sound19 = new Audio ("sounds/sound19.mp3");
            sound19.play();
            break;
            
            case "T":
            var sound20 = new Audio ("sounds/sound20.mp3");
            sound20.play();
            break;
            
            case "U":
            var sound21 = new Audio ("sounds/sound21.mp3");
            sound21.play();
            break;
            
            case "V":
            var sound22 = new Audio ("sounds/sound22.mp3");
            sound22.play();
            break;
            
            case "W":
            var sound23 = new Audio ("sounds/sound23.mp3");
            sound23.play();
            break;
            
            case "X":
            var sound24 = new Audio ("sounds/sound24.mp3");
            sound24.play();
            break;
            
            case "Y":
            var sound25 = new Audio ("sounds/sound25.mp3");
            sound25.play();
            break;
            
            case "Z":
            var sound26 = new Audio ("sounds/sound26.mp3");
            sound26.play();
            break;     
            
            case "0":
            var animalsound1 = new Audio ("sounds/animalsound1.mp3");
            animalsound1.play();
            break;     
            
            case "1":
            var animalsound2 = new Audio ("sounds/animalsound2.mp3");
            animalsound2.play();
            break;     
            
            case "2":
            var animalsound3 = new Audio ("sounds/animalsound3.mp3");
            animalsound3.play();
            break;     
            
            case "3":
            var animalsound4 = new Audio ("sounds/animalsound4.mp3");
            animalsound4.play();
            break;     
            
            case "4":
            var animalsound5 = new Audio ("sounds/animalsound5.mp3");
            animalsound5.play();
            break;     
            
            case "5":
            var animalsound6 = new Audio ("sounds/animalsound6.mp3");
            animalsound6.play();
            break;     
            
            case "6":
            var animalsound7 = new Audio ("sounds/animalsound7.mp3");
            animalsound7.play();
            break;     
            
            case "7":
            var animalsound8 = new Audio ("sounds/animalsound8.mp3");
            animalsound8.play();
            break;     
            
            case "8":
            var animalsound9 = new Audio ("sounds/animalsound9.mp3");
            animalsound9.play();
            break;     
            
            case "9":
            var animalsound10 = new Audio ("sounds/animalsound10.mp3");
            animalsound10.play();
            break;     
         
            default: console.log(buttonInnerHTML);
            break;     
            
            
        }
    }
    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." +                     currentKey);
        activeButton.classList.add("pressed");
        
        setTimeout(function (){
            activeButton.classList.remove("pressed");
        }, 100);
    }
    
                       


           