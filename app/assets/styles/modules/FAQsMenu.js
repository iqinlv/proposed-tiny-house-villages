class FAQsMenu {
  constructor() {
      this.faqsQuestion = document.querySelector(".faq_question");
      this.faqAnswerContent = document.querySelector(".faq_answer_container");
      this.events();
    }

    events() {
      this.faqsQuestion.addEventListener("click", () => this.toggleTheAnswer() )
    }

    toggleTheAnswer() {
      this.faqAnswerContent.classList.toggle("faq_answer_container").slideToggle();
    }
  }

export default FAQsMenu;
