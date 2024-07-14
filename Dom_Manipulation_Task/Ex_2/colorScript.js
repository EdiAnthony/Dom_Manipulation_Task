document.getElementById('redColor').addEventListener('click', function() {
    document.getElementById('colorText').style.color = 'red';
    document.getElementById('colorText').textContent = 'Clicked!';
});

document.getElementById('blueColor').addEventListener('click', function() {
    document.getElementById('colorText').style.color = 'blue';
    document.getElementById('colorText').textContent = 'Clicked!';
});
