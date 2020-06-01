let div1 = document.createElement('div');
div1.className = 'demo';
document.body.appendChild(div1);

let dragging = false
let startX, startY;
let disX, disY;
div1.onmousedown = function (e) {
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
}

document.onmousemove = function (e) {
    if (dragging) {
        let top = parseInt(div1.style.top) || 0;
        let left = parseInt(div1.style.left) || 0;
        disY = e.clientY - startY;
        disX = e.clientX - startX;
        div1.style.top = top + disY + 'px';
        div1.style.left = left + disX + 'px';
    }
    startY = e.clientY;
    startX = e.clientX;

}

document.onmouseup = function () {
    dragging = false;
}
