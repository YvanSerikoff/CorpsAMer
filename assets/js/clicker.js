let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
document.getElementById('score').textContent = score;

document.getElementById('plankton').addEventListener('click', function() {
    score++;
    document.getElementById('score').textContent = score;
    localStorage.setItem('score', score);
});