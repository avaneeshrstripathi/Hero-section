document.querySelectorAll('.grid-item').forEach((item) => {
    item.addEventListener('mouseenter', () => {
        // Hide the text when hovering on the center image
        if (item.classList.contains('center')) {
            document.querySelector('.hero-title').style.opacity = '0';
            document.querySelector('.hero-subtitle').style.opacity = '0'; // Hide the subtitle as well
        }
    });

    item.addEventListener('mouseleave', () => {
        // Show the text when not hovering
        document.querySelector('.hero-title').style.opacity = '1';
        document.querySelector('.hero-subtitle').style.opacity = '1'; // Show the subtitle again
    });

    // Add subtle mouse movement effect
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        item.querySelector('img').style.transform = `translate(${x / 10}px, ${y / 10}px) scale(1.1)`;
    });

    item.addEventListener('mouseleave', () => {
        item.querySelector('img').style.transform = 'translate(0, 0) scale(1)';
    });
});

