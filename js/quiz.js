// NEXT AND PREVIOUS LINKS
var firstPage = document.getElementById('center');
var secondPage = document.getElementById('center2');
var thirdPage = document.getElementById('center3');
var fourthPage = document.getElementById('result');

function nextClick() {
    firstPage.style["visibility"] = "hidden";
    secondPage.style["visibility"] = 'visible';
}

function previousClick() {
    firstPage.style["visibility"] = "visible";
    secondPage.style["visibility"] = "hidden";
}

function nextClick2() {
    firstPage.style["visibility"] = "hidden";
    secondPage.style["visibility"] = 'hidden';
    thirdPage.style["visibility"] = 'visible';
}

function previousClick2() {
    firstPage.style["visibility"] = "hidden";
    secondPage.style["visibility"] = "visible";
    thirdPage.style["visibility"] = "hidden";
}

function previousClick3() {
    firstPage.style["visibility"] = "hidden";
    secondPage.style["visibility"] = "hidden";
    thirdPage.style["visibility"] = "visible";
    fourthPage.style["visibility"] = "hidden";
}



//This function contains the answers for each question
function checkResult() {
    var add = 0;
    answer1 = document.getElementById("op2");
    answer2 = document.getElementById("op5");
    answer3 = document.getElementById("op10");
    answer4 = document.getElementById("op15");
    answer5 = document.getElementById("op20");
    answer6 = document.getElementById("op21");
    answer7 = document.getElementById("op27");
    answer8 = document.getElementById("op32");
    answer9 = document.getElementById("op34");
    answer10 = document.getElementById("op37");
    answer11 = document.getElementById("op44");
    answer12 = document.getElementById("op47");
    answer13 = document.getElementById("op49");
    answer14 = document.getElementById("op54");
    answer15 = document.getElementById("op60");

    //Checked is a property in js in which tells if the radio button is checked.
    //The if stmts checks if the correct answers are selected it should increase variable add by 1. In the end it should be a total of 5 points

    //answer1
    if (answer1.checked == true) {
        add++;
        //&#10004 is the unicode for the checkmark & &#10006 is the unicode for the cross.
        document.getElementById('chk1').innerHTML = "&#10004";
        document.getElementById('chk1').style.color = "green";
    } else {
        document.getElementById('chk1').innerHTML = "&#10006";
        document.getElementById('chk1').style.color = "red";
    }

    //answer2
    if (answer2.checked == true) {
        add++;
        document.getElementById('chk2').innerHTML = "&#10004";
        document.getElementById('chk2').style.color = "green";
    } else {
        document.getElementById('chk2').innerHTML = "&#10006";
        document.getElementById('chk2').style.color = "red";
    }

    //answer3
    if (answer3.checked == true) {
        add++;
        document.getElementById('chk3').innerHTML = "&#10004";
        document.getElementById('chk3').style.color = "green";
    } else {
        document.getElementById('chk3').innerHTML = "&#10006";
        document.getElementById('chk3').style.color = "red";

    }

    //answer4
    if (answer4.checked == true) {
        add++;
        document.getElementById('chk4').innerHTML = "&#10004";
        document.getElementById('chk4').style.color = "green";
    } else {
        document.getElementById('chk4').innerHTML = "&#10006";
        document.getElementById('chk4').style.color = "red";
    }

    //answer5
    if (answer5.checked == true) {
        add++;
        document.getElementById('chk5').innerHTML = "&#10004";
        document.getElementById('chk5').style.color = "green";
    } else {
        document.getElementById('chk5').innerHTML = "&#10006";
        document.getElementById('chk5').style.color = "red";
    }

     //answer6
    if (answer6.checked == true) {
        add++;
        document.getElementById('chk6').innerHTML = "&#10004";
        document.getElementById('chk6').style.color = "green";
    } else {
        document.getElementById('chk6').innerHTML = "&#10006";
        document.getElementById('chk6').style.color = "red";
    }
      //answer7
       if (answer7.checked == true) {
        add++;
        document.getElementById('chk7').innerHTML = "&#10004";
        document.getElementById('chk7').style.color = "green";
    } else {
        document.getElementById('chk7').innerHTML = "&#10006";
        document.getElementById('chk7').style.color = "red";
    }
       //answer8
       if (answer8.checked == true) {
        add++;
        document.getElementById('chk8').innerHTML = "&#10004";
        document.getElementById('chk8').style.color = "green";
    } else {
        document.getElementById('chk8').innerHTML = "&#10006";
        document.getElementById('chk8').style.color = "red";
    }
      //answer9
       if (answer9.checked == true) {
        add++;
        document.getElementById('chk9').innerHTML = "&#10004";
        document.getElementById('chk9').style.color = "green";
    } else {
        document.getElementById('chk9').innerHTML = "&#10006";
        document.getElementById('chk9').style.color = "red";
    }
      //answer10
       if (answer10.checked == true) {
        add++;
        document.getElementById('chk10').innerHTML = "&#10004";
        document.getElementById('chk10').style.color = "green";
    } else {
        document.getElementById('chk10').innerHTML = "&#10006";
        document.getElementById('chk10').style.color = "red";
    }
      //answer11
       if (answer11.checked == true) {
        add++;
        document.getElementById('chk11').innerHTML = "&#10004";
        document.getElementById('chk11').style.color = "green";
    } else {
        document.getElementById('chk11').innerHTML = "&#10006";
        document.getElementById('chk11').style.color = "red";
    }
     //answer12
       if (answer12.checked == true) {
        add++;
        document.getElementById('chk12').innerHTML = "&#10004";
        document.getElementById('chk12').style.color = "green";
    } else {
        document.getElementById('chk12').innerHTML = "&#10006";
        document.getElementById('chk12').style.color = "red";
    }
         //answer13
       if (answer13.checked == true) {
        add++;
        document.getElementById('chk13').innerHTML = "&#10004";
        document.getElementById('chk13').style.color = "green";
    } else {
        document.getElementById('chk13').innerHTML = "&#10006";
        document.getElementById('chk13').style.color = "red";
    }
        //answer14
       if (answer14.checked == true) {
        add++;
        document.getElementById('chk14').innerHTML = "&#10004";
        document.getElementById('chk14').style.color = "green";
    } else {
        document.getElementById('chk14').innerHTML = "&#10006";
        document.getElementById('chk14').style.color = "red";
    }
    //answer15
       if (answer15.checked == true) {
        add++;
        document.getElementById('chk15').innerHTML = "&#10004";
        document.getElementById('chk15').style.color = "green";
    } else {
        document.getElementById('chk15').innerHTML = "&#10006";
        document.getElementById('chk15').style.color = "red";
    }

    // This adds the total score.
    document.getElementById("score").innerHTML = "Score:" + " " + add + "/15";

    /* formula for finding percentage is how many questions you got right by the add
    variable multiplied by 100 nd divided by total number of questions.*/
    var percentage = Math.floor(add * 100 / 15);
    document.getElementById('percentage').innerHTML = percentage + "%";
    document.getElementById('percentage').style.color = "green";
    if (percentage < 50) {
        document.getElementById('percentage').style.color = "red";
        document.getElementById('percentage').innerHTML = percentage + "%" + " Please review and come bach when ready."
    }

    if (percentage < 100 && percentage > 50) {
      document.getElementById('percentage').innerHTML = percentage + "%" + " Your almost there. Please Review."
    }


    if (percentage == 100) {
        document.getElementById('percentage').innerHTML = percentage + "%  Awesome Job! You got all of them right!";
    }

    firstPage.style["visibility"] = "hidden";
    secondPage.style["visibility"] = "hidden";
    thirdPage.style["visibility"] = "hidden";
    fourthPage.style["visibility"] = "visible";

}


