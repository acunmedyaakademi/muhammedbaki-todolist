let liste = document.querySelector(".liste");
let todotxt = document.querySelector("#todolist");
let button = document.querySelector(".eklebutonu");


function listeyeEkle() {
  liste.innerHTML += "<li>" + todotxt.value + "</li>";
}
button.addEventListener("click", listeyeEkle);

