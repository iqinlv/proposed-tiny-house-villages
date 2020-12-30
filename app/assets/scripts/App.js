import "../styles/styles.css";
import "lazysizes";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";
import Toggle from "./modules/Toggle";

new Modal();
new Toggle();
let stickyHeader = new StickyHeader();

if(module.hot) {
  module.hot.accept();
}
