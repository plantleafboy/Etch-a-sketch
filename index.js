
const DEFAULTSIZE = 5;
const gridContainer = document.querySelector('.flexContainer');
const mouseFunction = "standard";
const resetButton = document.querySelector('.reset-grid');
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
        aDiv.setAttribute('class', 'flexElement');
        aDiv.setAttribute('data-div-number', `div: ${i}`); 
        aDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
            console.log(e.target.getAttribute('data-div-number'));
        });
        gridContainer.appendChild(aDiv);
    }
}

// for (var i=0; i<5*5; i++) {

//     var aDiv = document.createElement('div');
//     aDiv.setAttribute('class', 'flexElement');
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
// <div class="flexElement"></div> //outer html