document.addEventListener('DOMContentLoaded', () => {
    const droneCursor = document.createElement('img');
    droneCursor.src = "https://github.com/apk015/drona-ai-website/blob/main/%D0%B0%D1%8D%D1%80%D0%BE%D1%81%D1%8A%D0%B5%D0%BC%D0%BA%D0%B0-5-drone.gif?raw=true";
    droneCursor.id = 'drone-cursor';
    droneCursor.style.position = 'fixed';
    droneCursor.style.pointerEvents = 'none';
    droneCursor.style.width = '50px';
    droneCursor.style.height = '50px';
    droneCursor.style.zIndex = '10000';
    droneCursor.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(droneCursor);

    document.addEventListener('mousemove', (e) => {
        droneCursor.style.left = `${e.clientX}px`;
        droneCursor.style.top = `${e.clientY}px`;
    });
});

// Carousel functionality (if applicable)
const track = document.querySelector('.carousel-track');
if (track) {
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth;
    const trackWidth = track.scrollWidth;
    const totalWidth = items.length * itemWidth;

    if (totalWidth > trackWidth) {
        track.innerHTML += track.innerHTML; // Duplicate items for seamless scrolling
    }
}
