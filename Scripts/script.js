var x = 0;

function question1() {
  document.getElementById("question").innerHTML = "1.You hear the vibration of your phone but there's no notification when you pick it up.";
  document.getElementById("option1").innerHTML = "Very often";
  document.getElementById("option2").innerHTML = "Often";
  document.getElementById("option3").innerHTML = "Sometimes";
  document.getElementById("option4").innerHTML = "Rarely";
  document.getElementById("option5").innerHTML = "Never";
  document.getElementById("previous").setAttribute("onclick", "question5()");
  document.getElementById("next").setAttribute("onclick", "question2()");
    
}

function question2() {
  document.getElementById("question").innerHTML = "2.You cannot stop gaming even though you know you should.";
  document.getElementById("option1").innerHTML = "Strongly agree";
  document.getElementById("option2").innerHTML = "Agree";
  document.getElementById("option3").innerHTML = "Neutral";
  document.getElementById("option4").innerHTML = "Disagree";
  document.getElementById("option5").innerHTML = "Strongly disagree";
  document.getElementById("previous").setAttribute("onclick", "question1()");
  document.getElementById("next").setAttribute("onclick", "question3()");
    }

function question3() {
  document.getElementById("question").innerHTML = "3.You think about gaming or using your phone even though you are not doing either.";
  document.getElementById("option1").innerHTML = "Very often";
  document.getElementById("option2").innerHTML = "Often";
  document.getElementById("option3").innerHTML = "Sometimes";
  document.getElementById("option4").innerHTML = "Rarely";
  document.getElementById("option5").innerHTML = "Never";
  document.getElementById("previous").setAttribute("onclick", "question2()");
  document.getElementById("next").setAttribute("onclick", "question4()");
    }

function question4() {
  document.getElementById("question").innerHTML = "4.You have fear of missing out:you cannot bear with missing information on the internet.";
  document.getElementById("option1").innerHTML = "Strongly agree";
  document.getElementById("option2").innerHTML = "Agree";
  document.getElementById("option3").innerHTML = "Neutral";
  document.getElementById("option4").innerHTML = "Disagree";
  document.getElementById("option5").innerHTML = "Strongly disagree";
  document.getElementById("previous").setAttribute("onclick", "question3()");
  document.getElementById("next").setAttribute("onclick", "question5()");
    }
function question5() {
  document.getElementById("question").innerHTML = "5.You often fail to do specific task given to you";
  document.getElementById("option1").innerHTML = "Strongly agree";
  document.getElementById("option2").innerHTML = "Agree";
  document.getElementById("option3").innerHTML = "Neutral";
  document.getElementById("option4").innerHTML = "Disagree";
  document.getElementById("option5").innerHTML = "Strongly disagree";
  document.getElementById("previous").setAttribute("onclick", "question4()");
  document.getElementById("next").setAttribute("onclick", "question1()");
    }

    
function clicked1() {
    document.getElementById("circle1").style.backgroundColor = "black";
    document.getElementById("circle2").style.backgroundColor = "white";
    document.getElementById("circle3").style.backgroundColor = "white";
    document.getElementById("circle4").style.backgroundColor = "white";
    document.getElementById("circle5").style.backgroundColor = "white";
    var x = 1;
}

function clicked2() {
    document.getElementById("circle1").style.backgroundColor = "white";
    document.getElementById("circle2").style.backgroundColor = "black";
    document.getElementById("circle3").style.backgroundColor = "white";
    document.getElementById("circle4").style.backgroundColor = "white";
    document.getElementById("circle5").style.backgroundColor = "white";
    var x = 2;
}

function clicked3() {
    document.getElementById("circle1").style.backgroundColor = "white";
    document.getElementById("circle2").style.backgroundColor = "white";
    document.getElementById("circle3").style.backgroundColor = "black";
    document.getElementById("circle4").style.backgroundColor = "white";
    document.getElementById("circle5").style.backgroundColor = "white";
    var x = 3;
}

function clicked4() {
    document.getElementById("circle1").style.backgroundColor = "white";
    document.getElementById("circle2").style.backgroundColor = "white";
    document.getElementById("circle3").style.backgroundColor = "white";
    document.getElementById("circle4").style.backgroundColor = "black";
    document.getElementById("circle5").style.backgroundColor = "white";
    var x = 4;
}

function clicked5() {
    document.getElementById("circle1").style.backgroundColor = "white";
    document.getElementById("circle2").style.backgroundColor = "white";
    document.getElementById("circle3").style.backgroundColor = "white";
    document.getElementById("circle4").style.backgroundColor = "white";
    document.getElementById("circle5").style.backgroundColor = "black";
    var x = 5;
}

function showmore() {
    document.getElementById("hidden1").removeAttribute("class");
    document.getElementById("hidden2").removeAttribute("class");
    document.getElementById("hidden3").removeAttribute("class");
    document.getElementById("hidden4").removeAttribute("class");
    document.getElementById("change").setAttribute("onclick", "showless()");
    document.getElementById("change").innerHTML = "Show less";
}

function showless() {
    document.getElementById("hidden1").setAttribute("class","hidden");
    document.getElementById("hidden2").setAttribute("class","hidden");
    document.getElementById("hidden3").setAttribute("class","hidden");
    document.getElementById("hidden4").setAttribute("class","hidden");
    document.getElementById("change").setAttribute("onclick", "showless()");
    document.getElementById("change").innerHTML = "Show less";
    document.getElementById("change").setAttribute("onclick", "showmore()");
    document.getElementById("change").innerHTML = "Show more";
}

