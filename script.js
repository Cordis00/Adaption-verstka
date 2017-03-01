var menu = document.getElementById('menu');
var spisok = document.getElementById('spisok');
var li = document.getElementsByTagName('li');

menu.addEventListener('click', fun1);
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', fun2);

}
spisok.addEventListener('MouseOut', fun2);

function fun1 () {
  menu.style.display = "none";
  spisok.style.display = "block";
}

function fun2 () {
  spisok.style.display = "none";
  menu.style.display = "block";
}
