//FUNCION DESPUES DE ENVIAR EL NOMBRE
function clickNameButton() {
	if (userName.value) {
			document.getElementById("welcomeMessage").innerHTML = "¡Bienvenid@, " + document.getElementById("userName").value + "! 🖐😊"; // getElementById = referencia a un objeto Element 
     location.href ='quizz.html'; // redireccionar con Javascript
    } else {
	alert("No haz ingresado tu nombre 🤷‍♀️");
	}
}


function clickSendAnswers() {

// PREGUNTA 01
  
  //Variable que almacena valor de la respuesta pregunta 1
let questionOne = "";
  
  if (document.getElementById("optionOne").checked){
    questionOne = document.getElementById("optionOne").value;
  }

  if (document.getElementById("optionTwo").checked){
    questionOne = document.getElementById("optionTwo").value;
  }  

  if (document.getElementById("optionThree").checked){
    questionOne = document.getElementById("optionThree").value;
  } 

    // Conversión de la variable a Number
    if (questionOne === "1") {
      questionOne = 1;
    }
  
    else {
      questionOne = 0;
    }

// PREGUNTA 02
  
  //Variable que almacena valor de la respuesta pregunta 2
let questionTwo = "";
  
  if (document.getElementById("optionFour").checked){
    questionTwo = document.getElementById("optionFour").value;
  }

  if (document.getElementById("optionFive").checked){
    questionTwo = document.getElementById("optionFive").value;
  }  

  if (document.getElementById("optionSix").checked){
    questionTwo = document.getElementById("optionSix").value;
  } 

    // Conversión de la variable a Number
    if (questionTwo === "1") {
      questionTwo = 1;
    }
  
    else {
      questionTwo = 0;
    }
  
// PREGUNTA 03
  
  //Variable que almacena valor de la respuesta pregunta 3
let questionThree = "";
  
  if (document.getElementById("optionSeven").checked){
    questionThree = document.getElementById("optionSeven").value;
  }

  if (document.getElementById("optionEight").checked){
    questionThree = document.getElementById("optionEight").value;
  }  

  if (document.getElementById("optionNine").checked){
    questionThree = document.getElementById("optionNine").value;
  } 

    // Conversión de la variable a Number
    if (questionThree === "1") {
      questionThree = 1;
    }
  
    else {
      questionThree = 0;
    }

 //VARIABLE CON LA SUMATORIA DE LOS PUNTOS
  let correctAnswers = questionOne + questionTwo + questionThree;

//MENSAJE DEL PUNTAJE OBTENIDO
  document.getElementById("points").innerHTML= "En la trivia obtuviste " + correctAnswers + " puntos." ;

  //MENSAJE SI HUBO UN ERROR
  if(correctAnswers < 3)  {
    document.getElementById("answer").innerHTML = "SIGUE INTENTÁNDOLO, NO TE RINDAS!! 🙁😉";
  } 
  //FELICITACIONES SI ACERTO EN TODO
  if(correctAnswers == 3) {
    document.getElementById("answer").innerHTML = "FELICIDADES, ACERTASTE EN TODAS!!🥳👏";
  }
}

//REDIRECCIONAR PARA VOLVER A INTENTAR LA TRIVIA
function clicktryAgain() {
  location.href= "index.html"
}