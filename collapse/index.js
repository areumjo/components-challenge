class Collapse {
  // Implement your code inside this class
  // You may create additional Classes if you feel it improves readability & reuse.
  
  constructor(toggleElement) {
    console.log("Collapse.constructor toggleElement:", toggleElement); //
    // Hint: Get any needed data attributes from the `toggleElement`
    // Remember your "this." syntax

    this.toggleElement = toggleElement;
    this.card = document.querySelector('#secretKitten');

    this.toggleElement.addEventListener('click', () => this.toggleContent() );
  }
  toggleContent() {
    this.card.classList.toggle('show');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const collapseToggles = document.querySelectorAll(`[data-toggle="collapse"]`);
  collapseToggles.forEach(button => new Collapse(button));
});
