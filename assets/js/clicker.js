document.getElementById('plankton').addEventListener('click', function() {
    const plankton = document.getElementById('plankton');
    if (plankton.classList.contains('clicked')) {
        plankton.classList.remove('clicked');
        void plankton.offsetWidth; // Force reflow to restart the animation
    }
    score++;
    document.getElementById('score').textContent = score;
    localStorage.setItem('score', score);

    plankton.classList.add('clicked');
});