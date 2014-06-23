function lengthTwo(inputString){
  if (inputString.length != 2 ){
    return "0" + inputString;
  }
  else {
    return inputString;
  }
}

function getTime(){
   var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
   var seconds = today.getSeconds();
  
   hours   = lengthTwo( String(hours)  );
	minutes = lengthTwo( String(minutes));
	seconds = lengthTwo( String(seconds));
	return hours + minutes + seconds;
}

function normalizeTime(timestring){
  var redcolor = Number(timestring.substring(0,2));
  var greencolor = Number(timestring.substring(2,4));
  var bluecolor = Number(timestring.substring(4,6));
  //Since the time ranges are 0-24, 0-60, 0-60 lets normalize them to fill the color range 0-255
  var redHex   = Math.round( redcolor   * (255/24)).toString(16);
  var greenHex = Math.round( greencolor * (255/60)).toString(16);
  var blueHex  = Math.round( bluecolor  * (255/60)).toString(16);

  // Ensure always 2 digits
  redHex   = lengthTwo(redHex);
  greenHex = lengthTwo(greenHex);
  blueHex  = lengthTwo(blueHex);
  return redHex + greenHex + blueHex; 
}

function getCompliment(inputHex){
  var redComp   = (255 - Number( '0x' + inputHex.substring(0,2))).toString(16);
  var greenComp = (255 - Number( '0x' + inputHex.substring(2,4))).toString(16);
  var blueComp  = (255 - Number( '0x' + inputHex.substring(4,6))).toString(16);
  return redComp + greenComp + blueComp;
}

function timeout() {
	window.setInterval(function() {

	  var myNumberElements = document.getElementsByClassName('number');
	  var timestring = getTime();
    document.getElementsByClassName("number")[0].innerHTML = timestring;
    
    var newBackground = normalizeTime(timestring);
    document.getElementsByTagName("body")[0].style.backgroundColor = '#' + newBackground;

    //set number color to be the compliment of the background
    var numberColor = getCompliment(newBackground);
    document.getElementsByClassName("number")[0].style.color = "#" + numberColor;

    //display the actual used colors
    document.getElementsByClassName("bg")[0].innerHTML = "Background  #" + newBackground;
    document.getElementsByClassName("fg")[0].innerHTML = "Numbers  #" + numberColor;
  }, 1000);
}

timeout();