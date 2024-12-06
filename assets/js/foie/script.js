document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('instruction-modal').style.display = 'block';
});

document.getElementById('open-modal-btn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-overlay').style.display = 'block';
});

document.getElementById('modal-overlay').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal-overlay').style.display = 'none';
});
