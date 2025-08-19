export const getImageModal = () => {
    const galleryImages = document.querySelectorAll('.tabs-gallery img');
    const main = document.querySelector('main');

    const close = document.querySelector('.image-modal button');

    const modal = document.querySelector('.image-modal');
    const modalImage = document.querySelector('.image-modal-content');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modalImage.src = img.src;
            modal.style.display = 'block';
            modal.setAttribute('aria-hidden', 'false');
            main.style.filter = 'blur(5px)';
        });
    });

    close.addEventListener('click', () => {
        modal.setAttribute('aria-hidden', 'true');
        modal.style.display = 'none';
        main.style.filter = '';
    });

    modal.addEventListener('click', (event) => {
        if(event.target !== modalImage && !event.target.closest('button')) {
            modal.setAttribute('aria-hidden', 'true');
            modal.style.display = 'none';
            main.style.filter = '';
        }
    });
};