var color=document.querySelector("#color");
var square = document.querySelectorAll(".square");
var colors=[];
var blocks=6;
var message=document.querySelector("#message");
var resetbtn=document.querySelector("#reset");
var mode=document.querySelectorAll(".modes");
var pickedcolor;

init();

function init(){
    setSquares();
    setModes();
    resetbtn.addEventListener("click", reset);
    reset();
}

function col() {
    // to generate random number between 0 & 255
    return Math.floor(Math.random() * 256);
}


function reset(){
    //fill color blocks with colors
    for (let i = 0; i < blocks; i++) {
        colors[i] = "RGB(" + col() + "," + col() + "," + col() + ")";
        square[i].style.background = colors[i];
    }

    //change other properties as they were initially
    head.style.background="steelblue";
    pickedcolor = colors[Math.floor(Math.random() * blocks)];
    message.textContent="";
    color.textContent = pickedcolor;
    resetbtn.textContent="NEW COLORS";
}

function ifWon(y) {
    //checking the conditions of winning
        if (pickedcolor === colors[y]) {
                message.textContent = "Correct!!";
    //changing the background of all squares and head to the picked color
            for (let z = 0; z < blocks; z++) {
                    square[z].style.background = pickedcolor;
                    head.style.background = pickedcolor;
                    resetbtn.textContent = "PLAY AGAIN?"
            }
        } else {
    //message of incorrect and disappear the block clicked
            if(message.textContent!=="Correct!!"){
                message.textContent = "Try Again!";
                square[y].style.background = "none";
            }
        }

}

function setModes(){
    for (let s = 0; s < mode.length; s++) {
        mode[s].addEventListener("click", function () {
    //removing select class from all modes 
            mode[0].classList.remove("select");
            mode[1].classList.remove("select");
    //adding select class to current mode
            this.classList.add("select");
            this.textContent === "EASY" ? blocks = 3 : blocks = 6;
    //hiding all squares above easy level
            for (let s = 3; s < 6; s++) {
                square[s].style.background = "none";
            }
    //reset the entire things
            reset();
        });
    }
}

function setSquares(){
    for (let s = 0; s < blocks; s++) {
        square[s].addEventListener("click", function () {
            ifWon(s);
        });
    }
}
