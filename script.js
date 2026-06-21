const iframe = document.getElementById('hijack-iframe');

const BASE_WIDTH = 1920;

function doHijackZoom() {
    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight;

    let baseWidth;

    if (viewWidth > 1000) {
        baseWidth = 1920;
    } else if (viewWidth >= 721 && viewWidth <= 1000) {
        baseWidth = 768;
    } else {
        baseWidth = 390;
    }

    let scaleRatio = viewWidth / baseWidth;

    iframe.style.width = (viewWidth / scaleRatio) + 'px';
    iframe.style.height = (viewHeight / scaleRatio) + 'px';
    iframe.style.transform = `scale(${scaleRatio})`;
}

window.addEventListener('DOMContentLoaded', doHijackZoom);
window.addEventListener('resize', doHijackZoom);
