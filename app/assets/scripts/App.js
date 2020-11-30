import "../styles/styles.css";
import "lazysizes";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";

new Modal();
let stickyHeader = new StickyHeader();

if(module.hot) {
  module.hot.accept();
}
