document.getElementById('replace-button').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'AJAX/content.html', true);
    xhr.onload = function() {
        if (this.status === 200) {
            document.getElementById('text-to-replace').innerHTML = this.responseText;
        }
    };
    xhr.send();
});
