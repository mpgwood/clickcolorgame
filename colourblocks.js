var blocks = document.querySelectorAll(".square");
var randomColour = "rgb(" + getRandomInt(100, 256) + ", " + getRandomInt(100, 256) + ", " + getRandomInt(100, 256) + ")";
var white = "rgb(255, 255, 255)";
var rand = getRandomInt(100, 256);
changeColour();


for(var i = 0; i < blocks.length; i++) {
blocks[i].style.backgroundColor = white;
};


for(var i = 0; i < blocks.length; i++) {
blocks[i].addEventListener("click", function(){
		var randomColor = "rgb(" + getRandomInt(100, 256) + ", " + getRandomInt(100, 256) + ", " + getRandomInt(100, 256) + ")";
		this.style.backgroundColor = randomColor;

});
};

for(var i = 0; i < blocks.length; i++) {
blocks[i].addEventListener("dblclick", function(){
		this.style.backgroundColor = white;

});
};


// for(var i = 0; i < blocks.length; i++) {
// blocks[i].addEventListener("mouseover", function(){
// 	this.style.backgroundColor = white;
// });
// };


window.setInterval(function(){
changeColour()
}, 500);

function changeColour(){
	for(var i = 0; i < blocks.length; i++) {
	if(blocks[i].style.backgroundColor !== "rgb(255, 255, 255)"){
			var randomColor = "rgb(" + getRandomInt(100, 256) + ", " + getRandomInt(100, 256) + ", " + getRandomInt(100, 256) + ")";
			blocks[i].style.backgroundColor = randomColor;
	}

}
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

