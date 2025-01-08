const bookButtons = document.querySelectorAll('.book-btn');

bookButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (!this.hasAttribute('disabled')) {
            alert('Room booked successfully!');
        }
    });
});
