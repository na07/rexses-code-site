document.querySelector('.theme input').addEventListener('change', function() {
    document.body.classList.toggle('light-theme', this.checked);
});