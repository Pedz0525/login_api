document.addEventListener('DOMContentLoaded', function() {
    const dogTab = document.getElementById('tabdog');
    const catTab = document.getElementById('tabcat');
    const quotesTab = document.getElementById('tabquotes');

    const body = document.querySelector('body');

    dogTab.addEventListener('click', function() {
        body.style.backgroundImage = "url('dog.png')";
    });

    catTab.addEventListener('click', function() {
        body.style.backgroundImage = "url('cat.png')";
    });

    quotesTab.addEventListener('click', function() {
        body.style.backgroundImage = "url('quotes.png')";
    });
});
