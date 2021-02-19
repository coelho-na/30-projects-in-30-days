let modal = document.getElementById("modal");
let btnSkip = document.getElementById("modal-skip");

window.onload = () => {
  setTimeout(() => {
    modal.classList.add("modal-visible");
  }, 3000);
};

btnSkip.addEventListener("click", () => {
  modal.classList.remove("modal-visible");
});
