export const reviewIndicators = () => {
    const container = document.querySelector('.review-container');
    const reviews = container.querySelectorAll('.review');
    const indicatorsContainer = document.querySelector('.review-indicators');

    const visibleCount = window.innerWidth > 992 ? 3 : 1;
    const totalPages = Math.ceil(reviews.length / visibleCount);

    indicatorsContainer.innerHTML = '';
    const indicators = [];

    for (let i = 0; i < totalPages; i++) {
        const indicator = document.createElement('button');
        indicator.classList.add('indicator');
        indicatorsContainer.appendChild(indicator);
        indicators.push(indicator);
        if (i === 0) indicator.classList.add('active');

        indicator.addEventListener('click', () => {
            let targetReview;
            if(visibleCount === 1) {
                const index = Math.min(i, reviews.length - 1);
                targetReview = reviews[index].offsetLeft;//iki elemento
            } else {
                targetReview = i * container.clientWidth;//per visa ploti container
            }
            container.scrollTo({
                left: targetReview,
                behavior: 'smooth'
            });
        });
    }

    container.addEventListener('scroll', () => {
        let closestIndicator = 0;
        let minDistance = Infinity; //maksimalus skaicius, kad distace tikrai butu mazesnis
        const scrollLeft = container.scrollLeft; //dabartine pozicija

        for (let i = 0; i < reviews.length; i += visibleCount) { //per puslapius ne per elementus length 6, i = 0, 3; 2 ind; visibleCount 3, 
            const review = reviews[i];
            const distance = Math.abs(review.offsetLeft - scrollLeft); //revire kiek atitoles nuo kaires - kiek nuscrolinta nuo kaires, min atstumas
            if (distance < minDistance) {
                minDistance = distance;
                closestIndicator = Math.floor(i / visibleCount); //kuris indikatorius atitinka artimiausia puslapi
            }
        }

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === closestIndicator);
        });
    });
};