const submitBtn = document.querySelector('.btn');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const form = document.querySelector('#my-form');
    form.style.backgroundColor = 'red';

    document.body.classList.add('bg-dark');

    const itemList = document.querySelector('.items');
    itemList.lastElementChild.innerHTML = '<h1>Hello</h1>';

    submitBtn.style.backgroundColor = 'green';
});