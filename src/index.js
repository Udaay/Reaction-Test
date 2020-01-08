window.onload = function() {

var start = new Date().getTime();
var box = document.createElement("div");
var detail = document.getElementById("detail")

function changeAttr() {
  let myBox = box.style;
  let left = Math.floor(Math.random() *700);
  let top = Math.floor(Math.random() *550 );
  let width = Math.floor(Math.random() * (50)) + 50;
  console.info(left,top);
  myBox.left = `${left}px`;
  myBox.top = `${top}px`;
  myBox.width = `${width}px`
  myBox.height = myBox.width;
  myBox.backgroundColor = colorGenerator();
  start = new Date().getTime();
  myBox.display ='block';
}

function colorGenerator() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for(let i =1; i<=6;i++)
  {
    color += letters[Math.floor(Math.random() * letters.length )] ;
  }
  return color;
}

function createBox() {
  box.setAttribute('id','mybox');
  changeAttr();
  document.getElementById('root').appendChild(box);
  box.addEventListener('click',handleClick);
}

function handleClick() {
  var end = new Date().getTime();
  var diff = (end - start)/1000;
  console.info(`Time taken ${diff} seconds`);
  detail.innerHTML = `Your response time ${diff} seconds `
  box.style.display = 'none';
  setTimeout(changeAttr,1000);
}

createBox();

}