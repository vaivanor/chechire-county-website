export const getModal = ({text, confirmText = null, cancelText = null, confirmFn = () => {}, cancelFn = () => {}}) => {
    const modal = document.querySelector('.modal');
    const modalText = document.querySelector('#modalTitle');
    const confirmBtn = document.querySelector('.confirm');
    const cancelBtn = document.querySelector('.cancel');
    modalText.innerText = text; 

    if (confirmText) {
        confirmBtn.innerText = confirmText;
        confirmBtn.style.display = 'inline-block';
    } else {
        confirmBtn.style.display = 'none';
    }

    if (cancelText) {
        cancelBtn.innerText = cancelText;
        cancelBtn.style.display = 'inline-block';
    } else {
        cancelBtn.style.display = 'none';
    }

    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('tabindex', '-1');
    modal.focus();

    if (document.activeElement) {
        document.activeElement.blur();
    }

    const localCancel = typeof cancelFn === 'function' ? cancelFn : () => {};
    const localConfirm = typeof confirmFn === 'function' ? confirmFn : () => {};

    const keyDown = (event) => {
        if (event.key === 'Escape') {
            removeEvent();
            localCancel();
        }
    };

    const click = (event) => {
        const target = event.target;
        if (target.classList.contains('cancel')) {
            removeEvent();
            localCancel();
        } else if (target.classList.contains('confirm')) {
            removeEvent();
            localConfirm();
        } else if (target === modal) {
            removeEvent();
            localCancel();
        }
    };

    const removeEvent = () => {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.removeEventListener('keydown', keyDown);
        modal.removeEventListener('click', click);
    };

    document.addEventListener('keydown', keyDown);
    modal.addEventListener('click', click);
};