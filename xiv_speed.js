//i could probably make this prettier and more concise but i cba
//Button Functions and construction
function reset() {
    if (window.location.href.indexOf('&') > -1) {
        window.location.replace(window.location.href.slice(0, window.location.href.indexOf('&')));
    }
}
var resetButton = document.createElement("button");
resetButton.style.backgroundImage = "url('https://xivapi.com/i/000000/000073.png')";
resetButton.classList.add('speedgeButton');
resetButton.addEventListener("click", reset);


function targetability() {
    window.location.replace(safeSlice('&') + '&type=summary&pins=2%24Off%24%23244F4B%24expression%24type%3D"targetabilityupdate"&view=events');
}
var targetButton = document.createElement("button");
targetButton.style.backgroundImage = "url('https://xivapi.com/i/002000/002587.png')";
targetButton.classList.add('speedgeButton');
targetButton.addEventListener("click", targetability);


function limitBreak() {
    window.location.replace(safeSlice('&') + '&type=summary&pins=2%24Off%24%23244F4B%24expression%24type%3D"limitbreakupdate"&view=events');
}
var lbButton = document.createElement("button");
lbButton.style.backgroundImage = "url('https://xivapi.com/i/000000/000103.png')";
lbButton.classList.add('speedgeButton');
lbButton.addEventListener("click", limitBreak);


function XIVA() {
    window.open('https://xivanalysis.com/fflogs/' + window.location.pathname.split('/')[2] + '/' + window.location.href.split('&')[0].split('fight=')[1], '_blank').focus();
}
var xivaButton = document.createElement("button");
xivaButton.style.backgroundImage = "url('https://xivanalysis.com/logo.png')";
xivaButton.classList.add('speedgeButton');
xivaButton.addEventListener("click", XIVA);


//Button injection
var bar = document.createElement("DIV");
bar.classList.add('speedgeBar');
bar.appendChild(xivaButton);
bar.appendChild(lbButton);
bar.appendChild(targetButton);
bar.appendChild(resetButton);
document.body.appendChild(bar);


//Function for cleaner code
function safeSlice(sliceString) {
    return window.location.href.indexOf(sliceString) > -1 ? window.location.href.slice(0, window.location.href.indexOf(sliceString)) : window.location.href;
}
