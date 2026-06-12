function myFunction() {
  alert("Thanks for Contacting me!");
}

const modal = document.getElementById("consultationModal");

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if(event.target === modal){
    closeModal();
  }
}