document.addEventListener('DOMContentLoaded', function() {
    const zanaves = document.getElementById('zanaves');
    const lamp = document.getElementById('lamp');
    const light = document.getElementById('light');
    const switchElement = document.getElementById('switch');
    const rabbit = document.getElementById('rabbit');
    const dove = document.getElementById('dove');
    const witch = document.getElementById('witch');
    const hat = document.getElementById('hat');
    let lightOn = false;

    zanaves.addEventListener('click', function() {
        zanaves.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            zanaves.style.display = 'none';
        }, 1000);
    });

    switchElement.addEventListener('mousedown', function() {
        switchElement.style.transform = 'translate(-42%, 10px)';
    });

    switchElement.addEventListener('mouseup', function() {
        switchElement.style.transform = 'translate(-42%, 0)';
        lightOn = !lightOn;
        light.style.opacity = lightOn ? 1 : 0;
        witch.style.opacity = lightOn ? 1 : 0;
        hat.style.opacity = lightOn ? 1 : 0;
        rabbit.style.opacity = lightOn ? 1 : 0;
        dove.style.opacity = lightOn ? 1 : 0;
    });

    rabbit.addEventListener('click', function() {
        rabbit.style.transform = 'translate(30%, 120%)';
        setTimeout(() => {
            dove.style.transform = 'translate(30%, 0)';
        }, 500);
    });

    dove.addEventListener('click', function() {
        dove.style.transform = 'translate(30%, 100%)';
        setTimeout(() => {
            rabbit.style.transform = 'translate(30%, 0)';
        }, 500);
    });
});