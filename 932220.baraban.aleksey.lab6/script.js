document.addEventListener('DOMContentLoaded', () => {
    const leftBtn = document.getElementById('left-btn');
    const bothBtn = document.getElementById('both-btn');
    const rightBtn = document.getElementById('right-btn');
    const leftCol = document.querySelector('.cat-column');
    const rightCol = document.querySelector('.dog-column');
    const cat = leftCol.querySelector('img');
    const dog = rightCol.querySelector('img');

    const setWidths = (leftWidth, rightWidth) => {
        document.documentElement.style.setProperty('--left-width', leftWidth);
        document.documentElement.style.setProperty('--right-width', rightWidth);
    };

    const toggleImages = (showLeft, showRight) => {
        cat.classList.toggle('visible', showLeft);
        cat.classList.toggle('hidden', !showLeft);
        dog.classList.toggle('visible', showRight);
        dog.classList.toggle('hidden', !showRight);
    };

    leftBtn.addEventListener('click', () => {
        setWidths('95%', '5%');
        toggleImages(true, false);
    });

    bothBtn.addEventListener('click', () => {
        setWidths('50%', '50%');
        toggleImages(true, true);
    });

    rightBtn.addEventListener('click', () => {
        setWidths('5%', '95%');
        toggleImages(false, true);
    });
});

