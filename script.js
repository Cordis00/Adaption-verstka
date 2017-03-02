var menu = document.getElementById('menu');
var list = document.getElementById('list');
var li = document.getElementsByTagName('li');

menu.addEventListener('click', fun1);
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', fun2);

}
list.addEventListener('MouseOut', fun2);

function fun1 () {
  menu.style.display = "none";
  list.style.display = "block";
}

function fun2 () {
  list.style.display = "none";
  menu.style.display = "block";
}
