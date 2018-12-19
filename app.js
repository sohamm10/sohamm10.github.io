// var h4=document.querySelector('h4');
// h4.textContent='i am soham maity. I want to learn to programme.';


// h4.style.color='blue';

// var  soccer=['soham','subhodip','arpan'];

// console.log(soccer);

// functions



// function multiply(num1,num2){
// return num1*num2;

// }

// console.log(multiply(7,90));



// // events
// document.querySelector('html').onclick=function(){
//     alert('ouch!!!! stop poking me.');
// }




// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'vendors/images/image1.jpeg') {
//       myImage.setAttribute ('src','vendors/images/image2.jpeg');
//     } else {
//       myImage.setAttribute ('src','vendors/images/image1.jpeg');
//     }
// }


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }


  myButton.onclick = function() {
    setUserName();
  }







