<script>
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth;
    const trackWidth = track.scrollWidth;
    const totalWidth = items.length * itemWidth;

    if (totalWidth > trackWidth) {
        track.innerHTML += track.innerHTML; // Duplicate items for seamless scrolling
    }
</script>
