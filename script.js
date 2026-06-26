const button = document.getElementById('oldpage');
button.setAttribute('onclick', 'closemsg()');

function closemsg() {
    button.classList.add('hid');
    document.getElementById('header').classList.add('msgclose');
}
