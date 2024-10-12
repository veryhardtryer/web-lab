
function actionPopup(index, display) {
    var popup = document.querySelector('.popup-' + index);
    popup.style.display = display;
}

function overlayDisplay(display) {
    var overlay = document.querySelector('.overlay');
    overlay.style.display = display;
}

function openPopup(index) {
    actionPopup(index, 'block')
    overlayDisplay('block')
}

function closePopups() {
    overlayDisplay('none')
    for(let i = 0; i < 3; i += 1) {
        actionPopup(i, 'none')
    }
}
