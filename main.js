<script>
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth;
    const trackWidth = track.scrollWidth;
    const totalWidth = items.length * itemWidth;

    if (totalWidth > trackWidth) {
        track.innerHTML += track.innerHTML; // Duplicate items for seamless scrolling
    }
document.addEventListener('DOMContentLoaded', () => {
    const droneCursor = document.createElement('img');
    droneCursor.src = "https://github.com/apk015/drona-ai-website/blob/main/%D0%B0%D1%8D%D1%80%D0%BE%D1%81%D1%8A%D0%B5%D0%BC%D0%BA%D0%B0-5-drone.gif?raw=true";
    droneCursor.id = 'drone-cursor';
    document.body.appendChild(droneCursor);

    document.addEventListener('mousemove', (e) => {
        droneCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
});

</script>
