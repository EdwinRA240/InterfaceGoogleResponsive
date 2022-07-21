let query = document.getElementById('inputText');
let searchBtn  = document.querySelector('.search');

searchBtn.addEventListener('click', () => {
    let url = `https://www.google.com/search?q=${query.value}`;
    window.open(url, '_self');
    query.value = '';
});

