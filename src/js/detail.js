const urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name');

console.log(name);
console.log("reached");

var div = document.createElement('div');
div.className= 'title';
div.innerText = urlParams.get('name');

var br = document.createElement('br');

var container = document.createElement('div');
container.className = 'cointainer';
var image_container = document.createElement('div');
image_container.className = 'image-container';


var div2 = document.createElement('img');
div2.className = 'image';
div2.src= urlParams.get('url');

image_container.appendChild(div2);
container.appendChild(image_container);

var div3 = document.createElement('div');
div3.className = 'desc';
div3.innerText = urlParams.get('desc');

document.getElementById('information').appendChild(div);
document.getElementById('information').appendChild(br);
document.getElementById('information').appendChild(container);
document.getElementById('information').appendChild(br);
document.getElementById('information').appendChild(div3);


document.getElementById('return-btn').addEventListener('click', returnIndex);

function returnIndex(){
    window.location.href = 'index.html';
}