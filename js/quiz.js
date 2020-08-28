// NEXT AND PREVIOUS LINKS
var firstPage = document.getElementById('center');
var secondPage = document.getElementById('center2');

function nextClick() {
    firstPage.style["visibility"] = "hidden";
    secondPage.style["visibility"] = 'visible';
}

function previousClick() {
    firstPage.style["visibility"] = "visible";
    secondPage.style["visibility"] = "hidden";
}



//This function contains the answers for each question
function checkResult() {
    var add = 0;
    answer1 = document.getElementById("op2");
    answer2 = document.getElementById("op5");
    answer3 = document.getElementById("op10");
    answer4 = document.getElementById("op14");
    answer5 = document.getElementById("op18");

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

    // This adds the total score.
    document.getElementById("score").innerHTML = "Score:" + " " + add;

    /* formula for finding percentage is how many questions you got right by the add
    variable multiplied by 100 nd divided by total number of questions.*/
    var percentage = add * 100 / 5;
    document.getElementById('percentage').innerHTML = percentage + "%";
    document.getElementById('percentage').style.color = "green";
    if (percentage < 50) {
        document.getElementById('percentage').style.color = "red";
    }

    if (percentage == 100) {
        document.getElementById('percentage').innerHTML = percentage + "%  Great Job!";
    }

}
