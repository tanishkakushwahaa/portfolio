window.onload = function () {
    setTimeout(function () {
        document.getElementById('secondPart').style.visibility = 'visible';
    }, 1000);
};
function highlight(element) {
    element.classList.add('highlight');
}

function removeHighlight(element) {
    element.classList.remove('highlight');
}