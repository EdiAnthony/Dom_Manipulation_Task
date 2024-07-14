function addHoverEffect(item) {
    item.addEventListener('mouseover', function() {
        item.style.backgroundColor = 'lightblue';
    });

    item.addEventListener('mouseout', function() {
        item.style.backgroundColor = '';
    });
}

document.querySelectorAll('.hover-item').forEach(addHoverEffect);

document.getElementById('addButton').addEventListener('click', function() {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = 'New Item';
    li.classList.add('hover-item');
    ul.appendChild(li);
    addHoverEffect(li);
});

document.getElementById('removeButton').addEventListener('click', function() {
    const ul = document.querySelector('ul');
    if (ul.lastChild) {
        ul.removeChild(ul.lastChild);
    }
});
