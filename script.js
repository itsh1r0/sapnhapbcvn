const iframe = document.getElementById('hijack-iframe');

const BASE_WIDTH = 1920;

function doHijackZoom() {
    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight;

    let scaleRatio = viewWidth / BASE_WIDTH;

    iframe.style.width = (viewWidth / scaleRatio) + 'px';
    iframe.style.height = (viewHeight / scaleRatio) + 'px';
    iframe.style.transform = `scale(${scaleRatio})`;
}

window.addEventListener('DOMContentLoaded', doHijackZoom);
window.addEventListener('resize', doHijackZoom);
