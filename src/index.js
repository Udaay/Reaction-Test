window.onload = function() {

var start = new Date().getTime();
var box = document.createElement("div");
var details = document.createElement("div")

function changeAttr() {
  let myBox = box.style;
  let left = Math.floor(Math.random() *700);
  let top = Math.floor(Math.random() *550 );
  console.info(left,top);
  myBox.left = `${left}px`;
  myBox.top = `${top}px`;
  myBox.backgroundColor = colorGenerator();
  myBox.display ='block';
}

function colorGenerator() {
  var letters = ['blue','red','yellow','red','green','red'];
  var color = letters[Math.floor(Math.random() * letters.length )] ;
  return color;
}

function createBox() {
  box.setAttribute('id','mybox');
  changeAttr();
  document.getElementById('root').appendChild(box);
  details.setAttribute('id','detail')
  
  document.getElementById('root').appendChild(details)
  box.addEventListener('click',handleClick);
}

function handleClick() {
  var end = new Date().getTime();
  var diff = (end - start)/1000;
  console.info(`Time taken ${diff} seconds`);
  details.innerHTML = `Your response time ${diff} seconds `
  start = new Date().getTime();
  box.style.display = 'none';
  setTimeout(changeAttr,1000);
}

createBox();

}