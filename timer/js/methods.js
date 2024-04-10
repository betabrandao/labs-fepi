
    // metodos timer
    //
    // criado por Beta Brandao
  var clear = false;

    function disableButtonsById(id, value) {
      document.getElementById(id).disabled = value;
    }

  function updateElementById(id, increment) {
    var value = parseInt(document.getElementById(id).value);
    if (increment) { value++; } else { value--;}
    if (value < 0) {value = 0;}

    document.getElementById(id).value = value;
    checkStates();
  }

  function parseVal(val) {
    if (val<10) {
      return "0" + val;
    }
    else {
      return val;
    }
  }

  function eventButton() {
    var button =  document.getElementById("buttonStart");

    if (button.textContent == "Start") {
      var hou = parseInt(document.getElementById("inputHour").value);
      var min = parseInt(document.getElementById("inputMinute").value);
      var sec = parseInt(document.getElementById("inputSecond").value);
      sec++;
      document.getElementById("timer").innerHTML = parseVal(hou) + ":" + parseVal(min) + ":00";
      countdown(hou, min, sec);
      timerVisibility(true);
      button.textContent = "Stop";
    } else {
      clear = true;
      timerVisibility(false);
      button.textContent = "Start";
    }
  }

  function checkStates() {
    var hou = parseInt(document.getElementById("inputHour").value);
    var min = parseInt(document.getElementById("inputMinute").value);
    var sec = parseInt(document.getElementById("inputSecond").value);
    var tot = hou+min+sec;
    if (tot != 0) {
      disableButtonsById("buttonStart", false)
    } else {
      disableButtonsById("buttonStart", true)
    }

    //get cookies
    showResult(getCookie('backgroundImage'));
  }

  function clearF() {
    document.getElementById("inputHour").value = 0;
    document.getElementById("inputMinute").value = 0;
    document.getElementById("inputSecond").value = 0;
  }

  function timerVisibility(type) {
    if (!type) {
      document.getElementById("container").className = "container";  
      document.getElementById("timeDiv").className = "hiddenAll";
      document.getElementById("menu").className = "displayAll";  
    } else {  
      document.getElementById("container").className = "hiddenAll";  
      document.getElementById("timeDiv").className = "timeDiv";  
      document.getElementById("menu").className = "hiddenAll";  
    }

  }

  function countdown(phour, pminute, psecond) {
    // Set the date we're counting down to
      clear = false;
      var d = new Date();
      var countDownDate = d.setHours(d.getHours() + phour, d.getMinutes() + pminute ,d.getSeconds() + psecond,0);
    
      // Update the count down every 1 second
      var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
     // if (phour == 0 && pminute == 0 && psecond==0) {
     //   clear
     // }
    
      // Time calculations for days, hours, minutes and seconds
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="Timer"
      
      document.getElementById("timer").innerHTML = parseVal(hours) + ":" + parseVal(minutes) + ":" + parseVal(seconds);
    
      // If the count down is finished, write some text
      if (distance < 0 || clear != false) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "00:00:00";   //clearF();
        timerVisibility(false);
        document.getElementById("buttonStart").textContent = "Start";
      }
    }, 1000);
    }



    // metodos de imagem
  "use strict";

  const fileDataURL = file => new Promise((resolve,reject) => {
    let fr = new FileReader();
    fr.onload = () => resolve( fr.result);
    fr.onerror = reject;
    fr.readAsDataURL(file)
  });

  function showResult(file) {
    fileDataURL(file)
    .then( data => (
      document.body.style.backgroundImage = "url('" + data + "')"
    )).catch(err => console.log(err));

  }

// Init Script;    
checkStates();
