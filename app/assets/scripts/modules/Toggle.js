class Toggle {
constructor() {
  this.openAnswerButtons = document.querySelectorAll(".faq_question");
  this.events();
}

events() {
  // listen for open click
  var elems = document.getElementsByClassName("faq_question");

  Array.from(elems).forEach(v => v.addEventListener('click', function() {
    this.parentElement.getElementsByClassName('faq_answer_container')[0].classList.toggle('show');
  }));
}
}

export default Toggle;
