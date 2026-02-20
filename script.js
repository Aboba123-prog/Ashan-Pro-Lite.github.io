let engine = "google";

// ВЫБОР
function setEngine(e){

engine = e;

let name = "Google";

if(e == "yandex") name = "Yandex";
if(e == "duck") name = "DuckDuckGo";

document.getElementById("currentEngine")
.innerText = name;

}

// ПОИСК
function search(){

let q =
document.getElementById("searchInput").value;

if(engine == "google"){
window.location.href =
"https://www.google.com/search?q=" + q;
}

if(engine == "yandex"){
window.location.href =
"https://yandex.ru/search/?text=" + q;
}

if(engine == "duck"){
window.location.href =
"https://duckduckgo.com/?q=" + q;
}

}

// ТЕМА
function toggleTheme(){
document.body.classList.toggle("dark");
}

// СИСТЕМНЫЕ ОБОИ
function setWall(n){

if(n==1){
document.body.style.background =
"url('img/wall1.jpg') center/cover no-repeat";
}

if(n==2){
document.body.style.background =
"url('img/wall2.jpg') center/cover no-repeat";
}

}

// СТИЛЬ ПО УМОЛЧАНИЮ
function resetStyle(){

// Убираем тему
document.body.classList.remove("dark");

// Убираем обои
document.body.style.background = "#f2f2f2";

}