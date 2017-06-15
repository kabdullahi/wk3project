let btnList = document.querySelectorAll(".squares");
let view = document.querySelector(".text-content")

for (let i = 0; i < btnList.length; i++) {
  let btn = btnList[i];

  btn.addEventListener("click", display)

  function display(space) {
    if (btn.classList.contains("dot")) {
      view.innerHTML += btn.innerHTML;
    }
    else if (btn.classList.contains("clear")) {
      view.innerHTML = "";
    }
    else if (btn.classList.contains("equal")) {
      var store = eval(view.innerHTML);
      view.innerHTML = store;
    }
  }
}
