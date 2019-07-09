class Modal {
  // Implement your code inside this class
  // You may create additional Classes if you feel it improves readability & reuse.
  constructor(toggleElement) {
    console.log("Modal.constructor toggleElement:", toggleElement); //
    // Hint: Get any needed data attributes from the `toggleElement`
    // Remember your "this." syntax
    this.toggleElement = toggleElement;
    this.modalBox = document.querySelector('.modal');

    this.toggleElement.addEventListener('click', () => this.modalContent() );
  }
  modalContent() {   
    this.modalBox.classList.toggle("show");
    this.modalBox.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const modalToggles = document.querySelectorAll(`[data-toggle="modal"]`);

  modalToggles.forEach(button => new Modal(button));
});

var modal = document.getElementById('exampleModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.classList.toggle("show");
  }
}

var closeBtn = document.querySelector('.close');
var closeTextBtn = document.querySelector('.btn-secondary');

closeBtn.onclick = function() {
  modal.style.display = "none";
  modal.classList.toggle('show');
}
closeTextBtn.onclick = function() {
  modal.style.display = "none";
  modal.classList.toggle('show');
}


