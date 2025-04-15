document.querySelectorAll('.project-field').forEach(field => {
    const video = field.querySelector('.hover-video');

    field.addEventListener('mouseenter', () => {
        video.currentTime = 0;
        video.play();
    });

    field.addEventListener('mouseleave', () => {
        video.pause();
    });
});
