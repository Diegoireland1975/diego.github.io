// ########/////#####
//### TypeWriter#####
// ########/////#####

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  // Type Method
  type() {
    // Current index of Word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //if word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at the end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// ##############///////
// Flip card on click///
// ##############///////
let clickMe = document.querySelectorAll(".card");
clickMe.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
});
// ###########################///////
// UPDATE COPYRIGHT YEAR IN THE FOOTER
// #############################///////

// Get a reference to the HTML element where you want to display the current year.
const yearSpan = document.querySelector("#currentYear");
// Create a new Date object to get the current year.
const currentYear = new Date().getFullYear();
// Update the inner text of the HTML element with the current year.
yearSpan.innerText = currentYear;
