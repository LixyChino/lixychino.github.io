const button = document.getElementById('oldpage');
button.setAttribute('onclick', 'closemsg()');

function closemsg(e) {
    const evt = e || window.event;
    evt.target.classList.add('hid');
    document.getElementById('oldpage').classList.add('msgclose');
}
