var firstPage = document.getElementById('center');
var secondPage = document.getElementById('center2');

function nextClick() {
  // alert('blah');
  console.log('HERE IT IS: ', firstPage.style["visibility"]);
  // if (firstPage.style["visibility"] == 'visible') {
    firstPage.style["visibility"] = "hidden";
    secondPage.style["visibility"] = 'visible';
  // } else {
  //   firstPage.style["visibility"] = 'visible';
  //   secondPage.style["visibility"] = 'hidden';
  // }
}



function previousClick() {
  firstPage.style["visibility"] = "visible";
  secondPage.style["visibility"] = "hidden";
}



