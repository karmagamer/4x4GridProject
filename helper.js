(function(){
  var counter = 0,
    SquaresTemp = [],
    squares = document.getElementsByClassName("square"),
    randomIdx;


  function changeColor() {
    if (counter >= 8) { SquaresTemp.shift(); }

    var color = "rgb(" + Math.floor(Math.random() * 255) + "," +
                         Math.floor(Math.random() * 255) + "," +
                         Math.floor(Math.random() * 255)  + ")";
	
	generateRandom();
    while(SquaresTemp.indexOf(randomIdx) != -1){
		generateRandom();
	}

    squares[randomIdx].style.backgroundColor = color;
    SquaresTemp.push(randomIdx);
    counter++
  }

  function generateRandom() {
    randomIdx = Math.floor(Math.random() * squares.length);
  }

  setInterval(changeColor, 250);
})();