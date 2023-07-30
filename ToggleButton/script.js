// var outerDiv = document.getElementById('outer');

// outer.addEventListener('mouseover',function() {
// 	console.log('mouse over');
// });

// outer.addEventListener('mouseout',function() {
// 	console.log('mouse out');
// });


// var searchInput = document.getElementById('search');

// searchInput.addEventListener('keypress', function(){
// 	console.log('key press happned');
// });

// document.addEventListener('keydown',function(event) {
// 	console.log('key down',event.keyCode);
// });


// var innerDiv = document.getElementById('inner');

// innerDiv.addEventListener('click',function(event) {
// 	console.log('clicked on inner Div');
// 	event.stopPropagation();
// });

// var outerDiv = document.getElementById('outer');

// outerDiv.addEventListener('click',function(event) {
// 	console.log('clicked on outer Div');
// 	event.stopPropagation();
// });

// document.addEventListener('click',function() {
// 	console.log('clicked on document');
// });


// "use strict";
// var box =  document.getElementById('box');
// var clickcount = document.getElementById('click_count');
// count = 0;

// box.addEventListener('click', function(){
// 	count++;
// 	console.log(count);
// 	clickcount.innerText = count + " ";
// });

"use strict";
var count=0;
document.getElementsByClassName('inner')[0].addEventListener('click', function()
{
    if(count%2==0)
    {
        document.getElementsByClassName('toggler')[0].style.float="right";
        document.getElementsByClassName('inner')[0].style.backgroundColor="#007bff";
        document.getElementsByTagName('body')[0].style.backgroundColor="#343a40";
        document.getElementsByTagName('h1')[0].style.color="white";
        count++;
    }
    else
    {
        document.getElementsByClassName('toggler')[0].style.float="left";
        document.getElementsByClassName('inner')[0].style.backgroundColor="#cccccc";
        document.getElementsByTagName('body')[0].style.backgroundColor="white";
        document.getElementsByTagName('h1')[0].style.color="black";
        count++;
    }
});