import { hamburgerOpenClose } from "./modules/hamburgerMenu.js";
import { formValidation } from "./modules/formValidation.js";
import { reviewIndicators } from "./modules/reviewIndicators.js";
import { interactiveTabs } from "./modules/interactiveTabs.js";
import { getImageModal } from "./modules/modalImage.js";

document.addEventListener('DOMContentLoaded', () => {
    hamburgerOpenClose();
    reviewIndicators();
    window.addEventListener('resize', reviewIndicators);
    formValidation('subscription-form', 'subscription');
    formValidation('contact-form', 'contact');
    interactiveTabs();
    getImageModal();
});
