
const DEFAULTSIZE = 16;
const gridContainer = document.querySelector('.flex-container');
let mouseHovFunction = "black";
const resetButton = document.querySelector('.reset-grid');
const rainbowButton = document.querySelector('.rainbow-button');
const generateButton = document.querySelector('.generate-button');
const gridInput = document.querySelector('.grid-input');
const eraserButton = document.querySelector('.eraser-button');
const favColor = document.querySelector('.fav-color');

rainbowButton.addEventListener('click', () => {
    mouseHovFunction = 'rainbow';
    let rainbowColours = [];
    for (i=0; i<24; i++) {
        rainbowColours.push(Math.floor(Math.random()*16777215)).toString(16);
    }
});

function generateRainbow() {    
    let newColour = Math.floor(Math.random()*16777215).toString(16);
    return `#${newColour}`;
}
// const color = `rgb(${red}, ${green}, ${blue})`;


favColor.addEventListener('input', (e) => {
    mouseHovFunction = e.target.value;
});

eraserButton.addEventListener('click', () => {
    mouseHovFunction = 'white';
});

generateButton.addEventListener('click', () => {
    let childrenArray = Array.from(gridContainer.children);

    childrenArray.forEach((child, index) => {
        child.remove();
    });

    createGrid((gridInput.value));
    gridInput.value = '';
});

resetButton.addEventListener('click', () => {
    let childrenArray = Array.from(gridContainer.children);

    childrenArray.forEach((child, index) => {
        child.style.backgroundColor = 'white';
    });
});

window.onload = () => {
    createGrid(DEFAULTSIZE);
    console.log('loaded');
}

function createGrid(size) {
    for (var i=0; i<size*size; i++) {

        var aDiv = document.createElement('div');
        aDiv.setAttribute('class', 'flex-element');
        aDiv.setAttribute('data-div-number', `div: ${i}`); 
        console.log()
        var itemSize = 100 / size;
        aDiv.style.width = itemSize + '%';
        aDiv.style.height = itemSize + '%';
        
        aDiv.addEventListener('mouseover', (e) => {
            if (mouseHovFunction == 'rainbow') {
                // console.log('rainbow');
                e.target.style.backgroundColor = generateRainbow();
            }
            else {
                e.target.style.backgroundColor = `${mouseHovFunction}`;
                // console.log(e.target.getAttribute('data-div-number'));
            }
            
        });
        gridContainer.appendChild(aDiv);
    }
}

// for (var i=0; i<5*5; i++) {

//     var aDiv = document.createElement('div');
//     aDiv.setAttribute('class', 'flex-element');
//     aDiv.setAttribute('data-div-number', `div: ${i}`); 
//     aDiv.addEventListener('mouseover', (e) => {
//         e.target.style.backgroundColor = 'black';
//         console.log(e.target.getAttribute('data-div-number'));
//     });
//     gridContainer.appendChild(aDiv);
// }


// /html/body/div/div[1] //full xpath <<< 1 div
// /html/body/div/div[1] //xpath
// document.querySelector("body > div > div:nth-child(1)") //javascript path
// body > div > div:nth-child(1) //selector
// <div class="flex-element"></div> //outer html