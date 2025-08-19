export const interactiveTabs = () => {
    const tabs = document.querySelectorAll('.tabs-buttons button');
    const tabsContent = document.querySelector('.tabs-content');

    const contentText = [
        {
            title: 'Tabs with soft transitioning effect. Explained propriety of out perpetual his you.',
            paragraphs: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.'
            ]
        },
        {
            title: 'Second. Tabs with soft transitioning effect. Explained propriety.',
            paragraphs: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.'
            ]
        },
        {
            title: 'Third. Tabs with soft transitioning effect. Explained propriety.',
            paragraphs: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
                'Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.'
            ]
        }
    ];

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(ta => ta.classList.remove('selected'));
            tab.classList.add('selected');

            const index = +tab.getAttribute('data-index');
            const content = contentText[index];

            tabsContent.classList.add('fade-out');

            setTimeout(() => {
                tabsContent.innerHTML = '';

                const h2 = document.createElement('h2');
                h2.textContent = content.title;
                tabsContent.appendChild(h2);

                content.paragraphs.forEach(text => {
                    const p = document.createElement('p');
                    p.textContent = text;
                    tabsContent.appendChild(p);
                });

                tabsContent.classList.remove('fade-out');
            }, 300);
        });
    });
};