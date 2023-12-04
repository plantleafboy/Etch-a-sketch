
let gridContainer = document.querySelector('.flexContainer');

for (var i=0; i<16*16; i++) {

    var aDiv = document.createElement('div');
    aDiv.setAttribute('class', 'flexElement');
    gridContainer.appendChild(aDiv);
}